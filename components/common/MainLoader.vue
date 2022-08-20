<template>
  <div class="mainLoader">
    <div class="loaderBox">
      <p class="loaderTest">
        Warming up <span>.</span><span>.</span><span>.</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

setTimeout(() => {
  router.push("/main-menu");
}, 1500);
</script>

<style scoped lang="scss">
  @keyframes pulsar {
      from {
        top: 0;
        left: 0;
      }

      to {
        top: 15%;
        left: 5%;
      }
  }

  .mainLoader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: black;
  }

  .loaderTest {
    color: grey;
    font-size: 6rem;

    & > span {
      position: relative;
      animation-duration: .5s;
      animation-name: pulsar;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
</style>
