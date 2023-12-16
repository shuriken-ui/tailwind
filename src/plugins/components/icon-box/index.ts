import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type IconBoxConfig, defaultConfig, key } from './icon-box.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies IconBoxConfig

      addComponents({
        //Wrapper
        [`.${prefix}icon-box`]: {
          [`@apply relative inline-flex shrink-0 items-center justify-center`]:
            {},
          //Size:xs
          [`&.${prefix}box-xs`]: {
            [`@apply h-${config.size.xs.size} w-${config.size.xs.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.xs.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.xs.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.xs.rounded.lg}`]: {},
            },
          },
          //Size:sm
          [`&.${prefix}box-sm`]: {
            [`@apply h-${config.size.sm.size} w-${config.size.sm.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.sm.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.sm.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.sm.rounded.lg}`]: {},
            },
          },
          //Size:md
          [`&.${prefix}box-md`]: {
            [`@apply h-${config.size.md.size} w-${config.size.md.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.md.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.md.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.md.rounded.lg}`]: {},
            },
          },
          //Size:lg
          [`&.${prefix}box-lg`]: {
            [`@apply h-${config.size.lg.size} w-${config.size.lg.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.lg.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.lg.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.lg.rounded.lg}`]: {},
            },
          },
          //Size:xl
          [`&.${prefix}box-xl`]: {
            [`@apply h-${config.size.xl.size} w-${config.size.xl.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.xl.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.xl.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.xl.rounded.lg}`]: {},
            },
          },
          //Size:xxl
          [`&.${prefix}box-2xl`]: {
            [`@apply h-${config.size.xxl.size} w-${config.size.xxl.size}`]: {},
            //Rounded:sm
            [`&.${prefix}box-rounded`]: {
              [`@apply ${config.size.xxl.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}box-smooth`]: {
              [`@apply ${config.size.xxl.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}box-curved`]: {
              [`@apply ${config.size.xxl.rounded.lg}`]: {},
            },
          },
          //Rounded:full
          [`&.${prefix}box-full`]: {
            [`@apply rounded-full`]: {},
          },
          //Color:default
          [`&.${prefix}box-default`]: {
            //Font
            [`@apply text-${config.color.variant.solid.default.font.color.light} dark:text-${config.color.variant.solid.default.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.variant.solid.default.background.light} dark:bg-${config.color.variant.solid.default.background.dark}`]:
              {},
          },
          //Variant:solid
          [`&.${prefix}box-solid`]: {
            //Color:invert
            [`&.${prefix}box-invert`]: {
              //Font
              [`@apply text-${config.color.variant.solid.invert.font.color.light} dark:text-${config.color.variant.solid.invert.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.invert.background.light} dark:bg-${config.color.variant.solid.invert.background.dark}`]:
                {},
            },
            //Color:primary
            [`&.${prefix}box-primary`]: {
              //Font
              [`@apply text-${config.color.variant.solid.primary.font.color.light} dark:text-${config.color.variant.solid.primary.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.primary.background.light} dark:bg-${config.color.variant.solid.primary.background.dark}`]:
                {},
            },
            //Color:info
            [`&.${prefix}box-info`]: {
              //Font
              [`@apply text-${config.color.variant.solid.info.font.color.light} dark:text-${config.color.variant.solid.info.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.info.background.light} dark:bg-${config.color.variant.solid.info.background.dark}`]:
                {},
            },
            //Color:success
            [`&.${prefix}box-success`]: {
              //Font
              [`@apply text-${config.color.variant.solid.success.font.color.light} dark:text-${config.color.variant.solid.success.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.success.background.light} dark:bg-${config.color.variant.solid.success.background.dark}`]:
                {},
            },
            //Color:warning
            [`&.${prefix}box-warning`]: {
              //Font
              [`@apply text-${config.color.variant.solid.warning.font.color.light} dark:text-${config.color.variant.solid.warning.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.warning.background.light} dark:bg-${config.color.variant.solid.warning.background.dark}`]:
                {},
            },
            //Color:danger
            [`&.${prefix}box-danger`]: {
              //Font
              [`@apply text-${config.color.variant.solid.danger.font.color.light} dark:text-${config.color.variant.solid.danger.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.solid.danger.background.light} dark:bg-${config.color.variant.solid.danger.background.dark}`]:
                {},
            },
          },
          //Variant:pastel
          [`&.${prefix}box-pastel`]: {
            //Color:invert
            [`&.${prefix}box-invert`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.invert.font.color.light} dark:text-${config.color.variant.pastel.invert.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.invert.background.light} dark:bg-${config.color.variant.pastel.invert.background.dark}`]:
                {},
            },
            //Color:primary
            [`&.${prefix}box-primary`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.primary.font.color.light} dark:text-${config.color.variant.pastel.primary.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.primary.background.light} dark:bg-${config.color.variant.pastel.primary.background.dark}`]:
                {},
            },
            //Color:info
            [`&.${prefix}box-info`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.info.font.color.light} dark:text-${config.color.variant.pastel.info.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.info.background.light} dark:bg-${config.color.variant.pastel.info.background.dark}`]:
                {},
            },
            //Color:success
            [`&.${prefix}box-success`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.success.font.color.light} dark:text-${config.color.variant.pastel.success.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.success.background.light} dark:bg-${config.color.variant.pastel.success.background.dark}`]:
                {},
            },
            //Color:warning
            [`&.${prefix}box-warning`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.warning.font.color.light} dark:text-${config.color.variant.pastel.warning.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.warning.background.light} dark:bg-${config.color.variant.pastel.warning.background.dark}`]:
                {},
            },
            //Color:danger
            [`&.${prefix}box-danger`]: {
              //Font
              [`@apply text-${config.color.variant.pastel.danger.font.color.light} dark:text-${config.color.variant.pastel.danger.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.pastel.danger.background.light} dark:bg-${config.color.variant.pastel.danger.background.dark}`]:
                {},
            },
          },
          //Variant:outline
          [`&.${prefix}box-outline`]: {
            //Color:invert
            [`&.${prefix}box-invert`]: {
              //Font
              [`@apply text-${config.color.variant.outline.invert.font.color.light} dark:text-${config.color.variant.outline.invert.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.invert.background.light}  bg-${config.color.variant.outline.invert.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.invert.border.light} dark:border-${config.color.variant.outline.invert.border.dark}`]:
                {},
            },
            //Color:primary
            [`&.${prefix}box-primary`]: {
              //Font
              [`@apply text-${config.color.variant.outline.primary.font.color.light} dark:text-${config.color.variant.outline.primary.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.primary.background.light}  bg-${config.color.variant.outline.primary.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.primary.border.light} dark:border-${config.color.variant.outline.primary.border.dark}`]:
                {},
            },
            //Color:info
            [`&.${prefix}box-info`]: {
              //Font
              [`@apply text-${config.color.variant.outline.info.font.color.light} dark:text-${config.color.variant.outline.info.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.info.background.light}  bg-${config.color.variant.outline.info.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.info.border.light} dark:border-${config.color.variant.outline.info.border.dark}`]:
                {},
            },
            //Color:success
            [`&.${prefix}box-success`]: {
              //Font
              [`@apply text-${config.color.variant.outline.success.font.color.light} dark:text-${config.color.variant.outline.success.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.success.background.light}  bg-${config.color.variant.outline.success.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.success.border.light} dark:border-${config.color.variant.outline.success.border.dark}`]:
                {},
            },
            //Color:warning
            [`&.${prefix}box-warning`]: {
              //Font
              [`@apply text-${config.color.variant.outline.warning.font.color.light} dark:text-${config.color.variant.outline.warning.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.warning.background.light}  bg-${config.color.variant.outline.warning.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.warning.border.light} dark:border-${config.color.variant.outline.warning.border.dark}`]:
                {},
            },
            //Color:danger
            [`&.${prefix}box-danger`]: {
              //Font
              [`@apply text-${config.color.variant.outline.danger.font.color.light} dark:text-${config.color.variant.outline.danger.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.variant.outline.danger.background.light}  bg-${config.color.variant.outline.danger.background.dark}`]:
                {},
              //Border
              [`@apply border-2 border-${config.color.variant.outline.danger.border.light} dark:border-${config.color.variant.outline.danger.border.dark}`]:
                {},
            },
          },
          //Bordered option
          [`&.${prefix}box-bordered`]: {
            [`@apply border-${config.bordered.border.size} border-${config.bordered.border.color}`]:
              {},
          },
          //Masks
          [`&.${prefix}box-mask:not(.${prefix}box-rounded):not(.${prefix}box-curved):not(.${prefix}box-full):not(.${prefix}box-outline):not(.${prefix}box-bordered)`]:
            {
              [`@apply ${prefix}mask`]: {},
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
