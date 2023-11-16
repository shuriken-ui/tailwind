import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type ThemeToggleConfig,
  defaultConfig,
  key,
} from './theme-toggle.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ThemeToggleConfig

      addComponents({
        [`.${prefix}theme-toggle`]: {
          [`@apply ${prefix}focus relative block h-${config.size} w-${config.size} shrink-0 overflow-hidden rounded-${config.rounded} transition-all duration-${config.duration} focus-visible:outline-2 dark:ring-offset-${config.ringDark}`]:
            {},

          [`.${prefix}theme-toggle-inner`]: {
            [`@apply relative block h-${config.inner.size} w-${config.inner.size} rounded-${config.inner.rounded} bg-${config.inner.bg} dark:bg-${config.inner.bgDark}  border border-${config.inner.border} dark:border-${config.inner.borderDark}`]:
              {},
          },
          [`.${prefix}theme-toggle-input`]: {
            [`@apply absolute start-0 top-0 z-[2] h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
              {},
          },
          [`.${prefix}sun`]: {
            [`@apply pointer-events-none absolute start-1/2 top-1/2 block h-${config.sun.size} w-${config.sun.size} text-${config.sun.text} transition-all duration-${config.sun.duration} -translate-y-1/2 translate-x-[-50%] rtl:translate-x-[50%]`]:
              {},
          },
          [`.${prefix}moon`]: {
            [`@apply pointer-events-none absolute start-1/2 top-1/2 block h-${config.moon.size} w-${config.moon.size} text-${config.moon.text} transition-all duration-${config.moon.duration} translate-x-[-50%] rtl:translate-x-[45%]`]:
              {},
          },
          [`.${prefix}theme-toggle-input:not(:checked) ~ .${prefix}theme-toggle-inner .${prefix}sun`]:
            {
              [`@apply -translate-y-1/2 opacity-100`]: {},
            },
          [`.${prefix}theme-toggle-input:checked ~ .${prefix}theme-toggle-inner .${prefix}sun`]:
            {
              [`@apply translate-y-[-150%] opacity-0`]: {},
            },
          [`.${prefix}theme-toggle-input:not(:checked) ~ .${prefix}theme-toggle-inner .${prefix}moon`]:
            {
              [`@apply translate-y-[-150%] opacity-0`]: {},
            },
          [`.${prefix}theme-toggle-input:checked ~ .${prefix}theme-toggle-inner .${prefix}moon`]:
            {
              [`@apply -translate-y-1/2 opacity-100`]: {},
            },
          [`&.${prefix}theme-toggle-inverted`]: {
            [`@apply ring-offset-${config.inverted.ring} dark:ring-offset-${config.inverted.ringDark}`]:
              {},

            [`.${prefix}toggle-inner`]: {
              [`@apply bg-${config.inverted.inner.bg}`]: {},
            },
          },
          [`&.not(${prefix}theme-toggle-inverted)`]: {
            [`@apply dark:ring-offset-${config.notInverted.ringDark}`]: {},

            [`.${prefix}toggle-inner`]: {
              [`@apply bg-${config.notInverted.inner.bg} dark:bg-${config.notInverted.inner.bgDark} border border-${config.notInverted.inner.border} dark:border-${config.notInverted.inner.borderDark}`]:
                {},
            },
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
