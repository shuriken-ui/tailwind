import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultTagConfig = {
  space: '3',
  font: 'sans',
  duration: '300',
  tagSM: {
    space: '1',
    text: '[0.65rem]',
  },
  tagMD: {
    space: '1.5',
    text: 'xs',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  solid: {
    default: {
      text: 'muted-600',
      textDark: 'muted-300',
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      shadow: 'xl',
      shadowHover: 'xl',
    },
    muted: {
      text: 'muted-500',
      textDark: 'muted-200',
      bg: 'muted-100',
      bgDark: 'muted-800',
      shadow: 'xl',
      shadowHover: 'xl',
    },
    primary: {
      text: 'white',
      bg: 'primary-500',
      bgDark: 'primary-500',
      shadow: {
        size: 'xl',
        color: 'primary-500/30',
        colorDark: 'primary-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'primary-500/30',
        colorDark: 'primary-500/20',
      },
    },
    info: {
      text: 'white',
      bg: 'info-500',
      bgDark: 'info-500',
      shadow: {
        size: 'xl',
        color: 'info-500/30',
        colorDark: 'info-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'info-500/30',
        colorDark: 'info-500/20',
      },
    },
    success: {
      text: 'white',
      bg: 'success-500',
      bgDark: 'success-500',
      shadow: {
        size: 'xl',
        color: 'success-500/30',
        colorDark: 'success-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'success-500/30',
        colorDark: 'success-500/20',
      },
    },
    warning: {
      text: 'white',
      bg: 'warning-500',
      bgDark: 'warning-500',
      shadow: {
        size: 'xl',
        color: 'warning-500/30',
        colorDark: 'warning-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'warning-500/30',
        colorDark: 'warning-500/20',
      },
    },
    danger: {
      text: 'white',
      bg: 'danger-500',
      bgDark: 'danger-500',
      shadow: {
        size: 'xl',
        color: 'danger-500/30',
        colorDark: 'danger-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'danger-500/30',
        colorDark: 'danger-500/20',
      },
    },
  },
  pastel: {
    primary: {
      bg: 'primary-500/20',
      text: 'primary-500',
      bgDark: 'primary-500/10',
    },
    info: {
      bg: 'info-500/20',
      text: 'info-500',
      bgDark: 'info-500/10',
    },
    success: {
      bg: 'success-500/20',
      text: 'success-500',
      bgDark: 'success-500/10',
    },
    warning: {
      bg: 'warning-500/20',
      text: 'warning-500',
      bgDark: 'warning-500/10',
    },
    danger: {
      bg: 'danger-500/20',
      text: 'danger-500',
      bgDark: 'danger-500/10',
    },
  },
  outline: {
    primary: {
      border: 'primary-500',
      text: 'primary-500',
    },
    info: {
      border: 'info-500',
      text: 'info-500',
    },
    success: {
      border: 'success-500',
      text: 'success-500',
    },
    warning: {
      border: 'warning-500',
      text: 'warning-500',
    },
    danger: {
      border: 'danger-500',
      text: 'danger-500',
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.tag') satisfies typeof defaultTagConfig

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
          tag: defaultTagConfig,
        },
      },
    }
  }
)
