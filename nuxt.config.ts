// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    auth: {
      name: 'nuxt-session',
      password: process.env.NUXT_AUTH_PASSWORD,
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
