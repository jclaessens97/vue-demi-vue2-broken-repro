import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  components: true,

  bridge: {
    vite: true,
  },

  head: {
    title: "nuxt-bridge",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
});
