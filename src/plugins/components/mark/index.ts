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
          [`@apply bg-${config.bg} dark:bg-${config.bgDark}`]: {},
          [`@apply text-${config.text} dark:text-${config.textDark}`]: {},
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
