if (!process.env.NUXT_AUTH_PASSWORD) {
  // eslint-disable-next-line no-console
  console.warn('NUXT_AUTH_PASSWORD is not set. Using default password.')
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
