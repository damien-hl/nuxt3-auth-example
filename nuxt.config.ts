// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
    runtimeConfig: {
        cookieName: process.env.COOKIE_NAME || "__session",
        cookieSecret: process.env.COOKIE_SECRET || "secret",
        cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
        cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
    },
    modules: ["@unocss/nuxt"],
});
