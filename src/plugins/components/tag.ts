import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultTagConfig = {
  space: '3',
  font: 'sans',
  time: '300',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.tag') satisfies typeof defaultTagConfig

      addComponents({
        [`.${prefix}-tag`]: {
          [`@apply inline-block px-${config.space} font-${config.font} transition-shadow duration-${config.time}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          tag: defaultTagConfig,
        },
      },
    }
  }
)
