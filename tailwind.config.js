/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#000000",
        "light": "#8DD9CC",
        "light-accent": "#7cbfb4",
        "dark": "#2E5077",
        "dark-accent": "#"
      }
    },
    content: {
      safelist: [/text-/]
    }
  },
  plugins: [],
}
