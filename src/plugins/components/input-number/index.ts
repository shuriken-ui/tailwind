import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultInputNumberConfig = {
  label: {
    float: {
      text: 'primary-500',
      duration: '300',
      size: '5',
    },
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  input: {
    focusSize: 'full',
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
    action: {
      text: 'muted-400',
      duration: '300',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
      full: 'full',
    },
    sm: {
      label: {
        text: 'xs',
      },
      iconOrAction: {
        size: '8',
      },
      iconOrAcionInner: {
        size: '4',
      },
      placeload: {
        size: '8',
      },
    },
    md: {
      label: {
        text: '[0.825rem]',
      },
      iconOrAction: {
        size: '10',
      },
      iconOrAcionInner: {
        size: '[1.15rem]',
      },
      placeload: {
        size: '10',
      },
    },
    lg: {
      label: {
        text: 'sm',
      },
      iconOrAction: {
        size: '12',
      },
      iconOrAcionInner: {
        size: '5',
      },
      placeload: {
        size: '12',
      },
    },
    default: {
      bg: 'white',
      bgDark: 'muted-900',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    defaultContrast: {
      bg: 'white',
      bgDark: 'muted-950',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    muted: {
      bg: 'muted-100',
      bgDark: 'muted-900',
      border: 'muted-200',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950',
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
    hasAction: {
      spaceSM: '8',
      spaceMD: '10',
      spaceLG: '12',
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
        'shurikenUi.inputNumber',
      ) satisfies typeof defaultInputNumberConfig

      addComponents({
        [`.${prefix}input-number-wrapper`]: {
          [`@apply relative`]: {},

          [`.${prefix}input-number-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          [`.${prefix}label-float`]: {
            [`@apply text-${config.label.float.text} pointer-events-none absolute inline-flex h-${config.label.float.size} select-none items-center leading-none transition-all duration-${config.label.float.duration}`]:
              {},
          },
          [`.${prefix}input-number-outer`]: {
            [`@apply ${prefix}focus relative`]: {},
          },
          [`.${prefix}input-number-icon`]: {
            [`@apply text-${config.icon.text} absolute start-0 top-0 z-10 flex items-center justify-center transition-colors duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}input-number-buttons`]: {
            [`@apply absolute top-1 end-1 flex`]: {},
          },
          [`.${prefix}input-number-buttons button`]: {
            [`@apply outline-none flex items-center justify-center`]: {},
            [`@apply border border-muted-200 dark:border-muted-800 last:border-s-0`]:
              {},
            [`@apply text-muted-400 hover:text-muted-600 dark:hover:text-muted-100`]:
              {},
            [`@apply focus:text-muted-600 dark:focus:text-muted-100`]: {},
            [`@apply transition-colors duration-300`]: {},
          },
          [`.${prefix}input-number-buttons svg`]: {
            [`@apply h-4 w-4`]: {},
          },
          [`.${prefix}input-number-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}input-number`]: {
            [`@apply outline-none w-${config.input.focusSize} font-${config.input.font} transition-all duration-${config.input.duration} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},

            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.input.focusVisible.labelFloat.text} dark:!text-${config.input.focusVisible.labelFloat.textDark}`]:
                {},
            },
            [`&:focus-visible ~ .${prefix}input-number-icon`]: {
              [`@apply !text-${config.input.focusVisible.icon.text}`]: {},
            },
            [`&:disabled ~ .${prefix}input-number-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`.${prefix}input-number-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[50%] rounded`]: {},
            },
          },
          [`.${prefix}input-number-action`]: {
            [`@apply text-${config.input.action.text} absolute end-0 top-0 flex items-center justify-center transition-colors duration-${config.input.action.duration}`]:
              {},
          },
          [`&.${prefix}input-number-focus`]: {
            [`.${prefix}input-number`]: {
              [`@apply focus:border-primary-500 dark:focus:border-primary-500`]:
                {},
            },
          },
          [`&.${prefix}input-number-rounded`]: {
            [`.${prefix}input-number, .${prefix}input-number-outer`]: {
              [`@apply rounded-${config.input.rounded.default}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply first:rounded-s-${config.input.rounded.default}`]: {},
              [`@apply last:rounded-e-${config.input.rounded.default}`]: {},
            },
          },
          [`&.${prefix}input-number-smooth`]: {
            [`.${prefix}input-number, .${prefix}input-number-outer`]: {
              [`@apply rounded-${config.input.rounded.smooth}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply first:rounded-s-${config.input.rounded.smooth}`]: {},
              [`@apply last:rounded-e-${config.input.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}input-number-curved`]: {
            [`.${prefix}input-number, .${prefix}input-number-outer`]: {
              [`@apply rounded-${config.input.rounded.curved}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply first:rounded-s-${config.input.rounded.curved}`]: {},
              [`@apply last:rounded-e-${config.input.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}input-number-full`]: {
            [`.${prefix}input-number, .${prefix}input-number-outer`]: {
              [`@apply rounded-${config.input.rounded.full}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply first:rounded-s-${config.input.rounded.full}`]: {},
              [`@apply last:rounded-e-${config.input.rounded.full}`]: {},
            },
          },
          [`&.${prefix}input-number-sm`]: {
            [`.${prefix}input-number-label`]: {
              [`@apply pb-1 text-${config.input.sm.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}input-number-icon, .${prefix}input-number-action`]: {
              [`@apply h-${config.input.sm.iconOrAction.size} w-${config.input.sm.iconOrAction.size}`]:
                {},

              [`.${prefix}input-number-icon-inner, .${prefix}input-number-action-inner`]:
                {
                  [`@apply h-${config.input.sm.iconOrAcionInner.size} w-${config.input.sm.iconOrAcionInner.size}`]:
                    {},
                },
            },
            [`.${prefix}input-number-placeload`]: {
              [`@apply h-${config.input.sm.placeload.size}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply h-6 w-6`]: {},
            },
          },
          [`&.${prefix}input-number-md`]: {
            [`.${prefix}input-number-label`]: {
              [`@apply pb-1 text-${config.input.md.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-2.5`]: {},
            },
            [`.${prefix}input-number-icon, .${prefix}input-number-action`]: {
              [`@apply h-${config.input.md.iconOrAction.size} w-${config.input.md.iconOrAction.size}`]:
                {},

              [`.${prefix}input-number-icon-inner, .${prefix}input-number-action-inner`]:
                {
                  [`@apply h-${config.input.md.iconOrAcionInner.size} w-${config.input.md.iconOrAcionInner.size}`]:
                    {},
                },
            },
            [`.${prefix}input-number-placeload`]: {
              [`@apply h-${config.input.md.placeload.size}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply  h-8 w-8`]: {},
            },
          },
          [`&.${prefix}input-number-lg`]: {
            [`.${prefix}input-number-label`]: {
              [`@apply pb-1 text-${config.input.lg.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-3.5`]: {},
            },
            [`.${prefix}input-number-icon, .${prefix}input-number-action`]: {
              [`@apply h-${config.input.lg.iconOrAction.size} w-${config.input.lg.iconOrAction.size}`]:
                {},

              [`.${prefix}input-number-icon-inner, .${prefix}input-number-action-inner`]:
                {
                  [`@apply h-${config.input.lg.iconOrAcionInner.size} w-${config.input.lg.iconOrAcionInner.size}`]:
                    {},
                },
            },
            [`.${prefix}input-number-placeload`]: {
              [`@apply h-${config.input.lg.placeload.size}`]: {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply h-10 w-10`]: {},
            },
          },
          [`&.${prefix}input-number-default`]: {
            [`.${prefix}input-number`]: {
              [`@apply border bg-${config.input.default.bg} border-${config.input.default.border} text-${config.input.default.text} placeholder:text-${config.input.default.textPlaceholder} dark:border-${config.input.default.borderDark} dark:bg-${config.input.default.bgDark} dark:text-${config.input.default.textDark} dark:placeholder:text-${config.input.default.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply hover:bg-muted-100 dark:hover:bg-muted-800`]: {},
              [`@apply focus:bg-muted-100 dark:focus:bg-muted-800`]: {},
            },
          },
          [`&.${prefix}input-number-default-contrast`]: {
            [`.${prefix}input-number`]: {
              [`@apply border bg-${config.input.defaultContrast.bg} border-${config.input.defaultContrast.border} text-${config.input.defaultContrast.text} placeholder:text-${config.input.defaultContrast.textPlaceholder} dark:border-${config.input.defaultContrast.borderDark} dark:bg-${config.input.defaultContrast.bgDark} dark:text-${config.input.defaultContrast.textDark} dark:placeholder:text-${config.input.defaultContrast.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply hover:bg-muted-100 dark:hover:bg-muted-900`]: {},
              [`@apply focus:bg-muted-100 dark:focus:bg-muted-900`]: {},
            },
          },
          [`&.${prefix}input-number-muted`]: {
            [`.${prefix}input-number`]: {
              [`@apply border bg-${config.input.muted.bg} border-${config.input.muted.border} text-${config.input.muted.text} placeholder:text-${config.input.muted.textPlaceholder} dark:border-${config.input.muted.borderDark} dark:bg-${config.input.muted.bgDark} dark:text-${config.input.muted.textDark} dark:placeholder:text-${config.input.muted.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply hover:bg-white dark:hover:bg-muted-800`]: {},
              [`@apply focus:bg-white dark:focus:bg-muted-800`]: {},
            },
          },
          [`&.${prefix}input-number-muted-contrast`]: {
            [`.${prefix}input-number`]: {
              [`@apply border bg-${config.input.mutedContrast.bg} border-${config.input.mutedContrast.border} text-${config.input.mutedContrast.text} placeholder:text-${config.input.mutedContrast.textPlaceholder} dark:border-${config.input.mutedContrast.borderDark} dark:bg-${config.input.mutedContrast.bgDark} dark:text-${config.input.mutedContrast.textDark} dark:placeholder:text-${config.input.mutedContrast.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-number-buttons button`]: {
              [`@apply hover:bg-white dark:hover:bg-muted-900`]: {},
              [`@apply focus:bg-white dark:focus:bg-muted-900`]: {},
            },
          },
          [`&:not(.${prefix}input-number-loading)`]: {
            [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
              {
                [`@apply text-${config.input.notLoading.text} dark:text-${config.input.notLoading.textDark}`]:
                  {},
              },
          },
          [`&.${prefix}input-number-loading`]: {
            [`.${prefix}input-number`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
              {
                [`@apply text-transparent`]: {},
              },
            [`.${prefix}input-number-icon`]: {
              [`@apply opacity-0`]: {},
            },
          },
          [`&.${prefix}input-number-label-float`]: {
            [`.${prefix}input-number`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}input-number-error`]: {
            [`.${prefix}input-number`]: {
              [`@apply !border-${config.input.error.border} dark:!border-${config.input.error.borderDark}`]:
                {},
            },

            [`.${prefix}input-number-icon`]: {
              [`@apply !text-${config.input.error.icon.text}`]: {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-number-sm`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-8 py-1 text-${config.input.hasNotIcon.text.sm} leading-4 ps-2 pe-14`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-number-sm`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-8 py-1 text-${config.input.hasIcon.text.sm} leading-4 pe-14 ps-8`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-number-md`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-10 py-2 text-${config.input.hasNotIcon.text.md} leading-5 ps-3 pe-20`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-number-md`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-10 py-2 text-${config.input.hasIcon.text.md} leading-5 pe-20 ps-10`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-number-lg`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-12 py-2 text-${config.input.hasNotIcon.text.lg} leading-5 ps-4 pe-24`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-number-lg`]: {
            [`.${prefix}input-number`]: {
              [`@apply h-12 py-2 text-${config.input.hasIcon.text.lg} leading-5 pe-24 ps-11`]:
                {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-number-sm`]: {
            [`.${prefix}input-number`]: {
              [`@apply pe-${config.input.hasAction.spaceSM}`]: {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-number-md`]: {
            [`.${prefix}input-number`]: {
              [`@apply pe-${config.input.hasAction.spaceMD}`]: {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-number-lg`]: {
            [`.${prefix}input-number`]: {
              [`@apply pe-${config.input.hasAction.spaceLG}`]: {},
            },
          },
          [`&.${prefix}input-number-label-float:not(.${prefix}has-icon).${prefix}input-number-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.input.hasNotIcon.labelFloat.sm}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-7`]: {},
                },

              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          [`&.${prefix}input-number-label-float.${prefix}has-icon.${prefix}input-number-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.input.hasIcon.labelFloat.sm}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-8 !-mt-7`]: {},
                },
              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          [`&.${prefix}input-number-label-float:not(.${prefix}has-icon).${prefix}input-number-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.input.hasNotIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-8 !text-${config.input.hasNotIcon.labelFloat.md.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.input.hasNotIcon.labelFloat.md.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}input-number-label-float.${prefix}has-icon.${prefix}input-number-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.input.hasIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-8 !text-${config.input.hasIcon.labelFloat.md.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.input.hasIcon.labelFloat.md.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}input-number-label-float:not(.${prefix}has-icon).${prefix}input-number-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.input.hasNotIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-9 !text-${config.input.hasNotIcon.labelFloat.lg.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.input.hasNotIcon.labelFloat.lg.placeholderShown.text}`]:
                    {},
                },
            },
          [`&.${prefix}input-number-label-float.${prefix}has-icon.${prefix}input-number-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.input.hasIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}input-number:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-9 !text-${config.input.hasIcon.labelFloat.lg.focusVisible.text}`]:
                    {},
                },
              [`.${prefix}input-number:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.input.hasIcon.labelFloat.lg.placeholderShown.text}`]:
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
          inputNumber: defaultInputNumberConfig,
        },
      },
    }
  },
)
