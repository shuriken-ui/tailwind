import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonConfig = {
  duration: '300',
  font: 'normal',
  badge: {
    space: '3',
    primary: 'primary-400',
    info: 'info-400',
    success: 'success-400',
    warning: 'warning-400',
    danger: 'danger-400',
  },
  buttonSmall: {
    text: 'sm',
    iconSize: '3',
  },
  buttonMedium: {
    text: 'sm',
    iconSize: '4',
  },
  buttonLarge: {
    text: 'base',
    iconSize: '4',
  },
  buttonBig: {
    text: 'base',
    iconSize: '5',
  },
  buttonRounded: 'md',
  buttonSmooth: 'lg',
  buttonCurved: 'xl',
  buttonFull: {
    rounded: 'full',
    badgeSize: '3',
  },
  buttonSolid: {
    default: {
      text: 'muted-700',
      textDark: 'white',
      bg: 'white',
      bgDark: 'muted-700',
      bgHoverEnabled: 'muted-50',
      bgHoverEnabledDark: 'muted-600',
      bgActiveEnabled: 'white',
      bgActiveEnabledDark: 'muted-700',
      bgFocusVisible: 'muted-50',
      bgFocusVisibleDark: 'muted-600',
      border: 'muted-300',
      borderDark: 'muted-600',
      shadow: {
        size: 'xl',
        enable: 'muted-500/30',
        enableDark: 'muted-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'muted-300/30',
        enableDark: 'muted-800/20',
      },
    },
    lightOrMuted: {
      text: 'muted-500',
      textDark: 'white',
      bg: 'muted-200',
      bgDark: 'muted-700',
      bgHoverEnabled: 'muted-100',
      bgHoverEnabledDark: 'muted-700',
      bgActiveEnabled: 'muted-200',
      bgActiveEnabledDark: 'muted-700',
      bgFocusVisible: 'muted-100',
      bgFocusVisibleDark: 'muted-600',
      border: 'muted-200',
      borderDark: 'muted-700',
      shadow: {
        size: 'xl',
        enable: 'muted-500/30',
        enableDark: 'muted-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'muted-300/30',
        enableDark: 'muted-800/20',
      },
    },
    primary: {
      text: 'white',
      bg: 'primary-500',
      bgDark: 'primary-500',
      bgHoverEnabled: 'primary-400',
      bgHoverEnabledDark: 'primary-400',
      bgActiveEnabled: 'primary-500',
      bgActiveEnabledDark: 'primary-500',
      bgFocusVisible: 'primary-500',
      bgFocusVisibleDark: 'primary-500',
      focusVisibleOutline: 'primary-400/70',
      focusVisibleOutlineDark: 'primary-400/70',
      focusWithinOutline: 'primary-400/70',
      focusWithinOutlineDark: 'primary-400/70',
      shadow: {
        size: 'xl',
        enable: 'primary-500/50',
        enableDark: 'primary-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'primary-500/50',
        enableDark: 'primary-800/20',
      },
    },
    info: {
      text: 'white',
      bg: 'info-500',
      bgDark: 'info-500',
      bgHoverEnabled: 'info-400',
      bgHoverEnabledDark: 'info-400',
      bgActiveEnabled: 'info-500',
      bgActiveEnabledDark: 'info-500',
      bgFocusVisible: 'info-500',
      bgFocusVisibleDark: 'info-500',
      focusVisibleOutline: 'info-400/70',
      focusVisibleOutlineDark: 'info-400/70',
      focusWithinOutline: 'info-400/70',
      focusWithinOutlineDark: 'info-400/70',
      shadow: {
        size: 'xl',
        enable: 'info-500/50',
        enableDark: 'info-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'info-500/50',
        enableDark: 'info-800/20',
      },
    },
    success: {
      text: 'white',
      bg: 'success-500',
      bgDark: 'success-500',
      bgHoverEnabled: 'success-400',
      bgHoverEnabledDark: 'success-400',
      bgActiveEnabled: 'success-500',
      bgActiveEnabledDark: 'success-500',
      bgFocusVisible: 'success-500',
      bgFocusVisibleDark: 'success-500',
      focusVisibleOutline: 'success-400/70',
      focusVisibleOutlineDark: 'success-400/70',
      focusWithinOutline: 'success-400/70',
      focusWithinOutlineDark: 'success-400/70',
      shadow: {
        size: 'xl',
        enable: 'success-500/50',
        enableDark: 'success-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'success-500/50',
        enableDark: 'success-800/20',
      },
    },
    warning: {
      text: 'white',
      bg: 'warning-500',
      bgDark: 'warning-500',
      bgHoverEnabled: 'warning-400',
      bgHoverEnabledDark: 'warning-400',
      bgActiveEnabled: 'warning-500',
      bgActiveEnabledDark: 'warning-500',
      bgFocusVisible: 'warning-500',
      bgFocusVisibleDark: 'warning-500',
      focusVisibleOutline: 'warning-400/70',
      focusVisibleOutlineDark: 'warning-400/70',
      focusWithinOutline: 'warning-400/70',
      focusWithinOutlineDark: 'warning-400/70',
      shadow: {
        size: 'xl',
        enable: 'warning-500/50',
        enableDark: 'warning-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'warning-500/50',
        enableDark: 'warning-800/20',
      },
    },
    danger: {
      text: 'white',
      bg: 'danger-500',
      bgDark: 'danger-500',
      bgHoverEnabled: 'danger-400',
      bgHoverEnabledDark: 'danger-400',
      bgActiveEnabled: 'danger-500',
      bgActiveEnabledDark: 'danger-500',
      bgFocusVisible: 'danger-500',
      bgFocusVisibleDark: 'danger-500',
      focusVisibleOutline: 'danger-400/70',
      focusVisibleOutlineDark: 'danger-400/70',
      focusWithinOutline: 'danger-400/70',
      focusWithinOutlineDark: 'danger-400/70',
      shadow: {
        size: 'xl',
        enable: 'danger-500/50',
        enableDark: 'danger-800/20',
      },
      shadowHover: {
        size: 'xl',
        enable: 'danger-500/50',
        enableDark: 'danger-800/20',
      },
    },
  },
  buttonPastel: {
    defaultOrMuted: {
      text: 'muted-800',
      textDark: 'muted-100',
      bg: 'muted-500/10',
      bgHoverEnabled: 'muted-500/20',
      bgActiveEnabled: 'muted-500/10',
      bgFocusVisible: 'muted-500/20',
    },
    light: {
      text: 'muted-800',
      textDark: 'muted-100',
      bg: 'white/30',
      bgDark: 'white/20',
      bgHoverEnabled: 'white/20',
      bgHoverEnabledDark: 'white/10',
      bgActiveEnabled: 'white/20',
      bgActiveEnabledDark: 'white/10',
      bgFocusVisible: 'white/20',
      bgFocusVisibleDark: 'white/10',
    },
    primary: {
      text: 'primary-500',
      bg: 'primary-500/10',
      bgHoverEnabled: 'primary-500/20',
      bgActiveEnabled: 'primary-500/10',
      bgFocusVisible: 'primary-500/20',
    },
    info: {
      text: 'info-500',
      bg: 'info-500/10',
      bgHoverEnabled: 'info-500/20',
      bgActiveEnabled: 'info-500/10',
      bgFocusVisible: 'info-500/20',
    },
    success: {
      text: 'success-500',
      bg: 'success-500/10',
      bgHoverEnabled: 'success-500/20',
      bgActiveEnabled: 'success-500/10',
      bgFocusVisible: 'success-500/20',
    },
    warning: {
      text: 'warning-500',
      bg: 'warning-500/10',
      bgHoverEnabled: 'warning-500/20',
      bgActiveEnabled: 'warning-500/10',
      bgFocusVisible: 'warning-500/20',
    },
    danger: {
      text: 'danger-500',
      bg: 'danger-500/10',
      bgHoverEnabled: 'danger-500/20',
      bgActiveEnabled: 'danger-500/10',
      bgFocusVisible: 'danger-500/20',
    },
  },
  buttonOutline: {
    default: {
      text: 'muted-500',
      textDark: 'white',
      hoverEnabled: 'white',
      hoverEnabledDark: 'muted-800',
      bgHoverEnabled: 'muted-500',
      bgHoverEnabledDark: 'white',
      focusWithin: 'muted-500',
      focusWithinDark: 'white',
      focusVisible: 'muted-500',
      focusVisibleDark: 'white',
      bgFocusVisible: 'muted-500',
      bgFocusVisibleDark: 'white',
      textFocusVisible: 'white',
      textFocusVisibleDark: 'muted-800',
      textActiveEnabled: 'muted-800',
      textActiveEnabledDark: 'muted-800',
      bgActiveEnabled: 'muted-400',
      bgActiveEnabledDark: 'white/80',
      border: 'muted-500',
      borderDark: 'white',
      shadowHover: {
        size: 'xl',
        enable: 'muted-500/50',
        enableDark: 'muted-800/20',
      },
    },
    light: {
      text: 'white',
      hoverEnabled: 'muted-800',
      bgHoverEnabled: 'white',
      focusWithin: 'white',
      focusVisible: 'white',
      bgFocusVisible: 'white',
      textFocusVisible: 'muted-800',
      textActiveEnabled: 'muted-800',
      bgActiveEnabled: 'muted-800',
      border: 'white',
      shadowHover: {
        size: 'xl',
        enable: 'muted-500/50',
        enableDark: 'muted-800/20',
      },
    },
    muted: {
      text: 'muted-400',
      textDark: 'white',
      hoverEnabled: 'white',
      hoverEnabledDark: 'muted-800',
      bgHoverEnabled: 'muted-300',
      bgHoverEnabledDark: 'white',
      focusWithin: 'muted-300',
      focusWithinDark: 'white',
      focusVisible: 'muted-300',
      focusVisibleDark: 'white',
      bgFocusVisible: 'muted-300',
      bgFocusVisibleDark: 'white',
      textFocusVisible: 'white',
      textFocusVisibleDark: 'muted-800',
      textActiveEnabled: 'muted-800',
      textActiveEnabledDark: 'muted-800',
      bgActiveEnabled: 'muted-400',
      bgActiveEnabledDark: 'white/80',
      border: 'muted-300',
      borderDark: 'white',
      shadowHover: {
        size: 'xl',
        enable: 'muted-500/50',
        enableDark: 'muted-800/20',
      },
    },
    primary: {
      text: 'primary-500',
      textDark: 'white',
      hoverEnabled: 'white',
      bgHoverEnabled: 'primary-500',
      focusWithin: 'primary-400/70',
      focusVisible: 'primary-400/70',
      bgFocusVisible: 'primary-500',
      textFocusVisible: 'white',
      textActiveEnabled: 'white',
      bgActiveEnabled: 'primary-400',
      border: 'primary-500',
      shadowHover: {
        size: 'xl',
        enable: 'primary-500/30',
        enableDark: 'primary-800/20',
      },
    },
    info: {
      text: 'info-500',
      textDark: 'white',
      hoverEnabled: 'white',
      bgHoverEnabled: 'info-500',
      focusWithin: 'info-400/70',
      focusVisible: 'info-400/70',
      bgFocusVisible: 'info-500',
      textFocusVisible: 'white',
      textActiveEnabled: 'white',
      bgActiveEnabled: 'info-400',
      border: 'info-500',
      shadowHover: {
        size: 'xl',
        enable: 'info-500/30',
        enableDark: 'info-800/20',
      },
    },
    success: {
      text: 'success-500',
      textDark: 'white',
      hoverEnabled: 'white',
      bgHoverEnabled: 'success-500',
      focusWithin: 'success-400/70',
      focusVisible: 'success-400/70',
      bgFocusVisible: 'success-500',
      textFocusVisible: 'white',
      textActiveEnabled: 'white',
      bgActiveEnabled: 'success-400',
      border: 'success-500',
      shadowHover: {
        size: 'xl',
        enable: 'success-500/30',
        enableDark: 'success-800/20',
      },
    },
    warning: {
      text: 'warning-500',
      textDark: 'white',
      hoverEnabled: 'white',
      bgHoverEnabled: 'warning-500',
      focusWithin: 'warning-400/70',
      focusVisible: 'warning-400/70',
      bgFocusVisible: 'warning-500',
      textFocusVisible: 'white',
      textActiveEnabled: 'white',
      bgActiveEnabled: 'warning-400',
      border: 'warning-500',
      shadowHover: {
        size: 'xl',
        enable: 'warning-500/30',
        enableDark: 'warning-800/20',
      },
    },
    danger: {
      text: 'danger-500',
      textDark: 'white',
      hoverEnabled: 'white',
      bgHoverEnabled: 'danger-500',
      focusWithin: 'danger-400/70',
      focusVisible: 'danger-400/70',
      bgFocusVisible: 'danger-500',
      textFocusVisible: 'white',
      textActiveEnabled: 'white',
      bgActiveEnabled: 'danger-400',
      border: 'danger-500',
      shadowHover: {
        size: 'xl',
        enable: 'danger-500/30',
        enableDark: 'danger-800/20',
      },
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.button'
      ) satisfies typeof defaultButtonConfig

      addComponents({
        [`.${prefix}-button`]: {
          [`@apply relative font-sans font-${config.font} leading-5 no-underline inline-flex justify-center items-center space-x-1 ${prefix}-focus transition-all duration-${config.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
            {},

          [`.${prefix}-button-badge`]: {
            [`@apply flex absolute h-${config.badge.space} w-${config.badge.space} top-0 -end-1 -mt-1 -me-8`]:
              {},

            [`.${prefix}-button-badge-pulse`]: {
              [`@apply absolute inline-flex h-full w-full rounded-full opacity-75`]:
                {},
            },

            [`.${prefix}-button-badge-inner`]: {
              [`@apply relative inline-flex rounded-full h-${config.badge.space} w-${config.badge.space}`]:
                {},
            },

            [`&.${prefix}-badge-primary`]: {
              [`.${prefix}-button-badge-pulse`]: {
                [`@apply bg-${config.badge.primary}`]: {},
              },

              [`.${prefix}-button-badge-inner`]: {
                [`@apply bg-${config.badge.primary}`]: {},
              },
            },
            [`&.${prefix}-badge-info`]: {
              [`.${prefix}-button-badge-pulse`]: {
                [`@apply bg-${config.badge.info}`]: {},
              },

              [`.${prefix}-button-badge-inner`]: {
                [`@apply bg-${config.badge.info}`]: {},
              },
            },
            [`&.${prefix}-badge-success`]: {
              [`.${prefix}-button-badge-pulse`]: {
                [`@apply bg-${config.badge.success}`]: {},
              },

              [`.${prefix}-button-badge-inner`]: {
                [`@apply bg-${config.badge.success}`]: {},
              },
            },
            [`&.${prefix}-badge-warning`]: {
              [`.${prefix}-button-badge-pulse`]: {
                [`@apply bg-${config.badge.warning}`]: {},
              },

              [`.${prefix}-button-badge-inner`]: {
                [`@apply bg-${config.badge.warning}`]: {},
              },
            },
            [`&.${prefix}-badge-danger`]: {
              [`.${prefix}-button-badge-pulse`]: {
                [`@apply bg-${config.badge.danger}`]: {},
              },

              [`.${prefix}-button-badge-inner`]: {
                [`@apply bg-${config.badge.danger}`]: {},
              },
            },
          },
          [`&.${prefix}-button-loading`]: {
            [`@apply !text-transparent`]: {},
          },
          [`&.${prefix}-button-small`]: {
            [`@apply h-8 px-3 py-1 text-${config.buttonSmall.text}`]: {},

            [`.${prefix}-button-icon`]: {
              [`@apply w-${config.buttonSmall.iconSize} h-${config.buttonSmall.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-button-medium`]: {
            [`@apply h-10 px-5 py-2 text-${config.buttonMedium.text}`]: {},

            [`.${prefix}-button-icon`]: {
              [`@apply w-${config.buttonMedium.iconSize} h-${config.buttonMedium.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-button-large`]: {
            [`@apply h-12 px-6 py-2 text-${config.buttonLarge.text}`]: {},

            [`.${prefix}-button-icon`]: {
              [`@apply w-${config.buttonLarge.iconSize} h-${config.buttonLarge.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-button-big`]: {
            [`@apply h-14 px-10 py-4 text-${config.buttonBig.text}`]: {},

            [`.${prefix}-button-icon`]: {
              [`@apply w-${config.buttonBig.iconSize} h-${config.buttonBig.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-button-rounded`]: {
            [`@apply rounded-${config.buttonRounded}`]: {},
          },
          [`&.${prefix}-button-smooth`]: {
            [`@apply rounded-${config.buttonSmooth}`]: {},
          },
          [`&.${prefix}-button-curved`]: {
            [`@apply rounded-${config.buttonCurved}`]: {},
          },
          [`&.${prefix}-button-full`]: {
            [`@apply rounded-${config.buttonFull.rounded}`]: {},

            [`.${prefix}-button-badge`]: {
              [`@apply flex absolute h-${config.buttonFull.badgeSize} w-${config.buttonFull.badgeSize} top-0 -end-1 -mt-0.5 me-2`]:
                {},
            },
          },
          [`&.${prefix}-button-solid`]: {
            [`&.${prefix}-button-default`]: {
              [`@apply text-${config.buttonSolid.default.text} bg-${config.buttonSolid.default.bg} border border-${config.buttonSolid.default.border} dark:text-${config.buttonSolid.default.textDark} dark:bg-${config.buttonSolid.default.bgDark} dark:border-${config.buttonSolid.default.borderDark} dark:hover:enabled:bg-${config.buttonSolid.default.bgHoverEnabledDark} dark:focus-visible:bg-${config.buttonSolid.default.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.default.bgActiveEnabledDark} hover:enabled:bg-${config.buttonSolid.default.bgHoverEnabled} focus-visible:bg-${config.buttonSolid.default.bgFocusVisible} active:enabled:bg-${config.buttonSolid.default.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.default.shadow.size} enabled:shadow-${config.buttonSolid.default.shadow.enable} dark:enabled:shadow-${config.buttonSolid.default.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.default.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.default.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.default.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-light, &.${prefix}-button-muted`]: {
              [`@apply text-${config.buttonSolid.lightOrMuted.text} bg-${config.buttonSolid.lightOrMuted.bg} border border-${config.buttonSolid.lightOrMuted.border} dark:text-${config.buttonSolid.lightOrMuted.textDark} dark:bg-${config.buttonSolid.lightOrMuted.bgDark} dark:border-${config.buttonSolid.lightOrMuted.borderDark} dark:hover:enabled:bg-${config.buttonSolid.lightOrMuted.bgHoverEnabledDark} dark:focus-visible:bg-${config.buttonSolid.lightOrMuted.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.lightOrMuted.bgActiveEnabledDark} hover:enabled:bg-${config.buttonSolid.lightOrMuted.bgHoverEnabled} focus-visible:bg-${config.buttonSolid.lightOrMuted.bgFocusVisible} active:enabled:bg-${config.buttonSolid.lightOrMuted.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.size} enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.enable} dark:enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-primary`]: {
              [`@apply bg-${config.buttonSolid.primary.bg} dark:bg-${config.buttonSolid.primary.bgDark} hover:enabled:bg-${config.buttonSolid.primary.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.primary.bgHoverEnabledDark} text-${config.buttonSolid.primary.text} focus-visible:outline-${config.buttonSolid.primary.focusVisibleOutline} focus-within:outline-${config.buttonSolid.primary.focusWithinOutline} focus-visible:bg-${config.buttonSolid.primary.bgFocusVisible} active:enabled:bg-${config.buttonSolid.primary.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.primary.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.primary.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.primary.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.primary.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.primary.shadow.size} enabled:shadow-${config.buttonSolid.primary.shadow.enable} dark:enabled:shadow-${config.buttonSolid.primary.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-info`]: {
              [`@apply bg-${config.buttonSolid.info.bg} dark:bg-${config.buttonSolid.info.bgDark} hover:enabled:bg-${config.buttonSolid.info.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.info.bgHoverEnabledDark} text-${config.buttonSolid.info.text} focus-visible:outline-${config.buttonSolid.info.focusVisibleOutline} focus-within:outline-${config.buttonSolid.info.focusWithinOutline} focus-visible:bg-${config.buttonSolid.info.bgFocusVisible} active:enabled:bg-${config.buttonSolid.info.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.info.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.info.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.info.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.info.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.info.shadow.size} enabled:shadow-${config.buttonSolid.info.shadow.enable} dark:enabled:shadow-${config.buttonSolid.info.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.info.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.info.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.info.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-success`]: {
              [`@apply bg-${config.buttonSolid.success.bg} dark:bg-${config.buttonSolid.success.bgDark} hover:enabled:bg-${config.buttonSolid.success.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.success.bgHoverEnabledDark} text-${config.buttonSolid.success.text} focus-visible:outline-${config.buttonSolid.success.focusVisibleOutline} focus-within:outline-${config.buttonSolid.success.focusWithinOutline} focus-visible:bg-${config.buttonSolid.success.bgFocusVisible} active:enabled:bg-${config.buttonSolid.success.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.success.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.success.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.success.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.success.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.success.shadow.size} enabled:shadow-${config.buttonSolid.success.shadow.enable} dark:enabled:shadow-${config.buttonSolid.success.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.success.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.success.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.success.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-warning`]: {
              [`@apply bg-${config.buttonSolid.warning.bg} dark:bg-${config.buttonSolid.warning.bgDark} hover:enabled:bg-${config.buttonSolid.warning.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.warning.bgHoverEnabledDark} text-${config.buttonSolid.warning.text} focus-visible:outline-${config.buttonSolid.warning.focusVisibleOutline} focus-within:outline-${config.buttonSolid.warning.focusWithinOutline} focus-visible:bg-${config.buttonSolid.warning.bgFocusVisible} active:enabled:bg-${config.buttonSolid.warning.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.warning.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.warning.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.warning.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.warning.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.warning.shadow.size} enabled:shadow-${config.buttonSolid.warning.shadow.enable} dark:enabled:shadow-${config.buttonSolid.warning.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-danger`]: {
              [`@apply bg-${config.buttonSolid.danger.bg} dark:bg-${config.buttonSolid.danger.bgDark} hover:enabled:bg-${config.buttonSolid.danger.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.danger.bgHoverEnabledDark} text-${config.buttonSolid.danger.text} focus-visible:outline-${config.buttonSolid.danger.focusVisibleOutline} focus-within:outline-${config.buttonSolid.danger.focusWithinOutline} focus-visible:bg-${config.buttonSolid.danger.bgFocusVisible} active:enabled:bg-${config.buttonSolid.danger.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.danger.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.danger.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.danger.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.danger.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.danger.shadow.size} enabled:shadow-${config.buttonSolid.danger.shadow.enable} dark:enabled:shadow-${config.buttonSolid.danger.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.enableDark}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-button-pastel`]: {
            [`&.${prefix}-button-default, &.${prefix}-button-muted`]: {
              [`@apply bg-${config.buttonPastel.defaultOrMuted.bg} hover:enabled:bg-${config.buttonPastel.defaultOrMuted.bgHoverEnabled} text-${config.buttonPastel.defaultOrMuted.text} dark:text-${config.buttonPastel.defaultOrMuted.textDark} focus-visible:bg-${config.buttonPastel.defaultOrMuted.bgFocusVisible} active:enabled:bg-${config.buttonPastel.defaultOrMuted.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}-button-light`]: {
              [`@apply bg-${config.buttonPastel.light.bg} dark:bg-${config.buttonPastel.light.bgDark} hover:enabled:bg-${config.buttonPastel.light.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonPastel.light.bgHoverEnabledDark} text-${config.buttonPastel.light.text} dark:text-${config.buttonPastel.light.textDark} focus-visible:bg-${config.buttonPastel.light.bgFocusVisible} dark:focus-visible:bg-${config.buttonPastel.light.bgFocusVisibleDark} active:enabled:bg-${config.buttonPastel.light.bgActiveEnabled} dark:active:enabled:bg-${config.buttonPastel.light.bgActiveEnabledDark}`]:
                {},
            },
            [`&.${prefix}-button-primary`]: {
              [`@apply bg-${config.buttonPastel.primary.bg} hover:enabled:bg-${config.buttonPastel.primary.bgHoverEnabled} text-${config.buttonPastel.primary.text} focus-visible:bg-${config.buttonPastel.primary.bgFocusVisible} active:enabled:bg-${config.buttonPastel.primary.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}-button-info`]: {
              [`@apply bg-${config.buttonPastel.info.bg} hover:enabled:bg-${config.buttonPastel.info.bgHoverEnabled} text-${config.buttonPastel.info.text} focus-visible:bg-${config.buttonPastel.info.bgFocusVisible} active:enabled:bg-${config.buttonPastel.info.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}-button-success`]: {
              [`@apply bg-${config.buttonPastel.success.bg} hover:enabled:bg-${config.buttonPastel.success.bgHoverEnabled} text-${config.buttonPastel.success.text} focus-visible:bg-${config.buttonPastel.success.bgFocusVisible} active:enabled:bg-${config.buttonPastel.success.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}-button-warning`]: {
              [`@apply bg-${config.buttonPastel.warning.bg} hover:enabled:bg-${config.buttonPastel.warning.bgHoverEnabled} text-${config.buttonPastel.warning.text} focus-visible:bg-${config.buttonPastel.warning.bgFocusVisible} active:enabled:bg-${config.buttonPastel.warning.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}-button-danger`]: {
              [`@apply bg-${config.buttonPastel.danger.bg} hover:enabled:bg-${config.buttonPastel.danger.bgHoverEnabled} text-${config.buttonPastel.danger.text} focus-visible:bg-${config.buttonPastel.danger.bgFocusVisible} active:enabled:bg-${config.buttonPastel.danger.bgActiveEnabled}`]:
                {},
            },
          },
          [`&.${prefix}-button-outline`]: {
            [`&.${prefix}-button-default`]: {
              [`@apply text-${config.buttonOutline.default.text} dark:text-${config.buttonOutline.default.textDark} hover:enabled:text-${config.buttonOutline.default.hoverEnabled} dark:hover:enabled:text-${config.buttonOutline.default.hoverEnabledDark} border-2 border-${config.buttonOutline.default.border} dark:border-${config.buttonOutline.default.borderDark} hover:enabled:bg-${config.buttonOutline.default.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonOutline.default.bgHoverEnabledDark} focus-within:outline-${config.buttonOutline.default.focusWithin} dark:focus-within:outline-${config.buttonOutline.default.focusWithinDark} focus-visible:outline-${config.buttonOutline.default.focusVisible} dark:focus-visible:outline-${config.buttonOutline.default.focusVisibleDark} focus-visible:bg-${config.buttonOutline.default.bgFocusVisible} dark:focus-visible:bg-${config.buttonOutline.default.bgFocusVisibleDark} focus-visible:text-${config.buttonOutline.default.textFocusVisible} dark:focus-visible:text-${config.buttonOutline.default.textFocusVisibleDark} active:enabled:text-${config.buttonOutline.default.textActiveEnabled} dark:active:enabled:text-${config.buttonOutline.default.textActiveEnabledDark} active:enabled:bg-${config.buttonOutline.default.bgActiveEnabled} dark:active:enabled:bg-${config.buttonOutline.default.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.default.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.default.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.default.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-light`]: {
              [`@apply text-${config.buttonOutline.light.text} hover:enabled:text-${config.buttonOutline.light.hoverEnabled} border-2 border-${config.buttonOutline.light.border} hover:enabled:bg-${config.buttonOutline.light.bgHoverEnabled} focus-within:outline-${config.buttonOutline.light.focusWithin} focus-visible:outline-${config.buttonOutline.light.focusVisible} focus-visible:bg-${config.buttonOutline.light.bgFocusVisible} focus-visible:text-${config.buttonOutline.light.textFocusVisible} active:enabled:text-${config.buttonOutline.light.textActiveEnabled} active:enabled:bg-${config.buttonOutline.light.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.light.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.light.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.light.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-muted`]: {
              [`@apply text-${config.buttonOutline.muted.text} dark:text-${config.buttonOutline.muted.textDark} hover:enabled:text-${config.buttonOutline.muted.hoverEnabled} dark:hover:enabled:text-${config.buttonOutline.muted.hoverEnabledDark} border-2 border-${config.buttonOutline.muted.border} dark:border-${config.buttonOutline.muted.borderDark} hover:enabled:bg-${config.buttonOutline.muted.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonOutline.muted.bgHoverEnabledDark} focus-within:outline-${config.buttonOutline.muted.focusWithin} dark:focus-within:outline-${config.buttonOutline.muted.focusWithinDark} focus-visible:outline-${config.buttonOutline.muted.focusVisible} dark:focus-visible:outline-${config.buttonOutline.muted.focusVisibleDark} focus-visible:bg-${config.buttonOutline.muted.bgFocusVisible} dark:focus-visible:bg-${config.buttonOutline.muted.bgFocusVisibleDark} focus-visible:text-${config.buttonOutline.muted.textFocusVisible} dark:focus-visible:text-${config.buttonOutline.muted.textFocusVisibleDark} active:enabled:text-${config.buttonOutline.muted.textActiveEnabled} dark:active:enabled:text-${config.buttonOutline.muted.textActiveEnabledDark} active:enabled:bg-${config.buttonOutline.muted.bgActiveEnabled} dark:active:enabled:bg-${config.buttonOutline.muted.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-primary`]: {
              [`@apply text-${config.buttonOutline.primary.text} hover:enabled:text-${config.buttonOutline.primary.hoverEnabled} border-2 border-${config.buttonOutline.primary.border} hover:enabled:bg-${config.buttonOutline.primary.bgHoverEnabled} focus-within:outline-${config.buttonOutline.primary.focusWithin} focus-visible:outline-${config.buttonOutline.primary.focusVisible} focus-visible:bg-${config.buttonOutline.primary.bgFocusVisible} focus-visible:text-${config.buttonOutline.primary.focusVisible} active:enabled:text-${config.buttonOutline.primary.textActiveEnabled} active:enabled:bg-${config.buttonOutline.primary.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-info`]: {
              [`@apply text-${config.buttonOutline.info.text} hover:enabled:text-${config.buttonOutline.info.hoverEnabled} border-2 border-${config.buttonOutline.info.border} hover:enabled:bg-${config.buttonOutline.info.bgHoverEnabled} focus-within:outline-${config.buttonOutline.info.focusWithin} focus-visible:outline-${config.buttonOutline.info.focusVisible} focus-visible:bg-${config.buttonOutline.info.bgFocusVisible} focus-visible:text-${config.buttonOutline.info.focusVisible} active:enabled:text-${config.buttonOutline.info.textActiveEnabled} active:enabled:bg-${config.buttonOutline.info.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.info.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.info.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.info.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-success`]: {
              [`@apply text-${config.buttonOutline.success.text} hover:enabled:text-${config.buttonOutline.success.hoverEnabled} border-2 border-${config.buttonOutline.success.border} hover:enabled:bg-${config.buttonOutline.success.bgHoverEnabled} focus-within:outline-${config.buttonOutline.success.focusWithin} focus-visible:outline-${config.buttonOutline.success.focusVisible} focus-visible:bg-${config.buttonOutline.success.bgFocusVisible} focus-visible:text-${config.buttonOutline.success.focusVisible} active:enabled:text-${config.buttonOutline.success.textActiveEnabled} active:enabled:bg-${config.buttonOutline.success.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.success.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.success.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.success.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-warning`]: {
              [`@apply text-${config.buttonOutline.warning.text} hover:enabled:text-${config.buttonOutline.warning.hoverEnabled} border-2 border-${config.buttonOutline.warning.border} hover:enabled:bg-${config.buttonOutline.warning.bgHoverEnabled} focus-within:outline-${config.buttonOutline.warning.focusWithin} focus-visible:outline-${config.buttonOutline.warning.focusVisible} focus-visible:bg-${config.buttonOutline.warning.bgFocusVisible} focus-visible:text-${config.buttonOutline.warning.focusVisible} active:enabled:text-${config.buttonOutline.warning.textActiveEnabled} active:enabled:bg-${config.buttonOutline.warning.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}-button-danger`]: {
              [`@apply text-${config.buttonOutline.danger.text} hover:enabled:text-${config.buttonOutline.danger.hoverEnabled} border-2 border-${config.buttonOutline.danger.border} hover:enabled:bg-${config.buttonOutline.danger.bgHoverEnabled} focus-within:outline-${config.buttonOutline.danger.focusWithin} focus-visible:outline-${config.buttonOutline.danger.focusVisible} focus-visible:bg-${config.buttonOutline.danger.bgFocusVisible} focus-visible:text-${config.buttonOutline.danger.focusVisible} active:enabled:text-${config.buttonOutline.danger.textActiveEnabled} active:enabled:bg-${config.buttonOutline.danger.bgActiveEnabled}`]:
                {},

              [`&.${prefix}-button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.enableDark}`]:
                  {},
              },
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
          button: defaultButtonConfig,
        },
      },
    }
  }
)
