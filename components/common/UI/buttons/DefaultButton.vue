<template>
  <div class="btn" @click="$emit('btn-click')">
    {{ props?.data?.label }}
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ButtonModel from "~/models/ButtonModel";

// const props = defineProps([{
//         pet: Object as PropType < ButtonModel >
//     }]);

const props = defineProps({
  data: { type: Object as PropType < ButtonModel >, required: true }
});
</script>

<style lang="scss" scoped>
    .btn {
        user-select: none;
        cursor: pointer;
    }
</style>
