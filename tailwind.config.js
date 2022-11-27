/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "440px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        dark: "#8892B0",
        light: "#CCD6F6",
        theme: "#8758FF",
      },
      fontFamily: {
        sans: "Work Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
