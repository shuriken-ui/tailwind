import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type LabelPluginConfig, defaultConfig, key } from './label.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies LabelPluginConfig

      addComponents({
        [`.${prefix}label`]: {
          [`@apply inline-block font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
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
