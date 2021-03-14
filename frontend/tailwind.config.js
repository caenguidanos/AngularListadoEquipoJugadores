const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  purge: {
    content: ['./src/**/*.{html,ts}']
  },
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
