import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultThemeToggleConfig = {
  space: '9',
  time: '300',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.theme-toggle'
      ) satisfies typeof defaultThemeToggleConfig

      addComponents({
        [`.${prefix}-theme-toggle`]: {
          [`@apply relative block h-${config.space} w-${config.space} shrink-0 overflow-hidden rounded-full transition-all duration-${config.space} focus-visible:outline-2`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          themeToggle: defaultThemeToggleConfig,
        },
      },
    }
  }
)
