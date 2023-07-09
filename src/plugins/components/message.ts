import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultMessageConfig = {
  iconOuter: {
    size: '10',
    icon: {
      size: '5',
      text: 'white',
    },
  },
  messageText: {
    text: 'sm',
    textColor: 'muted-800',
    font: 'sans',
  },
  messageClose: {
    text: 'muted-800',
    rounded: 'full',
    duration: '200',
    iconSize: '4',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
  messageDefault: {
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
    outer: {
      bg: 'muted-600',
      text: 'white',
      bgDark: 'muted-900',
    },
    close: {
      textDark: 'muted-500',
      bgHoverEnabled: 'muted-300/50',
      bgHoverEnabledDark: 'muted-500/30',
      bgFocusVisible: 'muted-300/50',
      bgFocusVisibleDark: 'muted-500/30',
      bgActiveEnabled: 'muted-300/20',
      bgActiveEnabledDark: 'muted-500/20',
    },
  },
  messageMuted: {
    bg: 'muted-100',
    bgDark: 'muted-500/10',
    border: 'muted-200',
    borderDark: 'muted-700',
    outer: {
      bg: 'muted-400',
      text: 'white',
      bgDark: 'muted-900',
    },
    close: {
      textDark: 'muted-500',
      bgHoverEnabled: 'muted-300/50',
      bgHoverEnabledDark: 'muted-500/30',
      bgFocusVisible: 'muted-300/50',
      bgFocusVisibleDark: 'muted-500/30',
      bgActiveEnabled: 'muted-300/20',
      bgActiveEnabledDark: 'muted-500/20',
    },
  },
  messagePrimary: {
    bg: 'primary-100',
    bgDark: 'primary-500/10',
    border: 'primary-200',
    borderDark: 'primary-700',
    outer: {
      bg: 'primary-500',
      text: 'white',
    },
    close: {
      textDark: 'primary-500',
      bgHoverEnabled: 'primary-300/50',
      bgHoverEnabledDark: 'primary-500/30',
      bgFocusVisible: 'primary-300/50',
      bgFocusVisibleDark: 'primary-500/30',
      bgActiveEnabled: 'primary-300/20',
      bgActiveEnabledDark: 'primary-500/20',
    },
  },
  messageInfo: {
    bg: 'info-100',
    bgDark: 'info-500/10',
    border: 'info-200',
    borderDark: 'info-700',
    outer: {
      bg: 'info-500',
      text: 'white',
    },
    close: {
      textDark: 'info-500',
      bgHoverEnabled: 'info-300/50',
      bgHoverEnabledDark: 'info-500/30',
      bgFocusVisible: 'info-300/50',
      bgFocusVisibleDark: 'info-500/30',
      bgActiveEnabled: 'info-300/20',
      bgActiveEnabledDark: 'info-500/20',
    },
  },
  messageSuccess: {
    bg: 'success-100',
    bgDark: 'success-500/10',
    border: 'success-200',
    borderDark: 'success-700',
    outer: {
      bg: 'success-500',
      text: 'white',
    },
    close: {
      textDark: 'success-500',
      bgHoverEnabled: 'success-300/50',
      bgHoverEnabledDark: 'success-500/30',
      bgFocusVisible: 'success-300/50',
      bgFocusVisibleDark: 'success-500/30',
      bgActiveEnabled: 'success-300/20',
      bgActiveEnabledDark: 'success-500/20',
    },
  },
  messageWarning: {
    bg: 'warning-100',
    bgDark: 'warning-500/10',
    border: 'warning-200',
    borderDark: 'warning-700',
    outer: {
      bg: 'warning-500',
      text: 'white',
    },
    close: {
      textDark: 'warning-500',
      bgHoverEnabled: 'warning-300/50',
      bgHoverEnabledDark: 'warning-500/30',
      bgFocusVisible: 'warning-300/50',
      bgFocusVisibleDark: 'warning-500/30',
      bgActiveEnabled: 'warning-300/20',
      bgActiveEnabledDark: 'warning-500/20',
    },
  },
  messageDanger: {
    bg: 'danger-100',
    bgDark: 'danger-500/10',
    border: 'danger-200',
    borderDark: 'danger-700',
    outer: {
      bg: 'danger-500',
      text: 'white',
    },
    close: {
      textDark: 'danger-500',
      bgHoverEnabled: 'danger-300/50',
      bgHoverEnabledDark: 'danger-500/30',
      bgFocusVisible: 'danger-300/50',
      bgFocusVisibleDark: 'danger-500/30',
      bgActiveEnabled: 'danger-300/20',
      bgActiveEnabledDark: 'danger-500/20',
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.message'
      ) satisfies typeof defaultMessageConfig

      addComponents({
        [`.${prefix}-message`]: {
          [`@apply flex min-h-[3rem] items-center border p-1 pe-2`]: {},

          [`.${prefix}-message-icon-outer`]: {
            [`@apply flex h-${config.iconOuter.size} w-${config.iconOuter.size} shrink-0 items-center justify-center`]:
              {},

            [`.${prefix}-message-icon`]: {
              [`@apply h-${config.iconOuter.icon.size} w-${config.iconOuter.icon.size} text-${config.iconOuter.icon.text}`]:
                {},
            },
          },
          [`.${prefix}-message-text`]: {
            [`@apply text-${config.messageText.textColor} mx-3 block font-${config.messageText.font} text-${config.messageText.text}`]:
              {},
          },
          [`.${prefix}-message-close`]: {
            [`@apply ${prefix}-focus text-${config.messageClose.text} me-2 ms-auto flex cursor-pointer items-center justify-center p-1 outline-none rounded-${config.messageClose.rounded} transition-colors duration-${config.messageClose.duration}`]:
              {},

            [`.${prefix}-close-icon`]: {
              [`@apply h-${config.messageClose.iconSize} w-${config.messageClose.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-message-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}-message-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}-message-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-message-full`]: {
            [`@apply rounded-${config.rounded.full}`]: {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          },

          [`&.${prefix}-message-default`]: {
            [`@apply bg-${config.messageDefault.bg} dark:bg-${config.messageDefault.bgDark} border-${config.messageDefault.border} dark:border-${config.messageDefault.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageDefault.outer.bg} text-${config.messageDefault.outer.text} dark:bg-${config.messageDefault.outer.bgDark}`]:
                {},
            },
            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messageDefault.close.textDark} hover:enabled:bg-${config.messageDefault.close.bgHoverEnabled} focus-visible:bg-${config.messageDefault.close.bgFocusVisible} active:enabled:bg-${config.messageDefault.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageDefault.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageDefault.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageDefault.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-muted`]: {
            [`@apply bg-${config.messageMuted.bg} dark:bg-${config.messageMuted.bgDark} border-${config.messageMuted.border} dark:border-${config.messageMuted.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageMuted.outer.bg} text-${config.messageMuted.outer.text} dark:bg-${config.messageMuted.outer.bgDark}`]:
                {},
            },
            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messageMuted.close.textDark} hover:enabled:bg-${config.messageMuted.close.bgHoverEnabled} focus-visible:bg-${config.messageMuted.close.bgFocusVisible} active:enabled:bg-${config.messageMuted.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageMuted.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageMuted.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageMuted.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-primary`]: {
            [`@apply bg-${config.messagePrimary.bg} dark:bg-${config.messagePrimary.bgDark} border-${config.messagePrimary.border} dark:border-${config.messagePrimary.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messagePrimary.outer.bg} text-${config.messagePrimary.outer.text}`]:
                {},
            },

            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messagePrimary.close.textDark} hover:enabled:bg-${config.messagePrimary.close.bgHoverEnabled} focus-visible:bg-${config.messagePrimary.close.bgFocusVisible} active:enabled:bg-${config.messagePrimary.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messagePrimary.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messagePrimary.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messagePrimary.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-info`]: {
            [`@apply bg-${config.messageInfo.bg} dark:bg-${config.messageInfo.bgDark} border-${config.messageInfo.border} dark:border-${config.messageInfo.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageInfo.outer.bg} text-${config.messageInfo.outer.text}`]:
                {},
            },

            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messageInfo.close.textDark} hover:enabled:bg-${config.messageInfo.close.bgHoverEnabled} focus-visible:bg-${config.messageInfo.close.bgFocusVisible} active:enabled:bg-${config.messageInfo.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageInfo.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageInfo.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageInfo.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-success`]: {
            [`@apply bg-${config.messageSuccess.bg} dark:bg-${config.messageSuccess.bgDark} border-${config.messageSuccess.border} dark:border-${config.messageSuccess.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageSuccess.outer.bg} text-${config.messageSuccess.outer.text}`]:
                {},
            },

            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messageSuccess.close.textDark} hover:enabled:bg-${config.messageSuccess.close.bgHoverEnabled} focus-visible:bg-${config.messageSuccess.close.bgFocusVisible} active:enabled:bg-${config.messageSuccess.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageSuccess.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageSuccess.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messageSuccess.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-warning`]: {
            [`@apply bg-${config.messageWarning.bg} dark:bg-${config.messageWarning.bgDark} border-${config.messageWarning.border} dark:border-${config.messageWarning.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageWarning.outer.bg} text-${config.messageWarning.outer.text}`]:
                {},
            },

            [`.${prefix}-message-close`]: {
              [`@apply dark:text-${config.messageWarning.close.textDark} hover:enabled:bg-${config.messageWarning.close.bgHoverEnabled} focus-visible:bg-${config.messageWarning.close.bgFocusVisible} active:enabled:bg-${config.messageWarning.close.bgActiveEnabled} dark:hover:enabled:bg-${config.messageWarning.close.bgHoverEnabledDark} dark:focus-visible:bg-${config.messageWarning.close.bgFocusVisibleDark} dark:active:enabled:bg-${config.messagePrimary.close.bgActiveEnabledDark}`]:
                {},
            },
          },
          [`&.${prefix}-message-danger`]: {
            [`@apply bg-${config.messageDanger.bg} dark:bg-${config.messageDanger.bgDark} border-${config.messageDanger.border} dark:border-${config.messageDanger.borderDark}`]:
              {},

            [`.${prefix}-message-icon-outer`]: {
              [`@apply bg-${config.messageDanger.outer.bg} text-${config.messageDanger.outer.text}`]:
                {},
            },
            [`.${prefix}-message-close`]: {
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
          message: defaultMessageConfig,
        },
      },
    }
  }
)
