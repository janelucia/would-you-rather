/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        endlessRiverA: '#43cea2',
        endlessRiverB: '#185a9d'
      }
    },
  },
  plugins: [],
}
