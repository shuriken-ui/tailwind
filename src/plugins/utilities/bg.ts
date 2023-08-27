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
        [`.${prefix}bg-white`]: {
          '@apply bg-white dark:bg-muted-900': {},
        },
        [`.${prefix}bg-50`]: {
          '@apply bg-muted-50 dark:bg-muted-950': {},
        },
        [`.${prefix}bg-100`]: {
          '@apply bg-muted-100 dark:bg-muted-900': {},
        },
        [`.${prefix}bg-200`]: {
          '@apply bg-muted-200 dark:bg-muted-800': {},
        },
        [`.${prefix}bg-300`]: {
          '@apply bg-muted-300 dark:bg-muted-700': {},
        },
        [`.${prefix}bg-400`]: {
          '@apply bg-muted-400 dark:bg-muted-600': {},
        },
        [`.${prefix}bg-500`]: {
          '@apply bg-muted-500 dark:bg-muted-500': {},
        },
        [`.${prefix}bg-600`]: {
          '@apply bg-muted-600 dark:bg-muted-400': {},
        },
        [`.${prefix}bg-700`]: {
          '@apply bg-muted-700 dark:bg-muted-300': {},
        },
        [`.${prefix}bg-800`]: {
          '@apply bg-muted-800 dark:bg-muted-200': {},
        },
        [`.${prefix}bg-900`]: {
          '@apply bg-muted-900 dark:bg-muted-100': {},
        },
        [`.${prefix}bg-950`]: {
          '@apply bg-muted-950 dark:bg-muted-50': {},
        },
        [`.${prefix}bg-black`]: {
          '@apply bg-muted-900 dark:bg-white': {},
        },
      })
    }
  },
  function (options) {
    return {}
  },
)
