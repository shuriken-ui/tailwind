import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type SnackConfig, defaultConfig, key } from './snack.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies SnackConfig

      addComponents({
        [`.${prefix}snack`]: {
          [`@apply inline-flex items-center gap-1 rounded-${config.rounded} outline-transparent`]:
            {},

          [`.${prefix}snack-icon`]: {
            [`@apply border-${config.icon.border} -ms-0.5 flex items-center justify-center rounded-${config.icon.rounded} border bg-${config.icon.bg}`]:
              {},
          },
          [`.${prefix}snack-image`]: {
            [`@apply -ms-0.5 flex items-center justify-center rounded-${config.image.rounded} shrink-0`]:
              {},
          },
          [`.${prefix}snack-image-inner`]: {
            [`@apply rounded-${config.imageInner.rounded}`]: {},
          },
          [`.${prefix}snack-text`]: {
            [`@apply text-${config.text.text} dark:text-${config.text.textDark} font-${config.text.font} text-${config.text.textSize}`]:
              {},
          },
          [`.${prefix}snack-button`]: {
            [`@apply hover:!bg-transparent`]: {},
          },
          [`&.${prefix}snack-sm`]: {
            [`@apply h-${config.snackSM.size}`]: {},

            [`.${prefix}snack-icon`]: {
              [`@apply w-${config.snackSM.icon.size} h-${config.snackSM.icon.size}`]:
                {},
            },
            [`.${prefix}snack-icon-inner`]: {
              [`@apply h-${config.snackSM.iconsInner.size} w-${config.snackSM.iconsInner.size}`]:
                {},
            },
            [`.${prefix}snack-image, .${prefix}snack-image-inner`]: {
              [`@apply w-${config.snackSM.imageAndImageInner.size} h-${config.snackSM.imageAndImageInner.size}`]:
                {},
            },
          },
          [`&.${prefix}snack-md`]: {
            [`@apply h-${config.snackMD.size}`]: {},

            [`.${prefix}snack-icon`]: {
              [`@apply w-${config.snackMD.icon.size} h-${config.snackMD.icon.size}`]:
                {},
            },
            [`.${prefix}snack-icon-inner`]: {
              [`@apply h-${config.snackMD.iconsInner.size} w-${config.snackMD.iconsInner.size}`]:
                {},
            },
            [`.${prefix}snack-image, .${prefix}snack-image-inner`]: {
              [`@apply w-${config.snackMD.imageAndImageInner.size} h-${config.snackMD.imageAndImageInner.size}`]:
                {},
            },
          },
          [`&.${prefix}snack-default`]: {
            [`@apply dark:bg-${config.default.bgDark} border-${config.default.border} dark:border-${config.default.borderDark} border bg-${config.default.bg}`]:
              {},
          },
          [`&.${prefix}snack-muted`]: {
            [`@apply bg-${config.muted.bg} dark:bg-${config.muted.bgDark}`]: {},
          },
          [`&:not(.${prefix}has-media)`]: {
            [`@apply ps-4`]: {},
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
