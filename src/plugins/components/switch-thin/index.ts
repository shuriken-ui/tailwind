import plugin from 'tailwindcss/plugin'
import { type SwitchThinConfig, defaultConfig, key } from './switch-thin.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies SwitchThinConfig

  addComponents({
    //Wrapper
    '.nui-switch-thin': {
      '@apply flex cursor-pointer items-center': {},
      //Switch:outer
      '.nui-switch-thin-outer': {
        [`@apply nui-focus relative block h-4 ${config.track.rounded}`]: {},
      },
      //Switch:handle
      '.nui-switch-thin-handle': {
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
      '.nui-switch-thin-track': {
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
      '.nui-switch-thin-single-label': {
        //Base
        '@apply relative ms-3 cursor-pointer select-none': {},
        //Font
        [`@apply font-${config.label.single.font.family} text-${config.label.single.font.size}`]:
          {},
        //Color
        [`@apply text-${config.label.single.font.color.light} dark:text-${config.label.single.font.color.dark}`]:
          {},
      },
      //Label:dual
      '.nui-switch-thin-dual-label': {
        '@apply ms-3': {},

        '.nui-switch-thin-label': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.label.font.family} text-${config.label.dual.label.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.label.font.color.light} dark:text-${config.label.dual.label.font.color.dark}`]:
            {},
        },
        //Label:sublabel
        '.nui-switch-thin-sublabel': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.sublabel.font.family} text-${config.label.dual.sublabel.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.sublabel.font.color.light} dark:text-${config.label.dual.sublabel.font.color.dark}`]:
            {},
        },
      },
      //Switch:input
      '.nui-switch-thin-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked
        '&:checked ~ .nui-switch-thin-handle': {
          '@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full': {},
        },
      },
      //color:primary
      '&.nui-switch-thin-primary .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
            {},
        },
      //color:info
      '&.nui-switch-thin-info .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
            {},
        },
      //color:success
      '&.nui-switch-thin-success .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
            {},
        },
      //color:warning
      '&.nui-switch-thin-warning .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
            {},
        },
      //color:danger
      '&.nui-switch-thin-danger .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.danger.light} dark:bg-${config.color.danger.dark}`]:
            {},
        },
      //color:dark
      '&.nui-switch-thin-dark .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.dark.light} dark:bg-${config.color.dark.dark}`]:
            {},
        },
      //color:black
      '&.nui-switch-thin-black .nui-switch-thin-input:checked ~ .nui-switch-thin-track':
        {
          [`@apply bg-${config.color.black.light} dark:bg-${config.color.black.dark}`]:
            {},
        },
    },
  })
}, config)
