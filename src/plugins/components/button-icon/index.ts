import plugin from 'tailwindcss/plugin'
import { type ButtonIconConfig, defaultConfig, key } from './button-icon.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ButtonIconConfig

  addComponents({
    '.nui-button-icon': {
      //Base
      '@apply nui-focus relative inline-flex items-center justify-center space-x-1 leading-5 no-underline disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none':
        {},
      //Font
      [`@apply font-${config.font.family} text-${config.font.size} font-${config.font.weight}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:sm
      '&.nui-button-small': {
        [`@apply h-${config.size.sm.size} w-${config.size.sm.size} p-${config.size.sm.padding}`]:
          {},
      },
      //Size:md
      '&.nui-button-medium': {
        [`@apply h-${config.size.md.size} w-${config.size.md.size} p-${config.size.md.padding}`]:
          {},
      },
      //Size:lg
      '&.nui-button-large': {
        [`@apply h-${config.size.lg.size} w-${config.size.lg.size} p-${config.size.lg.padding}`]:
          {},
      },
      //Rounded:sm
      '&.nui-button-rounded': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-button-smooth': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-button-curved': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.nui-button-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Loading
      '&.nui-button-loading': {
        '@apply !text-transparent': {},
      },
      //Color:default
      '&.nui-button-default': {
        //Font
        [`@apply text-${config.color.default.text.color.light} dark:text-${config.color.default.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.default.background.hover.light} dark:hover:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      '&.nui-button-muted': {
        //Font
        [`@apply text-${config.color.muted.text.color.light} dark:text-${config.color.muted.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.muted.background.hover.light} dark:hover:bg-${config.color.muted.background.hover.dark}`]:
          {},
      },
      '&.nui-button-primary': {
        //Font
        [`@apply text-${config.color.primary.text.color.light} dark:text-${config.color.primary.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.primary.background.hover.light} dark:hover:bg-${config.color.primary.background.hover.dark}`]:
          {},
      },
      '&.nui-button-info': {
        //Font
        [`@apply text-${config.color.info.text.color.light} dark:text-${config.color.info.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.info.background.hover.light} dark:hover:bg-${config.color.info.background.hover.dark}`]:
          {},
      },
      '&.nui-button-success': {
        //Font
        [`@apply text-${config.color.success.text.color.light} dark:text-${config.color.success.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.success.background.hover.light} dark:hover:bg-${config.color.success.background.hover.dark}`]:
          {},
      },
      '&.nui-button-warning': {
        //Font
        [`@apply text-${config.color.warning.text.color.light} dark:text-${config.color.warning.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.warning.background.hover.light} dark:hover:bg-${config.color.warning.background.hover.dark}`]:
          {},
      },
      '&.nui-button-danger': {
        //Font
        [`@apply text-${config.color.danger.text.color.light} dark:text-${config.color.danger.text.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Background:hover
        [`@apply hover:bg-${config.color.danger.background.hover.light} dark:hover:bg-${config.color.danger.background.hover.dark}`]:
          {},
      },
    },
  })
}, config)
