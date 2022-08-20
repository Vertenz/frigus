/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.sass"],
  vite: {
    plugins: [
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass"',
        }
      }
    }
  },
});
