const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  purge: {
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['JetBrains Mono', ...fontFamily.mono],
      accent: 'Orbitron'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
