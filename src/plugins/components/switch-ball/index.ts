import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultSwitchBallConfig = {
  handle: {
    border: 'muted-300',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: '5',
    rounded: 'full',
  },
  track: {
    bg: 'muted-300',
    bgDark: 'muted-600',
    rounded: 'full',
    duration: '300',
  },
  icon: {
    size: '2.5',
    text: 'white',
    duration: '300',
  },
  singleLabel: {
    text: 'muted-400',
    font: 'sans',
    textSize: 'sm',
  },
  dualLabel: {
    label: {
      font: 'sans',
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
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.switchBall',
      ) satisfies typeof defaultSwitchBallConfig

      addComponents({
        [`.${prefix}switch-ball`]: {
          [`@apply flex cursor-pointer items-center`]: {},

          [`.${prefix}switch-ball-outer`]: {
            [`@apply ${prefix}focus relative block rounded-${config.handle.rounded}`]:
              {},
          },
          [`.${prefix}switch-ball-handle`]: {
            [`@apply border-${config.handle.border} dark:border-${config.handle.borderDark} dark:bg-${config.handle.bgDark} absolute start-0.5 top-1/2 z-10 flex h-${config.handle.size} w-${config.handle.size} -translate-y-1/2 items-center justify-center rounded-${config.handle.rounded} border bg-${config.handle.bg} shadow transition focus:w-6`]:
              {},
          },
          [`.${prefix}switch-ball-track`]: {
            [`@apply bg-${config.track.bg} dark:bg-${config.track.bgDark} block h-6 w-11 rounded-${config.track.rounded} shadow-inner transition-all duration-${config.track.duration}`]:
              {},
          },
          [`.${prefix}switch-ball-icon`]: {
            [`@apply pointer-events-none absolute start-2 top-1/2 z-10 h-${config.icon.size} w-${config.icon.size} translate-y-0 fill-current text-${config.icon.text} opacity-0 transition duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}switch-ball-single-label`]: {
            [`@apply text-${config.singleLabel.text} relative ms-3 cursor-pointer select-none font-${config.singleLabel.font} text-${config.singleLabel.textSize}`]:
              {},
          },
          [`.${prefix}switch-ball-dual-label`]: {
            [`@apply ms-3`]: {},

            [`.${prefix}switch-ball-label`]: {
              [`@apply font-${config.dualLabel.label.font} text-${config.dualLabel.label.text} block text-${config.dualLabel.label.textSize} font-${config.dualLabel.label.fontWeight} dark:text-${config.dualLabel.label.textDark}`]:
                {},
            },
            [`.${prefix}switch-ball-sublabel`]: {
              [`@apply text-${config.dualLabel.sublabel.text} block font-${config.dualLabel.sublabel.font} text-${config.dualLabel.sublabel.textSize}`]:
                {},
            },
          },
          [`.${prefix}switch-ball-input`]: {
            [`@apply absolute z-0 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},

            [`&:checked ~ .${prefix}switch-ball-handle`]: {
              [`@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full`]:
                {},
            },
            [`&:checked ~ .${prefix}switch-ball-icon`]: {
              [`@apply -translate-y-1/2 opacity-100`]: {},
            },
          },
          [`&.${prefix}switch-ball-primary .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.primary}`]: {},
            },
          [`&.${prefix}switch-ball-info .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.info}`]: {},
            },
          [`&.${prefix}switch-ball-success .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.success}`]: {},
            },
          [`&.${prefix}switch-ball-warning .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.warning}`]: {},
            },
          [`&.${prefix}switch-ball-danger .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
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
          switchBall: defaultSwitchBallConfig,
        },
      },
    }
  },
)
