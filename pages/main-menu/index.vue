<template>
  <div class="mainMenuPage">
    <div class="overlay" />
    <client-only>
      <video-background
        src="/video/Snow falling in a forest.mp4"
        style="width: 100vw; height: 100vh;"
      />
    </client-only>

    <audio ref="music" autoplay loop preload="auto" src="/audio/In-Next-Life_AdobeStock_506616753_preview.m4a" />

    <div class="btnSection">
      <StartMenu @resize="toggleFullScreen" @play="playMusic" />
    </div>
  </div>
</template>

<script setup>
import StartMenu from "~~/components/common/page/MainMenu/StartMenu.vue";

const music = ref(null);

onMounted(() => {
  setTimeout(() => {
    music.value.play();
  }, 1000);
});

function toggleFullScreen () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function playMusic () {
  if (music.value.paused) {
    music.value.play();
  } else {
    music.value.pause();
  }
}
</script>

<style lang="scss" scoped>
  $z-overlay: 100;
  .mainMenuPage {
    position: relative;
    }
  .overlay {
    position: absolute;
    z-index: $z-overlay;
    width: 100%;
    min-width: 100vw;
    height: 100vh;
    min-height: 100%;
    background: rgba(0, 0, 0, .4);
  }

  .btnSection {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: $z-overlay + 1;
    transform: translate(-50%, -50%);
  }
</style>
