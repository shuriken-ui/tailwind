import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultAutocompleteConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  multipleList: {
    item: {
      bg: 'muted-200',
      bgDark: 'muted-700',
      text: 'muted-400',
      textSize: 'xs',
      font: 'sans',
      fontWeight: 'medium',
    },
    icon: {
      size: '3',
    },
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  input: {
    size: 'full',
    font: 'sans',
    duration: '300',
    focusVisible: {
      labelFloat: {
        text: 'primary-500',
        textDark: 'primary-500',
      },
      icon: {
        text: 'primary-500',
      },
    },
  },
  clear: {
    text: 'muted-400',
    textHover: 'muted-700',
    textHoverDark: 'muted-200',
    duration: '300',
    inner: {
      size: '4',
    },
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  results: {
    text: 'base',
    shadow: 'muted-500/10',
    shadowDark: 'muted-800/10',
    shadowSize: 'lg',
  },
  itemInner: {
    space: '2',
    duration: '300',
    selectedIcon: {
      text: 'success-500',
      size: '4',
    },
    hasMedia: {
      size: '8',
    },
  },
  placeholder: {
    font: 'sans',
    text: 'muted-700',
    textDark: 'muted-400',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: {
      input: 'full',
      inner: 'xl',
    },
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
    clear: {
      size: '8',
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
    clear: {
      size: '10',
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
    clear: {
      size: '12',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
    },
    resultsInner: {
      bg: 'muted-100',
      bgDark: 'muted-700',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/75',
    },
    resultsInner: {
      bg: 'muted-100',
      bgDark: 'muted-800',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
    },
    resultsInner: {
      bg: 'muted-200',
      bgDark: 'muted-700',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/75',
    },
    resultsInner: {
      bg: 'muted-100',
      bgDark: 'muted-700',
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
      sm: 'xs',
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
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
      sm: 'xs',
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.autocomplete'
      ) satisfies typeof defaultAutocompleteConfig

      addComponents({
        [`.${prefix}-autocomplete`]: {
          [`@apply w-full relative`]: {},
          [`.${prefix}-autocomplete-label, .${prefix}-label-float`]: {
            [`@apply ${prefix}-label`]: {},
          },
          [`.${prefix}-label-float`]: {
            [`@apply text-${config.labelFloat.text} pointer-events-none absolute inline-flex h-${config.labelFloat.size} select-none items-center leading-none transition-all duration-${config.labelFloat.duration}`]:
              {},
          },
          [`.${prefix}-autocomplete-multiple`]: {
            [`@apply block`]: {},

            [`.${prefix}-autocomplete-multiple-list`]: {
              [`@apply my-2 flex flex-wrap gap-1`]: {},
            },
            [`.${prefix}-autocomplete-multiple-list-item`]: {
              [`@apply bg-${config.multipleList.item.bg} text-${config.multipleList.item.text} dark:bg-${config.multipleList.item.bgDark} flex items-center py-2 pe-2 ps-3 font-${config.multipleList.item.font} text-${config.multipleList.item.textSize} font-${config.multipleList.item.fontWeight}`]:
                {},
            },
            [`.${prefix}-autocomplete-multiple-list-item-icon`]: {
              [`@apply ms-1 block h-${config.multipleList.icon.size} w-${config.multipleList.icon.size}`]:
                {},
            },
          },
          [`.${prefix}-autocomplete-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}-autocomplete-icon`]: {
            [`@apply text-${config.icon.text} absolute start-0 top-0 flex items-center justify-center transition-colors duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}-autocomplete-input`]: {
            [`@apply ${prefix}-focus w-${config.input.size} font-${config.input.font} transition-all duration-${config.input.duration} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},

            [`&:focus-visible ~ .${prefix}-label-float`]: {
              [`@apply !text-${config.input.focusVisible.labelFloat.text} dark:!text-${config.input.focusVisible.labelFloat.textDark}`]:
                {},
            },
            [`&:focus-visible ~ .${prefix}-autocomplete-icon`]: {
              [`@apply !text-${config.input.focusVisible.icon.text}`]: {},
            },
            [`&:disabled ~ .${prefix}-autocomplete-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`.${prefix}-autocomplete-clear`]: {
            [`@apply text-${config.clear.text} hover:text-${config.clear.textHover} dark:hover:text-${config.clear.textHoverDark} absolute end-0 top-0 z-10 flex items-center justify-center transition-colors duration-${config.clear.duration} cursor-pointer`]:
              {},
            [`.${prefix}-autocomplete-clear-inner`]: {
              [`@apply w-${config.clear.inner.size} h-${config.clear.inner.size}`]:
                {},
            },
          },
          [`.${prefix}-autocomplete-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}-placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`.${prefix}-autocomplete-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}-autocomplete-results`]: {
            [`@apply ${prefix}-slimscroll absolute z-20 mt-1 max-h-[265px] w-full overflow-auto py-1 text-${config.results.text} shadow-${config.results.shadowSize} shadow-${config.results.shadow} dark:shadow-${config.results.shadowDark} outline-none sm:text-sm`]:
              {},
            [`.${prefix}-autocomplete-results-header, .${prefix}-autocomplete-results-footer`]:
              {
                [`@apply relative px-2 py-1`]: {},
              },
          },
          [`.${prefix}-autocomplete-results-item`]: {
            [`@apply px-2 py-1`]: {},
          },
          [`.${prefix}-autocomplete-results-item-inner`]: {
            [`@apply flex gap-2 cursor-pointer items-center p-${config.itemInner.space} transition-colors duration-${config.itemInner.duration}`]:
              {},

            [`.${prefix}-autocomplete-results-item-selected`]: {
              [`@apply ms-auto flex items-center justify-center`]: {},
            },
            [`.${prefix}-autocomplete-results-item-selected-icon`]: {
              [`@apply text-${config.itemInner.selectedIcon.text} block h-${config.itemInner.selectedIcon.size} w-${config.itemInner.selectedIcon.size}`]:
                {},
            },
            [`&.${prefix}-has-media`]: {
              [`.${prefix}-autocomplete-results-item-selected`]: {
                [`@apply h-${config.itemInner.hasMedia.size} w-${config.itemInner.hasMedia.size}`]:
                  {},
              },
            },
          },
          [`.${prefix}-autocomplete-results-placeholder`]: {
            [`@apply relative px-4 py-2`]: {},
            [`.${prefix}-autocomplete-results-placeholder-text`]: {
              [`@apply font-${config.placeholder.font} text-${config.placeholder.text} dark:text-${config.placeholder.textDark} cursor-default select-none`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-rounded`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },

            [`.${prefix}-autocomplete-results, .${prefix}-autocomplete-results-item-inner, .${prefix}-autocomplete-multiple .${prefix}-autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.default}`]: {},
              },
          },
          [`&.${prefix}-autocomplete-smooth`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },

            [`.${prefix}-autocomplete-results, .${prefix}-autocomplete-results-item-inner, .${prefix}-autocomplete-multiple .${prefix}-autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.smooth}`]: {},
              },
          },
          [`&.${prefix}-autocomplete-curved`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },

            [`.${prefix}-autocomplete-results, .${prefix}-autocomplete-results-item-inner, .${prefix}-autocomplete-multiple .${prefix}-autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.curved}`]: {},
              },
          },
          [`&.${prefix}-autocomplete-full`]: {
            [`.${prefix}-autocomplete-input, .${prefix}-autocomplete-multiple .${prefix}-autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.full.input}`]: {},
              },

            [`.${prefix}-autocomplete-results, .${prefix}-autocomplete-results-item-inner`]:
              {
                [`@apply rounded-${config.rounded.full.inner}`]: {},
              },
          },
          [`&.${prefix}-autocomplete-sm`]: {
            [`.${prefix}-autocomplete-label`]: {
              [`@apply pb-1 text-${config.sm.text}`]: {},
            },
            [`.${prefix}-label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}-autocomplete-icon`]: {
              [`@apply h-${config.sm.icon.size} w-${config.sm.icon.size}`]: {},
              [`.${prefix}-autocomplete-icon-inner`]: {
                [`@apply h-${config.sm.icon.innerSize} w-${config.sm.icon.innerSize}`]:
                  {},
              },
            },
            [`.${prefix}-autocomplete-placeload`]: {
              [`@apply h-${config.sm.placeload.size}`]: {},
            },
            [`.${prefix}-autocomplete-clear`]: {
              [`@apply h-${config.sm.clear.size} w-${config.sm.clear.size}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-md`]: {
            [`.${prefix}-autocomplete-label`]: {
              [`@apply pb-1 text-${config.md.text}`]: {},
            },
            [`.${prefix}-label-float`]: {
              [`@apply top-2.5`]: {},
            },
            [`.${prefix}-autocomplete-icon`]: {
              [`@apply h-${config.md.icon.size} w-${config.md.icon.size}`]: {},
              [`.${prefix}-autocomplete-icon-inner`]: {
                [`@apply h-${config.md.icon.innerSize} w-${config.md.icon.innerSize}`]:
                  {},
              },
            },
            [`.${prefix}-autocomplete-placeload`]: {
              [`@apply h-${config.md.placeload.size}`]: {},
            },
            [`.${prefix}-autocomplete-clear`]: {
              [`@apply h-${config.md.clear.size} w-${config.md.clear.size}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-lg`]: {
            [`.${prefix}-autocomplete-label`]: {
              [`@apply pb-1 text-${config.lg.text}`]: {},
            },
            [`.${prefix}-label-float`]: {
              [`@apply top-3.5`]: {},
            },
            [`.${prefix}-autocomplete-icon`]: {
              [`@apply h-${config.lg.icon.size} w-${config.lg.icon.size}`]: {},
              [`.${prefix}-autocomplete-icon-inner`]: {
                [`@apply h-${config.lg.icon.innerSize} w-${config.lg.icon.innerSize}`]:
                  {},
              },
            },
            [`.${prefix}-autocomplete-placeload`]: {
              [`@apply h-${config.lg.placeload.size}`]: {},
            },
            [`.${prefix}-autocomplete-clear`]: {
              [`@apply h-${config.lg.clear.size} w-${config.lg.clear.size}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-default`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply border bg-${config.default.bg} border-${config.default.border} text-${config.default.text} placeholder:text-${config.default.textPlaceholder} dark:border-${config.default.borderDark} dark:bg-${config.default.bgDark} dark:text-${config.default.textDark} dark:placeholder:text-${config.default.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-autocomplete-results`]: {
              [`@apply border-${config.default.results.border} dark:border-${config.default.results.borderDark} dark:bg-${config.default.results.bgDark} border bg-${config.default.bg}`]:
                {},
            },
            [`.${prefix}-autocomplete-results-item-inner.${prefix}-active`]: {
              [`@apply bg-${config.default.resultsInner.bg} dark:bg-${config.default.resultsInner.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-default-contrast`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply border bg-${config.defaultContrast.bg} border-${config.defaultContrast.border} text-${config.defaultContrast.text} placeholder:text-${config.defaultContrast.textPlaceholder} dark:border-${config.defaultContrast.borderDark} dark:bg-${config.defaultContrast.bgDark} dark:text-${config.defaultContrast.textDark} dark:placeholder:text-${config.defaultContrast.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-autocomplete-results`]: {
              [`@apply border-${config.defaultContrast.results.border} dark:border-${config.defaultContrast.results.borderDark} dark:bg-${config.defaultContrast.results.bgDark} border bg-${config.defaultContrast.bg}`]:
                {},
            },
            [`.${prefix}-autocomplete-results-item-inner.${prefix}-active`]: {
              [`@apply bg-${config.defaultContrast.resultsInner.bg} dark:bg-${config.defaultContrast.resultsInner.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-muted`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply border bg-${config.muted.bg} border-${config.muted.border} text-${config.muted.text} placeholder:text-${config.muted.textPlaceholder} dark:border-${config.muted.borderDark} dark:bg-${config.muted.bgDark} dark:text-${config.muted.textDark} dark:placeholder:text-${config.muted.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-autocomplete-results`]: {
              [`@apply border-${config.muted.results.border} dark:border-${config.muted.results.borderDark} dark:bg-${config.muted.results.bgDark} border bg-${config.muted.bg}`]:
                {},
            },
            [`.${prefix}-autocomplete-results-item-inner.${prefix}-active`]: {
              [`@apply bg-${config.muted.resultsInner.bg} dark:bg-${config.muted.resultsInner.bgDark}`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-muted-contrast`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply border bg-${config.mutedContrast.bg} border-${config.mutedContrast.border} text-${config.mutedContrast.text} placeholder:text-${config.mutedContrast.textPlaceholder} dark:border-${config.mutedContrast.borderDark} dark:bg-${config.mutedContrast.bgDark} dark:text-${config.mutedContrast.textDark} dark:placeholder:text-${config.mutedContrast.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-autocomplete-results`]: {
              [`@apply border-${config.mutedContrast.results.border} dark:border-${config.mutedContrast.results.borderDark} dark:bg-${config.mutedContrast.results.bgDark} border bg-${config.mutedContrast.bg}`]:
                {},
            },
            [`.${prefix}-autocomplete-results-item-inner.${prefix}-active`]: {
              [`@apply bg-${config.mutedContrast.resultsInner.bg} dark:bg-${config.mutedContrast.resultsInner.bgDark}`]:
                {},
            },
          },
          [`&:not(.${prefix}-autocomplete-loading)`]: {
            [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
              {
                [`@apply text-${config.notLoading.text} dark:text-${config.notLoading.textDark}`]:
                  {},
              },
          },
          [`&.${prefix}-autocomplete-loading`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
              {
                [`@apply text-transparent`]: {},
              },

            [`.${prefix}-autocomplete-icon`]: {
              [`@apply opacity-0`]: {},
            },
          },
          [`&.${prefix}-autocomplete-label-float`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-error`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply !border-${config.error.border} dark:!border-${config.error.borderDark}`]:
                {},
            },

            [`.${prefix}-autocomplete-icon`]: {
              [`@apply !text-${config.error.icon.text}`]: {},
            },
          },
          [`&:not(.${prefix}-has-icon).${prefix}-autocomplete-sm`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-8 py-1 text-${config.hasNotIcon.text.sm} leading-4 px-2`]:
                {},
            },
          },
          [`&.${prefix}-has-icon.${prefix}-autocomplete-sm`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-8 py-1 text-${config.hasIcon.text.sm} leading-4 pe-3 ps-8`]:
                {},
            },
          },
          [`&:not(.${prefix}-has-icon).${prefix}-autocomplete-md`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-10 py-2 text-${config.hasNotIcon.text.md} leading-5 px-3`]:
                {},
            },
          },
          [`&.${prefix}-has-icon.${prefix}-autocomplete-md`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-10 py-2 text-${config.hasIcon.text.md} leading-5 pe-4 ps-10`]:
                {},
            },
          },
          [`&:not(.${prefix}-has-icon).${prefix}-autocomplete-lg`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-12 py-2 text-${config.hasNotIcon.text.lg} leading-5 px-4`]:
                {},
            },
          },
          [`&.${prefix}-has-icon.${prefix}-autocomplete-lg`]: {
            [`.${prefix}-autocomplete-input`]: {
              [`@apply h-12 py-2 text-${config.hasIcon.text.lg} leading-5 pe-4 ps-11`]:
                {},
            },
          },
          [`&.${prefix}-autocomplete-label-float:not(.${prefix}-has-icon).${prefix}-autocomplete-sm`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.hasNotIcon.labelFloat.sm}`]:
                  {},
              },
              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-3 !-mt-7`]: {},
                },
              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          [`&.${prefix}-autocomplete-label-float.${prefix}-has-icon.${prefix}-autocomplete-sm`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.hasIcon.labelFloat.sm}`]:
                  {},
              },

              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-8 !-mt-7`]: {},
                },

              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          [`&.${prefix}-autocomplete-label-float:not(.${prefix}-has-icon).${prefix}-autocomplete-md`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.hasNotIcon.labelFloat.md.text}`]:
                  {},
              },

              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-3 !-mt-8 !text-${config.hasNotIcon.labelFloat.md.focusVisible.text}`]:
                    {},
                },

              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.hasNotIcon.labelFloat.md.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}-autocomplete-label-float.${prefix}-has-icon.${prefix}-autocomplete-md`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.hasIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-10 !-mt-8 !text-${config.hasIcon.labelFloat.md.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.hasIcon.labelFloat.md.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}-autocomplete-label-float:not(.${prefix}-has-icon).${prefix}-autocomplete-lg`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.hasNotIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-3 !-mt-9 !text-${config.hasNotIcon.labelFloat.lg.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.hasNotIcon.labelFloat.lg.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}-autocomplete-label-float.${prefix}-has-icon.${prefix}-autocomplete-lg`]:
            {
              [`.${prefix}-label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.hasIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}-autocomplete-input:focus-visible ~ .${prefix}-label-float`]:
                {
                  [`@apply !-ms-10 !-mt-9 !text-${config.hasIcon.labelFloat.lg.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}-autocomplete-input:placeholder-shown ~ .${prefix}-label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.hasIcon.labelFloat.lg.placeholderShown.text}`]:
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
          autocomplete: defaultAutocompleteConfig,
        },
      },
    }
  }
)
