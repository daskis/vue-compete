/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vk": "#2088FF",
        "telegram": "#1DA1DF",
        "gmail": "#EA4335",

      }

    },
  },
  plugins: [require('tailwind-hamburgers')],
}