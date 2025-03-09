/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-light': '#e8b639',
        'gold-dark': '#b58426',
      },
    },
  },
  plugins: [],
}
