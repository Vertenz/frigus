<template>
  <menu class="menu">
    <li v-for="el in menuEl" :key="el.id" class="menu__el" @click="$emit(el.emit)">
      <img :src="`/svg/${el.svg}.svg`" :alt="el.description">
    </li>
  </menu>
</template>

<script setup lang="ts">
const menuEl = useMenuEL();
</script>

<style scoped lang="scss">
    .menu {
        display: flex;
        flex-direction: column;

        &__el {
            width: 10.5rem;
            height: 10.5rem;
            color: white;

            & > img {
                width: 10.5rem;
                height: 10.5rem;
                filter: invert(.3);
                transition: all 1s;

                &:hover {
                    filter: invert(1);
                }
            }
        }
    }
</style>
