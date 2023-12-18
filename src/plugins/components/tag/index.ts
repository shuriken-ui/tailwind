import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type TagConfig, defaultConfig, key } from './tag.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies TagConfig

      addComponents({
        //Wrapper
        [`.${prefix}tag`]: {
          [`@apply inline-block px-${config.padding.x} font-${config.font.family} transition-${config.transition.property} duration-${config.transition.duration}`]:
            {},
          //Size:sm
          [`&.${prefix}tag-sm`]: {
            //Padding
            [`@apply py-${config.size.sm.padding.y}`]: {},
            //Size
            [`@apply text-${config.size.sm.font.size}`]: {},
          },
          //Size:md
          [`&.${prefix}tag-md`]: {
            //Padding
            [`@apply py-${config.size.md.padding.y}`]: {},
            //Size
            [`@apply text-${config.size.md.font.size}`]: {},
          },
          //Rounded:sm
          [`&.${prefix}tag-rounded`]: {
            [`@apply ${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}tag-smooth`]: {
            [`@apply ${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}tag-curved`]: {
            [`@apply ${config.rounded.lg}`]: {},
          },
          //Rounded:full
          [`&.${prefix}tag-full`]: {
            [`@apply ${config.rounded.full}`]: {},
          },
          //Variant:solid
          [`&.${prefix}tag-solid`]: {
            //Color:default
            [`&.${prefix}tag-default`]: {
              //Color
              [`@apply text-${config.variant.solid.default.font.color.light} dark:text-${config.variant.solid.default.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.default.background.light} dark:bg-${config.variant.solid.default.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
            },
            //Color:muted
            [`&.${prefix}tag-muted`]: {
              //Color
              [`@apply text-${config.variant.solid.muted.font.color.light} dark:text-${config.variant.solid.muted.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.muted.background.light} dark:bg-${config.variant.solid.muted.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.muted.shadow.size}`]: {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.muted.shadow.size}`]:
                  {},
              },
            },
            //Color:primary
            [`&.${prefix}tag-primary`]: {
              //Color
              [`@apply text-${config.variant.solid.primary.font.color.light} dark:text-${config.variant.solid.primary.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.primary.background.light} dark:bg-${config.variant.solid.primary.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.primary.shadow.size} shadow-${config.variant.solid.primary.shadow.light} shadow-${config.variant.solid.primary.shadow.dark}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.primary.shadow.size} hover:shadow-${config.variant.solid.primary.shadow.light} hover:shadow-${config.variant.solid.primary.shadow.dark}`]:
                  {},
              },
            },
            //Color:info
            [`&.${prefix}tag-info`]: {
              //Color
              [`@apply text-${config.variant.solid.info.font.color.light} dark:text-${config.variant.solid.info.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.info.background.light} dark:bg-${config.variant.solid.info.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.info.shadow.size} shadow-${config.variant.solid.info.shadow.light} shadow-${config.variant.solid.info.shadow.dark}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.info.shadow.size} hover:shadow-${config.variant.solid.info.shadow.light} hover:shadow-${config.variant.solid.info.shadow.dark}`]:
                  {},
              },
            },
            //Color:success
            [`&.${prefix}tag-success`]: {
              //Color
              [`@apply text-${config.variant.solid.success.font.color.light} dark:text-${config.variant.solid.success.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.success.background.light} dark:bg-${config.variant.solid.success.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.success.shadow.size} shadow-${config.variant.solid.success.shadow.light} shadow-${config.variant.solid.success.shadow.dark}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.success.shadow.size} hover:shadow-${config.variant.solid.success.shadow.light} hover:shadow-${config.variant.solid.success.shadow.dark}`]:
                  {},
              },
            },
            //Color:warning
            [`&.${prefix}tag-warning`]: {
              //Color
              [`@apply text-${config.variant.solid.warning.font.color.light} dark:text-${config.variant.solid.warning.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.warning.background.light} dark:bg-${config.variant.solid.warning.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.warning.shadow.size} shadow-${config.variant.solid.warning.shadow.light} shadow-${config.variant.solid.warning.shadow.dark}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.warning.shadow.size} hover:shadow-${config.variant.solid.warning.shadow.light} hover:shadow-${config.variant.solid.warning.shadow.dark}`]:
                  {},
              },
            },
            //Color:danger
            [`&.${prefix}tag-danger`]: {
              //Color
              [`@apply text-${config.variant.solid.danger.font.color.light} dark:text-${config.variant.solid.danger.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.danger.background.light} dark:bg-${config.variant.solid.danger.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.danger.shadow.size} shadow-${config.variant.solid.danger.shadow.light} shadow-${config.variant.solid.danger.shadow.dark}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.danger.shadow.size} hover:shadow-${config.variant.solid.danger.shadow.light} hover:shadow-${config.variant.solid.danger.shadow.dark}`]:
                  {},
              },
            },
          },
          //Variant:pastel
          [`&.${prefix}tag-pastel`]: {
            //Color:default
            [`&.${prefix}tag-default`]: {
              //Color
              [`@apply text-${config.variant.solid.default.font.color.light} dark:text-${config.variant.solid.default.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.default.background.light} dark:bg-${config.variant.solid.default.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
            },
            //Color:muted
            [`&.${prefix}tag-muted`]: {
              //Color
              [`@apply text-${config.variant.solid.muted.font.color.light} dark:text-${config.variant.solid.muted.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.solid.muted.background.light} dark:bg-${config.variant.solid.muted.background.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.muted.shadow.size}`]: {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.muted.shadow.size}`]:
                  {},
              },
            },
            //Color:primary
            [`&.${prefix}tag-primary`]: {
              //Color
              [`@apply text-${config.variant.pastel.primary.font.color.light} dark:text-${config.variant.pastel.primary.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.pastel.primary.background.light} dark:bg-${config.variant.pastel.primary.background.dark}`]:
                {},
            },
            //Color:info
            [`&.${prefix}tag-info`]: {
              //Color
              [`@apply text-${config.variant.pastel.info.font.color.light} dark:text-${config.variant.pastel.info.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.pastel.info.background.light} dark:bg-${config.variant.pastel.info.background.dark}`]:
                {},
            },
            //Color:success
            [`&.${prefix}tag-success`]: {
              //Color
              [`@apply text-${config.variant.pastel.success.font.color.light} dark:text-${config.variant.pastel.success.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.pastel.success.background.light} dark:bg-${config.variant.pastel.success.background.dark}`]:
                {},
            },
            //Color:warning
            [`&.${prefix}tag-warning`]: {
              //Color
              [`@apply text-${config.variant.pastel.warning.font.color.light} dark:text-${config.variant.pastel.warning.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.pastel.warning.background.light} dark:bg-${config.variant.pastel.warning.background.dark}`]:
                {},
            },
            //Color:danger
            [`&.${prefix}tag-danger`]: {
              //Color
              [`@apply text-${config.variant.pastel.danger.font.color.light} dark:text-${config.variant.pastel.danger.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.pastel.danger.background.light} dark:bg-${config.variant.pastel.danger.background.dark}`]:
                {},
            },
          },
          //Variant:outline
          [`&.${prefix}tag-outline`]: {
            //Color:default
            [`&.${prefix}tag-default`]: {
              //Color
              [`@apply text-${config.variant.solid.default.font.color.light} dark:text-${config.variant.solid.default.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.default.shadow.size}`]:
                  {},
              },
            },
            //Color:muted
            [`&.${prefix}tag-muted`]: {
              //Color
              [`@apply text-${config.variant.solid.muted.font.color.light} dark:text-${config.variant.solid.muted.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
                {},
              //Shadow:static
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.variant.solid.muted.shadow.size}`]: {},
              },
              //Shadow:hover
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.variant.solid.muted.shadow.size}`]:
                  {},
              },
            },
            //Color:primary
            [`&.${prefix}tag-primary`]: {
              //Color
              [`@apply text-${config.variant.outline.primary.font.color.light} dark:text-${config.variant.outline.primary.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.outline.primary.border.light} dark:border-${config.variant.outline.primary.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.outline.primary.background.light} dark:bg-${config.variant.outline.primary.background.dark}`]:
                {},
            },
            //Color:info
            [`&.${prefix}tag-info`]: {
              //Color
              [`@apply text-${config.variant.outline.info.font.color.light} dark:text-${config.variant.outline.info.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.outline.info.border.light} dark:border-${config.variant.outline.info.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.outline.info.background.light} dark:bg-${config.variant.outline.info.background.dark}`]:
                {},
            },
            //Color:success
            [`&.${prefix}tag-success`]: {
              //Color
              [`@apply text-${config.variant.outline.success.font.color.light} dark:text-${config.variant.outline.success.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.outline.success.border.light} dark:border-${config.variant.outline.success.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.outline.success.background.light} dark:bg-${config.variant.outline.success.background.dark}`]:
                {},
            },
            //Color:warning
            [`&.${prefix}tag-warning`]: {
              //Color
              [`@apply text-${config.variant.outline.warning.font.color.light} dark:text-${config.variant.outline.warning.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.outline.warning.border.light} dark:border-${config.variant.outline.warning.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.outline.warning.background.light} dark:bg-${config.variant.outline.warning.background.dark}`]:
                {},
            },
            //Color:danger
            [`&.${prefix}tag-danger`]: {
              //Color
              [`@apply text-${config.variant.outline.danger.font.color.light} dark:text-${config.variant.outline.danger.font.color.dark}`]:
                {},
              //Border
              [`@apply border border-${config.variant.outline.danger.border.light} dark:border-${config.variant.outline.danger.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.variant.outline.danger.background.light} dark:bg-${config.variant.outline.danger.background.dark}`]:
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
