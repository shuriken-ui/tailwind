import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultSlimscrollConfig = {
  width: '[6px]',
  bg: 'black/5',
  bgDark: 'white/5',
  bgHover: 'black/20',
  bgHoverDark: 'white/20',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.slimscroll',
      ) satisfies typeof defaultSlimscrollConfig

      addComponents({
        [`.${prefix}slimscroll::-webkit-scrollbar, .${prefix}slimscroll-opaque::-webkit-scrollbar`]:
          {
            scrollBehavior: 'smooth',
            scrollbarGutter: 'stable',
            [`@apply w-${config.width}`]: {},
          },
        [`.${prefix}slimscroll::-webkit-scrollbar-thumb`]: {
          [`@apply rounded-lg bg-${config.bg} dark:bg-${config.bgDark} duration-300 transition-all`]:
            {},
        },
        [`.${prefix}slimscroll-opaque::-webkit-scrollbar-thumb`]: {
          [`@apply rounded-lg bg-transparent duration-300 transition-all`]: {},
        },
        [`.${prefix}slimscroll:hover::-webkit-scrollbar-thumb, .${prefix}slimscroll-opaque:hover::-webkit-scrollbar-thumb`]:
          {
            [`@apply bg-${config.bgHover} dark:bg-${config.bgHoverDark}`]: {},
          },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          slimscroll: defaultSlimscrollConfig,
        },
      },
    }
  },
)
