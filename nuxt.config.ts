import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        secret: process.env.SECRET || 'secret'
    },
    modules: [
        'nuxt-windicss',
    ],
    css: [
        'virtual:windi.css',
        'virtual:windi-devtools',
    ],
    windicss: {
        analyze: true
    },
})
