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
          [`@apply font-${config.font} hover:text-${config.textHover} dark:hover:text-${config.textHoverDark} underline-offset-4 hover:underline focus:text-${config.textFocus} dark:focus:text-${config.textFocusDark} focus:underline`]:
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
