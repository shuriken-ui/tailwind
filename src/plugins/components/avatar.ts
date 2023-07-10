import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultAvatarConfig = {
  avatarInner: {
    size: 'full',
    duration: '300',
  },
  avatarBadge: {
    rounded: 'full',
    bg: 'white',
    bgDark: 'muted-800',
    img: {
      size: 'full',
      rounded: 'full',
    },
  },
  avatarImg: {
    maxSize: 'full',
    shadow: 'sm',
    borderDark: 'transparent',
  },
  avatarText: {
    font: 'sans',
    fontSize: 'medium',
  },
  avatarDot: {
    border: 'white',
    borderDark: 'muted-800',
    rounded: 'full',
    primary: 'primary-500',
    info: 'info-500',
    success: 'success-500',
    warning: 'warning-500',
    danger: 'danger-500',
    yellow: 'yellow-500',
    pink: 'pink-500',
    indigo: 'indigo-500',
  },
  avatarRing: {
    ring: '2',
    ringOffsetSize: '2',
    ringOffsetColor: 'white',
    ringOffsetColorDark: 'muted-800',
    primary: 'primary-500',
    info: 'info-500',
    success: 'success-500',
    warning: 'warning-500',
    danger: 'danger-500',
    yellow: 'yellow-500',
    pink: 'pink-500',
    indigo: 'indigo-500',
  },
  avatarXXS: {
    size: '6',
    badge: {
      size: '3',
      position: '1',
    },
    dot: {
      size: '1.5',
    },
    text: 'xs',
    roundedOrInnerDotPosition: '0',
    curvedOrInner: {
      rounded: 'md',
      dotPosition: '0',
    },
    fullDotPosition: '0',
  },
  avatarXS: {
    size: '8',
    badge: {
      size: '4',
      position: '1',
    },
    dot: {
      size: '2',
    },
    text: 'sm',
    roundedOrInnerDotPosition: '0',
    curvedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    fullDotPosition: '0',
  },
  avatarSM: {
    size: '10',
    badge: {
      size: '5',
      position: '1',
    },
    dot: {
      size: '2',
    },
    text: 'sm',
    roundedOrInner: {
      rounded: 'md',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    fullDotPosition: '0.5',
  },
  avatarMD: {
    size: '12',
    badge: {
      size: '5',
      position: '1',
    },
    dot: {
      size: '3',
    },
    text: 'sm',
    roundedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '2xl',
      dotPosition: '0',
    },
    fullDotPosition: '0.5',
  },
  avatarLG: {
    size: '16',
    badge: {
      size: '6',
      position: '1',
    },
    dot: {
      size: '3',
    },
    text: 'sm',
    roundedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '2xl',
      dotPosition: '0',
    },
    fullDotPosition: '1',
  },
  avatarXL: {
    size: '20',
    badge: {
      size: '8',
      position: '1',
    },
    dot: {
      size: '4',
    },
    text: 'base',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '1',
  },
  avatar2XL: {
    size: '24',
    badge: {
      size: '10',
      position: '1.5',
    },
    dot: {
      size: '4',
    },
    text: 'xl',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '1.5',
  },
  avatar3XL: {
    size: '28',
    badge: {
      size: '10',
      position: '1.5',
    },
    dot: {
      size: '4',
    },
    text: '2xl',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '2',
  },
  avatar4XL: {
    size: '32',
    badge: {
      size: '12',
      position: '2',
    },
    dot: {
      size: '4',
    },
    text: '3xl',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '2.5',
  },
  avatarFull: {
    rounded: 'full',
    avatarInnerRounded: 'full',
    avatarBadgePosition: '0',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.avatar'
      ) satisfies typeof defaultAvatarConfig

      addComponents({
        [`.${prefix}-avatar`]: {
          [`@apply relative inline-flex shrink-0 items-center justify-center outline-none`]:
            {},

          [`.${prefix}-avatar-inner`]: {
            [`@apply flex h-${config.avatarInner.size} w-${config.avatarInner.size} items-center justify-center overflow-hidden text-center transition-all duration-${config.avatarInner.duration}`]:
              {},
          },
          [`.${prefix}-avatar-badge`]: {
            [`@apply dark:bg-${config.avatarBadge.bgDark} absolute z-10 block overflow-hidden rounded-${config.avatarBadge.rounded} bg-${config.avatarBadge.bg}`]:
              {},

            [`.badge-img`]: {
              [`@apply relative h-${config.avatarBadge.img.size} w-${config.avatarBadge.img.size} scale-90 rounded-${config.avatarBadge.img.rounded} object-cover`]:
                {},
            },
          },
          [`.${prefix}-avatar-img`]: {
            [`@apply max-h-${config.avatarImg.maxSize} max-w-${config.avatarImg.maxSize} object-cover shadow-${config.avatarImg.shadow} dark:border-${config.avatarImg.borderDark}`]:
              {},
          },
          [`.${prefix}-avatar-text`]: {
            [`@apply font-${config.avatarText.font} text-center font-${config.avatarText.fontSize} uppercase`]:
              {},
          },
          [`.${prefix}-avatar-dot`]: {
            [`@apply dark:border-${config.avatarDot.borderDark} absolute block rounded-${config.avatarDot.rounded} border border-${config.avatarDot.border}`]:
              {},
            [`&.${prefix}-dot-primary`]: {
              [`@apply bg-${config.avatarDot.primary}`]: {},
            },
            [`&.${prefix}-dot-info`]: {
              [`@apply bg-${config.avatarDot.info}`]: {},
            },
            [`&.${prefix}-dot-success`]: {
              [`@apply bg-${config.avatarDot.success}`]: {},
            },
            [`&.${prefix}-dot-warning`]: {
              [`@apply bg-${config.avatarDot.warning}`]: {},
            },
            [`&.${prefix}-dot-danger`]: {
              [`@apply bg-${config.avatarDot.danger}`]: {},
            },
            [`&.${prefix}-dot-yellow`]: {
              [`@apply bg-${config.avatarDot.yellow}`]: {},
            },
            [`&.${prefix}-dot-pink`]: {
              [`@apply bg-${config.avatarDot.pink}`]: {},
            },
            [`&.${prefix}-dot-indigo`]: {
              [`@apply bg-${config.avatarDot.indigo}`]: {},
            },
          },
          [`&.${prefix}-avatar-ring`]: {
            [`&.${prefix}-avatar-full`]: {
              [`@apply ring-${config.avatarRing.ring} ring-offset-${config.avatarRing.ringOffsetSize} ring-offset-${config.avatarRing.ringOffsetColor} dark:ring-offset-${config.avatarRing.ringOffsetColorDark}`]:
                {},
            },
            [`&.${prefix}-ring-primary`]: {
              [`@apply bg-${config.avatarRing.primary}`]: {},
            },
            [`&.${prefix}-ring-info`]: {
              [`@apply bg-${config.avatarRing.info}`]: {},
            },
            [`&.${prefix}-ring-success`]: {
              [`@apply bg-${config.avatarRing.success}`]: {},
            },
            [`&.${prefix}-ring-warning`]: {
              [`@apply bg-${config.avatarRing.warning}`]: {},
            },
            [`&.${prefix}-ring-danger`]: {
              [`@apply bg-${config.avatarRing.danger}`]: {},
            },
            [`&.${prefix}-ring-yellow`]: {
              [`@apply bg-${config.avatarRing.yellow}`]: {},
            },
            [`&.${prefix}-ring-pink`]: {
              [`@apply bg-${config.avatarRing.pink}`]: {},
            },
            [`&.${prefix}-ring-indigo`]: {
              [`@apply bg-${config.avatarRing.indigo}`]: {},
            },
          },
          [`&.${prefix}-avatar-xxs`]: {
            [`@apply h-${config.avatarXXS.size} w-${config.avatarXXS.size}`]:
              {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarXXS.badge.size} w-${config.avatarXXS.badge.size} -bottom-${config.avatarXXS.badge.position} -end-${config.avatarXXS.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarXXS.dot.size} w-${config.avatarXXS.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarXXS.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXXS.roundedOrInnerDotPosition} top-${config.avatarXXS.roundedOrInnerDotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarXXS.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXXS.curvedOrInner.dotPosition} top-${config.avatarXXS.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXXS.fullDotPosition} top-${config.avatarXXS.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-xs`]: {
            [`@apply h-${config.avatarXS.size} w-${config.avatarXS.size}`]: {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarXS.badge.size} w-${config.avatarXS.badge.size} -bottom-${config.avatarXS.badge.position} -end-${config.avatarXS.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarXS.dot.size} w-${config.avatarXS.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarXS.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXS.roundedOrInnerDotPosition} top-${config.avatarXS.roundedOrInnerDotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarXS.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXS.curvedOrInner.dotPosition} top-${config.avatarXS.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXS.fullDotPosition} top-${config.avatarXS.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-sm`]: {
            [`@apply h-${config.avatarSM.size} w-${config.avatarSM.size}`]: {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarSM.badge.size} w-${config.avatarSM.badge.size} -bottom-${config.avatarSM.badge.position} -end-${config.avatarSM.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarSM.dot.size} w-${config.avatarSM.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarSM.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarSM.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarSM.roundedOrInner.dotPosition} top-${config.avatarSM.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarSM.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarSM.curvedOrInner.dotPosition} top-${config.avatarSM.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarSM.fullDotPosition} top-${config.avatarSM.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-md`]: {
            [`@apply h-${config.avatarMD.size} w-${config.avatarMD.size}`]: {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarMD.badge.size} w-${config.avatarMD.badge.size} -bottom-${config.avatarMD.badge.position} -end-${config.avatarMD.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarMD.dot.size} w-${config.avatarMD.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarMD.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarMD.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarMD.roundedOrInner.dotPosition} top-${config.avatarMD.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarMD.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarMD.curvedOrInner.dotPosition} top-${config.avatarMD.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarMD.fullDotPosition} top-${config.avatarMD.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-lg`]: {
            [`@apply h-${config.avatarLG.size} w-${config.avatarLG.size}`]: {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarLG.badge.size} w-${config.avatarLG.badge.size} -bottom-${config.avatarLG.badge.position} -end-${config.avatarLG.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarLG.dot.size} w-${config.avatarLG.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarLG.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarLG.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarLG.roundedOrInner.dotPosition} top-${config.avatarLG.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarLG.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarLG.curvedOrInner.dotPosition} top-${config.avatarLG.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarLG.fullDotPosition} top-${config.avatarLG.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-xl`]: {
            [`@apply h-${config.avatarXL.size} w-${config.avatarXL.size}`]: {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatarXL.badge.size} w-${config.avatarXL.badge.size} -bottom-${config.avatarXL.badge.position} -end-${config.avatarXL.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatarXL.dot.size} w-${config.avatarXL.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatarXL.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarXL.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXL.roundedOrInner.dotPosition} top-${config.avatarXL.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarXL.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXL.curvedOrInner.dotPosition} top-${config.avatarXL.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatarXL.fullDotPosition} top-${config.avatarXL.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-2xl`]: {
            [`@apply h-${config.avatar2XL.size} w-${config.avatar2XL.size}`]:
              {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatar2XL.badge.size} w-${config.avatar2XL.badge.size} -bottom-${config.avatar2XL.badge.position} -end-${config.avatar2XL.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatar2XL.dot.size} w-${config.avatar2XL.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatar2XL.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar2XL.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar2XL.roundedOrInner.dotPosition} top-${config.avatar2XL.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar2XL.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar2XL.curvedOrInner.dotPosition} top-${config.avatar2XL.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar2XL.fullDotPosition} top-${config.avatar2XL.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-3xl`]: {
            [`@apply h-${config.avatar3XL.size} w-${config.avatar3XL.size}`]:
              {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatar3XL.badge.size} w-${config.avatar3XL.badge.size} -bottom-${config.avatar3XL.badge.position} -end-${config.avatar3XL.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatar3XL.dot.size} w-${config.avatar3XL.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatar3XL.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar3XL.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar3XL.roundedOrInner.dotPosition} top-${config.avatar3XL.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar3XL.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar3XL.curvedOrInner.dotPosition} top-${config.avatar3XL.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar3XL.fullDotPosition} top-${config.avatar3XL.fullDotPosition}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-avatar-4xl`]: {
            [`@apply h-${config.avatar4XL.size} w-${config.avatar4XL.size}`]:
              {},

            [`.${prefix}-avatar-badge`]: {
              [`@apply h-${config.avatar4XL.badge.size} w-${config.avatar4XL.badge.size} -bottom-${config.avatar4XL.badge.position} -end-${config.avatar4XL.badge.position}`]:
                {},
            },
            [`.${prefix}-avatar-dot`]: {
              [`@apply h-${config.avatar4XL.dot.size} w-${config.avatar4XL.dot.size}`]:
                {},
            },
            [`.${prefix}-avatar-text`]: {
              [`@apply text-${config.avatar4XL.text}`]: {},
            },
            [`&.${prefix}-avatar-rounded, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar4XL.roundedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar4XL.roundedOrInner.dotPosition} top-${config.avatar4XL.roundedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-curved, .${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatar4XL.curvedOrInner.rounded}`]: {},

              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar4XL.curvedOrInner.dotPosition} top-${config.avatar4XL.curvedOrInner.dotPosition}`]:
                  {},
              },
            },
            [`&.${prefix}-avatar-full`]: {
              [`.${prefix}-avatar-dot`]: {
                [`@apply end-${config.avatar4XL.fullDotPosition} top-${config.avatar4XL.fullDotPosition}`]:
                  {},
              },
            },
          },

          [`&.${prefix}-avatar-full`]: {
            [`@apply rounded-${config.avatarFull.rounded}`]: {},

            [`.${prefix}-avatar-inner`]: {
              [`@apply rounded-${config.avatarFull.avatarInnerRounded}`]: {},
            },

            [`.${prefix}-avatar-badge`]: {
              [`@apply -bottom-${config.avatarFull.avatarBadgePosition} -end-${config.avatarFull.avatarBadgePosition}`]:
                {},
            },
          },

          [`&.${prefix}-avatar-mask:not(.${prefix}-avatar-rounded):not(.${prefix}-avatar-curved):not(.${prefix}-avatar-full)`]:
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
          avatar: defaultAvatarConfig,
        },
      },
    }
  }
)
