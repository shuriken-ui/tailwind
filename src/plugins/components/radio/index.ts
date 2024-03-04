import plugin from 'tailwindcss/plugin'
import { type RadioConfig, defaultConfig, key } from './radio.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies RadioConfig

  addComponents({
    '.nui-radio': {
      '@apply relative inline-flex items-start gap-1': {},

      '.nui-radio-outer': {
        '@apply nui-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full':
          {},
        //Size
        [`@apply h-${config.outer.size} w-${config.outer.size}`]: {},
      },
      //Radio:inner
      '.nui-radio-inner': {
        //Base
        [`@apply absolute start-0 top-0 z-0 ${config.inner.rounded}`]: {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size}`]: {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Radio:dot
      '.nui-radio-dot': {
        //Base
        [`@apply pointer-events-none z-10 block scale-0 ${config.dot.rounded}`]:
          {},
        //Size
        [`@apply h-${config.dot.size} w-${config.dot.size}`]: {},
        //Background
        [`@apply bg-${config.dot.background.light} dark:bg-${config.dot.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.dot.transition.property} duration-${config.dot.transition.duration}`]:
          {},
      },
      //Radio:input
      '.nui-radio-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked:inner
        '&:checked ~ .nui-radio-inner': {
          '@apply border-current': {},
        },
        //Input:checked:dot
        '&:checked ~ .nui-radio-dot': {
          '@apply scale-100': {},
        },
      },
      //Radio:label
      '.nui-radio-label-wrapper': {
        '@apply inline-flex flex-col': {},
      },
      //Label:text
      '.nui-radio-label-text': {
        '@apply ms-1 cursor-pointer select-none': {},
        //Font
        [`@apply font-${config.label.font.family} text-${config.label.font.size} text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
          {},
      },
      //Radio:error
      '.nui-radio-error': {
        '@apply ms-1 inline-block': {},
        //Font
        [`@apply font-${config.error.font.family} text-${config.error.font.size} text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
          {},
      },
      //Color:default
      '&.nui-radio-default': {
        [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:muted
      '&.nui-radio-muted': {
        [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
          {},
      },
      //Color:light
      '&.nui-radio-light': {
        [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
          {},
      },
      //Color:dark
      '&.nui-radio-dark': {
        [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
          {},
      },
      //Color:black
      '&.nui-radio-black': {
        [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
          {},
      },
      //Color:primary
      '&.nui-radio-primary': {
        [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
          {},
      },
      //Color:info
      '&.nui-radio-info': {
        [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
          {},
      },
      //Color:success
      '&.nui-radio-success': {
        [`@apply text-${config.color.success.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:warning
      '&.nui-radio-warning': {
        [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
          {},
      },
      //Color:danger
      '&.nui-radio-danger': {
        [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
          {},
      },
    },
  })
}, config)
