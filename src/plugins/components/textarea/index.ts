import plugin from 'tailwindcss/plugin'
import { type TextareaConfig, defaultConfig, key } from './textarea.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TextareaConfig

  addComponents({
    //Wrapper
    '.nui-textarea-wrapper': {
      '@apply relative': {},
      //Textarea:label
      '.nui-textarea-label, .nui-label-float': {
        '@apply nui-label': {},
      },
      //Label:float
      '.nui-label-float': {
        [`@apply h-${config.label.float.height} absolute inline-flex items-center select-none pointer-events-none`]:
          {},
        //Font
        [`@apply font-${config.label.float.font.family} text-${config.label.float.font.color} leading-${config.label.float.font.lead}`]:
          {},
        //Transition
        [`@apply transition-${config.label.float.transition.property} duration-${config.label.float.transition.duration}`]:
          {},
      },
      //Textarea:outer
      '.nui-textarea-outer': {
        '@apply relative flex flex-col': {},
      },
      //Textarea
      '.nui-textarea': {
        [`@apply nui-focus w-${config.textarea.width} enabled:cursor-text cursor-not-allowed`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .nui-label-float': {
          [`@apply !text-${config.label.float.font.color} dark:!text-${config.label.float.font.color}`]:
            {},
        },
        //Textarea:focus
        '&.nui-textarea-focus': {
          //Focus:color
          [`@apply focus:!border-${config.textarea.focus.border.color.light} dark:focus:!border-${config.textarea.focus.border.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.textarea.transition.property} duration-${config.textarea.transition.duration}`]:
            {},
        },
      },
      //Error:text
      '.nui-textarea-error-text': {
        //Base
        '@apply mt-1 block': {},
        //Font
        [`@apply font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
          {},
        //Font color
        [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
          {},
      },
      //Textrea:placeload
      '.nui-textarea-placeload': {
        [`@apply absolute start-0 top-4 flex h-${config.textarea.placeload.size} w-${config.textarea.placeload.size} flex-col space-y-${config.textarea.placeload.space} px-3`]:
          {},

        '.nui-placeload': {
          '@apply h-3 w-full rounded': {},

          '&:first-child': {
            '@apply max-w-[85%]': {},
          },
          '&:nth-child(2)': {
            '@apply max-w-[65%]': {},
          },
          '&:nth-child(3)': {
            '@apply max-w-[35%]': {},
          },
        },
      },
      //Rounded:sm
      '&.nui-textarea-rounded': {
        '.nui-textarea': {
          [`@apply rounded-${config.rounded.sm}`]: {},
        },
        '.nui-textarea-addon': {
          [`@apply rounded-b-${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.nui-textarea-smooth': {
        '.nui-textarea': {
          [`@apply rounded-${config.rounded.md}`]: {},
        },
        '.nui-textarea-addon': {
          [`@apply rounded-b-${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.nui-textarea-curved': {
        '.nui-textarea': {
          [`@apply rounded-${config.rounded.lg}`]: {},
        },
        '.nui-textarea-addon': {
          [`@apply rounded-b-${config.rounded.lg}`]: {},
        },
      },
      //Color:default
      '&.nui-textarea-default': {
        '.nui-textarea': {
          //Font
          [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.placeholder.light} dark:placeholder:text-${config.color.default.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.border.base.light} dark:border-${config.color.default.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.default.border.hover.light} dark:hover:border-${config.color.default.border.hover.dark}`]:
            {},
        },
      },
      //Color:defaut-contrast
      '&.nui-textarea-default-contrast': {
        '.nui-textarea': {
          //Font
          [`@apply text-${config.color.defaultContrast.color.light} dark:text-${config.color.defaultContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.placeholder.light} dark:placeholder:text-${config.color.defaultContrast.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.border.base.light} dark:border-${config.color.defaultContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.defaultContrast.border.hover.light} dark:hover:border-${config.color.defaultContrast.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted
      '&.nui-textarea-muted': {
        '.nui-textarea': {
          //Font
          [`@apply text-${config.color.muted.color.light} dark:text-${config.color.muted.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.muted.placeholder.light} dark:placeholder:text-${config.color.muted.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.muted.border.base.light} dark:border-${config.color.muted.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.muted.border.hover.light} dark:hover:border-${config.color.muted.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted-contrast
      '&.nui-textarea-muted-contrast': {
        '.nui-textarea': {
          //Font
          [`@apply text-${config.color.mutedContrast.color.light} dark:text-${config.color.mutedContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.mutedContrast.placeholder.light} dark:placeholder:text-${config.color.mutedContrast.placeholder.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.mutedContrast.border.base.light} dark:border-${config.color.mutedContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.mutedContrast.border.hover.light} dark:hover:border-${config.color.mutedContrast.border.hover.dark}`]:
            {},
        },
      },
      //Textarea:loaded
      '&:not(.nui-textarea-loading)': {
        '.nui-textarea:placeholder-shown ~ .nui-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Textarea:loading
      '&.nui-textarea-loading': {
        '.nui-textarea': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.nui-textarea:placeholder-shown ~ .nui-label-float': {
          '@apply text-transparent': {},
        },
      },
      //Label:float
      '&.nui-textarea-label-float': {
        '.nui-textarea': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Textarea:error
      '&.nui-textarea-error': {
        '.nui-textarea': {
          [`@apply !border-${config.error.textarea.border.light} dark:!border-${config.error.textarea.border.dark}`]:
            {},
        },
      },
      //Resize:none
      '&.nui-textarea-no-resize': {
        '.nui-textarea': {
          '@apply resize-none': {},
        },
      },
      //Size:sm
      '&.nui-textarea-sm': {
        [`@apply min-h-${config.size.sm.height} text-${config.size.sm.font.size}`]:
          {},

        '.nui-textarea-label': {
          [`@apply pb-1 text-${config.size.sm.label.size}`]: {},
        },
      },
      //Size:md
      '&.nui-textarea-md': {
        [`@apply min-h-${config.size.md.height} text-${config.size.md.font.size}`]:
          {},

        '.nui-textarea-label': {
          [`@apply pb-1 text-${config.size.md.label.size}`]: {},
        },
      },
      //Size:lg
      '&.nui-textarea-lg': {
        [`@apply min-h-${config.size.lg.height} text-${config.size.lg.font.size}`]:
          {},

        '.nui-textarea-label': {
          [`@apply pb-1 text-${config.size.lg.label.size}`]: {},
        },
      },
      //Addon:false
      '&:not(.nui-has-addon)': {
        '.nui-textarea': {
          '@apply p-2': {},
        },
      },
      //Addon:true
      '&.nui-has-addon': {
        '.nui-textarea': {
          '@apply px-2 pb-14 pt-2': {},
        },
        '.nui-textarea-addon': {
          //Base
          '@apply absolute bottom-0 start-0 flex items-center justify-between':
            {},
          //size
          [`@apply w-full h-${config.textarea.addon.size} p-${config.textarea.addon.padding}`]:
            {},
          //Background
          [`@apply bg-${config.textarea.addon.background.light} dark:bg-${config.textarea.addon.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.textarea.addon.border.light} dark:border-${config.textarea.addon.border.dark}`]:
            {},
        },
        '.nui-textarea-addon-start': {
          '@apply flex items-center gap-2': {},
        },
        '.nui-textarea-addon-end': {
          '@apply flex items-center justify-end gap-2': {},
        },
      },
      //Label:float && Size:sm
      '&.nui-textarea-label-float.nui-textarea-sm': {
        '.nui-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.size.sm.label.float.size}`]:
            {},
        },
        '.nui-textarea:focus-visible ~ .nui-label-float': {
          '@apply !-ms-3 !-mt-6': {},
        },
        '.nui-textarea:placeholder-shown ~ .nui-label-float': {
          '@apply ms-0 mt-[0.35rem]': {},
        },
      },
      //Label:float && Size:md
      '&.nui-textarea-label-float.nui-textarea-md': {
        '.nui-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.md.label.float.size.base}`]:
            {},
        },
        '.nui-textarea:focus-visible ~ .nui-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.md.label.float.size.focus}`]:
            {},
        },
        '.nui-textarea:placeholder-shown ~ .nui-label-float': {
          [`@apply ms-0 mt-2.5 text-${config.size.md.label.float.size.unfocus}`]:
            {},
        },
      },
      //Label:float && Size:lg
      '&.nui-textarea-label-float.nui-textarea-lg': {
        '.nui-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.lg.label.float.size.base}`]:
            {},
        },
        '.nui-textarea:focus-visible ~ .nui-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.lg.label.float.size.focus}`]:
            {},
        },
        '.nui-textarea:placeholder-shown ~ .nui-label-float': {
          [`@apply ms-0 mt-3 text-${config.size.lg.label.float.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
