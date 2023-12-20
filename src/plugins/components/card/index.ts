import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type CardConfig, defaultConfig, key } from './card.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies CardConfig

      addComponents({
        [`.${prefix}card`]: {
          //Base
          [`@apply relative w-${config.width} transition-${config.transition.property} duration-${config.transition.duration}`]:
            {},
          //Color:white
          [`&.${prefix}card-white`]: {
            //Border
            [`@apply border border-${config.color.white.border.light} dark:border-${config.color.white.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.white.background.light} dark:bg-${config.color.white.background.dark}`]:
              {},
          },
          //Color:whiteContrast
          [`&.${prefix}card-white-contrast`]: {
            //Border
            [`@apply border border-${config.color.whiteContrast.border.light} dark:border-${config.color.whiteContrast.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.whiteContrast.background.light} dark:bg-${config.color.whiteContrast.background.dark}`]:
              {},
          },
          //Color:muted
          [`&.${prefix}card-muted`]: {
            //Border
            [`@apply border border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
              {},
          },
          //Color:mutedContrast
          [`&.${prefix}card-muted-contrast`]: {
            //Border
            [`@apply border border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
              {},
          },
          //Color:primary
          [`&.${prefix}card-primary`]: {
            //Border
            [`@apply border border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.primary.background.light} dark:bg-${config.color.primary.background.dark}`]:
              {},
          },
          //Color:info
          [`&.${prefix}card-info`]: {
            //Border
            [`@apply border border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.info.background.light} dark:bg-${config.color.info.background.dark}`]:
              {},
          },
          //Color:success
          [`&.${prefix}card-success`]: {
            //Border
            [`@apply border border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.success.background.light} dark:bg-${config.color.success.background.dark}`]:
              {},
          },
          //Color:warning
          [`&.${prefix}card-warning`]: {
            //Border
            [`@apply border border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.warning.background.light} dark:bg-${config.color.warning.background.dark}`]:
              {},
          },
          //Color:danger
          [`&.${prefix}card-danger`]: {
            //Border
            [`@apply border border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.danger.background.light} dark:bg-${config.color.danger.background.dark}`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}card-rounded`]: {
            [`@apply rounded-${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}card-smooth`]: {
            [`@apply rounded-${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}card-curved`]: {
            [`@apply rounded-${config.rounded.lg}`]: {},
          },
          //Shadow
          [`&:not(.${prefix}card-primary):not(.${prefix}card-info):not(.${prefix}card-success):not(.${prefix}card-warning):not(.${prefix}card-danger)`]:
            {
              [`&.${prefix}card-shadow`]: {
                [`@apply shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
                  {},
              },
              [`&.${prefix}card-shadow-hover`]: {
                [`@apply hover:shadow-${config.shadow.light} dark:hover:shadow-${config.shadow.dark} hover:shadow-${config.shadow.size}`]:
                  {},
              },
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
      },
    }
  },
)
