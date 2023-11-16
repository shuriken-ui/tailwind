import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type MessageTextConfig,
  defaultConfig,
  key,
} from './message-text.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies MessageTextConfig

      addComponents({
        [`.${prefix}message-text`]: {
          [`@apply relative p-${config.space}`]: {},

          [`.${prefix}message-head`]: {
            [`@apply flex items-center gap-${config.head.space} mb-2`]: {},
          },
          [`.${prefix}message-dot`]: {
            [`@apply inline-block h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded} bg-${config.dot.bg} dark:bg-${config.dot.bgDark}`]:
              {},
          },
          [`.${prefix}message-close`]: {
            [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
              {},
          },
          [`&.${prefix}message-white`]: {
            [`@apply bg-${config.white.bg} dark:bg-${config.white.bgDark}`]: {},
          },
          [`&.${prefix}message-white-contrast`]: {
            [`@apply bg-${config.whiteContrast.bg} dark:bg-${config.whiteContrast.bgDark}`]:
              {},
          },
          [`&.${prefix}message-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},
          },
          [`&.${prefix}message-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}message-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}message-default`]: {
            [`@apply border border-${config.default.border} dark:border-${config.default.borderDark}`]:
              {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.default.dot.bg} dark:bg-${config.default.dot.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}message-contrast`]: {
            [`@apply border border-${config.contrast.border} dark:border-${config.contrast.borderDark}`]:
              {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.contrast.dot.bg} dark:bg-${config.contrast.dot.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}message-primary`]: {
            [`@apply border border-${config.primary.border}`]: {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.primary.dot.bg}`]: {},
            },
          },
          [`&.${prefix}message-info`]: {
            [`@apply border border-${config.info.border}`]: {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.info.dot.bg}`]: {},
            },
          },
          [`&.${prefix}message-success`]: {
            [`@apply border border-${config.success.border}`]: {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.success.dot.bg}`]: {},
            },
          },
          [`&.${prefix}message-warning`]: {
            [`@apply border border-${config.warning.border}`]: {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.warning.dot.bg}`]: {},
            },
          },
          [`&.${prefix}message-danger`]: {
            [`@apply border border-${config.danger.border}`]: {},

            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.danger.dot.bg}`]: {},
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
