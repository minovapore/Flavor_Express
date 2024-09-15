/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'archivio':['ARCHIVIO', 'sans-serif'],
        'oddval':['ODDVAL', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

