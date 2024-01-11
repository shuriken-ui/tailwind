import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.nui-text-white': {
      '@apply text-white dark:text-black': {},
    },
    '.nui-text-50': {
      '@apply text-muted-50 dark:text-muted-950': {},
    },
    '.nui-text-100': {
      '@apply text-muted-100 dark:text-muted-900': {},
    },
    '.nui-text-200': {
      '@apply text-muted-200 dark:text-muted-800': {},
    },
    '.nui-text-300': {
      '@apply text-muted-300 dark:text-muted-700': {},
    },
    '.nui-text-400': {
      '@apply text-muted-400 dark:text-muted-600': {},
    },
    '.nui-text-500': {
      '@apply text-muted-500 dark:text-muted-500': {},
    },
    '.nui-text-600': {
      '@apply text-muted-600 dark:text-muted-400': {},
    },
    '.nui-text-700': {
      '@apply text-muted-700 dark:text-muted-300': {},
    },
    '.nui-text-800': {
      '@apply text-muted-800 dark:text-muted-200': {},
    },
    '.nui-text-900': {
      '@apply text-muted-900 dark:text-muted-100': {},
    },
    '.nui-text-950': {
      '@apply text-muted-950 dark:text-muted-50': {},
    },
    '.nui-text-black': {
      '@apply text-black dark:text-white': {},
    },
  }),
)
