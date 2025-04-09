/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#38a8ff',
          500: '#0d8fff',
          600: '#0265FF',
          700: '#0054d6',
          800: '#0044af',
          900: '#003c8f',
        },
      },
    },
  },
  plugins: [],
};