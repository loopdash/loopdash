const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      gray: colors.blueGray,
      yellow: colors.yellow,
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
    fontFamily: {
      sans: ['Clear Sans', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
    }
  }
}