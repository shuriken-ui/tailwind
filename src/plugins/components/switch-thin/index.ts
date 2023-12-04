import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type SwitchThinConfig, defaultConfig, key } from './switch-thin.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.switchThin`) satisfies SwitchThinConfig

      addComponents({
        [`.${prefix}switch-thin`]: {
          [`@apply flex cursor-pointer items-center`]: {},

          [`.${prefix}switch-thin-outer`]: {
            [`@apply ${prefix}focus relative block h-4 rounded-${config.handle.rounded}`]:
              {},
          },
          [`.${prefix}switch-thin-handle`]: {
            [`@apply border-${config.handle.border} dark:border-${config.handle.borderDark} dark:bg-${config.handle.bgDark} absolute -start-1 top-1/2 flex h-${config.handle.size} w-${config.handle.size} -translate-y-1/2 items-center justify-center rounded-${config.handle.rounded} border bg-${config.handle.bg} shadow transition`]:
              {},
          },
          [`.${prefix}switch-thin-track`]: {
            [`@apply bg-${config.track.bg} dark:bg-${config.track.bgDark} block h-4 w-10 rounded-${config.track.rounded} shadow-inner transition-all duration-${config.track.duration}`]:
              {},
          },
          [`.${prefix}switch-thin-single-label`]: {
            [`@apply text-${config.singleLabel.text} relative ms-3 cursor-pointer select-none font-${config.singleLabel.font} text-${config.singleLabel.textSize}`]:
              {},
          },
          [`.${prefix}switch-thin-dual-label`]: {
            [`@apply ms-3`]: {},

            [`.${prefix}switch-thin-label`]: {
              [`@apply font-${config.dualLabel.label.font} text-${config.dualLabel.label.text} block text-${config.dualLabel.label.textSize} font-${config.dualLabel.label.fontWeight} dark:text-${config.dualLabel.label.textDark}`]:
                {},
            },
            [`.${prefix}switch-thin-sublabel`]: {
              [`@apply text-${config.dualLabel.sublabel.text} block font-${config.dualLabel.sublabel.font} text-${config.dualLabel.sublabel.textSize}`]:
                {},
            },
          },
          [`.${prefix}switch-thin-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},

            [`&:checked ~ .${prefix}switch-thin-handle`]: {
              [`@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full`]:
                {},
            },
          },
          [`&.${prefix}switch-thin-primary .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.primary}`]: {},
            },
          [`&.${prefix}switch-thin-info .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.info}`]: {},
            },
          [`&.${prefix}switch-thin-success .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.success}`]: {},
            },
          [`&.${prefix}switch-thin-warning .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.warning}`]: {},
            },
          [`&.${prefix}switch-thin-danger .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
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
          [key]: defaultConfig,
        },
      },
    }
  },
)
