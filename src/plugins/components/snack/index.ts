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
        //Wrapper
        [`.${prefix}snack`]: {
          [`@apply inline-flex items-center gap-1 ${config.rounded} outline-transparent`]:
            {},

          [`.${prefix}snack-icon`]: {
            //Base
            [`@apply -ms-0.5 flex items-center justify-center ${config.icon.rounded}`]:
              {},
            //Background
            [`@apply bg-${config.icon.background.light} dark:bg-${config.icon.background.dark}`]:
              {},
            //Border
            [`@apply border border-${config.icon.border.light} dark:border-${config.icon.border.dark}`]:
              {},
          },
          //Snack:image
          [`.${prefix}snack-image`]: {
            [`@apply -ms-0.5 flex items-center justify-center ${config.image.rounded} shrink-0`]:
              {},
          },
          //Image:inner
          [`.${prefix}snack-image-inner`]: {
            [`@apply ${config.image.rounded}`]: {},
          },
          //Snack:text
          [`.${prefix}snack-text`]: {
            //Font
            [`@apply font-${config.font.family} text-${config.font.size}`]: {},
            //Color
            [`@apply text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
              {},
          },
          //Snack:button
          [`.${prefix}snack-button`]: {
            [`@apply hover:!bg-transparent`]: {},
          },
          //Size:sm
          [`&.${prefix}snack-sm`]: {
            //Size
            [`@apply h-${config.size.sm.size}`]: {},
            //Snack:icon
            [`.${prefix}snack-icon`]: {
              [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}snack-icon-inner`]: {
              [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
                {},
            },
            //Snack:image
            [`.${prefix}snack-image, .${prefix}snack-image-inner`]: {
              [`@apply w-${config.size.sm.image.outer.size} h-${config.size.sm.image.outer.size}`]:
                {},
            },
          },
          //Size:md
          [`&.${prefix}snack-md`]: {
            //Size
            [`@apply h-${config.size.md.size}`]: {},
            //Snack:icon
            [`.${prefix}snack-icon`]: {
              [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}snack-icon-inner`]: {
              [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
                {},
            },
            //Snack:image
            [`.${prefix}snack-image, .${prefix}snack-image-inner`]: {
              [`@apply w-${config.size.md.image.outer.size} h-${config.size.md.image.outer.size}`]:
                {},
            },
          },
          //Color:default
          [`&.${prefix}snack-default`]: {
            //Background
            [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
              {},
            //Border
            [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
              {},
          },
          [`&.${prefix}snack-muted`]: {
            //Background
            [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
              {},
          },
          //Snack:media
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
