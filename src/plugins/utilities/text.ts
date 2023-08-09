import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addUtilities }) {
      addUtilities({
        [`.${prefix}text-white`]: {
          '@apply text-white dark:text-black': {},
        },
        [`.${prefix}text-50`]: {
          '@apply text-muted-50 dark:text-muted-950': {},
        },
        [`.${prefix}text-100`]: {
          '@apply text-muted-100 dark:text-muted-900': {},
        },
        [`.${prefix}text-200`]: {
          '@apply text-muted-200 dark:text-muted-800': {},
        },
        [`.${prefix}text-300`]: {
          '@apply text-muted-300 dark:text-muted-700': {},
        },
        [`.${prefix}text-400`]: {
          '@apply text-muted-400 dark:text-muted-600': {},
        },
        [`.${prefix}text-500`]: {
          '@apply text-muted-500 dark:text-muted-500': {},
        },
        [`.${prefix}text-600`]: {
          '@apply text-muted-600 dark:text-muted-400': {},
        },
        [`.${prefix}text-700`]: {
          '@apply text-muted-700 dark:text-muted-300': {},
        },
        [`.${prefix}text-800`]: {
          '@apply text-muted-800 dark:text-muted-200': {},
        },
        [`.${prefix}text-900`]: {
          '@apply text-muted-900 dark:text-muted-100': {},
        },
        [`.${prefix}text-950`]: {
          '@apply text-muted-950 dark:text-muted-50': {},
        },
        [`.${prefix}text-black`]: {
          '@apply text-black dark:text-white': {},
        },
      })
    }
  },
  function () {
    return {}
  }
)
