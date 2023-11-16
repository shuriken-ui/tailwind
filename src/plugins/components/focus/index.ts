import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type FocusConfig, defaultConfig, key } from './focus.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies FocusConfig

      const mode =
        config.mode === 'focus-visible'
          ? '&:has(:focus-visible), &:focus-visible'
          : '&:focus-within'

      addComponents({
        [`.${prefix}focus`]: {
          [`@apply outline-${config.width} outline-${config.style} outline-offset-${config.offset}`]:
            {},
          '@apply outline-transparent': {},
          [mode]: {
            [`@apply outline-${config.color} dark:outline-${config.colorDark}`]:
              {},
            [`@apply outline-${config.style} ring-0`]: {},
          },
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
