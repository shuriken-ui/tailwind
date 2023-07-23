import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultIconBoxConfig = {
  boxXS: {
    size: '8',
    rounded: {
      default: 'lg',
      curved: 'xl',
    },
  },
  boxSM: {
    size: '10',
    rounded: {
      default: 'lg',
      curved: 'xl',
    },
  },
  boxMD: {
    size: '12',
    rounded: {
      default: 'xl',
      curved: '2xl',
    },
  },
  boxLG: {
    size: '16',
    rounded: {
      default: 'xl',
      curved: '2xl',
    },
  },
  boxXL: {
    size: '20',
    rounded: {
      default: '2xl',
      curved: '3xl',
    },
  },
  box2XL: {
    size: '24',
    rounded: {
      default: '2xl',
      curved: '3xl',
    },
  },
  boxFull: {
    rounded: 'full',
  },
  boxDefault: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    text: 'muted-600',
    textDark: 'muted-200',
  },
  boxSolid: {
    invert: {
      text: 'muted-800',
      textDark: 'muted-100',
      bg: 'white',
      bgDark: 'muted-950',
    },
    primary: {
      bg: 'primary-500',
      text: 'white',
    },
    info: {
      bg: 'info-500',
      text: 'white',
    },
    success: {
      bg: 'success-500',
      text: 'white',
    },
    warning: {
      bg: 'warning-500',
      text: 'white',
    },
    danger: {
      bg: 'danger-500',
      text: 'white',
    },
  },
  boxPastel: {
    invert: {
      text: 'muted-800',
      bg: 'white/10',
    },
    primary: {
      bg: 'primary-500/10',
      text: 'primary-500',
    },
    info: {
      bg: 'info-500/10',
      text: 'info-500',
    },
    success: {
      bg: 'success-500/10',
      text: 'success-500',
    },
    warning: {
      bg: 'warning-500/10',
      text: 'warning-500',
    },
    danger: {
      bg: 'danger-500/10',
      text: 'danger-500',
    },
  },
  boxOutline: {
    invert: {
      text: 'muted-800',
      border: 'current',
    },
    primary: {
      border: 'current',
      text: 'primary-500',
    },
    info: {
      border: 'current',
      text: 'info-500',
    },
    success: {
      border: 'current',
      text: 'success-500',
    },
    warning: {
      border: 'current',
      text: 'warning-500',
    },
    danger: {
      border: 'current',
      text: 'danger-500',
    },
  },
  boxBordered: {
    borderSize: '2',
    borderColor: 'current',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.iconBox'
      ) satisfies typeof defaultIconBoxConfig

      addComponents({
        [`.${prefix}-icon-box`]: {
          [`@apply relative inline-flex shrink-0 items-center justify-center`]:
            {},

          [`&.${prefix}-box-xs`]: {
            [`@apply h-${config.boxXS.size} w-${config.boxXS.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.boxXS.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.boxXS.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-sm`]: {
            [`@apply h-${config.boxSM.size} w-${config.boxSM.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.boxSM.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.boxSM.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-md`]: {
            [`@apply h-${config.boxMD.size} w-${config.boxMD.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.boxMD.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.boxMD.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-lg`]: {
            [`@apply h-${config.boxLG.size} w-${config.boxLG.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.boxLG.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.boxLG.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-xl`]: {
            [`@apply h-${config.boxXL.size} w-${config.boxXL.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.boxXL.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.boxXL.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-2xl`]: {
            [`@apply h-${config.box2XL.size} w-${config.box2XL.size}`]: {},

            [`&.${prefix}-box-rounded`]: {
              [`@apply rounded-${config.box2XL.rounded.default}`]: {},
            },
            [`&.${prefix}-box-curved`]: {
              [`@apply rounded-${config.box2XL.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-box-full`]: {
            [`@apply rounded-${config.boxFull.rounded}`]: {},
          },
          [`&.${prefix}-box-default`]: {
            [`@apply bg-${config.boxDefault.bg} dark:bg-${config.boxDefault.bgDark} text-${config.boxDefault.text} dark:text-${config.boxDefault.textDark}`]:
              {},
          },
          [`&.${prefix}-box-solid`]: {
            [`&.${prefix}-box-invert`]: {
              [`@apply text-${config.boxSolid.invert.text} bg-${config.boxSolid.invert.bg} dark:bg-${config.boxSolid.invert.bgDark} dark:text-${config.boxSolid.invert.textDark}`]:
                {},
            },
            [`&.${prefix}-box-primary`]: {
              [`@apply bg-${config.boxSolid.primary.bg} text-${config.boxSolid.primary.text}`]:
                {},
            },
            [`&.${prefix}-box-info`]: {
              [`@apply bg-${config.boxSolid.info.bg} text-${config.boxSolid.info.text}`]:
                {},
            },
            [`&.${prefix}-box-success`]: {
              [`@apply bg-${config.boxSolid.success.bg} text-${config.boxSolid.success.text}`]:
                {},
            },
            [`&.${prefix}-box-warning`]: {
              [`@apply bg-${config.boxSolid.warning.bg} text-${config.boxSolid.warning.text}`]:
                {},
            },
            [`&.${prefix}-box-danger`]: {
              [`@apply bg-${config.boxSolid.danger.bg} text-${config.boxSolid.danger.text}`]:
                {},
            },
          },
          [`&.${prefix}-box-pastel`]: {
            [`&.${prefix}-box-invert`]: {
              [`@apply text-${config.boxPastel.invert.text} bg-${config.boxPastel.invert.bg}`]:
                {},
            },
            [`&.${prefix}-box-primary`]: {
              [`@apply bg-${config.boxPastel.primary.bg} text-${config.boxPastel.primary.text}`]:
                {},
            },
            [`&.${prefix}-box-info`]: {
              [`@apply bg-${config.boxPastel.info.bg} text-${config.boxPastel.info.text}`]:
                {},
            },
            [`&.${prefix}-box-success`]: {
              [`@apply bg-${config.boxPastel.success.bg} text-${config.boxPastel.success.text}`]:
                {},
            },
            [`&.${prefix}-box-warning`]: {
              [`@apply bg-${config.boxPastel.warning.bg} text-${config.boxPastel.warning.text}`]:
                {},
            },
            [`&.${prefix}-box-danger`]: {
              [`@apply bg-${config.boxPastel.danger.bg} text-${config.boxPastel.danger.text}`]:
                {},
            },
          },
          [`&.${prefix}-box-outline`]: {
            [`&.${prefix}-box-invert`]: {
              [`@apply border-2 border-${config.boxOutline.invert.border} text-${config.boxOutline.invert.text}`]:
                {},
            },
            [`&.${prefix}-box-primary`]: {
              [`@apply border-2 border-${config.boxOutline.primary.border} text-${config.boxOutline.primary.text}`]:
                {},
            },
            [`&.${prefix}-box-info`]: {
              [`@apply border-2 border-${config.boxOutline.info.border} text-${config.boxOutline.info.text}`]:
                {},
            },
            [`&.${prefix}-box-success`]: {
              [`@apply border-2 border-${config.boxOutline.success.border} text-${config.boxOutline.success.text}`]:
                {},
            },
            [`&.${prefix}-box-warning`]: {
              [`@apply border-2 border-${config.boxOutline.warning.border} text-${config.boxOutline.warning.text}`]:
                {},
            },
            [`&.${prefix}-box-danger`]: {
              [`@apply border-2 border-${config.boxOutline.danger.border} text-${config.boxOutline.danger.text}`]:
                {},
            },
          },
          [`&.${prefix}-box-bordered`]: {
            [`@apply border-${config.boxBordered.borderSize} border-${config.boxBordered.borderColor}`]:
              {},
          },

          [`&.${prefix}-box-mask:not(.${prefix}-box-rounded):not(.${prefix}-box-curved):not(.${prefix}-box-full):not(.${prefix}-box-outline):not(.${prefix}-box-bordered)`]:
            {
              [`@apply ${prefix}-mask`]: {},
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          iconBox: defaultIconBoxConfig,
        },
      },
    }
  }
)
