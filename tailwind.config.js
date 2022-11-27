/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
