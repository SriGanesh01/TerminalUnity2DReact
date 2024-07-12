/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll" : 'loop-scroll 50s linear infinite',
        "loop-scroll-reverse" : 'loop-scroll-reverse 50s linear infinite',
        "loop-scroll-slow" : 'loop-scroll 50s linear infinite',
        "loop-scroll-reverse-slow" : 'loop-scroll-reverse 50s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },

      fontFamily: {
        Aldrich: ["Aldrich", "sans-serif"],
        Bungee: ["Bungee", "sans-serif"],
        robotomono: ['Roboto Mono', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        poiretOne: ['Poiret One', 'cursive'],
      },
    },
  },
  plugins: [],
}