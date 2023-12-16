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
        //Wrapper
        [`.${prefix}switch-thin`]: {
          [`@apply flex cursor-pointer items-center`]: {},
          //Switch:outer
          [`.${prefix}switch-thin-outer`]: {
            [`@apply ${prefix}focus relative block h-4 ${config.track.rounded}`]:
              {},
          },
          //Switch:handle
          [`.${prefix}switch-thin-handle`]: {
            [`@apply absolute -start-1 top-1/2 -translate-y-1/2 flex items-center justify-center ${config.handle.rounded}`]:
              {},
            //Size
            [`@apply h-${config.handle.size} w-${config.handle.size}`]: {},
            //Background
            [`@apply bg-${config.handle.background.light} dark:bg-${config.handle.background.dark}`]:
              {},
            //Border
            [`@apply border border-${config.handle.border.light} dark:border-${config.handle.border.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
              {},
          },
          //Switch:track
          [`.${prefix}switch-thin-track`]: {
            //Base
            [`@apply block h-4 w-10 ${config.track.rounded}`]: {},
            //Background
            [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
              {},
          },
          //Label:single
          [`.${prefix}switch-thin-single-label`]: {
            //Base
            [`@apply relative ms-3 cursor-pointer select-none`]: {},
            //Font
            [`@apply font-${config.label.single.font.family} text-${config.label.single.font.size}`]:
              {},
            //Color
            [`@apply text-${config.label.single.font.color.light} dark:text-${config.label.single.font.color.dark}`]:
              {},
          },
          //Label:dual
          [`.${prefix}switch-thin-dual-label`]: {
            [`@apply ms-3`]: {},

            [`.${prefix}switch-thin-label`]: {
              //Base
              [`@apply block`]: {},
              //Font
              [`@apply font-${config.label.dual.label.font.family} text-${config.label.dual.label.font.size}`]:
                {},
              //Color
              [`@apply text-${config.label.dual.label.font.color.light} dark:text-${config.label.dual.label.font.color.dark}`]:
                {},
            },
            //Label:sublabel
            [`.${prefix}switch-thin-sublabel`]: {
              //Base
              [`@apply block`]: {},
              //Font
              [`@apply font-${config.label.dual.sublabel.font.family} text-${config.label.dual.sublabel.font.size}`]:
                {},
              //Color
              [`@apply text-${config.label.dual.sublabel.font.color.light} dark:text-${config.label.dual.sublabel.font.color.dark}`]:
                {},
            },
          },
          //Switch:input
          [`.${prefix}switch-thin-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},
            //Input:checked
            [`&:checked ~ .${prefix}switch-thin-handle`]: {
              [`@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full`]:
                {},
            },
          },
          //color:primary
          [`&.${prefix}switch-thin-primary .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
                {},
            },
          //color:info
          [`&.${prefix}switch-thin-info .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
                {},
            },
          //color:success
          [`&.${prefix}switch-thin-success .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
                {},
            },
          //color:warning
          [`&.${prefix}switch-thin-warning .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
                {},
            },
          //color:danger
          [`&.${prefix}switch-thin-danger .${prefix}switch-thin-input:checked ~ .${prefix}switch-thin-track`]:
            {
              [`@apply bg-${config.color.danger.light} dark:bg-${config.color.danger.dark}`]:
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
