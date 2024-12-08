/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="light"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

