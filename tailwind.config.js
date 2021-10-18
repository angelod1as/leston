module.exports = {
  purge: ['./public/*.html', './src/**/*.tsx', './src/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#0B0C0F',
        white: '#f0f0f0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
