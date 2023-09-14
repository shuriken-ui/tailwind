import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultProgressCircleConfig = {
  circleDuration: '500',
  default: {
    text: 'muted-200',
    textDark: 'muted-700',
    stroke: 'current',
  },
  contrast: {
    text: 'muted-200',
    textDark: 'muted-900',
    stroke: 'current',
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
        'shurikenUi.progressCircle',
      ) satisfies typeof defaultProgressCircleConfig

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
          progressCircle: defaultProgressCircleConfig,
        },
      },
    }
  },
)
