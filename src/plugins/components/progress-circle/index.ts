import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type ProgressCircleConfig,
  defaultConfig,
  key,
} from './progress-circle.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ProgressCircleConfig

      addComponents({
        [`.${prefix}progress-circle`]: {
          [`@apply relative inline-flex items-center justify-center`]: {},

          [`circle:nth-child(2)`]: {
            [`@apply stroke-current transition-all duration-${config.circleDuration}`]:
              {},
          },
          [`&.${prefix}progress-default circle:first-child`]: {
            [`@apply text-${config.default.text} dark:text-${config.default.textDark} stroke-${config.default.stroke}`]:
              {},
          },
          [`&.${prefix}progress-contrast circle:first-child`]: {
            [`@apply text-${config.contrast.text} dark:text-${config.contrast.textDark} stroke-${config.contrast.stroke}`]:
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
