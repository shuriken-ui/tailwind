import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultDropdownConfig = {
  textPosition: 'start',
  contextButton: {
    ringOffsetDark: 'muted-900',
    size: '9',
    rounded: 'full',
    duration: '300',
    ringGroupHover: 'offset-4',
    inner: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
      size: '9',
      rounded: 'full',
    },
    icon: {
      text: 'muted-400',
      size: '5',
      duration: '300',
    },
  },
  textButton: {
    text: 'muted-400',
    inner: {
      font: 'sans',
    },
  },
  chevron: {
    size: '4',
    duration: '300',
  },
  dropdownMenu: {
    shadow: 'lg',
    shadowColor: 'muted-500/10',
    shadowColorDark: 'muted-800/10',
    headerTitle: {
      font: 'sans',
      fontSize: 'medium',
      text: 'muted-500',
      textDark: 'muted-200',
      textSize: 'xs',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
    },
    white: {
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    whiteContrast: {
      bg: 'white',
      bgDark: 'muted-950',
      border: 'muted-200',
      borderDark: 'muted-800',
    },
    muted: {
      bg: 'muted-100',
      bgDark: 'muted-800',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950',
      border: 'muted-200',
      borderDark: 'muted-800',
    },
    primary: {
      bg: 'primary-500/10',
      border: 'primary-500',
    },
    info: {
      bg: 'info-500/10',
      border: 'info-500',
    },
    success: {
      bg: 'success-500/10',
      border: 'success-500',
    },
    warning: {
      bg: 'warning-500/10',
      border: 'warning-500',
    },
    danger: {
      bg: 'danger-500/10',
      border: 'danger-500',
    },
  },
  hover: {
    ring: 'muted-200',
    ringDark: 'muted-700/70',
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
        'shurikenUi.dropdown',
      ) satisfies typeof defaultDropdownConfig

      addComponents({
        [`.${prefix}dropdown`]: {
          [`@apply text-${config.textPosition}`]: {},

          [`.${prefix}menu`]: {
            [`@apply relative inline-block`]: {},
          },
          [`.${prefix}menu-content`]: {
            [`@apply p-2`]: {},
          },
          [`.${prefix}context-button`]: {
            [`@apply dark:ring-offset-${config.contextButton.ringOffsetDark} inline-flex h-${config.contextButton.size} w-${config.contextButton.size} items-center justify-center rounded-${config.contextButton.rounded} ring-1 ring-transparent transition-all duration-${config.contextButton.duration} group-hover:ring-${config.contextButton.ringGroupHover}`]:
              {},
            [`.${prefix}context-button-inner`]: {
              [`@apply border-${config.contextButton.inner.border} dark:border-${config.contextButton.inner.borderDark} dark:bg-${config.contextButton.inner.bgDark} flex h-${config.contextButton.inner.size} w-${config.contextButton.inner.size} items-center justify-center rounded-${config.contextButton.inner.rounded} border bg-${config.contextButton.inner.bg}`]:
                {},
            },
            [`.${prefix}context-icon`]: {
              [`@apply text-${config.contextButton.icon.text} h-${config.contextButton.icon.size} w-${config.contextButton.icon.size} transition-transform duration-${config.contextButton.icon.duration}`]:
                {},
            },
          },
          [`.${prefix}text-button`]: {
            [`@apply flex items-center space-x-1 text-${config.textButton.text}`]:
              {},
            [`.${prefix}text-button-inner`]: {
              [`@apply font-${config.textButton.inner.font}`]: {},
            },
          },
          [`.${prefix}chevron`]: {
            [`@apply h-${config.chevron.size} w-${config.chevron.size} transition-transform duration-${config.chevron.duration}`]:
              {},
          },
          [`.${prefix}dropdown-menu`]: {
            [`@apply absolute z-50 mt-2 shadow-${config.dropdownMenu.shadow} shadow-${config.dropdownMenu.shadowColor} dark:shadow-${config.dropdownMenu.shadowColorDark} focus:outline-none`]:
              {},
            [`.${prefix}menu-header`]: {
              [`@apply px-4 pt-5`]: {},
            },
            [`.${prefix}menu-header-inner`]: {
              [`@apply relative flex items-center justify-between`]: {},
            },
            [`.${prefix}menu-header-title`]: {
              [`@apply font-${config.dropdownMenu.headerTitle.font} font-${config.dropdownMenu.headerTitle.fontSize} text-${config.dropdownMenu.headerTitle.text} dark:text-${config.dropdownMenu.headerTitle.textDark} text-${config.dropdownMenu.headerTitle.textSize} uppercase`]:
                {},
            },
            [`.${prefix}menu-content`]: {
              [`@apply p-2 space-y-1`]: {},
            },
            [`&.${prefix}menu-md`]: {
              [`@apply w-56`]: {},
            },
            [`&.${prefix}menu-lg`]: {
              [`@apply w-72`]: {},
            },
            [`&.${prefix}menu-rounded`]: {
              [`@apply rounded-${config.dropdownMenu.rounded.default}`]: {},
            },
            [`&.${prefix}menu-smooth`]: {
              [`@apply rounded-${config.dropdownMenu.rounded.smooth}`]: {},
            },
            [`&.${prefix}menu-curved`]: {
              [`@apply rounded-${config.dropdownMenu.rounded.curved}`]: {},
            },
            [`&.${prefix}menu-white`]: {
              [`@apply border bg-${config.dropdownMenu.white.bg} border-${config.dropdownMenu.white.border} dark:border-${config.dropdownMenu.white.borderDark} dark:bg-${config.dropdownMenu.white.bgDark}`]:
                {},
            },
            [`&.${prefix}menu-white-contrast`]: {
              [`@apply border bg-${config.dropdownMenu.whiteContrast.bg} border-${config.dropdownMenu.whiteContrast.border} dark:border-${config.dropdownMenu.whiteContrast.borderDark} dark:bg-${config.dropdownMenu.whiteContrast.bgDark}`]:
                {},
            },
            [`&.${prefix}menu-muted`]: {
              [`@apply border bg-${config.dropdownMenu.muted.bg} border-${config.dropdownMenu.muted.border} dark:border-${config.dropdownMenu.muted.borderDark} dark:bg-${config.dropdownMenu.muted.bgDark}`]:
                {},
            },
            [`&.${prefix}menu-muted-contrast`]: {
              [`@apply border bg-${config.dropdownMenu.mutedContrast.bg} border-${config.dropdownMenu.mutedContrast.border} dark:border-${config.dropdownMenu.mutedContrast.borderDark} dark:bg-${config.dropdownMenu.mutedContrast.bgDark}`]:
                {},
            },
            [`&.${prefix}menu-primary`]: {
              [`@apply border bg-${config.dropdownMenu.primary.bg} border-${config.dropdownMenu.primary.border}`]:
                {},
            },
            [`&.${prefix}menu-info`]: {
              [`@apply border bg-${config.dropdownMenu.info.bg} border-${config.dropdownMenu.info.border}`]:
                {},
            },
            [`&.${prefix}menu-success`]: {
              [`@apply border bg-${config.dropdownMenu.success.bg} border-${config.dropdownMenu.success.border}`]:
                {},
            },
            [`&.${prefix}menu-warning`]: {
              [`@apply border bg-${config.dropdownMenu.warning.bg} border-${config.dropdownMenu.warning.border}`]:
                {},
            },
            [`&.${prefix}menu-danger`]: {
              [`@apply border bg-${config.dropdownMenu.danger.bg} border-${config.dropdownMenu.danger.border}`]:
                {},
            },
          },
          [`&.${prefix}dropdown-start`]: {
            [`.${prefix}dropdown-menu`]: {
              [`@apply start-0 origin-top-left`]: {},
            },
          },
          [`&.${prefix}dropdown-end`]: {
            [`.${prefix}dropdown-menu`]: {
              [`@apply end-0 origin-top-right`]: {},
            },
          },
          [`&:hover`]: {
            [`.${prefix}context-button`]: {
              [`@apply ring-${config.hover.ring} dark:ring-${config.hover.ringDark}`]:
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
          dropdown: defaultDropdownConfig,
        },
      },
    }
  },
)
