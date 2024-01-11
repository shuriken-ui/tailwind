import plugin from 'tailwindcss/plugin'

export const base = plugin(({ addBase }) =>
  addBase({
    '.dark': { colorScheme: 'dark' },
  }),
)
