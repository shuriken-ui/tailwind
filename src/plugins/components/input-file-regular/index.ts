import plugin from 'tailwindcss/plugin'
import {
  type InputFileRegularConfig,
  defaultConfig,
  key,
} from './input-file-regular.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies InputFileRegularConfig

  addComponents({
    //Wrapper
    '.nui-input-file-regular': {
      '@apply relative w-full': {},
      //Input:label
      '.nui-input-file-label': {
        '@apply nui-label w-full': {},
      },
      //Input:outer
      '.nui-input-file-outer': {
        '@apply relative': {},
      },
      //Input:inner
      '.nui-input-file-inner': {
        [`@apply relative nui-focus w-${config.inner.width} flex cursor-pointer items-center overflow-hidden disabled:cursor-not-allowed disabled:opacity-75`]:
          {},
        //Font
        [`@apply font-${config.inner.font.family}`]: {},
        //Transition
        [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
          {},
      },
      //Input:addon
      '.nui-input-file-addon': {
        '@apply pointer-events-none flex shrink-0 items-center justify-center gap-1 transition-colors duration-100':
          {},
      },
      //Input:placeholder
      '.nui-input-file-placeholder': {
        //Base
        [`@apply font-${config.placeholder.font.family} text-${config.placeholder.font.size}`]:
          {},
        //Color
        [`@apply text-${config.placeholder.font.color.light} dark:text-${config.placeholder.font.color.dark}`]:
          {},
      },
      //Input:text
      '.nui-input-file-text': {
        [`@apply ms-2 inline-flex truncate text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
          {},
      },
      //Input:placeload
      '.nui-input-file-placeload': {
        '@apply absolute -end-8 flex w-[70%] items-center': {},

        '.nui-placeload': {
          '@apply h-3 w-full max-w-[75%] rounded': {},
        },
      },
      //Input:error
      '.nui-input-file-error-text': {
        //Base
        [`@apply mt-1 block font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
          {},
        //Color
        [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
          {},
      },
      //Color:default
      '&.nui-input-default': {
        //Input:inner
        '.nui-input-file-inner': {
          //Base
          [`@apply text-${config.color.default.inner.font.color.light} dark:text-${config.color.default.inner.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.inner.background.light} dark:bg-${config.color.default.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.inner.border.light} dark:border-${config.color.default.inner.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.inner.placeholder.light} dark:placeholder:text-${config.color.default.inner.placeholder.dark}`]:
            {},
        },
        //Input:addon
        '.nui-input-file-addon': {
          //Background
          [`@apply bg-${config.color.default.addon.background.light} dark:bg-${config.color.default.addon.background.dark}`]:
            {},
          //Color
          [`@apply text-${config.color.default.addon.font.color.light} dark:text-${config.color.default.addon.font.color.dark}`]:
            {},
          //Border
          [`@apply border-e border-${config.color.default.addon.border.light} dark:border-${config.color.default.addon.border.dark}`]:
            {},
        },
      },
      '&.nui-input-default-contrast': {
        //Input:inner
        '.nui-input-file-inner': {
          //Base
          [`@apply text-${config.color.defaultContrast.inner.font.color.light} dark:text-${config.color.defaultContrast.inner.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.inner.background.light} dark:bg-${config.color.defaultContrast.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.inner.border.light} dark:border-${config.color.defaultContrast.inner.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.inner.placeholder.light} dark:placeholder:text-${config.color.defaultContrast.inner.placeholder.dark}`]:
            {},
        },
        //Input:addon
        '.nui-input-file-addon': {
          //Background
          [`@apply bg-${config.color.defaultContrast.addon.background.light} dark:bg-${config.color.defaultContrast.addon.background.dark}`]:
            {},
          //Color
          [`@apply text-${config.color.defaultContrast.addon.font.color.light} dark:text-${config.color.defaultContrast.addon.font.color.dark}`]:
            {},
          //Border
          [`@apply border-e border border-${config.color.defaultContrast.addon.border.light} dark:border-${config.color.defaultContrast.addon.border.dark}`]:
            {},
        },
      },
      //Input:focus
      '&.nui-input-file-color-focus': {
        '.nui-input-file-inner:focus': {
          [`@apply !border-${config.focus.border.light} dark:!border-${config.focus.border.dark}`]:
            {},
        },
      },
      //Input:loading
      '&.nui-input-file-loading': {
        '.nui-input-file-inner': {
          '@apply text-transparent placeholder:text-transparent': {},
        },
      },
      //Error:input
      '&.nui-input-file-error': {
        '.nui-input-file-inner': {
          [`@apply border-${config.error.border.light} dark:border-${config.error.border.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.nui-input-rounded': {
        '.nui-input-file-inner': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.nui-input-smooth': {
        '.nui-input-file-inner': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.nui-input-curved': {
        '.nui-input-file-inner': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-input-full': {
        '.nui-input-file-inner': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Without icon && Size:sm
      '&.nui-input-sm:not(.nui-has-icon)': {
        [`@apply text-${config.icon.disabled.sm.font.size} leading-4`]: {},
        '.nui-input-file-inner': {
          '@apply h-8 py-2 gap-1': {},
        },
        '.nui-input-file-addon': {
          '@apply h-8 px-2': {},
        },
        '.nui-input-file-placeload': {
          '@apply top-2.5': {},
        },
      },
      //With icon && Size:sm
      '&.nui-input-sm.nui-has-icon': {
        [`@apply text-${config.icon.enabled.sm.font.size} leading-4`]: {},
        '.nui-input-file-inner': {
          '@apply h-8 py-2 pe-3': {},
        },
        '.nui-input-file-addon': {
          '@apply h-8 px-2': {},
        },
        '.nui-input-file-icon': {
          [`@apply w-${config.icon.enabled.sm.icon.size} h-${config.icon.enabled.sm.icon.size}`]:
            {},
        },
        '.nui-input-file-placeload': {
          '@apply top-2.5': {},
        },
      },
      //Without icon && Size:md
      '&.nui-input-md:not(.nui-has-icon)': {
        [`@apply text-${config.icon.disabled.md.font.size} leading-5`]: {},
        '.nui-input-file-inner': {
          '@apply h-10 gap-2': {},
        },
        '.nui-input-file-addon': {
          '@apply h-10 px-3': {},
        },
        '.nui-input-file-placeload': {
          '@apply top-3.5': {},
        },
      },
      //With icon && Size:md
      '&.nui-input-md.nui-has-icon': {
        [`@apply text-${config.icon.enabled.md.font.size} leading-5`]: {},
        '.nui-input-file-inner': {
          '@apply h-10 pe-4': {},
        },
        '.nui-input-file-addon': {
          '@apply h-10 px-3': {},
        },
        '.nui-input-file-icon': {
          [`@apply w-${config.icon.enabled.md.icon.size} h-${config.icon.enabled.md.icon.size}`]:
            {},
        },
        '.nui-input-file-placeload': {
          '@apply top-3.5': {},
        },
      },
      //Without icon && Size:lg
      '&.nui-input-lg:not(.nui-has-icon)': {
        [`@apply text-${config.icon.disabled.lg.font.size} leading-5`]: {},
        '.nui-input-file-inner': {
          '@apply h-12 gap-2': {},
        },
        '.nui-input-file-addon': {
          '@apply h-12 px-4': {},
        },
        '.nui-input-file-placeload': {
          '@apply top-[1.2rem]': {},
        },
      },
      //With icon && Size:lg
      '&.nui-input-lg.nui-has-icon': {
        [`@apply text-${config.icon.enabled.lg.font.size} leading-5`]: {},
        '.nui-input-file-inner': {
          '@apply h-12 pe-4': {},
        },
        '.nui-input-file-addon': {
          '@apply h-12 px-4': {},
        },
        '.nui-input-file-icon': {
          [`@apply w-${config.icon.enabled.lg.icon.size} h-${config.icon.enabled.lg.icon.size}`]:
            {},
        },
        '.nui-input-file-placeload': {
          '@apply top-[1.2rem]': {},
        },
      },
      //Input:hover
      '&:hover': {
        '.nui-input-file-addon': {
          [`@apply text-${config.hover.font.color.light} dark:text-${config.hover.font.color.dark}`]:
            {},
        },
      },
      //Input:disabled
      '&:disabled': {
        '.nui-input-file-addon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Input:focus
      '&:focus-within': {
        '.nui-input-file-addon': {
          [`@apply text-${config.focus.font.color.light} dark:text-${config.focus.font.color.dark}`]:
            {},
        },
      },
    },
  })
}, config)
