import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addBase }) {
  addBase({
    '.dark': { colorScheme: 'dark' },
  })
})
