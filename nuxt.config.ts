// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "bg-slate-950 antialiased text-white",
      },
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Example of a simple authentication system using Nuxt3",
        },
      ],
      title: "Simple authentication example using Nuxt3",
    },
  },
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
  unocss: {
    safelist: ["bg-slate-950", "antialiased", "text-white"],
  },
});
