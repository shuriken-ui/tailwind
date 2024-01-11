import plugin from 'tailwindcss/plugin'
import { type CardConfig, defaultConfig, key } from './card.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies CardConfig

  addComponents({
    '.nui-card': {
      //Base
      [`@apply relative w-${config.width} transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Color:white
      '&.nui-card-white': {
        //Border
        [`@apply border border-${config.color.white.border.light} dark:border-${config.color.white.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.white.background.light} dark:bg-${config.color.white.background.dark}`]:
          {},
      },
      //Color:whiteContrast
      '&.nui-card-white-contrast': {
        //Border
        [`@apply border border-${config.color.whiteContrast.border.light} dark:border-${config.color.whiteContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.whiteContrast.background.light} dark:bg-${config.color.whiteContrast.background.dark}`]:
          {},
      },
      //Color:muted
      '&.nui-card-muted': {
        //Border
        [`@apply border border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
          {},
      },
      //Color:mutedContrast
      '&.nui-card-muted-contrast': {
        //Border
        [`@apply border border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
          {},
      },
      //Color:primary
      '&.nui-card-primary': {
        //Border
        [`@apply border border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.light} dark:bg-${config.color.primary.background.dark}`]:
          {},
      },
      //Color:info
      '&.nui-card-info': {
        //Border
        [`@apply border border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.light} dark:bg-${config.color.info.background.dark}`]:
          {},
      },
      //Color:success
      '&.nui-card-success': {
        //Border
        [`@apply border border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.light} dark:bg-${config.color.success.background.dark}`]:
          {},
      },
      //Color:warning
      '&.nui-card-warning': {
        //Border
        [`@apply border border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.light} dark:bg-${config.color.warning.background.dark}`]:
          {},
      },
      //Color:danger
      '&.nui-card-danger': {
        //Border
        [`@apply border border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.light} dark:bg-${config.color.danger.background.dark}`]:
          {},
      },
      //Rounded:sm
      '&.nui-card-rounded': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-card-smooth': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-card-curved': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Shadow
      '&:not(.nui-card-primary):not(.nui-card-info):not(.nui-card-success):not(.nui-card-warning):not(.nui-card-danger)':
        {
          '&.nui-card-shadow': {
            [`@apply shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
              {},
          },
          '&.nui-card-shadow-hover': {
            [`@apply hover:shadow-${config.shadow.light} dark:hover:shadow-${config.shadow.dark} hover:shadow-${config.shadow.size}`]:
              {},
          },
        },
    },
  })
}, config)
