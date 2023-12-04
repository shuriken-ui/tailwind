import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ToastConfig, defaultConfig, key } from './toast.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ToastConfig

      addComponents({
        [`.${prefix}toast`]: {
          [`@apply relative flex font-${config.font} overflow-hidden`]: {},

          [`.${prefix}toast-inner`]: {
            [`@apply flex items-center grow gap-2 px-4 py-3`]: {},
          },
          [`.${prefix}toast-title`]: {
            [`@apply ${prefix}heading ${prefix}heading-${config.title.heading} ${prefix}weight-${config.title.weight} text-${config.title.text} dark:text-${config.title.textDark}`]:
              {},
          },
          [`.${prefix}toast-subtitle`]: {
            [`@apply ${prefix}paragraph text-${config.subtitle.text} text-${config.subtitle.textColor}`]:
              {},
          },
          [`.${prefix}toast-icon`]: {
            [`@apply w-${config.iconSize} h-${config.iconSize}`]: {},
          },
          [`.${prefix}toast-icon-block`]: {
            [`@apply h-${config.iconBlockSize} w-${config.iconBlockSize} flex items-center justify-center`]:
              {},
          },
          [`.${prefix}button-close`]: {
            [`@apply ms-auto`]: {},
          },
          [`&.${prefix}toast-default`]: {
            [`@apply border-2 border-${config.default.border} dark:border-${config.default.borderDark}`]:
              {},
          },
          [`&.${prefix}toast-contrast`]: {
            [`@apply border-2 border-${config.contrast.border} dark:border-${config.contrast.borderDark}`]:
              {},
          },
          [`&.${prefix}toast-white`]: {
            [`@apply bg-${config.white.bg} dark:bg-${config.white.bgDark}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.white.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.white.iconBlock.bg} dark:bg-${config.white.iconBlock.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}toast-white-contrast`]: {
            [`@apply bg-${config.whiteContrast.bg} dark:bg-${config.whiteContrast.bgDark}`]:
              {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.whiteContrast.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.whiteContrast.iconBlock.bg} dark:bg-${config.whiteContrast.iconBlock.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}toast-primary`]: {
            [`@apply border-2 border-${config.primary.border}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.primary.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.primary.iconBlock.bg}`]: {},
            },
          },
          [`&.${prefix}toast-info`]: {
            [`@apply border-2 border-${config.info.border}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.info.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.info.iconBlock.bg}`]: {},
            },
          },
          [`&.${prefix}toast-success`]: {
            [`@apply border-2 border-${config.success.border}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.success.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.success.iconBlock.bg}`]: {},
            },
          },
          [`&.${prefix}toast-warning`]: {
            [`@apply border-2 border-${config.warning.border}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.warning.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.warning.iconBlock.bg}`]: {},
            },
          },
          [`&.${prefix}toast-danger`]: {
            [`@apply border-2 border-${config.danger.border}`]: {},

            [`.${prefix}toast-icon`]: {
              [`@apply text-${config.danger.icon.text}`]: {},
            },
            [`.${prefix}toast-icon-block`]: {
              [`@apply bg-${config.danger.iconBlock.bg}`]: {},
            },
          },
          [`&.${prefix}toast-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},
          },
          [`&.${prefix}toast-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}toast-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}toast-borderless`]: {
            [`@apply !border-0 shadow-${config.borderless.shadow} dark:shadow-${config.borderless.shadowDark} shadow-${config.borderless.shadowSize}`]:
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
