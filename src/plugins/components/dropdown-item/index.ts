import plugin from 'tailwindcss/plugin'
import {
  type DropdownItemConfig,
  defaultConfig,
  key,
} from './dropdown-item.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

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
      //Item:disabled
      '&.nui-item-disabled': {
        [`@apply opacity-50 pointer-events-none`]: {},
      },
      //Contrast:default
      '&.nui-item-default': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.default.background.light} dark:hover:bg-${config.contrast.default.background.dark}`]:
          {},
        '&.nui-active': {
          //Background:hover
          [`@apply bg-${config.contrast.default.background.light} dark:bg-${config.contrast.default.background.dark}`]:
            {},
        },
      },
      //Contrast:contrast
      '&.nui-item-contrast': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.contrast.background.light} dark:hover:bg-${config.contrast.contrast.background.dark}`]:
          {},
        '&.nui-active': {
          //Background:hover
          [`@apply bg-${config.contrast.contrast.background.light} dark:bg-${config.contrast.contrast.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-item-primary': {
        //Font:hover
        [`@apply hover:text-${config.color.primary.font.color.light} dark:hover:text-${config.color.primary.font.color.dark}`]:
          {},
      },
      //Color:info
      '&.nui-item-info': {
        //Font:hover
        [`@apply hover:text-${config.color.info.font.color.light} dark:hover:text-${config.color.info.font.color.dark}`]:
          {},
      },
      //Color:success
      '&.nui-item-success': {
        //Font:hover
        [`@apply hover:text-${config.color.success.font.color.light} dark:hover:text-${config.color.success.font.color.dark}`]:
          {},
      },
      //Color:warning
      '&.nui-item-warning': {
        //Font:hover
        [`@apply hover:text-${config.color.warning.font.color.light} dark:hover:text-${config.color.warning.font.color.dark}`]:
          {},
      },
      //Color:danger
      '&.nui-item-danger': {
        //Font:hover
        [`@apply hover:text-${config.color.danger.font.color.light} dark:hover:text-${config.color.danger.font.color.dark}`]:
          {},
      },
      //Color:dark
      '&.nui-item-dark': {
        //Font:hover
        [`@apply hover:text-${config.color.dark.font.color.light} dark:hover:text-${config.color.dark.font.color.dark}`]:
          {},
      },
      //Color:black
      '&.nui-item-black': {
        //Font:hover
        [`@apply hover:text-${config.color.black.font.color.light} dark:hover:text-${config.color.black.font.color.dark}`]:
          {},
      },
      //Rounded:sm
      '&.nui-item-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-item-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-item-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
    },
  })
}, config)
