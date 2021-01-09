const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      gray: colors.gray,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
      blue: {
        900: '#0144F0',
        800: '#1A57F2',
        700: '#3469F3',
        600: '#4D7CF5',
        500: '#678FF6',
        400: '#80A2F8',
        300: '#99B4F9',
        200: '#B3C7FB',
        100: '#CCDAFC',
        50: '#E6ECFE'
      }
    },
    fontFamily: {
      sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SF Mono', 'Consolas', 'Avenir']
    }
  }
}