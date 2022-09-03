import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__session',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || '86400000', 10), // 1 day
    cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || '86400000', 10), // 7 days
  },
  modules: [
    '@unocss/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
})
