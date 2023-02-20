/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './error.vue',
    './pages/**/*.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './composables/**/*.{vue,js,ts}',
    './plugins/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
