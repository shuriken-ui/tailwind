import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultCheckboxConfig = {
  outer: {
    size: '5',
  },
  inner: {
    border: 'muted-400',
    borderDark: 'muted-700',
    bg: 'white',
    bgDark: 'muted-700',
    size: 'full',
  },
  check: {
    size: '2.5',
    duration: '300',
  },
  indeterminate: {
    size: '2.5',
    duration: '300',
  },
  input: {
    size: '5',
  },
  labelText: {
    text: 'muted-400',
    font: 'sans',
    textSize: 'sm',
  },
  error: {
    text: 'danger-600',
    font: 'sans',
    textSixe: 'xs',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
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
        'shurikenUi.checkbox'
      ) satisfies typeof defaultCheckboxConfig

      addComponents({
        [`.${prefix}-checkbox`]: {
          [`@apply relative inline-flex items-start gap-1'`]: {},

          [`.${prefix}-checkbox-outer`]: {
            [`@apply ${prefix}-focus relative flex h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer items-center justify-center overflow-hidden`]:
              {},
          },
          [`.${prefix}-checkbox-inner`]: {
            [`@apply border-${config.inner.border} dark:border-${config.inner.borderDark} dark:bg-${config.inner.bgDark} absolute start-0 top-0 z-0 h-${config.inner.size} w-${config.inner.size} border-2 bg-${config.inner.bg}`]:
              {},
          },
          [`.${prefix}-icon-check`]: {
            [`@apply pointer-events-none absolute z-10 h-${config.check.size} w-${config.check.size} fill-current translate-y-6 opacity-0 transition duration-${config.check.duration}`]:
              {},
          },
          [`.${prefix}-icon-indeterminate`]: {
            [`@apply pointer-events-none absolute z-10 h-${config.indeterminate.size} w-${config.indeterminate.size} fill-current translate-y-6 opacity-0 transition duration-${config.indeterminate.duration}`]:
              {},
          },
          [`.${prefix}-checkbox-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},

            [`&:checked ~ .${prefix}-checkbox-inner, &:indeterminate ~ .${prefix}-checkbox-inner`]:
              {
                [`@apply border-current dark:border-current`]: {},
              },

            [`&:checked ~ .${prefix}-icon-check`]: {
              [`@apply translate-y-0 opacity-100`]: {},
            },

            [`&:indeterminate ~ .${prefix}-icon-check`]: {
              [`@apply !translate-y-6`]: {},
            },

            [`&:indeterminate ~ .${prefix}-icon-indeterminate`]: {
              [`@apply !translate-y-0 !opacity-100`]: {},
            },
          },
          [`.${prefix}-checkbox-label-wrapper`]: {
            [`@apply inline-flex flex-col`]: {},
          },
          [`.${prefix}-checkbox-label-text`]: {
            [`@apply text-${config.labelText.text} ms-1 cursor-pointer select-none font-${config.labelText.font} text-${config.labelText.textSize}`]:
              {},
          },
          [`.${prefix}-checkbox-error`]: {
            [`@apply text-${config.error.text} ms-1 inline-block font-${config.error.font} text-${config.error.textSixe}`]:
              {},
          },
          [`&.${prefix}-checkbox-rounded .${prefix}-checkbox-inner`]: {
            [`@apply rounded`]: {},
          },
          [`&.${prefix}-checkbox-smooth .${prefix}-checkbox-inner`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}-checkbox-curved .${prefix}-checkbox-inner`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}-checkbox-full .${prefix}-checkbox-inner`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          [`&.${prefix}-checkbox-default`]: {
            [`@apply text-${config.default.text} dark:text-${config.default.textDark}`]:
              {},
          },
          [`&.${prefix}-checkbox-light`]: {
            [`@apply text-${config.light}`]: {},
          },
          [`&.${prefix}-checkbox-muted`]: {
            [`@apply text-${config.muted}`]: {},
          },
          [`&.${prefix}-checkbox-primary`]: {
            [`@apply text-${config.primary}`]: {},
          },
          [`&.${prefix}-checkbox-info`]: {
            [`@apply text-${config.info}`]: {},
          },
          [`&.${prefix}-checkbox-success`]: {
            [`@apply text-${config.success}`]: {},
          },
          [`&.${prefix}-checkbox-warning`]: {
            [`@apply text-${config.warning}`]: {},
          },
          [`&.${prefix}-checkbox-danger`]: {
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
          checkbox: defaultCheckboxConfig,
        },
      },
    }
  }
)
