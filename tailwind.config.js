/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-bold': "'ubuntu-bold', 'sans-serif'",
        'ubuntu-medium': "'ubuntu-medium', 'sans-serif'",
        'ubuntu-regular': "'ubuntu-regular', 'sans-serif'"
      }
    },
    screens: {
      'tablet': {'max': '1023px'},
    },
  },
  plugins: [],
}

