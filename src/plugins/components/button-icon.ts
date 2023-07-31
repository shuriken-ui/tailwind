import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonIconConfig = {
  text: 'sm',
  font: 'normal',
  duration: '300',
  buttonSmall: {
    size: '8',
    space: '1',
  },
  buttonMedium: {
    size: '10',
    space: '2',
  },
  buttonLarge: {
    size: '12',
    space: '3',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bgHover: 'muted-50',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'white',
  },
  muted: {
    bg: 'muted-200',
    bgDark: 'muted-700',
    bgHover: 'muted-100',
    bgHoverDark: 'muted-600',
    text: 'muted-500',
    textDark: 'white',
  },
  primary: {
    border: 'primary-500',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    border: 'info-500',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    border: 'success-500',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    border: 'warning-500',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    border: 'danger-500',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.buttonIcon'
      ) satisfies typeof defaultButtonIconConfig

      addComponents({
        [`.${prefix}-button-icon`]: {
          [`@apply ${prefix}-focus relative inline-flex items-center justify-center space-x-1 font-sans text-${config.text} font-${config.font} leading-5 no-underline outline-none transition-all duration-${config.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
            {},

          [`&.${prefix}-button-small`]: {
            [`@apply h-${config.buttonSmall.size} w-${config.buttonSmall.size} p-${config.buttonSmall.space}`]:
              {},
          },
          [`&.${prefix}-button-medium`]: {
            [`@apply h-${config.buttonMedium.size} w-${config.buttonMedium.size} p-${config.buttonMedium.space}`]:
              {},
          },
          [`&.${prefix}-button-large`]: {
            [`@apply h-${config.buttonLarge.size} w-${config.buttonLarge.size} p-${config.buttonLarge.space}`]:
              {},
          },
          [`&.${prefix}-button-rounded`]: {
            [`@apply rounded`]: {},
          },
          [`&.${prefix}-button-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}-button-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}-button-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          [`&.${prefix}-button-loading`]: {
            [`@apply !text-transparent`]: {},
          },

          [`&.${prefix}-button-default`]: {
            [`@apply text-${config.default.text} dark:text-${config.default.textDark} dark:hover:bg-${config.default.bgHoverDark} hover:bg-${config.default.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-muted`]: {
            [`@apply text-${config.muted.text} bg-${config.muted.bg} dark:text-${config.muted.textDark} dark:bg-${config.muted.bgDark} dark:hover:bg-${config.muted.bgHoverDark} hover:bg-${config.muted.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-primary`]: {
            [`@apply text-${config.primary.text} border-2 border-${config.primary.border} hover:bg-${config.primary.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-info`]: {
            [`@apply text-${config.info.text} border-2 border-${config.info.border} hover:bg-${config.info.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-success`]: {
            [`@apply text-${config.success.text} border-2 border-${config.success.border} hover:bg-${config.success.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-warning`]: {
            [`@apply text-${config.warning.text} border-2 border-${config.warning.border} hover:bg-${config.warning.bgHover}`]:
              {},
          },
          [`&.${prefix}-button-danger`]: {
            [`@apply text-${config.danger.text} border-2 border-${config.danger.border} hover:bg-${config.danger.bgHover}`]:
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
          buttonIcon: defaultButtonIconConfig,
        },
      },
    }
  }
)
