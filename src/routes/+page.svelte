<script>
  import { Mic, MicOff, Phone } from 'lucide-svelte'

  let isRed = false;
  let isMicOn = true;

  function toggleColor() {
    isRed = !isRed;
  }

  function toggleMic() {
    isMicOn = !isMicOn;
  }
</script>

<svelte:head>
  <title>天才たちの恋愛頭脳戦通話アプリ</title>
  <meta name="description" content="SvelteKit video call application" />
</svelte:head>

<section class="flex flex-col items-center justify-center min-h-screen">
  <div class="grid grid-cols-4 gap-4 mb-8">
	<div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
    <div class="border-8 border-black w-80 h-60"></div>
    <div class="border-8 border-black w-80 h-60"></div>
	<div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
	<div class="w-70 h-36 bg-gray-400 rounded-lg"></div>
    <div class="border-8 border-black w-80 h-60"></div>
    <div class="border-8 border-black w-80 h-60"></div>
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
      on:click={toggleColor}
    >
      <Phone class="w-6 h-6" />
    </button>
  </div>
</section>