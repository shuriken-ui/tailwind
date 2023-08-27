import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultListboxConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  button: {
    size: 'full',
    text: 'sm',
    textPosition: 'start',
    font: 'sans',
    iconBox: {
      space: '2',
      size: '6',
      innerSize: '4',
    },
    placeholder: {
      text: 'muted-300',
      textDark: 'muted-500',
      textPosition: 'left',
    },
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  chevron: {
    inner: {
      size: '4',
      text: 'muted-400',
      duration: '300',
    },
  },
  options: {
    ringFocus: 'primary-500/50',
    space: '2',
    text: 'base',
    shadowSize: 'lg',
    shadow: 'muted-500/10',
    shadowDark: 'muted-800/10',
  },
  option: {
    duration: '300',
    iconBox: {
      text: 'muted-200',
      textDark: 'muted-400',
      innerSize: '5',
    },
    inner: {
      heading: {
        text: 'muted-800',
        textDark: 'white',
      },
      text: 'muted-400',
    },
    icon: {
      text: 'primary-600',
    },
    iconInner: {
      size: '4',
    },
    activeOrHover: {
      text: 'primary-600',
      bg: 'primary-500/10',
    },
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  sm: {
    text: 'xs',
    icon: {
      size: '8',
      innerSize: '4',
    },
    placeload: {
      size: '8',
    },
    chevron: {
      size: '8',
      innerSize: '3',
    },
  },
  md: {
    text: '[0.825rem]',
    icon: {
      size: '10',
      innerSize: '[1.15rem]',
    },
    placeload: {
      size: '10',
    },
    chevron: {
      size: '10',
      innerSize: '4',
    },
  },
  lg: {
    text: 'sm',
    icon: {
      size: '12',
      innerSize: '5',
    },
    placeload: {
      size: '12',
    },
    chevron: {
      size: '12',
      innerSize: '4',
    },
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: {
      button: 'full',
      option: 'xl',
    },
  },
  default: {
    bg: 'white',
    bgDark: 'muted-900/75',
    border: 'muted-300',
    borderDark: 'muted-700',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-600',
      bg: 'white',
      bgDark: 'muted-700',
    },
  },
  defaultContrast: {
    bg: 'white',
    bgDark: 'muted-950/75',
    border: 'muted-300',
    borderDark: 'muted-800',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-600',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-800',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/70',
    },
  },
  muted: {
    bg: 'muted-200',
    bgDark: 'muted-900/75',
    border: 'muted-300',
    borderDark: 'muted-700',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-700',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-600',
      bg: 'white',
      bgDark: 'muted-700',
    },
  },
  mutedContrast: {
    bg: 'muted-200',
    bgDark: 'muted-950/75',
    border: 'muted-300',
    borderDark: 'muted-800',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-800',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/70',
    },
  },
  notLoading: {
    text: 'muted-300',
    textDark: 'muted-600',
  },
  error: {
    border: 'danger-500',
    borderDark: 'danger-500',
    icon: {
      text: 'danger-500',
    },
  },
  hasNotIcon: {
    text: {
      sm: 'xs',
      md: 'sm',
      lg: 'sm',
    },
    labelFloat: {
      sm: {
        text: 'xs',
        focusVisible: {
          textColor: 'primary-500',
        },
      },
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
    },
  },
  hasIcon: {
    text: {
      sm: 'xs',
      md: 'sm',
      lg: 'base',
    },
    labelFloat: {
      sm: {
        text: 'xs',
        focusVisible: {
          textColor: 'primary-500',
        },
      },
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
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
        'shurikenUi.listbox',
      ) satisfies typeof defaultListboxConfig

      addComponents({
        [`.${prefix}listbox`]: {
          [`@apply relative w-full`]: {},

          [`.${prefix}listbox-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          [`.${prefix}label-float`]: {
            [`@apply text-${config.labelFloat.text} pointer-events-none absolute inline-flex h-${config.labelFloat.size} select-none items-center leading-none transition-all duration-${config.labelFloat.duration}`]:
              {},
          },
          [`.${prefix}listbox-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}listbox-button`]: {
            [`@apply ${prefix}focus relative w-${config.button.size} flex items-center gap-2 text-${config.button.textPosition} pe-12 ps-4 border font-${config.button.font} text-${config.button.text} leading-5 disabled:cursor-not-allowed disabled:opacity-75`]:
              {},

            [`.${prefix}listbox-button-inner`]: {
              '@apply flex w-full items-center': {},

              [`.${prefix}icon-box`]: {
                [`@apply -ms-${config.button.iconBox.space} me-${config.button.iconBox.space} !h-${config.button.iconBox.size} !w-${config.button.iconBox.size}`]:
                  {},
                [`.${prefix}icon-box-inner`]: {
                  [`@apply h-${config.button.iconBox.innerSize} w-${config.button.iconBox.innerSize}`]:
                    {},
                },
              },
              [`.${prefix}listbox-placeholder`]: {
                [`@apply text-${config.button.placeholder.text} dark:text-${config.button.placeholder.textDark} truncate text-${config.button.placeholder.textPosition}`]:
                  {},
              },
            },

            [`&:focus-visible ~ .${prefix}listbox-chevron .${prefix}listbox-chevron-inner, &:focus ~ .${prefix}listbox-chevron .${prefix}listbox-chevron-inner`]:
              {
                [`@apply !rotate-180`]: {},
              },
          },
          [`.${prefix}listbox-icon`]: {
            [`@apply text-${config.icon.text} absolute start-0 top-0 flex items-center justify-center transition-colors duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}listbox-chevron`]: {
            [`@apply pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-s`]:
              {},

            [`.${prefix}listbox-chevron-inner`]: {
              [`@apply h-${config.chevron.inner.size} w-${config.chevron.inner.size} text-${config.chevron.inner.text} transition-transform duration-${config.chevron.inner.duration}`]:
                {},
            },
          },
          [`.${prefix}listbox-options`]: {
            [`@apply ${prefix}slimscroll focus:ring-${config.options.ringFocus} absolute z-10 mt-1 max-h-60 w-full overflow-auto p-${config.options.space} text-${config.options.text} shadow-${config.options.shadowSize} shadow-${config.options.shadow} dark:shadow-${config.options.shadowDark} focus:outline-none focus:ring-1 sm:text-sm`]:
              {},
          },
          [`.${prefix}listbox-option`]: {
            [`@apply relative flex gap-2 cursor-pointer select-none items-center px-3 py-2 transition-colors duration-${config.option.duration}`]:
              {},

            [`.${prefix}icon-box`]: {
              [`@apply text-${config.option.iconBox.text} dark:text-${config.option.iconBox.textDark} -ms-2 me-1`]:
                {},
              [`.${prefix}icon-box-inner`]: {
                [`@apply h-${config.option.iconBox.innerSize} w-${config.option.iconBox.innerSize}`]:
                  {},
              },
            },
            [`.${prefix}listbox-selected-icon`]: {
              [`@apply text-${config.option.icon.text} ms-auto flex items-center`]:
                {},
            },
            [`.${prefix}listbox-selected-icon-inner`]: {
              [`@apply h-${config.option.iconInner.size} w-${config.option.iconInner.size}`]:
                {},
            },
            [`.${prefix}listbox-option-inner`]: {
              [`.${prefix}listbox-heading`]: {
                [`@apply text-${config.option.inner.heading.text} block truncate dark:text-${config.option.inner.heading.textDark}`]:
                  {},
              },
              [`.${prefix}listbox-text`]: {
                [`@apply text-${config.option.inner.text}`]: {},
              },
            },

            [`&.${prefix}active, &:hover`]: {
              [`@apply bg-${config.option.activeOrHover.bg} text-${config.option.activeOrHover.text}`]:
                {},
            },
          },
          [`.${prefix}listbox-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}listbox-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`&.${prefix}listbox-sm`]: {
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.sm.text}`]: {},
            },

            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },

            [`.${prefix}listbox-icon`]: {
              [`@apply h-${config.sm.icon.size} w-${config.sm.icon.size}`]: {},

              [`.${prefix}listbox-icon-inner`]: {
                [`@apply h-${config.sm.icon.innerSize} w-${config.sm.icon.innerSize}`]:
                  {},
              },
            },

            [`.${prefix}listbox-placeload`]: {
              [`@apply h-${config.sm.placeload.size}`]: {},
            },

            [`.${prefix}listbox-chevron`]: {
              [`@apply h-${config.sm.chevron.size} w-${config.sm.chevron.size}`]:
                {},

              [`.${prefix}listbox-chevron-inner`]: {
                [`@apply h-${config.sm.chevron.innerSize} w-${config.sm.chevron.innerSize}`]:
                  {},
              },
            },
          },
          [`&.${prefix}listbox-md`]: {
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.md.text}`]: {},
            },

            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },

            [`.${prefix}listbox-icon`]: {
              [`@apply h-${config.md.icon.size} w-${config.md.icon.size}`]: {},

              [`.${prefix}listbox-icon-inner`]: {
                [`@apply h-${config.md.icon.innerSize} w-${config.md.icon.innerSize}`]:
                  {},
              },
            },

            [`.${prefix}listbox-placeload`]: {
              [`@apply h-${config.md.placeload.size}`]: {},
            },

            [`.${prefix}listbox-chevron`]: {
              [`@apply h-${config.md.chevron.size} w-${config.md.chevron.size}`]:
                {},

              [`.${prefix}listbox-chevron-inner`]: {
                [`@apply h-${config.md.chevron.innerSize} w-${config.md.chevron.innerSize}`]:
                  {},
              },
            },
          },
          [`&.${prefix}listbox-lg`]: {
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.lg.text}`]: {},
            },

            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },

            [`.${prefix}listbox-icon`]: {
              [`@apply h-${config.lg.icon.size} w-${config.lg.icon.size}`]: {},

              [`.${prefix}listbox-icon-inner`]: {
                [`@apply h-${config.lg.icon.innerSize} w-${config.lg.icon.innerSize}`]:
                  {},
              },
            },

            [`.${prefix}listbox-placeload`]: {
              [`@apply h-${config.lg.placeload.size}`]: {},
            },

            [`.${prefix}listbox-chevron`]: {
              [`@apply h-${config.lg.chevron.size} w-${config.lg.chevron.size}`]:
                {},

              [`.${prefix}listbox-chevron-inner`]: {
                [`@apply h-${config.lg.chevron.innerSize} w-${config.lg.chevron.innerSize}`]:
                  {},
              },
            },
          },
          [`&.${prefix}listbox-rounded`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply rounded-${config.rounded.default}`]: {},
              },
          },
          [`&.${prefix}listbox-smooth`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply rounded-${config.rounded.smooth}`]: {},
              },
          },
          [`&.${prefix}listbox-curved`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply rounded-${config.rounded.curved}`]: {},
              },
          },
          [`&.${prefix}listbox-full`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply rounded-${config.rounded.full.button}`]: {},
            },

            [`.${prefix}listbox-option, .${prefix}listbox-options`]: {
              [`@apply rounded-${config.rounded.full.option}`]: {},
            },
          },
          [`&.${prefix}listbox-default`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply bg-${config.default.bg} border-${config.default.border} text-${config.default.text} placeholder:text-${config.default.textPlaceholder} focus:border-${config.default.borderFocus} focus:shadow-${config.default.shadowFocus} dark:border-${config.default.borderDark} dark:bg-${config.default.bgDark} dark:text-${config.default.textDark} dark:placeholder:text-${config.default.textPlaceholderDark} dark:focus:border-${config.default.borderFocusDark} dark:focus:shadow-${config.default.shadowFocusDark}`]:
                {},
            },
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.default.chevron.border} dark:border-${config.default.chevron.borderDark}`]:
                {},
            },
            [`.${prefix}listbox-options`]: {
              [`@apply border-${config.default.option.border} dark:border-${config.default.option.borderDark} dark:bg-${config.default.option.bgDark} border bg-${config.default.option.bg}`]:
                {},
            },
          },
          [`&.${prefix}listbox-default-contrast`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply bg-${config.defaultContrast.bg} border-${config.defaultContrast.border} text-${config.defaultContrast.text} placeholder:text-${config.defaultContrast.textPlaceholder} focus:border-${config.defaultContrast.borderFocus} focus:shadow-${config.defaultContrast.shadowFocus} dark:border-${config.defaultContrast.borderDark} dark:bg-${config.defaultContrast.bgDark} dark:text-${config.defaultContrast.textDark} dark:placeholder:text-${config.defaultContrast.textPlaceholderDark} dark:focus:border-${config.defaultContrast.borderFocusDark} dark:focus:shadow-${config.defaultContrast.shadowFocusDark}`]:
                {},
            },
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.defaultContrast.chevron.border} dark:border-${config.defaultContrast.chevron.borderDark}`]:
                {},
            },
            [`.${prefix}listbox-options`]: {
              [`@apply border-${config.defaultContrast.option.border} dark:border-${config.defaultContrast.option.borderDark} dark:bg-${config.defaultContrast.option.bgDark} border bg-${config.defaultContrast.option.bg}`]:
                {},
            },
          },
          [`&.${prefix}listbox-muted`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply bg-${config.muted.bg} border-${config.muted.border} text-${config.muted.text} placeholder:text-${config.muted.textPlaceholder} focus:border-${config.muted.borderFocus} focus:shadow-${config.muted.shadowFocus} dark:border-${config.muted.borderDark} dark:bg-${config.muted.bgDark} dark:text-${config.muted.textDark} dark:placeholder:text-${config.muted.textPlaceholderDark} dark:focus:border-${config.muted.borderFocusDark} dark:focus:shadow-${config.muted.shadowFocusDark}`]:
                {},
            },
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.muted.chevron.border} dark:border-${config.muted.chevron.borderDark}`]:
                {},
            },
            [`.${prefix}listbox-options`]: {
              [`@apply border-${config.muted.option.border} dark:border-${config.muted.option.borderDark} dark:bg-${config.muted.option.bgDark} border bg-${config.muted.option.bg}`]:
                {},
            },
          },
          [`&.${prefix}listbox-muted-contrast`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply bg-${config.mutedContrast.bg} border-${config.mutedContrast.border} text-${config.mutedContrast.text} placeholder:text-${config.mutedContrast.textPlaceholder} focus:border-${config.mutedContrast.borderFocus} focus:shadow-${config.mutedContrast.shadowFocus} dark:border-${config.mutedContrast.borderDark} dark:bg-${config.mutedContrast.bgDark} dark:text-${config.mutedContrast.textDark} dark:placeholder:text-${config.mutedContrast.textPlaceholderDark} dark:focus:border-${config.mutedContrast.borderFocusDark} dark:focus:shadow-${config.mutedContrast.shadowFocusDark}`]:
                {},
            },
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.mutedContrast.chevron.border} dark:border-${config.mutedContrast.chevron.borderDark}`]:
                {},
            },
            [`.${prefix}listbox-options`]: {
              [`@apply border-${config.mutedContrast.option.border} dark:border-${config.mutedContrast.option.borderDark} dark:bg-${config.mutedContrast.option.bgDark} border bg-${config.mutedContrast.option.bg}`]:
                {},
            },
          },
          [`&:not(.${prefix}listbox-loading)`]: {
            [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
              [`@apply text-${config.notLoading.text} dark:text-${config.notLoading.textDark}`]:
                {},
            },
          },
          [`&.${prefix}listbox-loading`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
            [`.${prefix}listbox-icon`]: {
              [`@apply opacity-0`]: {},
            },
          },
          [`&.${prefix}listbox-label-float`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}listbox-error`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply !border-${config.error.border} dark:!border-${config.error.borderDark}`]:
                {},
            },
            [`.${prefix}listbox-icon`]: {
              [`@apply !text-${config.error.icon.text}`]: {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}listbox-sm`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-8 py-1 text-${config.hasNotIcon.text.sm} leading-4 px-2`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}listbox-sm`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-8 py-1 text-${config.hasIcon.text.sm} leading-4 pe-3 ps-8`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}listbox-md`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-10 py-2 text-${config.hasNotIcon.text.md} leading-5 px-3`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}listbox-md`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-10 py-2 text-${config.hasIcon.text.md} leading-5 pe-4 ps-10`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}listbox-lg`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-12 py-2 text-${config.hasNotIcon.text.lg} leading-5 px-4`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}listbox-lg`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-12 py-2 text-${config.hasIcon.text.lg} leading-5 pe-4 ps-11`]:
                {},
            },
          },
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.hasNotIcon.labelFloat.sm.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-7 !text-${config.hasNotIcon.labelFloat.sm.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.hasIcon.labelFloat.sm.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-8 !-mt-7 !text-${config.hasIcon.labelFloat.sm.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.hasNotIcon.labelFloat.md.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-8 !text-${config.hasNotIcon.labelFloat.md.focusVisible.text} !text-${config.hasNotIcon.labelFloat.md.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.hasNotIcon.labelFloat.md.button.text}`]:
                  {},
              },
            },
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.hasIcon.labelFloat.md.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-8 !text-${config.hasIcon.labelFloat.md.focusVisible.text} !text-${config.hasIcon.labelFloat.md.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.hasIcon.labelFloat.md.button.text}`]:
                  {},
              },
            },
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.hasNotIcon.labelFloat.lg.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-9 !text-${config.hasNotIcon.labelFloat.lg.focusVisible.text} !text-${config.hasNotIcon.labelFloat.lg.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.hasNotIcon.labelFloat.lg.button.text}`]:
                  {},
              },
            },
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.hasIcon.labelFloat.lg.text} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-9 !text-${config.hasIcon.labelFloat.lg.focusVisible.text} !text-${config.hasIcon.labelFloat.lg.focusVisible.textColor}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.hasIcon.labelFloat.lg.button.text}`]:
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
          listbox: defaultListboxConfig,
        },
      },
    }
  },
)
