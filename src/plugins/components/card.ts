import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultCardConfig = {
  border: 'muted-200',
  borderDark: 'muted-700',
  bg: 'white',
  bgDark: 'muted-800',
  time: '300',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.card') satisfies typeof defaultCardConfig

      addComponents({
        [`.${prefix}-card`]: {
          [`@apply border border-${config.border} dark:border-${config.borderDark} bg-${config.bg} dark:bg-${config.bgDark} relative w-full transition-all duration-${config.time}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          card: defaultCardConfig,
        },
      },
    }
  }
)
