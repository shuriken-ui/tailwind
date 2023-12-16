import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type MarkConfig, defaultConfig, key } from './mark.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies MarkConfig

      addComponents({
        [`.${prefix}mark`]: {
          [`@apply bg-${config.background.light} dark:bg-${config.background.dark}`]:
            {},
          [`@apply text-${config.color.light} dark:text-${config.color.dark}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
      },
    }
  },
)
