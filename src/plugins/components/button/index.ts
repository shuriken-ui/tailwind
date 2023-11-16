import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ButtonConfig, defaultConfig, key } from './button.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ButtonConfig

      addComponents({
        [`.${prefix}button`]: {
          [`@apply relative font-sans font-${config.font} leading-5 no-underline inline-flex justify-center items-center space-x-1 ${prefix}focus transition-all duration-${config.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
            {},

          [`.${prefix}button-badge`]: {
            [`@apply flex absolute h-${config.badge.space} w-${config.badge.space} top-0 -end-1 -mt-1`]:
              {},

            [`.${prefix}button-badge-pulse`]: {
              [`@apply absolute inline-flex h-full w-full rounded-full opacity-75`]:
                {},
            },

            [`.${prefix}button-badge-inner`]: {
              [`@apply relative inline-flex rounded-full h-${config.badge.space} w-${config.badge.space}`]:
                {},
            },

            [`&.${prefix}badge-primary`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.primary}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.primary}`]: {},
              },
            },
            [`&.${prefix}badge-info`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.info}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.info}`]: {},
              },
            },
            [`&.${prefix}badge-success`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.success}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.success}`]: {},
              },
            },
            [`&.${prefix}badge-warning`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.warning}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.warning}`]: {},
              },
            },
            [`&.${prefix}badge-danger`]: {
              [`.${prefix}button-badge-pulse`]: {
                [`@apply bg-${config.badge.danger}`]: {},
              },

              [`.${prefix}button-badge-inner`]: {
                [`@apply bg-${config.badge.danger}`]: {},
              },
            },
          },

          // #region Loading
          [`&.${prefix}button-loading`]: {
            [`@apply !text-transparent`]: {},
          },
          // #endregion

          // #region Sizes
          [`&.${prefix}button-small`]: {
            [`@apply h-8 px-3 py-1 text-${config.buttonSmall.text}`]: {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.buttonSmall.iconSize} h-${config.buttonSmall.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}button-medium`]: {
            [`@apply h-10 px-5 py-2 text-${config.buttonMedium.text}`]: {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.buttonMedium.iconSize} h-${config.buttonMedium.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}button-large`]: {
            [`@apply h-12 px-6 py-2 text-${config.buttonLarge.text}`]: {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.buttonLarge.iconSize} h-${config.buttonLarge.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}button-big`]: {
            [`@apply h-14 px-10 py-4 text-${config.buttonBig.text}`]: {},

            [`.${prefix}button-icon`]: {
              [`@apply w-${config.buttonBig.iconSize} h-${config.buttonBig.iconSize}`]:
                {},
            },
          },
          // #endregion

          // #region Shapes
          [`&.${prefix}button-rounded`]: {
            [`@apply rounded-${config.buttonRounded}`]: {},
          },
          [`&.${prefix}button-smooth`]: {
            [`@apply rounded-${config.buttonSmooth}`]: {},
          },
          [`&.${prefix}button-curved`]: {
            [`@apply rounded-${config.buttonCurved}`]: {},
          },
          [`&.${prefix}button-full`]: {
            [`@apply rounded-${config.buttonFull.rounded}`]: {},

            [`.${prefix}button-badge`]: {
              [`@apply flex absolute h-${config.buttonFull.badgeSize} w-${config.buttonFull.badgeSize} top-0 -end-1 -mt-0.5 me-2`]:
                {},
            },
          },
          // #endregion

          // #region Flavors
          [`&.${prefix}button-solid`]: {
            [`&.${prefix}button-default`]: {
              [`@apply text-${config.buttonSolid.default.text} bg-${config.buttonSolid.default.bg} border border-${config.buttonSolid.default.border} dark:text-${config.buttonSolid.default.textDark} dark:bg-${config.buttonSolid.default.bgDark} dark:border-${config.buttonSolid.default.borderDark} dark:hover:enabled:bg-${config.buttonSolid.default.bgHoverEnabledDark} dark:focus-visible:bg-${config.buttonSolid.default.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.default.bgActiveEnabledDark} hover:enabled:bg-${config.buttonSolid.default.bgHoverEnabled} focus-visible:bg-${config.buttonSolid.default.bgFocusVisible} active:enabled:bg-${config.buttonSolid.default.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.default.shadow.size} enabled:shadow-${config.buttonSolid.default.shadow.enable} dark:enabled:shadow-${config.buttonSolid.default.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.default.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.default.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.default.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-light, &.${prefix}button-muted`]: {
              [`@apply text-${config.buttonSolid.lightOrMuted.text} bg-${config.buttonSolid.lightOrMuted.bg} border border-${config.buttonSolid.lightOrMuted.border} dark:text-${config.buttonSolid.lightOrMuted.textDark} dark:bg-${config.buttonSolid.lightOrMuted.bgDark} dark:border-${config.buttonSolid.lightOrMuted.borderDark} dark:hover:enabled:bg-${config.buttonSolid.lightOrMuted.bgHoverEnabledDark} dark:focus-visible:bg-${config.buttonSolid.lightOrMuted.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.lightOrMuted.bgActiveEnabledDark} hover:enabled:bg-${config.buttonSolid.lightOrMuted.bgHoverEnabled} focus-visible:bg-${config.buttonSolid.lightOrMuted.bgFocusVisible} active:enabled:bg-${config.buttonSolid.lightOrMuted.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.size} enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.enable} dark:enabled:shadow-${config.buttonSolid.lightOrMuted.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.lightOrMuted.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-primary`]: {
              [`@apply bg-${config.buttonSolid.primary.bg} dark:bg-${config.buttonSolid.primary.bgDark} hover:enabled:bg-${config.buttonSolid.primary.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.primary.bgHoverEnabledDark} text-${config.buttonSolid.primary.text} focus-visible:outline-${config.buttonSolid.primary.focusVisibleOutline} focus-within:outline-${config.buttonSolid.primary.focusWithinOutline} focus-visible:bg-${config.buttonSolid.primary.bgFocusVisible} active:enabled:bg-${config.buttonSolid.primary.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.primary.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.primary.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.primary.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.primary.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.primary.shadow.size} enabled:shadow-${config.buttonSolid.primary.shadow.enable} dark:enabled:shadow-${config.buttonSolid.primary.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.primary.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-info`]: {
              [`@apply bg-${config.buttonSolid.info.bg} dark:bg-${config.buttonSolid.info.bgDark} hover:enabled:bg-${config.buttonSolid.info.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.info.bgHoverEnabledDark} text-${config.buttonSolid.info.text} focus-visible:outline-${config.buttonSolid.info.focusVisibleOutline} focus-within:outline-${config.buttonSolid.info.focusWithinOutline} focus-visible:bg-${config.buttonSolid.info.bgFocusVisible} active:enabled:bg-${config.buttonSolid.info.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.info.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.info.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.info.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.info.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.info.shadow.size} enabled:shadow-${config.buttonSolid.info.shadow.enable} dark:enabled:shadow-${config.buttonSolid.info.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.info.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.info.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.info.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-success`]: {
              [`@apply bg-${config.buttonSolid.success.bg} dark:bg-${config.buttonSolid.success.bgDark} hover:enabled:bg-${config.buttonSolid.success.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.success.bgHoverEnabledDark} text-${config.buttonSolid.success.text} focus-visible:outline-${config.buttonSolid.success.focusVisibleOutline} focus-within:outline-${config.buttonSolid.success.focusWithinOutline} focus-visible:bg-${config.buttonSolid.success.bgFocusVisible} active:enabled:bg-${config.buttonSolid.success.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.success.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.success.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.success.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.success.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.success.shadow.size} enabled:shadow-${config.buttonSolid.success.shadow.enable} dark:enabled:shadow-${config.buttonSolid.success.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.success.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.success.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.success.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-warning`]: {
              [`@apply bg-${config.buttonSolid.warning.bg} dark:bg-${config.buttonSolid.warning.bgDark} hover:enabled:bg-${config.buttonSolid.warning.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.warning.bgHoverEnabledDark} text-${config.buttonSolid.warning.text} focus-visible:outline-${config.buttonSolid.warning.focusVisibleOutline} focus-within:outline-${config.buttonSolid.warning.focusWithinOutline} focus-visible:bg-${config.buttonSolid.warning.bgFocusVisible} active:enabled:bg-${config.buttonSolid.warning.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.warning.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.warning.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.warning.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.warning.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.warning.shadow.size} enabled:shadow-${config.buttonSolid.warning.shadow.enable} dark:enabled:shadow-${config.buttonSolid.warning.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.warning.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-danger`]: {
              [`@apply bg-${config.buttonSolid.danger.bg} dark:bg-${config.buttonSolid.danger.bgDark} hover:enabled:bg-${config.buttonSolid.danger.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonSolid.danger.bgHoverEnabledDark} text-${config.buttonSolid.danger.text} focus-visible:outline-${config.buttonSolid.danger.focusVisibleOutline} focus-within:outline-${config.buttonSolid.danger.focusWithinOutline} focus-visible:bg-${config.buttonSolid.danger.bgFocusVisible} active:enabled:bg-${config.buttonSolid.danger.bgActiveEnabled} dark:focus-visible:outline-${config.buttonSolid.danger.focusVisibleOutlineDark}  dark:focus-within:outline-${config.buttonSolid.danger.focusWithinOutlineDark} dark:focus-visible:bg-${config.buttonSolid.danger.bgFocusVisibleDark} dark:active:enabled:bg-${config.buttonSolid.danger.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow`]: {
                [`@apply enabled:shadow-${config.buttonSolid.danger.shadow.size} enabled:shadow-${config.buttonSolid.danger.shadow.enable} dark:enabled:shadow-${config.buttonSolid.danger.shadow.enableDark}`]:
                  {},
              },

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.size} hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonSolid.danger.shadowHover.enableDark}`]:
                  {},
              },
            },
          },
          [`&.${prefix}button-pastel`]: {
            [`&.${prefix}button-default, &.${prefix}button-muted`]: {
              [`@apply bg-${config.buttonPastel.defaultOrMuted.bg} hover:enabled:bg-${config.buttonPastel.defaultOrMuted.bgHoverEnabled} text-${config.buttonPastel.defaultOrMuted.text} dark:text-${config.buttonPastel.defaultOrMuted.textDark} focus-visible:bg-${config.buttonPastel.defaultOrMuted.bgFocusVisible} active:enabled:bg-${config.buttonPastel.defaultOrMuted.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}button-light`]: {
              [`@apply bg-${config.buttonPastel.light.bg} dark:bg-${config.buttonPastel.light.bgDark} hover:enabled:bg-${config.buttonPastel.light.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonPastel.light.bgHoverEnabledDark} text-${config.buttonPastel.light.text} dark:text-${config.buttonPastel.light.textDark} focus-visible:bg-${config.buttonPastel.light.bgFocusVisible} dark:focus-visible:bg-${config.buttonPastel.light.bgFocusVisibleDark} active:enabled:bg-${config.buttonPastel.light.bgActiveEnabled} dark:active:enabled:bg-${config.buttonPastel.light.bgActiveEnabledDark}`]:
                {},
            },
            [`&.${prefix}button-primary`]: {
              [`@apply bg-${config.buttonPastel.primary.bg} hover:enabled:bg-${config.buttonPastel.primary.bgHoverEnabled} text-${config.buttonPastel.primary.text} focus-visible:bg-${config.buttonPastel.primary.bgFocusVisible} active:enabled:bg-${config.buttonPastel.primary.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}button-info`]: {
              [`@apply bg-${config.buttonPastel.info.bg} hover:enabled:bg-${config.buttonPastel.info.bgHoverEnabled} text-${config.buttonPastel.info.text} focus-visible:bg-${config.buttonPastel.info.bgFocusVisible} active:enabled:bg-${config.buttonPastel.info.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}button-success`]: {
              [`@apply bg-${config.buttonPastel.success.bg} hover:enabled:bg-${config.buttonPastel.success.bgHoverEnabled} text-${config.buttonPastel.success.text} focus-visible:bg-${config.buttonPastel.success.bgFocusVisible} active:enabled:bg-${config.buttonPastel.success.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}button-warning`]: {
              [`@apply bg-${config.buttonPastel.warning.bg} hover:enabled:bg-${config.buttonPastel.warning.bgHoverEnabled} text-${config.buttonPastel.warning.text} focus-visible:bg-${config.buttonPastel.warning.bgFocusVisible} active:enabled:bg-${config.buttonPastel.warning.bgActiveEnabled}`]:
                {},
            },
            [`&.${prefix}button-danger`]: {
              [`@apply bg-${config.buttonPastel.danger.bg} hover:enabled:bg-${config.buttonPastel.danger.bgHoverEnabled} text-${config.buttonPastel.danger.text} focus-visible:bg-${config.buttonPastel.danger.bgFocusVisible} active:enabled:bg-${config.buttonPastel.danger.bgActiveEnabled}`]:
                {},
            },
          },
          [`&.${prefix}button-outline`]: {
            [`&.${prefix}button-default`]: {
              [`@apply text-${config.buttonOutline.default.text} dark:text-${config.buttonOutline.default.textDark} hover:enabled:text-${config.buttonOutline.default.hoverEnabled} dark:hover:enabled:text-${config.buttonOutline.default.hoverEnabledDark} border-2 border-${config.buttonOutline.default.border} dark:border-${config.buttonOutline.default.borderDark} hover:enabled:bg-${config.buttonOutline.default.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonOutline.default.bgHoverEnabledDark} focus-within:outline-${config.buttonOutline.default.focusWithin} dark:focus-within:outline-${config.buttonOutline.default.focusWithinDark} focus-visible:outline-${config.buttonOutline.default.focusVisible} dark:focus-visible:outline-${config.buttonOutline.default.focusVisibleDark} focus-visible:bg-${config.buttonOutline.default.bgFocusVisible} dark:focus-visible:bg-${config.buttonOutline.default.bgFocusVisibleDark} focus-visible:text-${config.buttonOutline.default.textFocusVisible} dark:focus-visible:text-${config.buttonOutline.default.textFocusVisibleDark} active:enabled:text-${config.buttonOutline.default.textActiveEnabled} dark:active:enabled:text-${config.buttonOutline.default.textActiveEnabledDark} active:enabled:bg-${config.buttonOutline.default.bgActiveEnabled} dark:active:enabled:bg-${config.buttonOutline.default.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.default.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.default.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.default.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-light`]: {
              [`@apply text-${config.buttonOutline.light.text} hover:enabled:text-${config.buttonOutline.light.hoverEnabled} border-2 border-${config.buttonOutline.light.border} hover:enabled:bg-${config.buttonOutline.light.bgHoverEnabled} focus-within:outline-${config.buttonOutline.light.focusWithin} focus-visible:outline-${config.buttonOutline.light.focusVisible} focus-visible:bg-${config.buttonOutline.light.bgFocusVisible} focus-visible:text-${config.buttonOutline.light.textFocusVisible} active:enabled:text-${config.buttonOutline.light.textActiveEnabled} active:enabled:bg-${config.buttonOutline.light.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.light.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.light.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.light.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-muted`]: {
              [`@apply text-${config.buttonOutline.muted.text} dark:text-${config.buttonOutline.muted.textDark} hover:enabled:text-${config.buttonOutline.muted.hoverEnabled} dark:hover:enabled:text-${config.buttonOutline.muted.hoverEnabledDark} border-2 border-${config.buttonOutline.muted.border} dark:border-${config.buttonOutline.muted.borderDark} hover:enabled:bg-${config.buttonOutline.muted.bgHoverEnabled} dark:hover:enabled:bg-${config.buttonOutline.muted.bgHoverEnabledDark} focus-within:outline-${config.buttonOutline.muted.focusWithin} dark:focus-within:outline-${config.buttonOutline.muted.focusWithinDark} focus-visible:outline-${config.buttonOutline.muted.focusVisible} dark:focus-visible:outline-${config.buttonOutline.muted.focusVisibleDark} focus-visible:bg-${config.buttonOutline.muted.bgFocusVisible} dark:focus-visible:bg-${config.buttonOutline.muted.bgFocusVisibleDark} focus-visible:text-${config.buttonOutline.muted.textFocusVisible} dark:focus-visible:text-${config.buttonOutline.muted.textFocusVisibleDark} active:enabled:text-${config.buttonOutline.muted.textActiveEnabled} dark:active:enabled:text-${config.buttonOutline.muted.textActiveEnabledDark} active:enabled:bg-${config.buttonOutline.muted.bgActiveEnabled} dark:active:enabled:bg-${config.buttonOutline.muted.bgActiveEnabledDark}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.muted.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-primary`]: {
              [`@apply text-${config.buttonOutline.primary.text} hover:enabled:text-${config.buttonOutline.primary.hoverEnabled} border-2 border-${config.buttonOutline.primary.border} hover:enabled:bg-${config.buttonOutline.primary.bgHoverEnabled} focus-within:outline-${config.buttonOutline.primary.focusWithin} focus-visible:outline-${config.buttonOutline.primary.focusVisible} focus-visible:bg-${config.buttonOutline.primary.bgFocusVisible} focus-visible:text-${config.buttonOutline.primary.focusVisible} active:enabled:text-${config.buttonOutline.primary.textActiveEnabled} active:enabled:bg-${config.buttonOutline.primary.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.primary.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-info`]: {
              [`@apply text-${config.buttonOutline.info.text} hover:enabled:text-${config.buttonOutline.info.hoverEnabled} border-2 border-${config.buttonOutline.info.border} hover:enabled:bg-${config.buttonOutline.info.bgHoverEnabled} focus-within:outline-${config.buttonOutline.info.focusWithin} focus-visible:outline-${config.buttonOutline.info.focusVisible} focus-visible:bg-${config.buttonOutline.info.bgFocusVisible} focus-visible:text-${config.buttonOutline.info.focusVisible} active:enabled:text-${config.buttonOutline.info.textActiveEnabled} active:enabled:bg-${config.buttonOutline.info.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.info.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.info.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.info.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-success`]: {
              [`@apply text-${config.buttonOutline.success.text} hover:enabled:text-${config.buttonOutline.success.hoverEnabled} border-2 border-${config.buttonOutline.success.border} hover:enabled:bg-${config.buttonOutline.success.bgHoverEnabled} focus-within:outline-${config.buttonOutline.success.focusWithin} focus-visible:outline-${config.buttonOutline.success.focusVisible} focus-visible:bg-${config.buttonOutline.success.bgFocusVisible} focus-visible:text-${config.buttonOutline.success.focusVisible} active:enabled:text-${config.buttonOutline.success.textActiveEnabled} active:enabled:bg-${config.buttonOutline.success.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.success.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.success.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.success.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-warning`]: {
              [`@apply text-${config.buttonOutline.warning.text} hover:enabled:text-${config.buttonOutline.warning.hoverEnabled} border-2 border-${config.buttonOutline.warning.border} hover:enabled:bg-${config.buttonOutline.warning.bgHoverEnabled} focus-within:outline-${config.buttonOutline.warning.focusWithin} focus-visible:outline-${config.buttonOutline.warning.focusVisible} focus-visible:bg-${config.buttonOutline.warning.bgFocusVisible} focus-visible:text-${config.buttonOutline.warning.focusVisible} active:enabled:text-${config.buttonOutline.warning.textActiveEnabled} active:enabled:bg-${config.buttonOutline.warning.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.warning.shadowHover.enableDark}`]:
                  {},
              },
            },
            [`&.${prefix}button-danger`]: {
              [`@apply text-${config.buttonOutline.danger.text} hover:enabled:text-${config.buttonOutline.danger.hoverEnabled} border-2 border-${config.buttonOutline.danger.border} hover:enabled:bg-${config.buttonOutline.danger.bgHoverEnabled} focus-within:outline-${config.buttonOutline.danger.focusWithin} focus-visible:outline-${config.buttonOutline.danger.focusVisible} focus-visible:bg-${config.buttonOutline.danger.bgFocusVisible} focus-visible:text-${config.buttonOutline.danger.focusVisible} active:enabled:text-${config.buttonOutline.danger.textActiveEnabled} active:enabled:bg-${config.buttonOutline.danger.bgActiveEnabled}`]:
                {},

              [`&.${prefix}button-shadow-hover`]: {
                [`@apply hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.size} hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.enable} dark:hover:enabled:shadow-${config.buttonOutline.danger.shadowHover.enableDark}`]:
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
          [key]: defaultConfig,
        },
      },
    }
  },
)
