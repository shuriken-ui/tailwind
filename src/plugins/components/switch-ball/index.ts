import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type SwitchBallConfig, defaulConfig, key } from './switch-ball.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies SwitchBallConfig

      addComponents({
        //Wrapper
        [`.${prefix}switch-ball`]: {
          [`@apply flex cursor-pointer items-center`]: {},
          //Switch:outer
          [`.${prefix}switch-ball-outer`]: {
            [`@apply ${prefix}focus relative block ${config.track.rounded}`]:
              {},
          },
          //Switch:handle
          [`.${prefix}switch-ball-handle`]: {
            [`@apply absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center ${config.handle.rounded} shadow focus:w-6`]:
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
          [`.${prefix}switch-ball-track`]: {
            //Base
            [`@apply block h-6 w-11 ${config.track.rounded}`]: {},
            //Background
            [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
              {},
          },
          //Switch:icon
          [`.${prefix}switch-ball-icon`]: {
            //Base
            [`@apply pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0`]:
              {},
            //Color
            [`@apply text-${config.icon.color.light} dark:text-${config.icon.color.dark}`]:
              {},
            //Size
            [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
            //Transition
            [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
              {},
          },
          //Label:single
          [`.${prefix}switch-ball-single-label`]: {
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
          [`.${prefix}switch-ball-dual-label`]: {
            [`@apply ms-3`]: {},

            [`.${prefix}switch-ball-label`]: {
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
            [`.${prefix}switch-ball-sublabel`]: {
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
          [`.${prefix}switch-ball-input`]: {
            [`@apply absolute z-0 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},
            //Input:checked:handle
            [`&:checked ~ .${prefix}switch-ball-handle`]: {
              [`@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full`]:
                {},
            },
            //Input:checked:icon
            [`&:checked ~ .${prefix}switch-ball-icon`]: {
              [`@apply -translate-y-1/2 opacity-100`]: {},
            },
          },
          //color:primary
          [`&.${prefix}switch-ball-primary .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
                {},
            },
          //color:info
          [`&.${prefix}switch-ball-info .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
                {},
            },
          //color:success
          [`&.${prefix}switch-ball-success .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
                {},
            },
          //color:warning
          [`&.${prefix}switch-ball-warning .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
            {
              [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
                {},
            },
          //color:danger
          [`&.${prefix}switch-ball-danger .${prefix}switch-ball-input:checked ~ .${prefix}switch-ball-track`]:
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
          [key]: defaulConfig,
        },
      },
    }
  },
)
