<script>
  import { onMount } from 'svelte';
  import { SkyWayContext, SkyWayRoom, SkyWayStreamFactory } from "@skyway-sdk/room";

  let localVideo;
  let remoteMediaArea;
  let myId = '';
  let room;
  let context;
  let buttonArea;
  let joinButton;
  let leaveButton;
  let authToken;
  let me;

  onMount(async () => {
    buttonArea = document.getElementById("button-area");
    remoteMediaArea = document.getElementById("remote-media-area");
    myId = document.getElementById("my-id");
    joinButton = document.getElementById("join");
    leaveButton = document.getElementById("leave");

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

      let newMedia;
      switch (stream.track.kind) {
        case 'video':
          newMedia = document.createElement('video');
          newMedia.playsInline = true;
          newMedia.autoplay = true;
          stream.attach(newMedia);
          break;
        case 'audio':
          newMedia = document.createElement('audio');
          newMedia.controls = true;
          newMedia.autoplay = true;
          stream.attach(newMedia);
          break;
        default:
          return;
      }

      newMedia.id = `media-${publication.id}`;
      remoteMediaArea.appendChild(newMedia);
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
      remoteMediaArea.replaceChildren();
    }
  }
</script>

<main>
  <p>ID: <span id="my-id">{myId}</span></p>
  <div>
    <button id="join" on:click={joinRoom}>join</button>
    <button id="leave" on:click={leaveRoom}>leave</button>
  </div>
  <video bind:this={localVideo} width="400px" playsinline></video>
  <div id="remote-media-area" bind:this={remoteMediaArea}></div>
  <div id="button-area" bind:this={buttonArea}></div>
</main>

<style>
  video {
    width: 300px;
    height: 200px;
    background-color: black;
  }
</style>
