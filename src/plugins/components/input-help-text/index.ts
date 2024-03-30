import plugin from 'tailwindcss/plugin'
import {
  type InputHelpTextConfig,
  defaultConfig,
  key,
} from './input-help-text.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies InputHelpTextConfig

  addComponents({
    '.nui-input-help-text': {
      //Base
      '@apply mt-1 block': {},
      //Font
      [`@apply text-${config.font.size} font-${config.font.weight} leading-none`]:
        {},
    },
  })
}, config)
