<template>
  <div>
    <TheHeader />

    <slot />

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from "../components/common/layouts/TheFooter.vue";
import TheHeader from "~~/components/common/layouts/TheHeader.vue";

</script>

<style>
@import "@/assets/styles/normalize.css";

</style>
