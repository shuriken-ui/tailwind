import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonCloseConfig = {
  size: '9',
  duration: '300',
  buttonIcon: {
    size: '4',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bgHover: 'muted-100',
    bgHoverDark: 'muted-700',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  muted: {
    bg: 'muted-100',
    bgHover: 'muted-50',
    bgDark: 'muted-700',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  primary: {
    bg: 'primary-500/10',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    bg: 'info-500/10',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    bg: 'success-500/10',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    bg: 'warning-500/10',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    bg: 'danger-500/10',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.buttonClose'
      ) satisfies typeof defaultButtonCloseConfig

      addComponents({
        [`.${prefix}button-close`]: {
          [`@apply flex h-${config.size} w-${config.size} items-center justify-center transition-colors duration-${config.duration} disabled:opacity-30 cursor-pointer`]:
            {},

          [`.${prefix}button-icon`]: {
            [`@apply h-${config.buttonIcon.size} w-${config.buttonIcon.size} fill-current`]:
              {},
          },
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
          [`&.${prefix}button-default`]: {
            [`@apply hover:bg-${config.default.bgHover} dark:hover:bg-${config.default.bgHoverDark} text-${config.default.text} dark:text-${config.default.textDark}`]:
              {},
          },
          [`&.${prefix}button-muted`]: {
            [`@apply bg-${config.muted.bg} hover:bg-${config.muted.bgHover} dark:bg-${config.muted.bgDark} dark:hover:bg-${config.muted.bgHoverDark} text-${config.muted.text} dark:text-${config.muted.textDark}`]:
              {},
          },
          [`&.${prefix}button-primary`]: {
            [`@apply bg-${config.primary.bg} hover:bg-${config.primary.bgHover} text-${config.primary.text}`]:
              {},
          },
          [`&.${prefix}button-info`]: {
            [`@apply bg-${config.info.bg} hover:bg-${config.info.bgHover} text-${config.info.text}`]:
              {},
          },
          [`&.${prefix}button-success`]: {
            [`@apply bg-${config.success.bg} hover:bg-${config.success.bgHover} text-${config.success.text}`]:
              {},
          },
          [`&.${prefix}button-warning`]: {
            [`@apply bg-${config.warning.bg} hover:bg-${config.warning.bgHover} text-${config.warning.text}`]:
              {},
          },
          [`&.${prefix}button-danger`]: {
            [`@apply bg-${config.danger.bg} hover:bg-${config.danger.bgHover} text-${config.danger.text}`]:
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
          buttonClose: defaultButtonCloseConfig,
        },
      },
    }
  }
)
