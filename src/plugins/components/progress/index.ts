import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ProgressConfig, defaultConfig, key } from './progress.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ProgressConfig

      addComponents({
        [`.${prefix}progress`]: {
          [`@apply relative w-${config.width} overflow-hidden`]: {},
          //Bar
          [`.${prefix}progress-bar`]: {
            [`@apply absolute start-0 top-0 h-full transition-${config.bar.transition.property} duration-${config.bar.transition.duration}`]:
              {},
          },
          //Color
          [`&.${prefix}progress-default`]: {
            [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
              {},
          },
          [`&.${prefix}progress-contrast`]: {
            [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
              {},
          },
          //Size
          [`&.${prefix}progress-xs`]: {
            [`@apply h-${config.size.xs}`]: {},
          },
          [`&.${prefix}progress-sm`]: {
            [`@apply h-${config.size.sm}`]: {},
          },
          [`&.${prefix}progress-md`]: {
            [`@apply h-${config.size.md}`]: {},
          },
          [`&.${prefix}progress-lg`]: {
            [`@apply h-${config.size.lg}`]: {},
          },
          [`&.${prefix}progress-xl`]: {
            [`@apply h-${config.size.xl}`]: {},
          },
          //Rounded
          [`&.${prefix}progress-rounded, &.${prefix}progress-rounded .${prefix}progress-bar`]:
            {
              [`@apply ${config.rounded.sm}`]: {},
            },
          [`&.${prefix}progress-smooth, &.${prefix}progress-smooth .${prefix}progress-bar`]:
            {
              [`@apply ${config.rounded.md}`]: {},
            },
          [`&.${prefix}progress-curved, &.${prefix}progress-curved .${prefix}progress-bar`]:
            {
              [`@apply ${config.rounded.lg}`]: {},
            },
          [`&.${prefix}progress-full, &.${prefix}progress-full .${prefix}progress-bar`]:
            {
              [`@apply ${config.rounded.full}`]: {},
            },
          [`&.${prefix}progress-indeterminate .${prefix}progress-bar`]: {
            [`@apply w-full`]: {},
          },
          //Bar color
          [`&.${prefix}progress-primary`]: {
            [`.${prefix}progress-bar`]: {
              [`@apply bg-${config.bar.color.primary}`]: {},
            },
          },
          [`&.${prefix}progress-info`]: {
            [`.${prefix}progress-bar`]: {
              [`@apply bg-${config.bar.color.info}`]: {},
            },
          },
          [`&.${prefix}progress-success`]: {
            [`.${prefix}progress-bar`]: {
              [`@apply bg-${config.bar.color.success}`]: {},
            },
          },
          [`&.${prefix}progress-warning`]: {
            [`.${prefix}progress-bar`]: {
              [`@apply bg-${config.bar.color.warning}`]: {},
            },
          },
          [`&.${prefix}progress-danger`]: {
            [`.${prefix}progress-bar`]: {
              [`@apply bg-${config.bar.color.danger}`]: {},
            },
          },
        },
      })
    }
  },
  function (options) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
        extend: {
          keyframes: {
            [`${prefix}progress-indeterminate`]: {
              '0%': { 'margin-left': '-100%' },
              '60%': { 'margin-left': '100%' },
              '100%': { 'margin-left': '-100%' },
            },
          },
          animation: {
            [`${prefix}progress-indeterminate`]: `${prefix}progress-indeterminate 3s linear infinite forwards`,
          },
        },
      },
    }
  },
)
