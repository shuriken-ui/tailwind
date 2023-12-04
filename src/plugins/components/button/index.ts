import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultButtonConfig = {
  font: {
    family: 'sans',
    weight: 'normal',
  },
  transition: {
    property: 'all',
    duration: '300',
  },
  size: {
    small: {
      button: {
        text: 'sm',
        height: '8',
        padding: {
          x: '3',
          y: '1',
        },
      },
      icon: {
        size: '3',
      },
    },
    medium: {
      button: {
        text: 'sm',
        height: '10',
        padding: {
          x: '5',
          y: '2',
        },
      },
      icon: {
        size: '4',
      },
    },
    large: {
      button: {
        text: 'base',
        height: '12',
        padding: {
          x: '6',
          y: '2',
        },
      },
      icon: {
        size: '5',
      },
    },
    xlarge: {
      button: {
        text: 'base',
        height: '14',
        padding: {
          x: '10',
          y: '4',
        },
      },
      icon: {
        size: '5',
      },
    },
  },
  rounded: {
    none: 'none',
    small: 'md',
    medium: 'lg',
    large: 'xl',
    full: 'full',
  },
  variant: {
    solid: {
      default: {
        text: {
          light: 'muted-700',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'white',
            hover: 'muted-50',
            active: 'white',
            focus: 'muted-50',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-300',
          },
          dark: {
            base: 'muted-600',
            hover: 'muted-500',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      muted: {
        text: {
          light: 'muted-500',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
            active: 'muted-200',
            focus: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      light: {
        text: {
          light: 'muted-500',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
            active: 'muted-200',
            focus: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      primary: {
        text: {
          light: 'primary-invert',
          dark: 'primary-invert',
        },
        background: {
          light: {
            base: 'primary-500',
            hover: 'primary-400',
            active: 'primary-500',
            focus: 'primary-400',
          },
          dark: {
            base: 'primary-500',
            hover: 'primary-400',
            active: 'primary-500',
            focus: 'primary-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'primary-500/50',
          dark: 'primary-800/50',
        },
      },
      info: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'info-500',
            hover: 'info-400',
            active: 'info-500',
            focus: 'info-400',
          },
          dark: {
            base: 'info-500',
            hover: 'info-400',
            active: 'info-500',
            focus: 'info-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'info-500/50',
          dark: 'info-800/50',
        },
      },
      success: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'success-500',
            hover: 'success-400',
            active: 'success-500',
            focus: 'success-400',
          },
          dark: {
            base: 'success-500',
            hover: 'success-400',
            active: 'success-500',
            focus: 'success-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'success-500/50',
          dark: 'success-800/50',
        },
      },
      warning: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'warning-500',
            hover: 'warning-400',
            active: 'warning-500',
            focus: 'warning-400',
          },
          dark: {
            base: 'warning-500',
            hover: 'warning-400',
            active: 'warning-500',
            focus: 'warning-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'warning-500/50',
          dark: 'warning-800/50',
        },
      },
      danger: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'danger-500',
            hover: 'danger-400',
            active: 'danger-500',
            focus: 'danger-400',
          },
          dark: {
            base: 'danger-500',
            hover: 'danger-400',
            active: 'danger-500',
            focus: 'danger-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'danger-500/50',
          dark: 'danger-800/50',
        },
      },
    },
    pastel: {
      default: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
          dark: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
        },
      },
      muted: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
          dark: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
        },
      },
      light: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'white/30',
            hover: 'white/20',
            active: 'white/30',
            focus: 'white/20',
          },
          dark: {
            base: 'white/20',
            hover: 'white/10',
            active: 'white/20',
            focus: 'white/10',
          },
        },
      },
      primary: {
        text: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        background: {
          light: {
            base: 'primary-500/10',
            hover: 'primary-500/20',
            active: 'primary-500/10',
            focus: 'primary-500/20',
          },
          dark: {
            base: 'primary-500/10',
            hover: 'primary-500/20',
            active: 'primary-500/10',
            focus: 'primary-500/20',
          },
        },
      },
      info: {
        text: {
          light: 'info-500',
          dark: 'info-500',
        },
        background: {
          light: {
            base: 'info-500/10',
            hover: 'info-500/20',
            active: 'info-500/10',
            focus: 'info-500/20',
          },
          dark: {
            base: 'info-500/10',
            hover: 'info-500/20',
            active: 'info-500/10',
            focus: 'info-500/20',
          },
        },
      },
      success: {
        text: {
          light: 'success-500',
          dark: 'success-500',
        },
        background: {
          light: {
            base: 'success-500/10',
            hover: 'success-500/20',
            active: 'success-500/10',
            focus: 'success-500/20',
          },
          dark: {
            base: 'success-500/10',
            hover: 'success-500/20',
            active: 'success-500/10',
            focus: 'success-500/20',
          },
        },
      },
      warning: {
        text: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        background: {
          light: {
            base: 'warning-500/10',
            hover: 'warning-500/20',
            active: 'warning-500/10',
            focus: 'warning-500/20',
          },
          dark: {
            base: 'warning-500/10',
            hover: 'warning-500/20',
            active: 'warning-500/10',
            focus: 'warning-500/20',
          },
        },
      },
      danger: {
        text: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        background: {
          light: {
            base: 'danger-500/10',
            hover: 'danger-500/20',
            active: 'danger-500/10',
            focus: 'danger-500/20',
          },
          dark: {
            base: 'danger-500/10',
            hover: 'danger-500/20',
            active: 'danger-500/10',
            focus: 'danger-500/20',
          },
        },
      },
    },
    outline: {
      default: {
        text: {
          light: {
            base: 'muted-500',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'muted-500',
            active: 'muted-400',
            focus: 'muted-500',
          },
          dark: {
            base: 'transparent',
            hover: 'muted-800',
            active: 'muted-700',
            focus: 'muted-800',
          },
        },
        border: {
          light: 'muted-500',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      light: {
        text: {
          light: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
        },
        border: {
          light: 'white',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      muted: {
        text: {
          light: {
            base: 'muted-400',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-400',
            focus: 'muted-300',
          },
          dark: {
            base: 'transparent',
            hover: 'white',
            active: 'white/80',
            focus: 'white',
          },
        },
        border: {
          light: 'muted-300',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      primary: {
        text: {
          light: {
            base: 'primary-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'primary-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'primary-500',
            active: 'primary-400',
            focus: 'primary-500',
          },
          dark: {
            base: 'transparent',
            hover: 'primary-500',
            active: 'primary-400',
            focus: 'primary-500',
          },
        },
        border: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        shadow: {
          size: 'xl',
          light: 'primary-500/30',
          dark: 'primary-800/30',
        },
      },
      info: {
        text: {
          light: {
            base: 'info-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'info-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'info-500',
            active: 'info-400',
            focus: 'info-500',
          },
          dark: {
            base: 'transparent',
            hover: 'info-500',
            active: 'info-400',
            focus: 'info-500',
          },
        },
        border: {
          light: 'info-500',
          dark: 'info-500',
        },
        shadow: {
          size: 'xl',
          light: 'info-500/30',
          dark: 'info-800/30',
        },
      },
      success: {
        text: {
          light: {
            base: 'success-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'success-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'success-500',
            active: 'success-400',
            focus: 'success-500',
          },
          dark: {
            base: 'transparent',
            hover: 'success-500',
            active: 'success-400',
            focus: 'success-500',
          },
        },
        border: {
          light: 'success-500',
          dark: 'success-500',
        },
        shadow: {
          size: 'xl',
          light: 'success-500/30',
          dark: 'success-800/30',
        },
      },
      warning: {
        text: {
          light: {
            base: 'warning-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'warning-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'warning-500',
            active: 'warning-400',
            focus: 'warning-500',
          },
          dark: {
            base: 'transparent',
            hover: 'warning-500',
            active: 'warning-400',
            focus: 'warning-500',
          },
        },
        border: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        shadow: {
          size: 'xl',
          light: 'warning-500/30',
          dark: 'warning-800/30',
        },
      },
      danger: {
        text: {
          light: {
            base: 'danger-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'danger-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'danger-500',
            active: 'danger-400',
            focus: 'danger-500',
          },
          dark: {
            base: 'transparent',
            hover: 'danger-500',
            active: 'danger-400',
            focus: 'danger-500',
          },
        },
        border: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        shadow: {
          size: 'xl',
          light: 'danger-500/30',
          dark: 'danger-800/30',
        },
      },
    },
  },
  badge: {
    size: '3',
    colors: {
      primary: 'primary-400',
      primaryDark: 'primary-400',
      info: 'info-400',
      success: 'success-400',
      warning: 'warning-400',
      danger: 'danger-400',
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
      const config = theme(
        'shurikenUi.button',
      ) satisfies typeof defaultButtonConfig

      addComponents({
        [`.${prefix}button`]: {
          // #region Base
          [`@apply relative inline-flex justify-center items-center space-x-1`]:
            {},
          //Text styles
          [`@apply font-${config.font.family} font-${config.font.weight} leading-5 no-underline`]:
            {},
          //State styles
          [`@apply ${prefix}focus transition-${config.transition.property} duration-${config.transition.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
            {},
          // #endregion

          // #region Badge
          [`.${prefix}button-badge`]: {
            [`@apply flex absolute h-${config.badge.size} w-${config.badge.size} top-0 -end-1 -mt-1`]:
              {},

            [`.${prefix}button-badge-pulse`]: {
              [`@apply absolute inline-flex h-full w-full rounded-full opacity-75`]:
                {},
            },

            [`.${prefix}button-badge-inner`]: {
              [`@apply relative inline-flex rounded-full h-${config.badge.size} w-${config.badge.size}`]:
                {},
            },

            [`&.${prefix}badge-primary`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.colors.primary}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.colors.primary}`]: {},
              },
            },
            [`&.${prefix}badge-info`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.colors.info}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.colors.info}`]: {},
              },
            },
            [`&.${prefix}badge-success`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.colors.success}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.colors.success}`]: {},
              },
            },
            [`&.${prefix}badge-warning`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.colors.warning}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.colors.warning}`]: {},
              },
            },
            [`&.${prefix}badge-danger`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.colors.danger}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.colors.danger}`]: {},
              },
            },
          },
          // #endregion

          // #region Loading
          [`&.${prefix}button-loading`]: {
            [`@apply !text-transparent`]: {},
          },
          // #endregion

          // #region Sizes
          [`&.${prefix}button-small`]: {
            [`@apply h-${config.size.small.button.height} px-${config.size.small.button.padding.x} py-${config.size.small.button.padding.y} text-${config.size.small.button.text}`]:
              {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.size.small.icon.size} h-${config.size.small.icon.size}`]:
                {},
            },
          },
          [`&.${prefix}button-medium`]: {
            [`@apply h-${config.size.medium.button.height} px-${config.size.medium.button.padding.x} py-${config.size.medium.button.padding.y} text-${config.size.medium.button.text}`]:
              {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.size.medium.icon.size} h-${config.size.medium.icon.size}`]:
                {},
            },
          },
          [`&.${prefix}button-large`]: {
            [`@apply h-${config.size.large.button.height} px-${config.size.large.button.padding.x} py-${config.size.large.button.padding.y} text-${config.size.large.button.text}`]:
              {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.size.large.icon.size} h-${config.size.large.icon.size}`]:
                {},
            },
          },
          [`&.${prefix}button-xlarge`]: {
            [`@apply h-${config.size.xlarge.button.height} px-${config.size.xlarge.button.padding.x} py-${config.size.xlarge.button.padding.y} text-${config.size.xlarge.button.text}`]:
              {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.size.xlarge.icon.size} h-${config.size.xlarge.icon.size}`]:
                {},
            },
          },
          // #endregion

          // #region Rounded
          [`&.${prefix}button-rounded`]: {
            [`@apply rounded-${config.rounded.small}`]: {},
          },
          [`&.${prefix}button-smooth`]: {
            [`@apply rounded-${config.rounded.medium}`]: {},
          },
          [`&.${prefix}button-curved`]: {
            [`@apply rounded-${config.rounded.large}`]: {},
          },
          [`&.${prefix}button-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},

            [`.${prefix}button-badge`]: {
              [`@apply flex absolute h-${config.badge.size} w-${config.badge.size} top-0 -end-1 -mt-0.5 me-2`]:
                {},
            },
          },
          // #endregion

          // #region Variants
          [`&.${prefix}button-solid`]: {
            //Solid:default
            [`&.${prefix}button-default`]: {
              //Text color
              [`@apply text-${config.variant.solid.default.text.light} dark:text-${config.variant.solid.default.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.default.background.light.base} dark:bg-${config.variant.solid.default.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.default.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.default.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.default.background.light.active} dark:active:enabled:bg-${config.variant.solid.default.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply dark:focus-visible:bg-${config.variant.solid.default.background.light.focus} focus-visible:bg-${config.variant.solid.default.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border border-${config.variant.solid.default.border.light.base} dark:border-${config.variant.solid.default.border.dark.base}`]:
                {},
              //Border hover
              [`@apply hover:enabled:border-${config.variant.solid.default.border.light.hover} dark:hover:enabled:border-${config.variant.solid.default.border.dark.hover}`]:
                {},
              //shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.default.shadow.size} enabled:shadow-${config.variant.solid.default.shadow.light} dark:enabled:shadow-${config.variant.solid.default.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.default.shadow.size} hover:enabled:shadow-${config.variant.solid.default.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.default.shadow.dark}`]:
                  {},
              },
            },
            //Solid:muted
            [`&.${prefix}button-muted`]: {
              //Text color
              [`@apply text-${config.variant.solid.muted.text.light} dark:text-${config.variant.solid.muted.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.muted.background.light.base} dark:bg-${config.variant.solid.muted.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.muted.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.muted.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.muted.background.light.active} dark:active:enabled:bg-${config.variant.solid.muted.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.muted.background.light.focus} dark:focus-visible:bg-${config.variant.solid.muted.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border border-${config.variant.solid.muted.border.light.base} dark:border-${config.variant.solid.muted.border.dark.base}`]:
                {},
              //Border hover
              [`@apply border-${config.variant.solid.muted.border.light.hover} dark:border-${config.variant.solid.muted.border.dark.hover}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.muted.shadow.size} enabled:shadow-${config.variant.solid.muted.shadow.light} dark:enabled:shadow-${config.variant.solid.muted.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.muted.shadow.size} hover:enabled:shadow-${config.variant.solid.muted.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.muted.shadow.dark}`]:
                  {},
              },
            },
            //Solid:light
            [`&.${prefix}button-light`]: {
              //Text color
              [`@apply text-${config.variant.solid.light.text.light} dark:text-${config.variant.solid.light.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.light.background.light.base} dark:bg-${config.variant.solid.light.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.light.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.light.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.light.background.light.active} dark:active:enabled:bg-${config.variant.solid.light.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.light.background.light.focus} dark:focus-visible:bg-${config.variant.solid.light.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border border-${config.variant.solid.light.border.light.base} dark:border-${config.variant.solid.light.border.dark.base}`]:
                {},
              //Border hover
              [`@apply border-${config.variant.solid.light.border.light.hover} dark:border-${config.variant.solid.light.border.dark.hover}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.light.shadow.size} enabled:shadow-${config.variant.solid.light.shadow.light} dark:enabled:shadow-${config.variant.solid.light.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.light.shadow.size} hover:enabled:shadow-${config.variant.solid.light.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.light.shadow.dark}`]:
                  {},
              },
            },
            //Solid:primary
            [`&.${prefix}button-primary`]: {
              //Text color
              [`@apply text-${config.variant.solid.primary.text.light} dark:text-${config.variant.solid.primary.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.primary.background.light.base} dark:bg-${config.variant.solid.primary.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.primary.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.primary.background.light.active} dark:active:enabled:bg-${config.variant.solid.primary.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.primary.background.light.focus} dark:focus-visible:bg-${config.variant.solid.primary.background.dark.focus}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.primary.shadow.size} enabled:shadow-${config.variant.solid.primary.shadow.light} dark:enabled:shadow-${config.variant.solid.primary.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.primary.shadow.size} hover:enabled:shadow-${config.variant.solid.primary.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.primary.shadow.dark}`]:
                  {},
              },
            },
            //Solid:info
            [`&.${prefix}button-info`]: {
              //Text color
              [`@apply text-${config.variant.solid.info.text.light} text-${config.variant.solid.info.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.info.background.light.base} dark:bg-${config.variant.solid.info.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.info.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.info.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.info.background.light.active} dark:active:enabled:bg-${config.variant.solid.info.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.info.background.light.focus} dark:focus-visible:bg-${config.variant.solid.info.background.dark.focus}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.info.shadow.size} enabled:shadow-${config.variant.solid.info.shadow.light} dark:enabled:shadow-${config.variant.solid.info.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.info.shadow.size} hover:enabled:shadow-${config.variant.solid.info.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.info.shadow.dark}`]:
                  {},
              },
            },
            //Solid:success
            [`&.${prefix}button-success`]: {
              //Text color
              [`@apply text-${config.variant.solid.success.text.light} text-${config.variant.solid.success.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.success.background.light.base} dark:bg-${config.variant.solid.success.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.success.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.success.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.success.background.light.active} dark:active:enabled:bg-${config.variant.solid.success.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.success.background.light.focus} dark:focus-visible:bg-${config.variant.solid.success.background.dark.focus}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.success.shadow.size} enabled:shadow-${config.variant.solid.success.shadow.light} dark:enabled:shadow-${config.variant.solid.success.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.success.shadow.size} hover:enabled:shadow-${config.variant.solid.success.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.success.shadow.dark}`]:
                  {},
              },
            },
            //Solid:warning
            [`&.${prefix}button-warning`]: {
              //Text color
              [`@apply text-${config.variant.solid.warning.text.light} text-${config.variant.solid.warning.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.warning.background.light.base} dark:bg-${config.variant.solid.warning.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.warning.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.warning.background.light.active} dark:active:enabled:bg-${config.variant.solid.warning.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.warning.background.light.focus} dark:focus-visible:bg-${config.variant.solid.warning.background.dark.focus}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.warning.shadow.size} enabled:shadow-${config.variant.solid.warning.shadow.light} dark:enabled:shadow-${config.variant.solid.warning.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.warning.shadow.size} hover:enabled:shadow-${config.variant.solid.warning.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.warning.shadow.dark}`]:
                  {},
              },
            },
            //Solid:danger
            [`&.${prefix}button-danger`]: {
              //Text color
              [`@apply text-${config.variant.solid.danger.text.light} text-${config.variant.solid.danger.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.solid.danger.background.light.base} dark:bg-${config.variant.solid.danger.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.solid.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.danger.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.solid.danger.background.light.active} dark:active:enabled:bg-${config.variant.solid.danger.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.solid.danger.background.light.focus} dark:focus-visible:bg-${config.variant.solid.danger.background.dark.focus}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.variant.solid.danger.shadow.size} enabled:shadow-${config.variant.solid.danger.shadow.light} dark:enabled:shadow-${config.variant.solid.danger.shadow.dark}`]:
                  {},
              },
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.solid.danger.shadow.size} hover:enabled:shadow-${config.variant.solid.danger.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.danger.shadow.dark}`]:
                  {},
              },
            },
          },
          [`&.${prefix}button-pastel`]: {
            //Pastel:default
            [`&.${prefix}button-default`]: {
              //Text color
              [`@apply text-${config.variant.pastel.default.text.light} dark:text-${config.variant.pastel.default.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.default.background.light.base} dark:bg-${config.variant.pastel.default.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.default.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.default.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.default.background.light.active} dark:active:enabled:bg-${config.variant.pastel.default.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.default.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.default.background.dark.focus}`]:
                {},
            },
            //Pastel:muted
            [`&.${prefix}button-muted`]: {
              //Text color
              [`@apply text-${config.variant.pastel.default.text.light} dark:text-${config.variant.pastel.default.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.default.background.light.base} dark:bg-${config.variant.pastel.default.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.default.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.default.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.default.background.light.active} dark:active:enabled:bg-${config.variant.pastel.default.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.default.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.default.background.dark.focus}`]:
                {},
            },
            //Pastel:light
            [`&.${prefix}button-light`]: {
              //Text color
              [`@apply text-${config.variant.pastel.light.text.light} dark:text-${config.variant.pastel.light.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.light.background.light.base} dark:bg-${config.variant.pastel.light.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.light.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.light.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.light.background.light.active} dark:active:enabled:bg-${config.variant.pastel.light.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.light.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.light.background.dark.focus}`]:
                {},
            },
            //Pastel:primary
            [`&.${prefix}button-primary`]: {
              //Text color
              [`@apply text-${config.variant.pastel.primary.text.light} dark:text-${config.variant.pastel.primary.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.primary.background.light.base} dark:bg-${config.variant.pastel.primary.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.primary.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.primary.background.light.active} dark:active:enabled:bg-${config.variant.pastel.primary.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.primary.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.primary.background.dark.focus}`]:
                {},
            },
            //Pastel:info
            [`&.${prefix}button-info`]: {
              //Text color
              [`@apply text-${config.variant.pastel.info.text.light} dark:text-${config.variant.pastel.info.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.info.background.light.base} dark:bg-${config.variant.pastel.info.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.info.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.info.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.info.background.light.active} dark:active:enabled:bg-${config.variant.pastel.info.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.info.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.info.background.dark.focus}`]:
                {},
            },
            //Pastel:success
            [`&.${prefix}button-success`]: {
              //Text color
              [`@apply text-${config.variant.pastel.success.text.light} dark:text-${config.variant.pastel.success.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.success.background.light.base} dark:bg-${config.variant.pastel.success.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.success.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.success.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.success.background.light.active} dark:active:enabled:bg-${config.variant.pastel.success.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.success.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.success.background.dark.focus}`]:
                {},
            },
            //Pastel:warning
            [`&.${prefix}button-warning`]: {
              //Text color
              [`@apply text-${config.variant.pastel.warning.text.light} dark:text-${config.variant.pastel.warning.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.warning.background.light.base} dark:bg-${config.variant.pastel.warning.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.warning.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.warning.background.light.active} dark:active:enabled:bg-${config.variant.pastel.warning.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.warning.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.warning.background.dark.focus}`]:
                {},
            },
            //Pastel:danger
            [`&.${prefix}button-danger`]: {
              //Text color
              [`@apply text-${config.variant.pastel.danger.text.light} dark:text-${config.variant.pastel.danger.text.dark}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.pastel.danger.background.light.base} dark:bg-${config.variant.pastel.danger.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.pastel.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.danger.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.pastel.danger.background.light.active} dark:active:enabled:bg-${config.variant.pastel.danger.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.pastel.danger.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.danger.background.dark.focus}`]:
                {},
            },
          },
          //Variant:outline
          [`&.${prefix}button-outline`]: {
            //Outline:default
            [`&.${prefix}button-default`]: {
              //Text color
              [`@apply text-${config.variant.outline.default.text.light.base} dark:text-${config.variant.outline.default.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.default.text.light.hover} dark:hover:enabled:text-${config.variant.outline.default.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.default.text.light.active} dark:focus-visible:text-${config.variant.outline.default.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.default.text.light.focus} dark:active:enabled:text-${config.variant.outline.default.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.default.background.light.base} dark:bg-${config.variant.outline.default.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.default.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.default.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.default.background.light.active} dark:active:enabled:bg-${config.variant.outline.default.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.default.background.light.focus} dark:focus-visible:bg-${config.variant.outline.default.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.default.border.light} dark:border-${config.variant.outline.default.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.default.shadow.size} hover:enabled:shadow-${config.variant.outline.default.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.default.shadow.dark}`]:
                  {},
              },
            },
            //Outline:light
            [`&.${prefix}button-light`]: {
              //Text color
              [`@apply text-${config.variant.outline.light.text.light.base} dark:text-${config.variant.outline.light.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.light.text.light.hover} dark:hover:enabled:text-${config.variant.outline.light.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.light.text.light.active} dark:focus-visible:text-${config.variant.outline.light.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.light.text.light.focus} dark:active:enabled:text-${config.variant.outline.light.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.light.background.light.base} dark:bg-${config.variant.outline.light.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.light.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.light.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.light.background.light.active} dark:active:enabled:bg-${config.variant.outline.light.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.light.background.light.focus} dark:focus-visible:bg-${config.variant.outline.light.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.light.border.light} dark:border-${config.variant.outline.light.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.light.shadow.size} hover:enabled:shadow-${config.variant.outline.light.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.light.shadow.dark}`]:
                  {},
              },
            },
            //Outline:muted
            [`&.${prefix}button-muted`]: {
              //Text color
              [`@apply text-${config.variant.outline.muted.text.light.base} dark:text-${config.variant.outline.muted.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.muted.text.light.hover} dark:hover:enabled:text-${config.variant.outline.muted.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.muted.text.light.active} dark:focus-visible:text-${config.variant.outline.muted.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.muted.text.light.focus} dark:active:enabled:text-${config.variant.outline.muted.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.muted.background.light.base} dark:bg-${config.variant.outline.muted.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.muted.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.muted.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.muted.background.light.active} dark:active:enabled:bg-${config.variant.outline.muted.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.muted.background.light.focus} dark:focus-visible:bg-${config.variant.outline.muted.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.muted.border.light} dark:border-${config.variant.outline.muted.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.muted.shadow.size} hover:enabled:shadow-${config.variant.outline.muted.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.muted.shadow.dark}`]:
                  {},
              },
            },
            //Outline:primary
            [`&.${prefix}button-primary`]: {
              //Text color
              [`@apply text-${config.variant.outline.primary.text.light.base} dark:text-${config.variant.outline.primary.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.primary.text.light.hover} dark:hover:enabled:text-${config.variant.outline.primary.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.primary.text.light.active} dark:focus-visible:text-${config.variant.outline.primary.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.primary.text.light.focus} dark:active:enabled:text-${config.variant.outline.primary.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.primary.background.light.base} dark:bg-${config.variant.outline.primary.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.primary.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.primary.background.light.active} dark:active:enabled:bg-${config.variant.outline.primary.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.primary.background.light.focus} dark:focus-visible:bg-${config.variant.outline.primary.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.primary.border.light} dark:border-${config.variant.outline.primary.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.primary.shadow.size} hover:enabled:shadow-${config.variant.outline.primary.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.primary.shadow.dark}`]:
                  {},
              },
            },
            //Outline:info
            [`&.${prefix}button-info`]: {
              //Text color
              [`@apply text-${config.variant.outline.info.text.light.base} dark:text-${config.variant.outline.info.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.info.text.light.hover} dark:hover:enabled:text-${config.variant.outline.info.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.info.text.light.active} dark:focus-visible:text-${config.variant.outline.info.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.info.text.light.focus} dark:active:enabled:text-${config.variant.outline.info.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.info.background.light.base} dark:bg-${config.variant.outline.info.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.info.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.info.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.info.background.light.active} dark:active:enabled:bg-${config.variant.outline.info.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.info.background.light.focus} dark:focus-visible:bg-${config.variant.outline.info.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.info.border.light} dark:border-${config.variant.outline.info.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.info.shadow.size} hover:enabled:shadow-${config.variant.outline.info.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.info.shadow.dark}`]:
                  {},
              },
            },
            //Outline:success
            [`&.${prefix}button-success`]: {
              //Text color
              [`@apply text-${config.variant.outline.success.text.light.base} dark:text-${config.variant.outline.success.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.success.text.light.hover} dark:hover:enabled:text-${config.variant.outline.success.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.success.text.light.active} dark:focus-visible:text-${config.variant.outline.success.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.success.text.light.focus} dark:active:enabled:text-${config.variant.outline.success.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.success.background.light.base} dark:bg-${config.variant.outline.success.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.success.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.success.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.success.background.light.active} dark:active:enabled:bg-${config.variant.outline.success.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.success.background.light.focus} dark:focus-visible:bg-${config.variant.outline.success.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.success.border.light} dark:border-${config.variant.outline.success.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.success.shadow.size} hover:enabled:shadow-${config.variant.outline.success.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.success.shadow.dark}`]:
                  {},
              },
            },
            //Outline:warning
            [`&.${prefix}button-warning`]: {
              //Text color
              [`@apply text-${config.variant.outline.warning.text.light.base} dark:text-${config.variant.outline.warning.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.warning.text.light.hover} dark:hover:enabled:text-${config.variant.outline.warning.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.warning.text.light.active} dark:focus-visible:text-${config.variant.outline.warning.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.warning.text.light.focus} dark:active:enabled:text-${config.variant.outline.warning.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.warning.background.light.base} dark:bg-${config.variant.outline.warning.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.warning.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.warning.background.light.active} dark:active:enabled:bg-${config.variant.outline.warning.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.warning.background.light.focus} dark:focus-visible:bg-${config.variant.outline.warning.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.warning.border.light} dark:border-${config.variant.outline.warning.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.warning.shadow.size} hover:enabled:shadow-${config.variant.outline.warning.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.warning.shadow.dark}`]:
                  {},
              },
            },
            //Outline:danger
            [`&.${prefix}button-danger`]: {
              //Text color
              [`@apply text-${config.variant.outline.danger.text.light.base} dark:text-${config.variant.outline.danger.text.dark.base}`]:
                {},
              //Text hover
              [`@apply hover:enabled:text-${config.variant.outline.danger.text.light.hover} dark:hover:enabled:text-${config.variant.outline.danger.text.dark.hover}`]:
                {},
              //Text focus
              [`@apply focus-visible:text-${config.variant.outline.danger.text.light.active} dark:focus-visible:text-${config.variant.outline.danger.text.dark.active}`]:
                {},
              //Text active
              [`@apply active:enabled:text-${config.variant.outline.danger.text.light.focus} dark:active:enabled:text-${config.variant.outline.danger.text.dark.focus}`]:
                {},
              //Bg main
              [`@apply bg-${config.variant.outline.danger.background.light.base} dark:bg-${config.variant.outline.danger.background.dark.base}`]:
                {},
              //Bg hover
              [`@apply hover:enabled:bg-${config.variant.outline.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.danger.background.dark.hover}`]:
                {},
              //Bg active
              [`@apply active:enabled:bg-${config.variant.outline.danger.background.light.active} dark:active:enabled:bg-${config.variant.outline.danger.background.dark.active}`]:
                {},
              //Bg focus
              [`@apply focus-visible:bg-${config.variant.outline.danger.background.light.focus} dark:focus-visible:bg-${config.variant.outline.danger.background.dark.focus}`]:
                {},
              //Border main
              [`@apply border-2 border-${config.variant.outline.danger.border.light} dark:border-${config.variant.outline.danger.border.dark}`]:
                {},
              //Shadows
              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.variant.outline.danger.shadow.size} hover:enabled:shadow-${config.variant.outline.danger.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.danger.shadow.dark}`]:
                  {},
              },
            },
          },
          // #endregion
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          button: defaultButtonConfig,
        },
      },
    }
  },
)
