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
        [`.${prefix}tag`]: {
          [`@apply inline-block px-${config.space} font-${config.font} transition-shadow duration-${config.duration}`]:
            {},

          [`&.${prefix}tag-sm`]: {
            [`@apply py-${config.tagSM.space} text-${config.tagSM.text}`]: {},
          },
          [`&.${prefix}tag-md`]: {
            [`@apply py-${config.tagMD.space} text-${config.tagMD.text}`]: {},
          },
          [`&.${prefix}tag-rounded`]: {
            [`@apply rounded`]: {},
          },
          [`&.${prefix}tag-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}tag-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
          [`&.${prefix}tag-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},
          },
          [`&.${prefix}tag-solid`]: {
            [`&.${prefix}tag-default`]: {
              [`@apply border-${config.solid.default.border} text-${config.solid.default.text} dark:bg-${config.solid.default.bgDark} dark:border-${config.solid.default.borderDark} dark:text-${config.solid.default.textDark} border bg-${config.solid.default.bg}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.default.shadow}`]: {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.default.shadowHover}`]: {},
              },
            },
            [`&.${prefix}tag-muted`]: {
              [`@apply text-${config.solid.muted.text} bg-${config.solid.muted.bg} dark:bg-${config.solid.muted.bgDark} dark:text-${config.solid.muted.textDark}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.muted.shadow}`]: {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.muted.shadowHover}`]: {},
              },
            },
            [`&.${prefix}tag-primary`]: {
              [`@apply bg-${config.solid.primary.bg} dark:bg-${config.solid.primary.bgDark} text-${config.solid.primary.text}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.primary.shadow.size} shadow-${config.solid.primary.shadow.color} dark:shadow-${config.solid.primary.shadow.colorDark}`]:
                  {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.primary.shadowHover.size} hover:shadow-${config.solid.primary.shadowHover.color} dark:hover:shadow-${config.solid.primary.shadowHover.colorDark}`]:
                  {},
              },
            },
            [`&.${prefix}tag-info`]: {
              [`@apply bg-${config.solid.info.bg} dark:bg-${config.solid.info.bgDark} text-${config.solid.info.text}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.info.shadow.size} shadow-${config.solid.info.shadow.color} dark:shadow-${config.solid.info.shadow.colorDark}`]:
                  {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.info.shadowHover.size} hover:shadow-${config.solid.info.shadowHover.color} dark:hover:shadow-${config.solid.info.shadowHover.colorDark}`]:
                  {},
              },
            },
            [`&.${prefix}tag-success`]: {
              [`@apply bg-${config.solid.success.bg} dark:bg-${config.solid.success.bgDark} text-${config.solid.success.text}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.success.shadow.size} shadow-${config.solid.success.shadow.color} dark:shadow-${config.solid.success.shadow.colorDark}`]:
                  {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.success.shadowHover.size} hover:shadow-${config.solid.success.shadowHover.color} dark:hover:shadow-${config.solid.success.shadowHover.colorDark}`]:
                  {},
              },
            },
            [`&.${prefix}tag-warning`]: {
              [`@apply bg-${config.solid.warning.bg} dark:bg-${config.solid.warning.bgDark} text-${config.solid.warning.text}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.warning.shadow.size} shadow-${config.solid.warning.shadow.color} dark:shadow-${config.solid.warning.shadow.colorDark}`]:
                  {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.warning.shadowHover.size} hover:shadow-${config.solid.warning.shadowHover.color} dark:hover:shadow-${config.solid.warning.shadowHover.colorDark}`]:
                  {},
              },
            },
            [`&.${prefix}tag-danger`]: {
              [`@apply bg-${config.solid.danger.bg} dark:bg-${config.solid.danger.bgDark} text-${config.solid.danger.text}`]:
                {},
              [`&.${prefix}tag-shadow`]: {
                [`@apply shadow-${config.solid.danger.shadow.size} shadow-${config.solid.danger.shadow.color} dark:shadow-${config.solid.danger.shadow.colorDark}`]:
                  {},
              },
              [`&.${prefix}tag-shadow-hover`]: {
                [`@apply hover:shadow-${config.solid.danger.shadowHover.size} hover:shadow-${config.solid.danger.shadowHover.color} dark:hover:shadow-${config.solid.danger.shadowHover.colorDark}`]:
                  {},
              },
            },
          },
          [`&.${prefix}tag-pastel`]: {
            [`&.${prefix}tag-primary`]: {
              [`@apply bg-${config.pastel.primary.bg} text-${config.pastel.primary.text} dark:bg-${config.pastel.primary.bgDark}`]:
                {},
            },
            [`&.${prefix}tag-info`]: {
              [`@apply bg-${config.pastel.info.bg} text-${config.pastel.info.text} dark:bg-${config.pastel.info.bgDark}`]:
                {},
            },
            [`&.${prefix}tag-success`]: {
              [`@apply bg-${config.pastel.success.bg} text-${config.pastel.success.text} dark:bg-${config.pastel.success.bgDark}`]:
                {},
            },
            [`&.${prefix}tag-warning`]: {
              [`@apply bg-${config.pastel.warning.bg} text-${config.pastel.warning.text} dark:bg-${config.pastel.warning.bgDark}`]:
                {},
            },
            [`&.${prefix}tag-danger`]: {
              [`@apply bg-${config.pastel.danger.bg} text-${config.pastel.danger.text} dark:bg-${config.pastel.danger.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}tag-outline`]: {
            [`&.${prefix}tag-primary`]: {
              [`@apply text-${config.outline.primary.text} border-${config.outline.primary.border} border`]:
                {},
            },
            [`&.${prefix}tag-info`]: {
              [`@apply text-${config.outline.info.text} border-${config.outline.info.border} border`]:
                {},
            },
            [`&.${prefix}tag-success`]: {
              [`@apply text-${config.outline.success.text} border-${config.outline.success.border} border`]:
                {},
            },
            [`&.${prefix}tag-warning`]: {
              [`@apply text-${config.outline.warning.text} border-${config.outline.warning.border} border`]:
                {},
            },
            [`&.${prefix}tag-danger`]: {
              [`@apply text-${config.outline.danger.text} border-${config.outline.danger.border} border`]:
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
