<script>
	import { Mic, MicOff, Phone } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { SkyWayContext, SkyWayRoom, SkyWayStreamFactory } from '@skyway-sdk/room';

	let isRed = true;
	let isMicOn = true;
	let emotions = [];

	const emotionImages = {
		happy: 'Nomal1.png',
		angry: 'DO.png',
		sad: 'think.png',
		surprised: 'Do2.png'
	};

	const positions = [
		{ top: '0', left: '0' },
		{ top: '0', right: '0' },
		{ bottom: '0', left: '0' },
		{ bottom: '0', right: '0' }
	];

	// Helper function to get a random GPT response
	function getRandomResponse() {
		if (gptResponses.length === 0) return 'No response available';
		const randomIndex = Math.floor(Math.random() * gptResponses.length);
		return gptResponses[randomIndex];
	}

	function showMind(emotion) {
		const position = positions[Math.floor(Math.random() * positions.length)];
		const newEmotion = {
			image: emotionImages[emotion],
			position,
			id: Date.now(),
			response: getRandomResponse() // Add a random GPT response to each emotion
		};
		emotions = [...emotions, newEmotion];

		setTimeout(() => {
			emotions = emotions.filter((e) => e.id !== newEmotion.id);
		}, 5000);
	}
	function togglePhone() {
		isRed = !isRed;
		isRed ? leaveRoom() : joinRoom();
	}

	function toggleMic() {
		isMicOn = !isMicOn;
		if (audioStream) {
			audioStream.track.enabled = isMicOn;
		}
	}

	let localVideo;
	let cartoonFrameDivs = [];
	let myId = '';
	let room;
	let context;
	let authToken;
	let me;
	let audioStream;
	let videoStream;
	let audioContext;
	let animationId;
	let isSpeaking = false;
	let threshold = 0.02;
	let serverResponse = null; // サーバーのレスポンスデータを格納する変数
	let gptResponses = []; // GPTレスポンスを格納する配列

	// Variables for recording
	let isRecording = false;
	let mediaRecorder;
	let audioChunks = [];

	let remoteUsers = {}; // Object to keep track of remote users

	onMount(async () => {
		cartoonFrameDivs = Array.from(document.getElementsByClassName('cartoon-frame'));

		if (typeof window !== 'undefined' && window.RTCPeerConnection) {
			authToken = import.meta.env.VITE_SKY_WAY_AUTH_TOKEN
				? import.meta.env.VITE_SKY_WAY_AUTH_TOKEN
				: '';
		}
	});

	async function joinRoom() {
		// Join the room
		context = await SkyWayContext.Create(authToken);
		room = await SkyWayRoom.FindOrCreate(context, {
			type: 'p2p',
			name: 'love_is_war'
		});

		me = await room.join();
		myId = me.id;

		// Get audio and video streams from the user's microphone and camera
		const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream();
		audioStream = audio;
		videoStream = video;
		video.attach(localVideo);
		await localVideo.play();

		await me.publish(audio);
		await me.publish(video);

		// Set up audio analysis after publishing the audio stream
		setupAudioAnalysis();

		const subscribeAndAttach = async (publication) => {
			if (publication.publisher.id === me.id) return;

			const publisherId = publication.publisher.id;

			if (!remoteUsers[publisherId]) {
				remoteUsers[publisherId] = {
					panel: null,
					videoElement: null,
					audioElement: null,
					isSpeaking: false,
					audioContext: null,
					animationId: null
				};
			}

			const user = remoteUsers[publisherId];

			const { stream } = await me.subscribe(publication.id);

			// Find or assign a panel for this user
			if (!user.panel) {
				const emptyDiv = cartoonFrameDivs.find((div) => div.childElementCount === 0);
				if (!emptyDiv) return;
				user.panel = emptyDiv;
				user.panel.classList.add('border-8', 'border-black', 'relative');
			}

			if (stream.track.kind === 'video') {
				// Create video element
				const videoElement = document.createElement('video');
				videoElement.playsInline = true;
				videoElement.autoplay = true;
				videoElement.className = 'w-full h-full object-cover';
				stream.attach(videoElement);
				user.panel.appendChild(videoElement);
				user.videoElement = videoElement;
			} else if (stream.track.kind === 'audio') {
				// Create audio element (doesn't need to be added to DOM)
				const audioElement = document.createElement('audio');
				audioElement.autoplay = true;
				stream.attach(audioElement);
				user.audioElement = audioElement;

				// Set up audio analysis
				setupRemoteAudioAnalysis(user, stream);
			}
		};

		// Subscribe to existing published streams and display them
		room.publications.forEach(subscribeAndAttach);
		// Subscribe to new streams
		room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));
	}

	async function leaveRoom() {
		if (me) {
			await me.leave();
			await room.dispose();

			myId = '';
			cartoonFrameDivs.forEach((div) => div.replaceChildren());

			if (audioStream) {
				audioStream.track.stop();
				audioStream = null;
			}
			if (videoStream) {
				videoStream.track.stop();
				videoStream = null;
			}
			if (audioContext) {
				audioContext.close();
				audioContext = null;
			}
			if (animationId) {
				cancelAnimationFrame(animationId);
				animationId = null;
			}

			// Clean up remote users
			for (let userId in remoteUsers) {
				const user = remoteUsers[userId];
				if (user.audioContext) {
					user.audioContext.close();
					user.audioContext = null;
				}
				if (user.animationId) {
					cancelAnimationFrame(user.animationId);
					user.animationId = null;
				}
			}
			remoteUsers = {};
		}
	}

	function setupAudioAnalysis() {
		audioContext = new AudioContext();

		const stream = new MediaStream([audioStream.track]);

		const source = audioContext.createMediaStreamSource(stream);

		const analyser = audioContext.createAnalyser();
		analyser.fftSize = 256;

		source.connect(analyser);

		const dataArray = new Float32Array(analyser.fftSize);

		let previousIsSpeaking = false;

		function analyze() {
			analyser.getFloatTimeDomainData(dataArray);

			let sum = 0.0;

			for (let i = 0; i < dataArray.length; i++) {
				sum += dataArray[i] * dataArray[i];
			}

			let rms = Math.sqrt(sum / dataArray.length);

			isSpeaking = rms > threshold;

			// Check for transition
			if (isSpeaking && !previousIsSpeaking) {
				console.log('開始'); // Started speaking
				startRecording();
			} else if (!isSpeaking && previousIsSpeaking) {
				console.log('終了'); // Stopped speaking
				stopRecordingAndSend();
			}

			previousIsSpeaking = isSpeaking;

			animationId = requestAnimationFrame(analyze);
		}

		analyze();
	}

	function startRecording() {
		if (isRecording) return;

		isRecording = true;

		// Use existing audioStream
		mediaRecorder = new MediaRecorder(new MediaStream([audioStream.track]));

		audioChunks = [];

		mediaRecorder.ondataavailable = (event) => {
			audioChunks.push(event.data);
		};

		mediaRecorder.onstop = () => {
			console.log('送信');
			const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
			sendAudio(audioBlob);
			sendAudio;
		};

		mediaRecorder.start();
	}

	let silenceTimer;
	function stopRecordingAndSend() {
		if (!isRecording) return;

		clearTimeout(silenceTimer);
		silenceTimer = setTimeout(() => {
			isRecording = false;
			mediaRecorder.stop();
		}, 1000); // Wait for 1000ms of silence before stopping
	}

	// Function to send audio to the backend
	async function sendAudio(audioBlob) {
		const formData = new FormData();
		formData.append('audio', audioBlob, 'recording.webm');

		try {
			const response = await fetch('https://shinsekai-django.tunn.dev/api/v1/transcribe/', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const result = await response.json();
				serverResponse = result.text; // "text"フィールドを格納
				gptResponses = result.gpt_responses; // "gpt_responses"配列を格納
				console.log('Server response:', result);
				// Handle the response as needed
			} else {
				console.error('Failed to send audio file');
			}
		} catch (error) {
			console.error('An error occurred', error);
		}
	}

	function setupRemoteAudioAnalysis(user, stream) {
		user.audioContext = new AudioContext();

		const source = user.audioContext.createMediaStreamSource(new MediaStream([stream.track]));

		const analyser = user.audioContext.createAnalyser();
		analyser.fftSize = 256;

		source.connect(analyser);

		const dataArray = new Float32Array(analyser.fftSize);

		function analyze() {
			analyser.getFloatTimeDomainData(dataArray);

			let sum = 0.0;

			for (let i = 0; i < dataArray.length; i++) {
				sum += dataArray[i] * dataArray[i];
			}

			let rms = Math.sqrt(sum / dataArray.length);

			const threshold = 0.22; // Adjust threshold as needed

			user.isSpeaking = rms > threshold;

			// Update UI (change panel border color)
			if (user.panel) {
				if (user.isSpeaking) {
					user.panel.classList.add('border-red-500');
					user.panel.classList.remove('border-black');
				} else {
					user.panel.classList.add('border-black');
					user.panel.classList.remove('border-red-500');
				}
			}

			user.animationId = requestAnimationFrame(analyze);
		}

		analyze();
	}
</script>

<!-- Rest of your existing HTML and CSS code -->

<svelte:head>
	<title>天才たちの恋愛頭脳戦通話アプリ</title>
	<meta name="description" content="SvelteKit video call application" />
</svelte:head>

<section class="min-h-screen bg-gray-100">
	<p class="text-center">ID: <span id="my-id">{myId}</span></p>

	<div class="flex space-x-4 justify-center">
		<button
			class="px-4 py-2 bg-yellow-400 text-black rounded-full"
			on:click={() => showMind('happy')}
		>
			喜
		</button>
		<button class="px-4 py-2 bg-red-500 text-white rounded-full" on:click={() => showMind('angry')}>
			怒
		</button>
		<button class="px-4 py-2 bg-blue-500 text-white rounded-full" on:click={() => showMind('sad')}>
			哀
		</button>
		<button
			class="px-4 py-2 bg-green-500 text-white rounded-full"
			on:click={() => showMind('surprised')}
		>
			楽
		</button>
	</div>

	<article class="flex flex-wrap font-comic-sans p-[5vmin] mx-64 relative">
		<!-- Display multiple emotion images -->
		{#each emotions as emotion (emotion.id)}
			<div
				class="fukidasi absolute"
				style="top: {emotion.position.top}; left: {emotion.position.left}; right: {emotion.position
					.right}; bottom: {emotion.position.bottom};"
			>
				<!-- GPT Response -->
				<p class="gpt-response text-3xl bg-white p-1 rounded-md mb-1">
					{emotion.response}
				</p>
				<!-- Emotion Image -->
				<img src="src/lib/images/{emotion.image}" alt="Emotion Image" class="fade" />
			</div>
		{/each}

		<!-- Local video -->
		<div
			class="panel flex-grow basis-[400px] relative border-8"
			class:border-red-500={isSpeaking}
			class:border-black={!isSpeaking}
		>
			<video bind:this={localVideo} class="w-full h-full object-cover" muted playsinline></video>
		</div>

		<!-- Remote videos -->
		<div class="panel flex-grow basis-[500px] cartoon-frame"></div>
		<div class="panel flex-grow basis-[500px] cartoon-frame"></div>
		<div class="panel flex-grow basis-[400px] cartoon-frame"></div>
	</article>

	<div class="flex space-x-4 justify-center">
		<button
			class="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-gray-200"
			on:click={toggleMic}
		>
			{#if isMicOn}
				<Mic class="w-8 h-8" />
			{:else}
				<MicOff class="w-8 h-8" />
			{/if}
		</button>
		<button
			class="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-colors duration-300"
			class:bg-[#57EEF8]={isRed}
			class:bg-[#EE1971]={!isRed}
			on:click={togglePhone}
		>
			<Phone class="w-8 h-8" />
		</button>
	</div>
</section>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer components {
		.panel {
			@apply bg-white shadow-md inline-block h-[320px] m-[1vmin] overflow-hidden relative;
		}
		.gpt-response {
			@apply bg-white border-2 border-black rounded p-2 mb-2;
		}
		.text {
			@apply bg-white border-2 border-black m-0 py-[3px] px-[10px];
		}
		.top-left {
			@apply absolute -left-[6px] -top-[2px] transform -skew-x-12;
		}
		.bottom-right {
			@apply absolute -bottom-[2px] -right-[6px] transform -skew-x-12;
		}
		.speech {
			@apply absolute bg-white border-2 border-black rounded-xl inline-block m-2 py-2 px-4 right-[0px];
		}

		.speech::before {
			content: '';
			@apply border-[12px] border-transparent border-l-black border-t-black absolute -bottom-[24px] left-[24px] h-0 w-0 transform -skew-x-12;
		}
		.speech::after {
			content: '';
			@apply border-[10px] border-transparent border-l-white border-t-white absolute -bottom-[19px] left-[27px] h-0 w-0 transform -skew-x-12;
		}
	}

	.fade {
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		animation: fadeInOut 5s;
	}

	@keyframes fadeInOut {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.fukidasi {
		z-index: 10;
	}

	img {
		max-width: 300px;
	}
</style>
