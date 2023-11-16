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
          [`@apply relative font-sans font-${config.font} text-${config.text} inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border ${prefix}focus transition-all duration-${config.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none`]:
            {},

          [`&.${prefix}button-rounded`]: {
            [`@apply rounded`]: {},
          },
          [`&.${prefix}button-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}button-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}button-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          [`&.${prefix}button-loading`]: {
            [`@apply !text-transparent`]: {},
          },
          [`&.${prefix}button-default`]: {
            [`@apply text-${config.default.text} bg-${config.default.bg} border-${config.default.border} dark:text-${config.default.textDark} dark:bg-${config.default.bgDark} dark:border-${config.default.borderDark} dark:hover:enabled:bg-${config.default.bgHoverEnabledDark} hover:enabled:bg-${config.default.bgHoverEnabled} dark:active:enabled:bg-${config.default.bgActiveEnabledDark} active:enabled:bg-${config.default.bgActiveEnabled}`]:
              {},
          },
          [`&.${prefix}button-muted`]: {
            [`@apply text-${config.muted.text} bg-${config.muted.bg} border-${config.muted.border} dark:text-${config.muted.textDark} dark:bg-${config.muted.bgDark} dark:border-${config.muted.borderDark} dark:hover:enabled:bg-${config.muted.bgHoverEnabledDark} hover:enabled:bg-${config.muted.bgHoverEnabled} dark:active:enabled:border-${config.muted.borderActiveEnabledDark} dark:active:enabled:bg-${config.muted.bgActiveEnabledDark} active:enabled:bg-${config.muted.bgActiveEnabled}`]:
              {},
          },
          [`&.${prefix}button-primary`]: {
            [`@apply border-${config.primary.border} bg-${config.primary.bg} dark:bg-${config.primary.bdDark} dark:border-${config.primary.borderDark} hover:enabled:bg-${config.primary.bgHoverEnabled} dark:hover:enabled:bg-${config.primary.bgHoverEnabledDark} text-${config.primary.text} focus-visible:outline-${config.primary.focusVisible} focus-within:outline-${config.primary.focusWithin} focus-visible:bg-${config.primary.bgFocusVisible} active:enabled:bg-${config.primary.bgActiveEnabled} dark:focus-visible:outline-${config.primary.focusVisibleDark} dark:focus-within:outline-${config.primary.focusWithinDark} dark:focus-visible:bg-${config.primary.bgFocusVisibleDark} dark:active:enabled:bg-${config.primary.bgActiveEnabledDark}`]:
              {},
          },
          [`&.${prefix}button-info`]: {
            [`@apply border-${config.info.border} bg-${config.info.bg} dark:bg-${config.info.bdDark} dark:border-${config.info.borderDark} hover:enabled:bg-${config.info.bgHoverEnabled} dark:hover:enabled:bg-${config.info.bgHoverEnabledDark} text-${config.info.text} focus-visible:outline-${config.info.focusVisible} focus-within:outline-${config.info.focusWithin} focus-visible:bg-${config.info.bgFocusVisible} active:enabled:bg-${config.info.bgActiveEnabled} dark:focus-visible:outline-${config.info.focusVisibleDark} dark:focus-within:outline-${config.info.focusWithinDark} dark:focus-visible:bg-${config.info.bgFocusVisibleDark} dark:active:enabled:bg-${config.info.bgActiveEnabledDark}`]:
              {},
          },
          [`&.${prefix}button-success`]: {
            [`@apply border-${config.success.border} bg-${config.success.bg} dark:bg-${config.success.bdDark} dark:border-${config.success.borderDark} hover:enabled:bg-${config.success.bgHoverEnabled} dark:hover:enabled:bg-${config.success.bgHoverEnabledDark} text-${config.success.text} focus-visible:outline-${config.success.focusVisible} focus-within:outline-${config.success.focusWithin} focus-visible:bg-${config.success.bgFocusVisible} active:enabled:bg-${config.success.bgActiveEnabled} dark:focus-visible:outline-${config.success.focusVisibleDark} dark:focus-within:outline-${config.success.focusWithinDark} dark:focus-visible:bg-${config.success.bgFocusVisibleDark} dark:active:enabled:bg-${config.success.bgActiveEnabledDark}`]:
              {},
          },
          [`&.${prefix}button-warning`]: {
            [`@apply border-${config.warning.border} bg-${config.warning.bg} dark:bg-${config.warning.bdDark} dark:border-${config.warning.borderDark} hover:enabled:bg-${config.warning.bgHoverEnabled} dark:hover:enabled:bg-${config.warning.bgHoverEnabledDark} text-${config.warning.text} focus-visible:outline-${config.warning.focusVisible} focus-within:outline-${config.warning.focusWithin} focus-visible:bg-${config.warning.bgFocusVisible} active:enabled:bg-${config.warning.bgActiveEnabled} dark:focus-visible:outline-${config.warning.focusVisibleDark} dark:focus-within:outline-${config.warning.focusWithinDark} dark:focus-visible:bg-${config.warning.bgFocusVisibleDark} dark:active:enabled:bg-${config.warning.bgActiveEnabledDark}`]:
              {},
          },
          [`&.${prefix}button-danger`]: {
            [`@apply border-${config.danger.border} bg-${config.danger.bg} dark:bg-${config.danger.bdDark} dark:border-${config.danger.borderDark} hover:enabled:bg-${config.danger.bgHoverEnabled} dark:hover:enabled:bg-${config.danger.bgHoverEnabledDark} text-${config.danger.text} focus-visible:outline-${config.danger.focusVisible} focus-within:outline-${config.danger.focusWithin} focus-visible:bg-${config.danger.bgFocusVisible} active:enabled:bg-${config.danger.bgActiveEnabled} dark:focus-visible:outline-${config.danger.focusVisibleDark} dark:focus-within:outline-${config.danger.focusWithinDark} dark:focus-visible:bg-${config.danger.bgFocusVisibleDark} dark:active:enabled:bg-${config.danger.bgActiveEnabledDark}`]:
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
