import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonIconConfig = {
  font: 'normal',
  time: '300',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.button-icon'
      ) satisfies typeof defaultButtonIconConfig

      addComponents({
        [`.${prefix}-button-icon`]: {
          [`@apply relative inline-flex items-center justify-center space-x-1 text-sm font-${config.font} leading-5 no-underline outline-none transition-all duration-${config.time}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          buttonIcon: defaultButtonIconConfig,
        },
      },
    }
  }
)
