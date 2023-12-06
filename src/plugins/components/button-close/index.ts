import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type ButtonCloseConfig,
  defaultConfig,
  key,
} from './button-close.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ButtonCloseConfig

      addComponents({
        [`.${prefix}button-close`]: {
          [`@apply ${prefix}focus flex items-center justify-center disabled:opacity-30 cursor-pointer`]:
            {},
          //Size
          [`@apply h-${config.size} w-${config.size}`]: {},
          //Transition
          [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
            {},
          //Icon
          [`.${prefix}button-icon`]: {
            [`@apply h-${config.icon.size} w-${config.icon.size} fill-current`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}button-rounded`]: {
            [`@apply ${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}button-smooth`]: {
            [`@apply ${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}button-curved`]: {
            [`@apply ${config.rounded.lg}`]: {},
          },
          //Rounded:full
          [`&.${prefix}button-full`]: {
            [`@apply ${config.rounded.full}`]: {},
          },
          //Color:default
          [`&.${prefix}button-default`]: {
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
          [`&.${prefix}button-muted`]: {
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
          [`&.${prefix}button-primary`]: {
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
          [`&.${prefix}button-info`]: {
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
          [`&.${prefix}button-success`]: {
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
          [`&.${prefix}button-warning`]: {
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
          [`&.${prefix}button-danger`]: {
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
