import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultTextareaConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  textarea: {
    size: 'full',
    focusVisible: {
      labelFloat: {
        text: 'primary-500',
        textDark: 'primary-500',
      },
    },
    placeload: {
      size: 'full',
      space: '2',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
    },
    default: {
      bg: 'white',
      bgDark: 'muted-900/75',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    defaultContrast: {
      bg: 'white',
      bgDark: 'muted-950/75',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    muted: {
      bg: 'muted-200',
      bgDark: 'muted-900/75',
      border: 'muted-200',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950/75',
      border: 'muted-100',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    notLoading: {
      text: 'muted-300',
      textDark: 'muted-600',
    },
    error: {
      border: 'danger-500',
      borderDark: 'danger-500',
    },
    focus: {
      border: 'primary-500',
      duration: '300',
    },
    sm: {
      size: '[2rem]',
      text: 'xs',
      textLabel: 'xs',
      labelFloat: 'xs',
    },
    md: {
      size: '[2.5rem]',
      text: 'sm',
      textLabel: 'sm',
      labelFloat: {
        text: 'xs',
        textFocusVisible: 'xs',
        textPlaceholderShown: '[0.825rem]',
      },
    },
    lg: {
      size: '[3rem]',
      text: 'sm',
      textLabel: 'sm',
      labelFloat: {
        text: 'xs',
        textFocusVisible: 'xs',
        textPlaceholderShown: '[0.825rem]',
      },
    },
    addon: {
      border: 'muted-300',
      borderDark: 'muted-700',
      bg: 'muted-50',
      bgDark: 'muted-900/50',
      size: 'full',
      space: '2',
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
        'shurikenUi.textarea',
      ) satisfies typeof defaultTextareaConfig

      addComponents({
        [`.${prefix}textarea-wrapper`]: {
          [`@apply relative`]: {},

          [`.${prefix}textarea-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          [`.${prefix}label-float`]: {
            [`@apply text-${config.labelFloat.text} pointer-events-none absolute inline-flex h-${config.labelFloat.size} select-none items-center leading-none transition-all duration-${config.labelFloat.duration}`]:
              {},
          },
          [`.${prefix}textarea-outer`]: {
            [`@apply relative flex flex-col`]: {},
          },
          [`.${prefix}textarea`]: {
            [`@apply ${prefix}focus w-${config.textarea.size}`]: {},

            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.textarea.focusVisible.labelFloat.text} dark:!text-${config.textarea.focusVisible.labelFloat.textDark}`]:
                {},
            },

            [`&.${prefix}textarea-focus`]: {
              [`@apply focus:!border-${config.textarea.focus.border} transition-colors duration-${config.textarea.focus.duration}`]:
                {},
            },
          },
          [`.${prefix}textarea-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}textarea-placeload`]: {
            [`@apply absolute start-0 top-4 flex h-${config.textarea.placeload.size} w-${config.textarea.placeload.size} flex-col space-y-${config.textarea.placeload.space} px-3`]:
              {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full rounded`]: {},

              [`&:first-child`]: {
                [`@apply max-w-[85%]`]: {},
              },
              [`&:nth-child(2)`]: {
                [`@apply max-w-[65%]`]: {},
              },
              [`&:nth-child(3)`]: {
                [`@apply max-w-[35%]`]: {},
              },
            },
          },
          [`&.${prefix}textarea-rounded`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.textarea.rounded.default}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.textarea.rounded.default}`]: {},
            },
          },
          [`&.${prefix}textarea-smooth`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.textarea.rounded.smooth}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.textarea.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}textarea-curved`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.textarea.rounded.curved}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.textarea.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}textarea-default`]: {
            [`.${prefix}textarea`]: {
              [`@apply border bg-${config.textarea.default.bg} border-${config.textarea.default.border} text-${config.textarea.default.text} placeholder:text-${config.textarea.default.textPlaceholder} dark:border-${config.textarea.default.borderDark} dark:bg-${config.textarea.default.bgDark} dark:text-${config.textarea.default.textDark} dark:placeholder:text-${config.textarea.default.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}textarea-default-contrast`]: {
            [`.${prefix}textarea`]: {
              [`@apply border bg-${config.textarea.defaultContrast.bg} border-${config.textarea.defaultContrast.border} text-${config.textarea.defaultContrast.text} placeholder:text-${config.textarea.defaultContrast.textPlaceholder} dark:border-${config.textarea.defaultContrast.borderDark} dark:bg-${config.textarea.defaultContrast.bgDark} dark:text-${config.textarea.defaultContrast.textDark} dark:placeholder:text-${config.textarea.defaultContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}textarea-muted`]: {
            [`.${prefix}textarea`]: {
              [`@apply border bg-${config.textarea.muted.bg} border-${config.textarea.muted.border} text-${config.textarea.muted.text} placeholder:text-${config.textarea.muted.textPlaceholder} dark:border-${config.textarea.muted.borderDark} dark:bg-${config.textarea.muted.bgDark} dark:text-${config.textarea.muted.textDark} dark:placeholder:text-${config.textarea.muted.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}textarea-muted-contrast`]: {
            [`.${prefix}textarea`]: {
              [`@apply border bg-${config.textarea.mutedContrast.bg} border-${config.textarea.mutedContrast.border} text-${config.textarea.mutedContrast.text} placeholder:text-${config.textarea.mutedContrast.textPlaceholder} dark:border-${config.textarea.mutedContrast.borderDark} dark:bg-${config.textarea.mutedContrast.bgDark} dark:text-${config.textarea.mutedContrast.textDark} dark:placeholder:text-${config.textarea.mutedContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&:not(.${prefix}textarea-loading)`]: {
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-${config.textarea.notLoading.text} dark:text-${config.textarea.notLoading.textDark}`]:
                {},
            },
          },
          [`&.${prefix}textarea-loading`]: {
            [`.${prefix}textarea`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
          },
          [`&.${prefix}textarea-label-float`]: {
            [`.${prefix}textarea`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}textarea-error`]: {
            [`.${prefix}textarea`]: {
              [`@apply !border-${config.textarea.error.border} dark:!border-${config.textarea.error.borderDark}`]:
                {},
            },
          },
          [`&.${prefix}textarea-no-resize`]: {
            [`.${prefix}textarea`]: {
              [`@apply resize-none`]: {},
            },
          },
          [`&.${prefix}textarea-sm`]: {
            [`@apply min-h-${config.textarea.sm.size} text-${config.textarea.sm.text}`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.textarea.sm.textLabel}`]: {},
            },
          },
          [`&.${prefix}textarea-md`]: {
            [`@apply min-h-${config.textarea.md.size} text-${config.textarea.md.text} leading-[1.6]`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.textarea.md.textLabel}`]: {},
            },
          },
          [`&.${prefix}textarea-lg`]: {
            [`@apply min-h-${config.textarea.lg.size} text-${config.textarea.lg.text} leading-[1.8]`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.textarea.lg.textLabel}`]: {},
            },
          },
          [`&:not(.${prefix}has-addon)`]: {
            [`.${prefix}textarea`]: {
              [`@apply p-2`]: {},
            },
          },
          [`&.${prefix}has-addon`]: {
            [`.${prefix}textarea`]: {
              [`@apply px-2 pb-14 pt-2`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply border-${config.textarea.addon.border} bg-${config.textarea.addon.bg} dark:border-${config.textarea.addon.borderDark} dark:bg-${config.textarea.addon.bgDark} absolute bottom-0 start-0 flex w-${config.textarea.addon.size} items-center justify-between border p-${config.textarea.addon.space}`]:
                {},
            },
            [`.${prefix}textarea-addon-start`]: {
              [`@apply flex items-center gap-2`]: {},
            },
            [`.${prefix}textarea-addon-end`]: {
              [`@apply flex items-center justify-end gap-2`]: {},
            },
          },
          [`&.${prefix}textarea-label-float.${prefix}textarea-sm`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-7 text-${config.textarea.sm.labelFloat}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-6`]: {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-[0.35rem]`]: {},
            },
          },
          [`&.${prefix}textarea-label-float.${prefix}textarea-md`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-8 text-${config.textarea.md.labelFloat.text}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-7 !text-${config.textarea.md.labelFloat.textFocusVisible}`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-2.5 text-${config.textarea.md.labelFloat.textPlaceholderShown}`]:
                {},
            },
          },
          [`&.${prefix}textarea-label-float.${prefix}textarea-lg`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-8 text-${config.textarea.lg.labelFloat.text}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-7 !text-${config.textarea.lg.labelFloat.textFocusVisible}`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-3 text-${config.textarea.lg.labelFloat.textPlaceholderShown}`]:
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
          textarea: defaultTextareaConfig,
        },
      },
    }
  },
)
