import plugin from 'tailwindcss/plugin'
import {
  type DropdownItemConfig,
  defaultConfig,
  key,
} from './dropdown-item.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies DropdownItemConfig

  addComponents({
    //Wrapper
    '.nui-dropdown-item': {
      '@apply nui-focus flex w-full items-center justify-start gap-2 px-3 py-2 cursor-pointer':
        {},
      //Font
      [`@apply text-${config.align} font-${config.font.family} text-${config.font.size}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Item:content
      '.nui-item-content': {
        '@apply grow': {},
      },
      //Item:text
      '&:not(.nui-active)': {
        [`@apply text-${config.font.color.inactive.light} dark:text-${config.font.color.inactive.dark}`]:
          {},
      },
      //Color:default
      '&.nui-item-default': {
        //Background:hover
        [`@apply hover:bg-${config.color.default.background.light} dark:hover:bg-${config.color.default.background.dark}`]:
          {},
        //Font:hover
        [`@apply hover:text-${config.color.default.font.color.light} dark:hover:text-${config.color.default.font.color.dark}`]:
          {},
        '&.nui-active': {
          //Background:hover
          [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
            {},
          //Font:hover
          [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
            {},
        },
      },
      //Color:contrast
      '&.nui-item-contrast': {
        //Background:hover
        [`@apply hover:bg-${config.color.contrast.background.light} dark:hover:bg-${config.color.contrast.background.dark}`]:
          {},
        //Font:hover
        [`@apply hover:text-${config.color.contrast.font.color.light} dark:hover:text-${config.color.contrast.font.color.dark}`]:
          {},
        '&.nui-active': {
          //Background:hover
          [`@apply bg-${config.color.contrast.background.light} dark:bg-${config.color.contrast.background.dark}`]:
            {},
          //Font:hover
          [`@apply text-${config.color.contrast.font.color.light} dark:text-${config.color.contrast.font.color.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.nui-item-rounded': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-item-smooth': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-item-curved': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
    },
  })
}, config)
