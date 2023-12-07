import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type LinkPluginConfig, defaultConfig, key } from './link.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies LinkPluginConfig

      addComponents({
        [`.${prefix}link`]: {
          //Base
          [`@apply font-${config.font.family} underline-offset-4 hover:underline focus:underline`]:
            {},
          //Hover
          [`@apply hover:text-${config.font.color.hover.light} dark:hover:text-${config.font.color.hover.dark}`]:
            {},
          //Focus
          [`@apply focus:text-${config.font.color.focus.light} dark:focus:text-${config.font.color.focus.dark}`]:
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
