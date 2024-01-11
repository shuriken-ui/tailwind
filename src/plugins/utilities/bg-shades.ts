import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.nui-bg-white': {
      '@apply bg-white dark:bg-muted-900': {},
    },
    '.nui-bg-50': {
      '@apply bg-muted-50 dark:bg-muted-950': {},
    },
    '.nui-bg-100': {
      '@apply bg-muted-100 dark:bg-muted-900': {},
    },
    '.nui-bg-200': {
      '@apply bg-muted-200 dark:bg-muted-800': {},
    },
    '.nui-bg-300': {
      '@apply bg-muted-300 dark:bg-muted-700': {},
    },
    '.nui-bg-400': {
      '@apply bg-muted-400 dark:bg-muted-600': {},
    },
    '.nui-bg-500': {
      '@apply bg-muted-500 dark:bg-muted-500': {},
    },
    '.nui-bg-600': {
      '@apply bg-muted-600 dark:bg-muted-400': {},
    },
    '.nui-bg-700': {
      '@apply bg-muted-700 dark:bg-muted-300': {},
    },
    '.nui-bg-800': {
      '@apply bg-muted-800 dark:bg-muted-200': {},
    },
    '.nui-bg-900': {
      '@apply bg-muted-900 dark:bg-muted-100': {},
    },
    '.nui-bg-950': {
      '@apply bg-muted-950 dark:bg-muted-50': {},
    },
    '.nui-bg-black': {
      '@apply bg-muted-900 dark:bg-white': {},
    },
  }),
)
