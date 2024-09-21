<script>
  import { Mic, MicOff, Phone } from 'lucide-svelte'
  import { onMount } from 'svelte';
  import { SkyWayContext, SkyWayRoom, SkyWayStreamFactory } from "@skyway-sdk/room";

  let isRed = true;
  let isMicOn = true;

  function togglePhone() {
    isRed = !isRed;
    isRed ? leaveRoom() : joinRoom();
  }

  function toggleMic() {
    isMicOn = !isMicOn;
  }

  let localVideo;
  let remoteMediaArea;
  let cartoonFrameDivs = [];
  let myId = '';
  let room;
  let context;
  let buttonArea;
  let authToken;
  let me;

  onMount(async () => {
    buttonArea = document.getElementById("button-area");
    cartoonFrameDivs = Array.from(document.getElementsByClassName('cartoon-frame'));

    if (typeof window !== 'undefined' && window.RTCPeerConnection) {
      authToken = import.meta.env.VITE_SKY_WAY_AUTH_TOKEN ? import.meta.env.VITE_SKY_WAY_AUTH_TOKEN : '';
    }
  });

  async function joinRoom() {    
    // ルームに参加
    context = await SkyWayContext.Create(authToken);
    room = await SkyWayRoom.FindOrCreate(context, {
        type: "p2p",
        name: 'love_is_war',
    });
    
    me = await room.join();
    myId = me.id;

    // ストリームを取得
    const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream();
    video.attach(localVideo);
    await localVideo.play();

    await me.publish(audio);
    await me.publish(video);

    const subscribeAndAttach = async (publication) => {
      if (publication.publisher.id === me.id) return;

      const { stream } = await me.subscribe(publication.id);

      let newMediaVideo, newMediaAudio;
      // 空いている div にストリームを表示
      const emptyDiv = cartoonFrameDivs.find(div => div.childElementCount === 0);
      if (!emptyDiv) return;
      switch (stream.track.kind) {
        case 'video':
          newMediaVideo = document.createElement('video');
          newMediaVideo.playsInline = true;
          newMediaVideo.autoplay = true;
          stream.attach(newMediaVideo);
          emptyDiv.appendChild(newMediaVideo); // ビデオを追加

          newMediaAudio = document.createElement('audio');
          newMediaAudio.controls = false;
          newMediaAudio.autoplay = true;
          stream.attach(newMediaAudio);
          emptyDiv.appendChild(newMediaAudio); // ビデオの下にオーディオを追加
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

    // 既存の公開ストリームを購読して表示
    room.publications.forEach(subscribeAndAttach);
    // 新しいストリームが公開されたときに購読して表示
    room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));
  }

  async function leaveRoom() {
    if (me) {
      await me.leave();
      await room.dispose();
  
      myId = "";
      buttonArea.replaceChildren();
      cartoonFrameDivs.forEach(div => div.replaceChildren());
    }
  }
</script>

<svelte:head>
  <title>天才たちの恋愛頭脳戦通話アプリ</title>
  <meta name="description" content="SvelteKit video call application" />
</svelte:head>

<section class="flex flex-col items-center justify-center min-h-screen">
  <p>ID: <span id="my-id">{myId}</span></p>
  <div id="remote-media-area" bind:this={remoteMediaArea}></div>
  <div id="button-area" bind:this={buttonArea}></div>

  <div class="grid grid-cols-4 gap-4 mb-8">
    <div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
    <div class="border-8 border-black w-80 h-60 ">
      <video bind:this={localVideo} width="400px" muted playsinline></video>
    </div>
    <div class="border-8 border-black w-80 h-60 cartoon-frame"></div>
    <div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
    <div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
    <div class="border-8 border-black w-80 h-60 cartoon-frame"></div>
    <div class="border-8 border-black w-80 h-60 cartoon-frame"></div>
    <div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
  </div>
  
  <div class="flex space-x-4">
    <button
      class="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-gray-200"
      on:click={toggleMic}
    >
      {#if isMicOn}
        <Mic class="w-6 h-6" />
      {:else}
        <MicOff class="w-6 h-6" />
      {/if}
    </button>
    <button
      class="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-colors duration-300"
      class:bg-[#57EEF8]={!isRed}
      class:bg-[#EE1971]={isRed}
      on:click={togglePhone}
    >
      <Phone class="w-6 h-6" />
    </button>
  </div>
</section>
