/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'sans-serif'],
      },
      colors: {
        mainBlue: "#3040d3"
      },
    },
  },
  plugins: [],
}