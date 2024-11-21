/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-main': '#EFF1D9',
      },
      fontSize: {
        'tiny': '12px', // Custom name for 10px
      },
    },
  },
  plugins: [],
}

