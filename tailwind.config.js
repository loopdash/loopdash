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
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          color: colors.blue['600'],
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('margin.1'),
        },
        'h2': {
          color: colors.blue['600'],
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('margin.1'),
        },
        'h3': {
          color: colors.blue['600'],
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('margin.1'),
        },
        'p': {
          color: colors.gray['600'],
          marginBottom: theme('margin.5'),
          fontSize: theme('fontSize.xl'), 
          fontWeight: theme('fontWeight.normal'),
        }
      })
    })
  ]
}