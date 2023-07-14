import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultInputFileRegularConfig = {
  inner: {
    size: 'full',
    font: 'sans',
    duration: '300',
  },
  placeholder: {
    font: 'sans',
    text: 'muted-400',
    textSize: 'xs',
  },
  text: {
    text: 'muted-400',
  },
  error: {
    text: 'danger-600',
    textSize: '[0.65rem',
    font: 'sans',
    fontWeight: 'medium',
    border: 'danger-500',
  },
  white: {
    inner: {
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    addon: {
      bg: 'muted-50',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-400',
    },
  },
  whiteContrast: {
    inner: {
      bg: 'white',
      bgDark: 'muted-900/75',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    addon: {
      bg: 'muted-50',
      bgDark: 'muted-950',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-400',
    },
  },
  colorFocus: 'primary-500',
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
  hasNotIcon: {
    sm: 'xs',
    md: '[0.825rem]',
    lg: 'sm',
  },
  hasIcon: {
    sm: {
      text: 'xs',
      iconSize: '3',
    },
    md: {
      text: '[0.825rem]',
      iconSize: '4',
    },
    lg: {
      text: 'sm',
      iconSize: '5',
    },
  },
  hover: 'primary-500',
  focusWhitin: 'primary-500',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.inputFileRegular'
      ) satisfies typeof defaultInputFileRegularConfig

      addComponents({
        [`.${prefix}-input-file-regular`]: {
          [`@apply relative w-full`]: {},

          [`.${prefix}-input-file-label`]: {
            [`@apply ${prefix}-label w-full`]: {},
          },
          [`.${prefix}-input-file-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}-input-file-inner`]: {
            [`@apply ${prefix}-focus flex w-${config.inner.size} cursor-pointer items-center overflow-hidden font-${config.inner.font} transition-colors duration-${config.inner.duration} focus-within:outline-1 disabled:cursor-not-allowed disabled:opacity-75`]:
              {},
          },
          [`.${prefix}-input-file-addon`]: {
            [`@apply pointer-events-none flex shrink-0 items-center justify-center gap-1 transition-colors duration-100`]:
              {},
          },
          [`.${prefix}-input-file-placeholder`]: {
            [`@apply font-${config.placeholder.font} text-${config.placeholder.textSize} text-${config.placeholder.text}`]:
              {},
          },
          [`.${prefix}-input-file-text`]: {
            [`@apply ms-2 inline-flex truncate text-${config.text.text}`]: {},
          },
          [`.${prefix}-input-file-placeload`]: {
            [`@apply absolute start-0 flex h-10 w-full items-center`]: {},

            [`.${prefix}-placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`.${prefix}-input-file-error`]: {
            [`@apply text-${config.error.text} mt-1 block font-${config.error.font} text-${config.error.textSize} font-${config.error.fontWeight} leading-none`]:
              {},
          },
          [`&.${prefix}-input-white`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply border bg-${config.white.inner.bg} border-${config.white.inner.border} text-${config.white.inner.text} placeholder:text-${config.white.inner.textPlaceholder} dark:border-${config.white.inner.borderDark} dark:bg-${config.white.inner.bgDark} dark:text-${config.white.inner.textDark} dark:placeholder:text-${config.white.inner.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-input-file-addon`]: {
              [`@apply bg-${config.white.addon.bg} border-${config.white.addon.border} dark:border-${config.white.addon.borderDark} dark:bg-${config.white.addon.bgDark} text-${config.white.addon.text} border-e`]:
                {},
            },
          },
          [`&.${prefix}-input-white-contrast`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply border bg-${config.whiteContrast.inner.bg} border-${config.whiteContrast.inner.border} text-${config.whiteContrast.inner.text} placeholder:text-${config.whiteContrast.inner.textPlaceholder} dark:border-${config.whiteContrast.inner.borderDark} dark:bg-${config.whiteContrast.inner.bgDark} dark:text-${config.whiteContrast.inner.textDark} dark:placeholder:text-${config.whiteContrast.inner.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}-input-file-addon`]: {
              [`@apply bg-${config.whiteContrast.addon.bg} border-${config.whiteContrast.addon.border} dark:border-${config.whiteContrast.addon.borderDark} dark:bg-${config.whiteContrast.addon.bgDark} text-${config.whiteContrast.addon.text} border-e`]:
                {},
            },
          },
          [`&.${prefix}-input-color-focus`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply focus:border-${config.colorFocus}`]: {},
            },
          },
          [`&.${prefix}-input-file-loading`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply text-transparent placeholder:text-transparent`]: {},
            },
          },
          [`&.${prefix}-input-file-error`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply border-${config.error.border}`]: {},
            },
          },
          [`&.${prefix}-input-rounded`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}-input-smooth`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}-input-curved`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-input-full`]: {
            [`.${prefix}-input-file-inner`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          },
          [`&.${prefix}-input-sm:not(.${prefix}-has-icon)`]: {
            [`@apply h-8 py-2 text-${config.hasNotIcon.sm} leading-4 gap-1`]:
              {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-8 px-2`]: {},
            },
          },
          [`&.${prefix}-input-sm.${prefix}-has-icon`]: {
            [`@apply h-8 py-2 text-${config.hasIcon.sm.text} leading-4 pe-3`]:
              {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-8 px-2`]: {},
            },
            [`.${prefix}-input-file-icon`]: {
              [`@apply w-${config.hasIcon.sm.iconSize} h-${config.hasIcon.sm.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-input-md:not(.${prefix}-has-icon)`]: {
            [`@apply h-10 text-${config.hasNotIcon.md} leading-5 gap-2`]: {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-10 px-3`]: {},
            },
          },
          [`&.${prefix}-input-md.${prefix}-has-icon`]: {
            [`@apply h-10 text-${config.hasIcon.md.text} leading-5 pe-4`]: {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-10 px-3`]: {},
            },
            [`.${prefix}-input-file-icon`]: {
              [`@apply w-${config.hasIcon.md.iconSize} h-${config.hasIcon.md.iconSize}`]:
                {},
            },
          },
          [`&.${prefix}-input-lg:not(.${prefix}-has-icon)`]: {
            [`@apply h-12 text-${config.hasNotIcon.lg} leading-5 gap-2`]: {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-12 px-4`]: {},
            },
          },
          [`&.${prefix}-input-lg.${prefix}-has-icon`]: {
            [`@apply h-12 text-${config.hasIcon.lg.text} leading-5 pe-4`]: {},
            [`.${prefix}-input-file-addon`]: {
              [`@apply h-12 px-4`]: {},
            },
            [`.${prefix}-input-file-icon`]: {
              [`@apply w-${config.hasIcon.lg.iconSize} h-${config.hasIcon.lg.iconSize}`]:
                {},
            },
          },
          [`&:hover`]: {
            [`.${prefix}-input-file-addon`]: {
              [`@apply text-${config.hover}`]: {},
            },
          },
          [`&:disabled`]: {
            [`.${prefix}-input-file-addon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`&:focus-within`]: {
            [`.${prefix}-input-file-addon`]: {
              [`@apply text-${config.focusWhitin}`]: {},
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
          inputFileRegular: defaultInputFileRegularConfig,
        },
      },
    }
  }
)
