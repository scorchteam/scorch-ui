/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#000000",
        "cadet-blue": "#4DA1A9",
        "darker-blue": "#2E5077",
        "tyrian-purple": "#611C35",
        "fire-opal": "#E3655B" 
      }
    },
  },
  plugins: [],
}
