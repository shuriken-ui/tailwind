import plugin from 'tailwindcss/plugin'
import { type LinkPluginConfig, defaultConfig, key } from './link.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies LinkPluginConfig

  addComponents({
    '.nui-link': {
      //Base
      [`@apply font-${config.font.family} underline-offset-4 hover:underline focus:underline`]:
        {},
      //Hover
      [`@apply hover:text-${config.font.color.hover.light} dark:hover:text-${config.font.color.hover.dark}`]:
        {},
      //Focus
      [`@apply focus:text-${config.font.color.focus.light} dark:focus:text-${config.font.color.focus.dark}`]:
        {},
    },
  })
}, config)
