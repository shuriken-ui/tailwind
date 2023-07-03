import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultThemeSwitchConfig = {
  scale: '0.8',
  bg: 'muted-200',
  bgDark: 'muted-700',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.theme-switch'
      ) satisfies typeof defaultThemeSwitchConfig

      addComponents({
        [`.${prefix}-theme-switch`]: {
          [`@apply bg-${config.bg} dark:bg-${config.bgDark} relative block h-6 w-14 scale-[${config.scale}] rounded-full`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          themeSwitch: defaultThemeSwitchConfig,
        },
      },
    }
  }
)
