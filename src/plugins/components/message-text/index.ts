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
        //Wrapper
        [`.${prefix}message-text`]: {
          [`@apply relative p-${config.padding}`]: {},
          //Message:header
          [`.${prefix}message-head`]: {
            [`@apply flex items-center gap-${config.header.gap} mb-2`]: {},
          },
          //Message:dot
          [`.${prefix}message-dot`]: {
            //Base
            [`@apply inline-block h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded}`]:
              {},
            //Background
            [`@apply bg-${config.dot.background.light} dark:bg-${config.dot.background.dark}`]:
              {},
          },
          //Message:close
          [`.${prefix}message-close`]: {
            [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}message-rounded`]: {
            [`@apply ${config.rounded.default}`]: {},
          },
          //Rounded:md
          [`&.${prefix}message-smooth`]: {
            [`@apply ${config.rounded.smooth}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}message-curved`]: {
            [`@apply ${config.rounded.curved}`]: {},
          },
          //Color:white
          [`&.${prefix}message-white`]: {
            [`@apply bg-${config.color.white.background.light} dark:bg-${config.color.white.background.dark}`]:
              {},
          },
          //Color:whiteContrast
          [`&.${prefix}message-white-contrast`]: {
            [`@apply bg-${config.color.whiteContrast.background.light} dark:bg-${config.color.whiteContrast.background.dark}`]:
              {},
          },
          //Color:default
          [`&.${prefix}message-default`]: {
            [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.default.dot.background.light} dark:bg-${config.color.default.dot.background.dark}`]:
                {},
            },
          },
          //Color:contrast
          [`&.${prefix}message-contrast`]: {
            [`@apply border border-${config.color.contrast.border.light} dark:border-${config.color.contrast.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.contrast.dot.background.light} dark:bg-${config.color.contrast.dot.background.dark}`]:
                {},
            },
          },
          //Color:primary
          [`&.${prefix}message-primary`]: {
            [`@apply border border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.primary.dot.background.light} dark:bg-${config.color.primary.dot.background.dark}`]:
                {},
            },
          },
          //Color:info
          [`&.${prefix}message-info`]: {
            [`@apply border border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.info.dot.background.light} dark:bg-${config.color.info.dot.background.dark}`]:
                {},
            },
          },
          //Color:success
          [`&.${prefix}message-success`]: {
            [`@apply border border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.success.dot.background.light} dark:bg-${config.color.success.dot.background.dark}`]:
                {},
            },
          },
          //Color:warning
          [`&.${prefix}message-warning`]: {
            [`@apply border border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.warning.dot.background.light} dark:bg-${config.color.warning.dot.background.dark}`]:
                {},
            },
          },
          //Color:danger
          [`&.${prefix}message-danger`]: {
            [`@apply border border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
              {},
            //Message:dot
            [`.${prefix}message-dot`]: {
              [`@apply bg-${config.color.danger.dot.background.light} dark:bg-${config.color.danger.dot.background.dark}`]:
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
