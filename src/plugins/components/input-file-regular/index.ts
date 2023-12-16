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
        //Wrapper
        [`.${prefix}input-file-regular`]: {
          [`@apply relative w-full`]: {},
          //Input:label
          [`.${prefix}input-file-label`]: {
            [`@apply ${prefix}label w-full`]: {},
          },
          //Input:outer
          [`.${prefix}input-file-outer`]: {
            [`@apply relative`]: {},
          },
          //Input:inner
          [`.${prefix}input-file-inner`]: {
            [`@apply relative ${prefix}focus w-${config.inner.width} flex cursor-pointer items-center overflow-hidden disabled:cursor-not-allowed disabled:opacity-75`]:
              {},
            //Font
            [`@apply font-${config.inner.font.family}`]: {},
            //Transition
            [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
              {},
          },
          //Input:addon
          [`.${prefix}input-file-addon`]: {
            [`@apply pointer-events-none flex shrink-0 items-center justify-center gap-1 transition-colors duration-100`]:
              {},
          },
          //Input:placeholder
          [`.${prefix}input-file-placeholder`]: {
            //Base
            [`@apply font-${config.placeholder.font.family} text-${config.placeholder.font.size}`]:
              {},
            //Color
            [`@apply text-${config.placeholder.font.color.light} dark:text-${config.placeholder.font.color.dark}`]:
              {},
          },
          //Input:text
          [`.${prefix}input-file-text`]: {
            [`@apply ms-2 inline-flex truncate text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
              {},
          },
          //Input:placeload
          [`.${prefix}input-file-placeload`]: {
            [`@apply absolute -end-8 flex w-[70%] items-center`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          //Input:error
          [`.${prefix}input-file-error-text`]: {
            //Base
            [`@apply mt-1 block font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
              {},
            //Color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Color:white
          [`&.${prefix}input-white`]: {
            //Input:inner
            [`.${prefix}input-file-inner`]: {
              //Base
              [`@apply text-${config.color.white.inner.font.color.light} dark:text-${config.color.white.inner.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.white.inner.background.light} dark:bg-${config.color.white.inner.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.white.inner.border.light} dark:border-${config.color.white.inner.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.white.inner.placeholder.light} dark:placeholder:text-${config.color.white.inner.placeholder.dark}`]:
                {},
            },
            //Input:addon
            [`.${prefix}input-file-addon`]: {
              //Background
              [`@apply bg-${config.color.white.addon.background.light} dark:bg-${config.color.white.addon.background.dark}`]:
                {},
              //Color
              [`@apply text-${config.color.white.addon.font.color.light} dark:text-${config.color.white.addon.font.color.dark}`]:
                {},
              //Border
              [`@apply border-e border border-${config.color.white.addon.border.light} dark:border-${config.color.white.addon.border.dark}`]:
                {},
            },
          },
          [`&.${prefix}input-white-contrast`]: {
            //Input:inner
            [`.${prefix}input-file-inner`]: {
              //Base
              [`@apply text-${config.color.whiteContrast.inner.font.color.light} dark:text-${config.color.whiteContrast.inner.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.whiteContrast.inner.background.light} dark:bg-${config.color.whiteContrast.inner.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.whiteContrast.inner.border.light} dark:border-${config.color.whiteContrast.inner.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.whiteContrast.inner.placeholder.light} dark:placeholder:text-${config.color.whiteContrast.inner.placeholder.dark}`]:
                {},
            },
            //Input:addon
            [`.${prefix}input-file-addon`]: {
              //Background
              [`@apply bg-${config.color.whiteContrast.addon.background.light} dark:bg-${config.color.whiteContrast.addon.background.dark}`]:
                {},
              //Color
              [`@apply text-${config.color.whiteContrast.addon.font.color.light} dark:text-${config.color.whiteContrast.addon.font.color.dark}`]:
                {},
              //Border
              [`@apply border-e border border-${config.color.whiteContrast.addon.border.light} dark:border-${config.color.whiteContrast.addon.border.dark}`]:
                {},
            },
          },
          //Input:focus
          [`&.${prefix}input-color-focus`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply focus-within:!border-${config.focus.border.light} dark:focus-within:!border-${config.focus.border.dark}`]:
                {},
            },
          },
          //Input:loading
          [`&.${prefix}input-file-loading`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply text-transparent placeholder:text-transparent`]: {},
            },
          },
          //Error:input
          [`&.${prefix}input-file-error`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply border-${config.error.border.light} dark:border-${config.error.border.dark}`]:
                {},
            },
          },
          //Rounded:sm
          [`&.${prefix}input-rounded`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply ${config.rounded.sm}`]: {},
            },
          },
          //Rounded:md
          [`&.${prefix}input-smooth`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply ${config.rounded.md}`]: {},
            },
          },
          //Rounded:lg
          [`&.${prefix}input-curved`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply ${config.rounded.lg}`]: {},
            },
          },
          //Rounded:full
          [`&.${prefix}input-full`]: {
            [`.${prefix}input-file-inner`]: {
              [`@apply ${config.rounded.full}`]: {},
            },
          },
          //Without icon && Size:sm
          [`&.${prefix}input-sm:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.icon.disabled.sm.font.size} leading-4`]: {},
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
          //With icon && Size:sm
          [`&.${prefix}input-sm.${prefix}has-icon`]: {
            [`@apply text-${config.icon.enabled.sm.font.size} leading-4`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-8 py-2 pe-3`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-8 px-2`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.icon.enabled.sm.icon.size} h-${config.icon.enabled.sm.icon.size}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-2.5`]: {},
            },
          },
          //Without icon && Size:md
          [`&.${prefix}input-md:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.icon.disabled.md.font.size} leading-5`]: {},
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
          //With icon && Size:md
          [`&.${prefix}input-md.${prefix}has-icon`]: {
            [`@apply text-${config.icon.enabled.md.font.size} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-10 pe-4`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-10 px-3`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.icon.enabled.md.icon.size} h-${config.icon.enabled.md.icon.size}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-3.5`]: {},
            },
          },
          //Without icon && Size:lg
          [`&.${prefix}input-lg:not(.${prefix}has-icon)`]: {
            [`@apply text-${config.icon.disabled.lg.font.size} leading-5`]: {},
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
          //With icon && Size:lg
          [`&.${prefix}input-lg.${prefix}has-icon`]: {
            [`@apply text-${config.icon.enabled.lg.font.size} leading-5`]: {},
            [`.${prefix}input-file-inner`]: {
              [`@apply h-12 pe-4`]: {},
            },
            [`.${prefix}input-file-addon`]: {
              [`@apply h-12 px-4`]: {},
            },
            [`.${prefix}input-file-icon`]: {
              [`@apply w-${config.icon.enabled.lg.icon.size} h-${config.icon.enabled.lg.icon.size}`]:
                {},
            },
            [`.${prefix}input-file-placeload`]: {
              [`@apply top-[1.2rem]`]: {},
            },
          },
          //Input:hover
          [`&:hover`]: {
            [`.${prefix}input-file-addon`]: {
              [`@apply text-${config.hover.font.color.light} dark:text-${config.hover.font.color.dark}`]:
                {},
            },
          },
          //Input:disabled
          [`&:disabled`]: {
            [`.${prefix}input-file-addon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          //Input:focus
          [`&:focus-within`]: {
            [`.${prefix}input-file-addon`]: {
              [`@apply text-${config.focus.font.color.light} dark:text-${config.focus.font.color.dark}`]:
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
