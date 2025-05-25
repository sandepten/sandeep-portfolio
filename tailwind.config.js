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
        dark: "#94a3b8",
        light: "#f8fafc",
        muted: "#cbd5e1",
        theme: "#4f46e5", // Darker indigo
        secondary: "#7c3aed", // Darker purple
        accent: "#059669", // Darker emerald
        surface: "rgba(15, 23, 42, 0.9)", // Darker surface
        glass: "rgba(255, 255, 255, 0.08)", // Less bright glass effect
      },
      fontFamily: {
        sans: "Inter, sans-serif",
        mono: "JetBrains Mono, monospace",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(79, 70, 229, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
