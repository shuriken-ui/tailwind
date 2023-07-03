import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonCloseConfig = {
  space: '9',
  time: '300',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.button-close'
      ) satisfies typeof defaultButtonCloseConfig

      addComponents({
        [`.${prefix}-button-close`]: {
          [`@apply flex h-${config.space} w-${config.space} items-center justify-center transition-colors duration-${config.time} disabled:opacity-30`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          buttonClose: defaultButtonCloseConfig,
        },
      },
    }
  }
)
