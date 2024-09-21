<script>
  import { Mic, MicOff, Phone } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { SkyWayContext, SkyWayRoom, SkyWayStreamFactory } from "@skyway-sdk/room";

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

  function showMind(emotion) {
    const position = positions[Math.floor(Math.random() * positions.length)];
    const newEmotion = {
      image: emotionImages[emotion],
      position,
      id: Date.now()
    };
    emotions = [...emotions, newEmotion];

    setTimeout(() => {
      emotions = emotions.filter(e => e.id !== newEmotion.id);
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

	onMount(async () => {
		cartoonFrameDivs = Array.from(document.getElementsByClassName('cartoon-frame'));

		if (typeof window !== 'undefined' && window.RTCPeerConnection) {
		authToken = import.meta.env.VITE_SKY_WAY_AUTH_TOKEN ? import.meta.env.VITE_SKY_WAY_AUTH_TOKEN : '';
		}
	});

	async function joinRoom() {
		// Join the room
		context = await SkyWayContext.Create(authToken);
		room = await SkyWayRoom.FindOrCreate(context, {
		type: "p2p",
		name: 'love_is_war',
		});

		me = await room.join();
		myId = me.id;

		// Get streams
		const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream();
		audioStream = audio;
		videoStream = video;
		video.attach(localVideo);
		await localVideo.play();

		await me.publish(audio);
		await me.publish(video);

		const subscribeAndAttach = async (publication) => {
		if (publication.publisher.id === me.id) return;

		const { stream } = await me.subscribe(publication.id);

		let newMediaVideo, newMediaAudio;
		// Display stream in an empty panel
		const emptyDiv = cartoonFrameDivs.find(div => div.childElementCount === 0);
		if (!emptyDiv) return;
		switch (stream.track.kind) {
			case 'video':
			newMediaVideo = document.createElement('video');
			newMediaVideo.playsInline = true;
			newMediaVideo.autoplay = true;
			newMediaVideo.className = 'w-full h-full object-cover';
			stream.attach(newMediaVideo);
			emptyDiv.appendChild(newMediaVideo); // Add video

			newMediaAudio = document.createElement('audio');
			newMediaAudio.autoplay = true;
			stream.attach(newMediaAudio);
			// Audio does not need to be visible
			break;
			case 'audio':
				// newMediaAudio = document.createElement('audio');
			// newMediaAudio.controls = true;
			// newMediaAudio.autoplay = true;
			// stream.attach(newMediaAudio);
			// emptyDiv.appendChild(newMediaAudio); // ビデオの下にオーディオを追加
			// // videoタグがまだない場合、videoタグを追加
			// if (emptyDiv.querySelector('video') === null) {
			//   newMediaVideo = document.createElement('video');
			//   newMediaVideo.playsInline = true;
			//   newMediaVideo.autoplay = true;
			//   stream.attach(newMediaVideo);
			//   emptyDiv.appendChild(newMediaVideo); // ビデオを追加
			// }
			break;
			default:
			return;
		}
		};

		// Subscribe and display existing published streams
		room.publications.forEach(subscribeAndAttach);
		// Subscribe to new streams
		room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));
	}

	async function leaveRoom() {
		if (me) {
		await me.leave();
		await room.dispose();

		myId = "";
		cartoonFrameDivs.forEach(div => div.replaceChildren());

		if (audioStream) {
			audioStream.track.stop();
			audioStream = null;
		}
		if (videoStream) {
			videoStream.track.stop();
			videoStream = null;
		}
		}
	}
	</script>

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
    <button
      class="px-4 py-2 bg-red-500 text-white rounded-full"
      on:click={() => showMind('angry')}
    >
      怒
    </button>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded-full"
      on:click={() => showMind('sad')}
    >
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
    <!-- 複数の感情画像を表示 -->
    {#each emotions as emotion (emotion.id)}
      <div class="fukidasi absolute" style="top: {emotion.position.top}; left: {emotion.position.left}; right: {emotion.position.right}; bottom: {emotion.position.bottom};">
        <img src="src/lib/images/{emotion.image}" alt="Emotion Image" class="fade" />
      </div>
    {/each}

    <!-- Local video -->
    <div class="panel flex-grow basis-[400px] relative">
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
		@apply bg-white border-4 border-black shadow-md inline-block h-[320px] m-[1vmin] overflow-hidden relative;
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
		content: "";
		@apply border-[12px] border-transparent border-l-black border-t-black absolute -bottom-[24px] left-[24px] h-0 w-0 transform -skew-x-12;
		}
		.speech::after {
		content: "";
		@apply border-[10px] border-transparent border-l-white border-t-white absolute -bottom-[19px] left-[27px] h-0 w-0 transform -skew-x-12;
		}
	}
	
	.fade {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    animation: fadeInOut 5s;
  }

  @keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }

  .fukidasi {
    z-index: 10; 
  }

  img {
    max-width: 200px;
  }
	</style>
