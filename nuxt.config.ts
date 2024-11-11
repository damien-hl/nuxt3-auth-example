// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  compatibilityDate: "2024-11-11",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/eslint", "@unocss/nuxt"],
  runtimeConfig: {
    cookieName: "__session",
    cookieSecret: "secret",
    cookieExpires: ONE_DAY.toString(),
    cookieRememberMeExpires: ONE_WEEK.toString(),
  },
});
