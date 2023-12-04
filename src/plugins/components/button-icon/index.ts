import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ButtonIconConfig, defaultConfig, key } from './button-icon.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ButtonIconConfig

      addComponents({
        [`.${prefix}button-icon`]: {
          [`@apply ${prefix}focus relative inline-flex items-center justify-center space-x-1 font-sans text-${config.text} font-${config.font} leading-5 no-underline transition-all duration-${config.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
            {},

          [`&.${prefix}button-small`]: {
            [`@apply h-${config.buttonSmall.size} w-${config.buttonSmall.size} p-${config.buttonSmall.space}`]:
              {},
          },
          [`&.${prefix}button-medium`]: {
            [`@apply h-${config.buttonMedium.size} w-${config.buttonMedium.size} p-${config.buttonMedium.space}`]:
              {},
          },
          [`&.${prefix}button-large`]: {
            [`@apply h-${config.buttonLarge.size} w-${config.buttonLarge.size} p-${config.buttonLarge.space}`]:
              {},
          },
          [`&.${prefix}button-rounded`]: {
            [`@apply rounded`]: {},
          },
          [`&.${prefix}button-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}button-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}button-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          [`&.${prefix}button-loading`]: {
            [`@apply !text-transparent`]: {},
          },

          [`&.${prefix}button-default`]: {
            [`@apply text-${config.default.text} bg-${config.default.bg} dark:bg-${config.default.bgDark} dark:text-${config.default.textDark} dark:hover:bg-${config.default.bgHoverDark} hover:bg-${config.default.bgHover} border border-${config.default.border} dark:border-${config.default.borderDark}`]:
              {},
          },
          [`&.${prefix}button-muted`]: {
            [`@apply text-${config.muted.text} bg-${config.muted.bg} dark:text-${config.muted.textDark} dark:bg-${config.muted.bgDark} dark:hover:bg-${config.muted.bgHoverDark} hover:bg-${config.muted.bgHover}`]:
              {},
          },
          [`&.${prefix}button-primary`]: {
            [`@apply text-${config.primary.text} border-2 border-${config.primary.border} hover:bg-${config.primary.bgHover}`]:
              {},
          },
          [`&.${prefix}button-info`]: {
            [`@apply text-${config.info.text} border-2 border-${config.info.border} hover:bg-${config.info.bgHover}`]:
              {},
          },
          [`&.${prefix}button-success`]: {
            [`@apply text-${config.success.text} border-2 border-${config.success.border} hover:bg-${config.success.bgHover}`]:
              {},
          },
          [`&.${prefix}button-warning`]: {
            [`@apply text-${config.warning.text} border-2 border-${config.warning.border} hover:bg-${config.warning.bgHover}`]:
              {},
          },
          [`&.${prefix}button-danger`]: {
            [`@apply text-${config.danger.text} border-2 border-${config.danger.border} hover:bg-${config.danger.bgHover}`]:
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
