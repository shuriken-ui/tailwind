import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultSwitchThinConfig = {
  handle: {
    border: 'muted-300',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: '6',
    rounded: 'full',
  },
  track: {
    bg: 'muted-300',
    bgDark: 'muted-600',
    rounded: 'full',
    duration: '300',
  },
  singleLabel: {
    text: 'muted-400',
    font: 'sans',
    textSize: 'sm',
  },
  dualLabel: {
    label: {
      font: 'heading',
      fontWeight: 'medium',
      text: 'muted-800',
      textDark: 'white',
      textSize: 'sm',
    },
    sublabel: {
      text: 'muted-400',
      textSize: 'xs',
      font: 'sans',
    },
  },
  input: {
    size: 'full',
  },
  primary: 'primary-400',
  info: 'info-400',
  success: 'success-400',
  warning: 'warning-400',
  danger: 'danger-400',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.switchThin'
      ) satisfies typeof defaultSwitchThinConfig

      addComponents({
        [`.${prefix}-switch-thin`]: {
          [`@apply flex cursor-pointer items-center`]: {},

          [`.${prefix}-switch-thin-outer`]: {
            [`@apply relative block h-4`]: {},
          },
          [`.${prefix}-switch-thin-handle`]: {
            [`@apply border-${config.handle.border} dark:border-${config.handle.borderDark} dark:bg-${config.handle.bgDark} absolute -start-1 top-1/2 flex h-${config.handle.size} w-${config.handle.size} -translate-y-1/2 items-center justify-center rounded-${config.handle.rounded} border bg-${config.handle.bg} shadow transition`]:
              {},
          },
          [`.${prefix}-switch-thin-track`]: {
            [`@apply bg-${config.track.bg} dark:bg-${config.track.bgDark} block h-4 w-10 rounded-${config.track.rounded} shadow-inner outline-1 outline-transparent transition-all duration-${config.track.duration}`]:
              {},
          },
          [`.${prefix}-switch-thin-single-label`]: {
            [`@apply text-${config.singleLabel.text} relative ms-3 cursor-pointer select-none font-${config.singleLabel.font} text-${config.singleLabel.textSize}`]:
              {},
          },
          [`.${prefix}-switch-dual-label`]: {
            [`@apply ms-3`]: {},

            [`.${prefix}-switch-label`]: {
              [`@apply font-${config.dualLabel.label.font} text-${config.dualLabel.label.text} block text-${config.dualLabel.label.textSize} font-${config.dualLabel.label.fontWeight} dark:text-${config.dualLabel.label.textDark}`]:
                {},
            },
            [`.${prefix}-switch-sublabel`]: {
              [`@apply text-${config.dualLabel.sublabel.text} block font-${config.dualLabel.sublabel.font} text-${config.dualLabel.sublabel.textSize}`]:
                {},
            },
          },
          [`.${prefix}-switch-thin-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},

            [`&:checked ~ .${prefix}-switch-thin-handle`]: {
              [`@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full`]:
                {},
            },
            [`&:checked ~ .${prefix}-switch-thin-track`]: {
              [`@apply outline-dashed outline-offset-2 ring-0 dark:outline-muted-600 outline-muted-300`]:
                {},
            },
          },
          [`&.${prefix}-switch-thin-primary .${prefix}-switch-thin-input:checked ~ .${prefix}-switch-thin-track`]:
            {
              [`@apply bg-${config.primary}`]: {},
            },
          [`&.${prefix}-switch-thin-info .${prefix}-switch-thin-input:checked ~ .${prefix}-switch-thin-track`]:
            {
              [`@apply bg-${config.info}`]: {},
            },
          [`&.${prefix}-switch-thin-success .${prefix}-switch-thin-input:checked ~ .${prefix}-switch-thin-track`]:
            {
              [`@apply bg-${config.success}`]: {},
            },
          [`&.${prefix}-switch-thin-warning .${prefix}-switch-thin-input:checked ~ .${prefix}-switch-thin-track`]:
            {
              [`@apply bg-${config.warning}`]: {},
            },
          [`&.${prefix}-switch-thin-danger .${prefix}-switch-thin-input:checked ~ .${prefix}-switch-thin-track`]:
            {
              [`@apply bg-${config.danger}`]: {},
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          switchThin: defaultSwitchThinConfig,
        },
      },
    }
  }
)
