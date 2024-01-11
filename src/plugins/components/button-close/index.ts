import plugin from 'tailwindcss/plugin'
import {
  type ButtonCloseConfig,
  defaultConfig,
  key,
} from './button-close.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ButtonCloseConfig

  addComponents({
    '.nui-button-close': {
      '@apply nui-focus flex items-center justify-center disabled:opacity-30 cursor-pointer':
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:xs
      '&.nui-button-xs': {
        [`@apply h-${config.size.xs.outer} w-${config.size.xs.outer}`]: {},
        //Icon
        '.nui-button-icon': {
          [`@apply h-${config.size.xs.inner} w-${config.size.xs.inner} fill-current`]:
            {},
        },
      },
      //Size:sm
      '&.nui-button-sm': {
        [`@apply h-${config.size.sm.outer} w-${config.size.sm.outer}`]: {},
        //Icon
        '.nui-button-icon': {
          [`@apply h-${config.size.sm.inner} w-${config.size.sm.inner} fill-current`]:
            {},
        },
      },
      //Size:md
      '&.nui-button-md': {
        [`@apply h-${config.size.md.outer} w-${config.size.md.outer}`]: {},
        //Icon
        '.nui-button-icon': {
          [`@apply h-${config.size.md.inner} w-${config.size.md.inner} fill-current`]:
            {},
        },
      },
      //Size:lg
      '&.nui-button-lg': {
        [`@apply h-${config.size.lg.outer} w-${config.size.lg.outer}`]: {},
        //Icon
        '.nui-button-icon': {
          [`@apply h-${config.size.lg.inner} w-${config.size.lg.inner} fill-current`]:
            {},
        },
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
      //Color:default
      '&.nui-button-default': {
        [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.default.background.hover.light} dark:hover:bg-${config.color.default.background.hover.dark}`]:
          {},
      },
      //Color:muted
      '&.nui-button-muted': {
        [`@apply text-${config.color.muted.font.color.light} dark:text-${config.color.muted.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.muted.background.hover.light} dark:hover:bg-${config.color.muted.background.hover.dark}`]:
          {},
      },
      //Color:primary
      '&.nui-button-primary': {
        [`@apply text-${config.color.primary.font.color.light} dark:text-${config.color.primary.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.primary.background.hover.light} dark:hover:bg-${config.color.primary.background.hover.dark}`]:
          {},
      },
      //Color:info
      '&.nui-button-info': {
        [`@apply text-${config.color.info.font.color.light} dark:text-${config.color.info.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.info.background.hover.light} dark:hover:bg-${config.color.info.background.hover.dark}`]:
          {},
      },
      //Color:success
      '&.nui-button-success': {
        [`@apply text-${config.color.success.font.color.light} dark:text-${config.color.success.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.success.background.hover.light} dark:hover:bg-${config.color.success.background.hover.dark}`]:
          {},
      },
      //Color:warning
      '&.nui-button-warning': {
        [`@apply text-${config.color.warning.font.color.light} dark:text-${config.color.warning.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.warning.background.hover.light} dark:hover:bg-${config.color.warning.background.hover.dark}`]:
          {},
      },
      //Color:danger
      '&.nui-button-danger': {
        [`@apply text-${config.color.danger.font.color.light} dark:text-${config.color.danger.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Background hover
        [`@apply hover:bg-${config.color.danger.background.hover.light} dark:hover:bg-${config.color.danger.background.hover.dark}`]:
          {},
      },
    },
  })
}, config)
