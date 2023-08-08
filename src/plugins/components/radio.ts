import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultRadioConfig = {
  outer: {
    size: '5',
  },
  inner: {
    border: 'muted-400',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: 'full',
    rounded: 'full',
  },
  dot: {
    size: '1',
    rounded: 'full',
    bg: 'current',
    duration: '300',
  },
  input: {
    size: '5',
  },
  labelText: {
    text: 'muted-400',
    textSize: 'sm',
    font: 'sans',
  },
  error: {
    text: 'danger-600',
    textSize: 'sm',
    font: 'sans',
  },
  default: {
    text: 'muted-600',
    textDark: 'muted-200',
  },
  light: 'white',
  muted: 'muted-400',
  primary: 'primary-500',
  info: 'info-500',
  success: 'success-500',
  warning: 'warning-500',
  danger: 'danger-500',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.radio'
      ) satisfies typeof defaultRadioConfig

      addComponents({
        [`.${prefix}-radio`]: {
          [`@apply relative inline-flex items-start gap-1`]: {},

          [`.${prefix}-radio-outer`]: {
            [`@apply ${prefix}-focus relative flex h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full`]:
              {},
          },
          [`.${prefix}-radio-inner`]: {
            [`@apply border-${config.inner.border} dark:border-${config.inner.borderDark} dark:bg-${config.inner.bgDark} absolute start-0 top-0 z-0 h-${config.inner.size} w-${config.inner.size} rounded-${config.inner.rounded} border-2 bg-${config.inner.bg}`]:
              {},
          },
          [`.${prefix}-radio-dot`]: {
            [`@apply pointer-events-none z-10 block h-${config.dot.size} w-${config.dot.size} scale-0 rounded-${config.dot.rounded} bg-${config.dot.bg} transition duration-${config.dot.duration}`]:
              {},
          },
          [`.${prefix}-radio-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},

            [`&:checked ~ .${prefix}-radio-inner`]: {
              [`@apply border-current`]: {},
            },

            [`&:checked ~ .${prefix}-radio-dot`]: {
              [`@apply scale-100`]: {},
            },
          },
          [`.${prefix}-radio-label-wrapper`]: {
            [`@apply inline-flex flex-col`]: {},
          },
          [`.${prefix}-radio-label-text`]: {
            [`@apply text-${config.labelText.text} ms-1 cursor-pointer select-none font-${config.labelText.font} text-${config.labelText.textSize}`]:
              {},
          },
          [`.${prefix}-radio-error`]: {
            [`@apply text-${config.error.text} ms-1 inline-block font-${config.error.font} text-${config.error.textSize}`]:
              {},
          },
          [`&.${prefix}-radio-default`]: {
            [`@apply text-${config.default.text} dark:text-${config.default.textDark}`]:
              {},
          },
          [`&.${prefix}-radio-light`]: {
            [`@apply text-${config.light}`]: {},
          },
          [`&.${prefix}-radio-muted`]: {
            [`@apply text-${config.muted}`]: {},
          },
          [`&.${prefix}-radio-primary`]: {
            [`@apply text-${config.primary}`]: {},
          },
          [`&.${prefix}-radio-info`]: {
            [`@apply text-${config.info}`]: {},
          },
          [`&.${prefix}-radio-success`]: {
            [`@apply text-${config.success}`]: {},
          },
          [`&.${prefix}-radio-warning`]: {
            [`@apply text-${config.warning}`]: {},
          },
          [`&.${prefix}-radio-danger`]: {
            [`@apply text-${config.danger}`]: {},
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          radio: defaultRadioConfig,
        },
      },
    }
  }
)
