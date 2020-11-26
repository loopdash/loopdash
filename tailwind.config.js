// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      gray: colors.blueGray,
      blue: {
        900: '#0F317D',
        800: '#113991',
        700: '#1441A6',
        600: '#1649BB',
        500: '#3763C5',
        400: '#597DCE',
        300: '#7A97D8',
        200: '#9BB1E2',
        100: '#BCCBEC',
         50: '#DEE5F5'
      }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('https://loopdash.com/wp-content/uploads/2020/11/ales-nesetril-Im7lZjxeLhg-unsplash-1024x725.jpg');background-repeat:no-repeat;background-color: currentcolor;",
      }),
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      }
    },
    fontFamily: {
      sans: ['Clear Sans', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
    }
  }
}