import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./public/*.html', './src/**/*.tsx', './src/**/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
      },
      colors: {
        black: '#0B0C0F',
        white: '#f0f0f0',
      },
    },
  },
  plugins: [],
}
export default config
