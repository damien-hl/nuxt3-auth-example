if (!process.env.NUXT_AUTH_PASSWORD || String(process.env.NUXT_AUTH_PASSWORD).length < 32) {
  // eslint-disable-next-line no-console
  console.warn('NUXT_AUTH_PASSWORD is not set or too short (min 32 characters required). Using default password.')
  process.env.NUXT_AUTH_PASSWORD = 'supersecretsupersecretsupersecret'
}

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
