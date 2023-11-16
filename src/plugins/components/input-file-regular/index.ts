import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type InputFileRegularConfig,
  defaultConfig,
  key,
} from './input-file-regular.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies InputFileRegularConfig

      addComponents({
        [`.${prefix}input-file-regular`]: {
          [`@apply relative w-full`]: {},

          [`.${prefix}input-file-label`]: {
            [`@apply ${prefix}label w-full`]: {},
          },
          [`.${prefix}input-file-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}input-file-inner`]: {
            [`@apply relative ${prefix}focus flex w-${config.inner.size} cursor-pointer items-center overflow-hidden font-${config.inner.font} transition-colors duration-${config.inner.duration} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},
          },
          [`.${prefix}input-file-addon`]: {
            [`@apply pointer-events-none flex shrink-0 items-center justify-center gap-1 transition-colors duration-100`]:
              {},
          },
          [`.${prefix}input-file-placeholder`]: {
            [`@apply font-${config.placeholder.font} text-${config.placeholder.textSize} text-${config.placeholder.text}`]:
              {},
          },
          [`.${prefix}input-file-text`]: {
            [`@apply ms-2 inline-flex truncate text-${config.text.text}`]: {},
          },
          [`.${prefix}input-file-placeload`]: {
            [`@apply absolute -end-8 flex w-[70%] items-center`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`.${prefix}input-file-error-text`]: {
            [`@apply text-${config.error.text} mt-1 block font-${config.error.font} text-${config.error.textSize} font-${config.error.fontWeight} leading-none`]:
              {},
          },
          [`&.${prefix}input-white`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply border bg-${config.white.inner.bg} border-${config.white.inner.border} text-${config.white.inner.text} placeholder:text-${config.white.inner.textPlaceholder} dark:border-${config.white.inner.borderDark} dark:bg-${config.white.inner.bgDark} dark:text-${config.white.inner.textDark} dark:placeholder:text-${config.white.inner.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply bg-${config.white.addon.bg} border-${config.white.addon.border} dark:border-${config.white.addon.borderDark} dark:bg-${config.white.addon.bgDark} text-${config.white.addon.text} border-e`]:
                {},
            },
          },
          [`&.${prefix}input-white-contrast`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply border bg-${config.whiteContrast.inner.bg} border-${config.whiteContrast.inner.border} text-${config.whiteContrast.inner.text} placeholder:text-${config.whiteContrast.inner.textPlaceholder} dark:border-${config.whiteContrast.inner.borderDark} dark:bg-${config.whiteContrast.inner.bgDark} dark:text-${config.whiteContrast.inner.textDark} dark:placeholder:text-${config.whiteContrast.inner.textPlaceholderDark}`]:
                {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply bg-${config.whiteContrast.addon.bg} border-${config.whiteContrast.addon.border} dark:border-${config.whiteContrast.addon.borderDark} dark:bg-${config.whiteContrast.addon.bgDark} text-${config.whiteContrast.addon.text} border-e`]:
                {},
            },
          },
          [`&.${prefix}input-color-focus`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply focus-within:!border-${config.colorFocus}`]: {},
            },
          },
          [`&.${prefix}input-file-loading`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply text-transparent placeholder:text-transparent`]: {},
            },
          },
          [`&.${prefix}input-file-error`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply border-${config.error.border}`]: {},
            },
          },
          [`&.${prefix}input-rounded`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}input-smooth`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}input-curved`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}input-full`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          },
          [`&.${prefix}input-sm:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.hasNotIcon.sm} leading-4`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-8 py-2 gap-1`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-8 px-2`]: {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-2.5`]: {},
            },
          },
          [`&.${prefix}input-sm.${prefix}has-icon`]: {
            [`@apply text-${config.hasIcon.sm.text} leading-4`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-8 py-2 pe-3`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-8 px-2`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.hasIcon.sm.iconSize} h-${config.hasIcon.sm.iconSize}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-2.5`]: {},
            },
          },
          [`&.${prefix}input-md:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.hasNotIcon.md} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-10 gap-2`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-10 px-3`]: {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-3.5`]: {},
            },
          },
          [`&.${prefix}input-md.${prefix}has-icon`]: {
            [`@apply text-${config.hasIcon.md.text} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-10 pe-4`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-10 px-3`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.hasIcon.md.iconSize} h-${config.hasIcon.md.iconSize}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-3.5`]: {},
            },
          },
          [`&.${prefix}input-lg:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.hasNotIcon.lg} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-12 gap-2`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-12 px-4`]: {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-[1.2rem]`]: {},
            },
          },
          [`&.${prefix}input-lg.${prefix}has-icon`]: {
            [`@apply text-${config.hasIcon.lg.text} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-12 pe-4`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-12 px-4`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.hasIcon.lg.iconSize} h-${config.hasIcon.lg.iconSize}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-[1.2rem]`]: {},
            },
          },
          [`&:hover`]: {
            [`.${prefix}input-file-addon`]: {
              [`@apply text-${config.hover}`]: {},
            },
          },
          [`&:disabled`]: {
            [`.${prefix}input-file-addon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`&:focus-within`]: {
            [`.${prefix}input-file-addon`]: {
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
          [key]: defaultConfig,
        },
      },
    }
  },
)
