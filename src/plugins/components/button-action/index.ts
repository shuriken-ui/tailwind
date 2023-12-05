import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type ButtonActionConfig,
  defaultConfig,
  key,
} from './button-action.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ButtonActionConfig

      addComponents({
        [`.${prefix}button-action`]: {
          //Wrapper
          [`@apply ${prefix}focus relative inline-flex items-center justify-center border leading-5 no-underline h-8 px-3 py-2 space-x-1`]:
            {},
          //Font
          [`@apply font-${config.text.font.family} font-${config.text.font.weight} text-${config.text.font.size}`]:
            {},
          //State
          [`@apply disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none`]:
            {},
          //Transition
          [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
            {},
          //Rounded:sm
          [`&.${prefix}button-rounded`]: {
            [`@apply rounded-${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}button-smooth`]: {
            [`@apply rounded-${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}button-curved`]: {
            [`@apply rounded-${config.rounded.lg}`]: {},
          },
          //Rounded:full
          [`&.${prefix}button-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          //ButtonAction:loading
          [`&.${prefix}button-loading`]: {
            [`@apply !text-transparent`]: {},
          },
          //Color:default
          [`&.${prefix}button-default`]: {
            //Font
            [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.default.background.hover.light} dark:hover:enabled:bg-${config.color.default.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.default.background.active.light} active:enabled:bg-${config.color.default.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
              {},
          },
          //Color:muted
          [`&.${prefix}button-muted`]: {
            //Font
            [`@apply text-${config.color.muted.font.color.light} dark:text-${config.color.muted.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.muted.background.hover.light} dark:hover:enabled:bg-${config.color.muted.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.muted.background.active.light} active:enabled:bg-${config.color.muted.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
              {},
          },
          //Color:primary
          [`&.${prefix}button-primary`]: {
            //Font
            [`@apply text-${config.color.primary.font.color.light} dark:text-${config.color.primary.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.primary.background.hover.light} dark:hover:enabled:bg-${config.color.primary.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.primary.background.active.light} active:enabled:bg-${config.color.primary.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
              {},
          },
          //Color:info
          [`&.${prefix}button-info`]: {
            //Font
            [`@apply text-${config.color.info.font.color.light} dark:text-${config.color.info.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.info.background.hover.light} dark:hover:enabled:bg-${config.color.info.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.info.background.active.light} active:enabled:bg-${config.color.info.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
              {},
          },
          //Color:success
          [`&.${prefix}button-success`]: {
            //Font
            [`@apply text-${config.color.success.font.color.light} dark:text-${config.color.success.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.success.background.hover.light} dark:hover:enabled:bg-${config.color.success.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.success.background.active.light} active:enabled:bg-${config.color.success.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
              {},
          },
          //Color:warning
          [`&.${prefix}button-warning`]: {
            //Font
            [`@apply text-${config.color.warning.font.color.light} dark:text-${config.color.warning.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.warning.background.hover.light} dark:hover:enabled:bg-${config.color.warning.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.warning.background.active.light} active:enabled:bg-${config.color.warning.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
              {},
          },
          //Color:danger
          [`&.${prefix}button-danger`]: {
            //Font
            [`@apply text-${config.color.danger.font.color.light} dark:text-${config.color.danger.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
              {},
            //Hover
            [`@apply hover:enabled:bg-${config.color.danger.background.hover.light} dark:hover:enabled:bg-${config.color.danger.background.hover.dark}`]:
              {},
            //Active
            [`@apply dark:active:enabled:bg-${config.color.danger.background.active.light} active:enabled:bg-${config.color.danger.background.active.dark}`]:
              {},
            //Border
            [`@apply border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
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
