import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__session',
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || '1000 * 60 * 60 * 24', 10), // 1 day
    cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || '1000 * 60 * 60 * 24 * 7', 10), // 7 days
    jwtSecret: process.env.JWT_SECRET || 'superdupersecret',
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
