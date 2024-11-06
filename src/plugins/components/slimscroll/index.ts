import plugin from 'tailwindcss/plugin'
import { type SlimscrollConfig, defaultConfig, key } from './slimscroll.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies SlimscrollConfig

  addComponents({
    '.nui-slimscroll':
      {
        '&::-webkit-scrollbar': {
          scrollBehavior: 'smooth',
          scrollbarGutter: 'stable',
          [`@apply w-${config.width} h-${config.height}`]: {},
        },
        '&::-webkit-scrollbar-thumb': {
          [`@apply rounded-lg bg-${config.background.base.light} dark:bg-${config.background.base.dark} duration-300 transition-all`]:
            {},
        },
        '&:hover::-webkit-scrollbar-thumb': {
          [`@apply bg-${config.background.hover.light} dark:bg-${config.background.hover.dark}`]:
            {},
        },
      },
    '.nui-slimscroll-opaque':
      {
        '&::-webkit-scrollbar': {
          scrollBehavior: 'smooth',
          scrollbarGutter: 'stable',
          [`@apply w-${config.width} h-${config.height}`]: {},
        },
        '&-webkit-scrollbar-thumb': {
          '@apply rounded-lg bg-transparent duration-300 transition-all': {},
        },
        '&:hover::-webkit-scrollbar-thumb': {
          [`@apply bg-${config.background.hover.light} dark:bg-${config.background.hover.dark}`]:
            {},
        },
      },
  })
}, config)
