/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Aldrich: ["Aldrich", "sans-serif"],
        Bungee: ["Bungee", "sans-serif"],
        robotomono: ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
}