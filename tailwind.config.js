/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'natural': "url('src/assets/images/natural.png')",
      },
      fontFamily: {
        'inter': 'Inter'
      },
      colors: {
        'primary': '#22C55E',
        'second': '#3CD3DD'
      }
    },
  },
  plugins: [],
}

