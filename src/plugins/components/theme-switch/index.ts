import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultThemeSwitchConfig = {
  bg: 'muted-200',
  bgDark: 'muted-700',
  rounded: 'full',
  input: {
    size: 'full',
  },
  inner: {
    bg: 'white',
    bgDark: 'muted-900',
    border: 'muted-200',
    borderDark: 'muted-800',
    size: '10',
    rounded: 'full',
    duration: '300',
  },
  sun: {
    size: '6',
    text: 'yellow-400',
    duration: '300',
  },
  moon: {
    size: '6',
    text: 'yellow-400',
    duration: '300',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.themeSwitch',
      ) satisfies typeof defaultThemeSwitchConfig

      addComponents({
        [`.${prefix}theme-switch`]: {
          [`@apply bg-${config.bg} dark:bg-${config.bgDark} relative block h-6 w-14 scale-[0.8] rounded-${config.rounded}`]:
            {},

          [`.${prefix}theme-switch-input`]: {
            [`@apply absolute start-0 top-0 z-10 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},
          },
          [`.${prefix}theme-switch-inner`]: {
            [`@apply dark:bg-${config.inner.bgDark} border-${config.inner.border} dark:border-${config.inner.borderDark} absolute -start-1 -top-2 -ms-1 flex h-${config.inner.size} w-${config.inner.size} items-center justify-center rounded-${config.inner.rounded} border bg-${config.inner.bg} transition-all duration-${config.inner.duration} peer-checked:ms-[45%] peer-checked:rotate-[360deg]`]:
              {},
          },
          [`.${prefix}sun`]: {
            [`@apply pointer-events-none h-${config.sun.size} w-${config.sun.size} text-${config.sun.text} transition-all duration-${config.sun.duration}`]:
              {},
          },
          [`.${prefix}moon`]: {
            [`@apply pointer-events-none h-${config.moon.size} w-${config.moon.size} text-${config.moon.text} transition-all duration-${config.moon.duration}`]:
              {},
          },
          [`.${prefix}theme-switch-input:checked ~ .${prefix}theme-switch-inner`]:
            {
              [`@apply ms-[45%] rotate-[360deg]`]: {},
            },
          [`.${prefix}theme-switch-input:not(:checked) ~ .${prefix}theme-switch-inner .${prefix}sun`]:
            {
              [`@apply block`]: {},
            },
          [`.${prefix}theme-switch-input:checked ~ .${prefix}theme-switch-inner .${prefix}sun`]:
            {
              [`@apply hidden`]: {},
            },
          [`.${prefix}theme-switch-input:not(:checked) ~ .${prefix}theme-switch-inner .${prefix}moon`]:
            {
              [`@apply hidden`]: {},
            },
          [`.${prefix}theme-switch-input:checked ~ .${prefix}theme-switch-inner .${prefix}moon`]:
            {
              [`@apply block`]: {},
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          themeSwitch: defaultThemeSwitchConfig,
        },
      },
    }
  },
)
