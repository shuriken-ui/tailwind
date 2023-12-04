import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type MessageConfig, defaultConfig, key } from './message.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies MessageConfig

      addComponents({
        [`.${prefix}message`]: {
          [`@apply flex min-h-[3rem] items-center border p-1 pe-2`]: {},

          [`.${prefix}message-icon-outer`]: {
            [`@apply flex h-${config.messageIconOuter.size} w-${config.messageIconOuter.size} shrink-0 items-center justify-center`]:
              {},

            [`.${prefix}message-icon`]: {
              [`@apply h-${config.messageIconOuter.icon.size} w-${config.messageIconOuter.icon.size} text-${config.messageIconOuter.icon.text}`]:
                {},
            },
          },
          [`.${prefix}message-inner-text`]: {
            [`@apply text-${config.messageInnerText.textColor} px-3 block font-${config.messageInnerText.font} text-${config.messageInnerText.text}`]:
              {},
          },
          [`.${prefix}message-close`]: {
            [`@apply ${prefix}focus text-${config.messageClose.text} me-2 ms-auto flex cursor-pointer items-center justify-center p-${config.messageClose.space} rounded-${config.messageClose.rounded} transition-colors duration-${config.messageClose.duration}`]:
              {},
            [`.${prefix}close-icon`]: {
              [`@apply h-${config.messageClose.iconSize} w-${config.messageClose.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}message-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}message-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}message-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}message-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          },
          [`&.${prefix}message-default`]: {
            [`@apply bg-${config.messageDefault.bg} dark:bg-${config.messageDefault.bgDark} border-${config.messageDefault.border} dark:border-${config.messageDefault.borderDark}`]:
              {},
            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageDefault.outer.bg} text-${config.messageDefault.outer.text} dark:bg-${config.messageDefault.outer.bgDark}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageDefault.close.textDark} hover:enabled:bg-${config.messageDefault.close.bgHoverEnabled} focus-visible:bg-${config.messageDefault.close.bgFocusVisible} active:enabled:bg-${config.messageDefault.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageDefault.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageDefault.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageDefault.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-muted`]: {
            [`@apply bg-${config.messageMuted.bg} dark:bg-${config.messageMuted.bgDark} border-${config.messageMuted.border} dark:border-${config.messageMuted.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageMuted.outer.bg} text-${config.messageMuted.outer.text} dark:bg-${config.messageMuted.outer.bgDark}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageMuted.close.textDark} hover:enabled:bg-${config.messageMuted.close.bgHoverEnabled} focus-visible:bg-${config.messageMuted.close.bgFocusVisible} active:enabled:bg-${config.messageMuted.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageMuted.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageMuted.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageMuted.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-primary`]: {
            [`@apply bg-${config.messagePrimary.bg} dark:bg-${config.messagePrimary.bgDark} border-${config.messagePrimary.border} dark:border-${config.messagePrimary.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messagePrimary.outer.bg} text-${config.messagePrimary.outer.text}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messagePrimary.close.textDark} hover:enabled:bg-${config.messagePrimary.close.bgHoverEnabled} focus-visible:bg-${config.messagePrimary.close.bgFocusVisible} active:enabled:bg-${config.messagePrimary.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messagePrimary.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messagePrimary.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messagePrimary.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-info`]: {
            [`@apply bg-${config.messageInfo.bg} dark:bg-${config.messageInfo.bgDark} border-${config.messageInfo.border} dark:border-${config.messageInfo.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageInfo.outer.bg} text-${config.messageInfo.outer.text}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageInfo.close.textDark} hover:enabled:bg-${config.messageInfo.close.bgHoverEnabled} focus-visible:bg-${config.messageInfo.close.bgFocusVisible} active:enabled:bg-${config.messageInfo.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageInfo.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageInfo.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageInfo.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-success`]: {
            [`@apply bg-${config.messageSuccess.bg} dark:bg-${config.messageSuccess.bgDark} border-${config.messageSuccess.border} dark:border-${config.messageSuccess.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageSuccess.outer.bg} text-${config.messageSuccess.outer.text}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageSuccess.close.textDark} hover:enabled:bg-${config.messageSuccess.close.bgHoverEnabled} focus-visible:bg-${config.messageSuccess.close.bgFocusVisible} active:enabled:bg-${config.messageSuccess.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageSuccess.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageSuccess.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageSuccess.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-warning`]: {
            [`@apply bg-${config.messageWarning.bg} dark:bg-${config.messageWarning.bgDark} border-${config.messageWarning.border} dark:border-${config.messageWarning.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageWarning.outer.bg} text-${config.messageWarning.outer.text}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageWarning.close.textDark} hover:enabled:bg-${config.messageWarning.close.bgHoverEnabled} focus-visible:bg-${config.messageWarning.close.bgFocusVisible} active:enabled:bg-${config.messageWarning.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageWarning.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageWarning.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messagePrimary.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}message-danger`]: {
            [`@apply bg-${config.messageDanger.bg} dark:bg-${config.messageDanger.bgDark} border-${config.messageDanger.border} dark:border-${config.messageDanger.borderDark}`]:
              {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply bg-${config.messageDanger.outer.bg} text-${config.messageDanger.outer.text}`]:
                {},
            },
            [`.${prefix}message-inner-text`]: {
              [`@apply dark:text-${config.messageDefault.txtDarkInner}`]: {},
            },
            [`.${prefix}message-close`]: {
              [`@apply dark:text-${config.messageDanger.close.textDark} hover:enabled:bg-${config.messageDanger.close.bgHoverEnabled} focus-visible:bg-${config.messageDanger.close.bgFocusVisible} active:enabled:bg-${config.messageDanger.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageDanger.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageDanger.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageDanger.close.bgActiveEnabledDark}`]:
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
