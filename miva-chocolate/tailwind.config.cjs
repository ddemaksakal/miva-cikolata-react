/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'miva-dark': '#75674c',
        'miva-gold': '#c9a43a',
      }
    },
  },
  plugins: [],
}