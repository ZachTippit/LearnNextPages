/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      gridTemplateColumns: {
      '15': 'repeat(15, minmax(0, 1fr))',
      '18': 'repeat(18, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

