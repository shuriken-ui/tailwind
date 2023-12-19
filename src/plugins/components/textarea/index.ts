import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type TextareaConfig, defaultConfig, key } from './textarea.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies TextareaConfig

      addComponents({
        //Wrapper
        [`.${prefix}textarea-wrapper`]: {
          [`@apply relative`]: {},
          //Textarea:label
          [`.${prefix}textarea-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          //Label:float
          [`.${prefix}label-float`]: {
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
          [`.${prefix}textarea-outer`]: {
            [`@apply relative flex flex-col`]: {},
          },
          //Textarea
          [`.${prefix}textarea`]: {
            [`@apply ${prefix}focus w-${config.textarea.width} enabled:cursor-default cursor-not-allowed`]:
              {},
            //Focus:label:float
            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.label.float.font.color} dark:!text-${config.label.float.font.color}`]:
                {},
            },
            //Textarea:focus
            [`&.${prefix}textarea-focus`]: {
              //Focus:color
              [`@apply focus:!border-${config.textarea.focus.border.color.light} dark:focus:!border-${config.textarea.focus.border.color.dark}`]:
                {},
              //Transition
              [`@apply transition-${config.textarea.transition.property} duration-${config.textarea.transition.duration}`]:
                {},
            },
          },
          //Error:text
          [`.${prefix}textarea-error-text`]: {
            //Base
            [`@apply mt-1 block`]: {},
            //Font
            [`@apply font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
              {},
            //Font color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Textrea:placeload
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
          //Rounded:sm
          [`&.${prefix}textarea-rounded`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.rounded.sm}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.rounded.sm}`]: {},
            },
          },
          //Rounded:md
          [`&.${prefix}textarea-smooth`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.rounded.md}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.rounded.md}`]: {},
            },
          },
          //Rounded:lg
          [`&.${prefix}textarea-curved`]: {
            [`.${prefix}textarea`]: {
              [`@apply rounded-${config.rounded.lg}`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              [`@apply rounded-b-${config.rounded.lg}`]: {},
            },
          },
          //Color:default
          [`&.${prefix}textarea-default`]: {
            [`.${prefix}textarea`]: {
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
          [`&.${prefix}textarea-default-contrast`]: {
            [`.${prefix}textarea`]: {
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
          [`&.${prefix}textarea-muted`]: {
            [`.${prefix}textarea`]: {
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
          [`&.${prefix}textarea-muted-contrast`]: {
            [`.${prefix}textarea`]: {
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
          [`&:not(.${prefix}textarea-loading)`]: {
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
                {},
            },
          },
          //Textarea:loading
          [`&.${prefix}textarea-loading`]: {
            [`.${prefix}textarea`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
          },
          //Label:float
          [`&.${prefix}textarea-label-float`]: {
            [`.${prefix}textarea`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          //Textarea:error
          [`&.${prefix}textarea-error`]: {
            [`.${prefix}textarea`]: {
              [`@apply !border-${config.error.textarea.border.light} dark:!border-${config.error.textarea.border.dark}`]:
                {},
            },
          },
          //Resize:none
          [`&.${prefix}textarea-no-resize`]: {
            [`.${prefix}textarea`]: {
              [`@apply resize-none`]: {},
            },
          },
          //Size:sm
          [`&.${prefix}textarea-sm`]: {
            [`@apply min-h-${config.size.sm.height} text-${config.size.sm.font.size}`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.size.sm.label.size}`]: {},
            },
          },
          //Size:md
          [`&.${prefix}textarea-md`]: {
            [`@apply min-h-${config.size.md.height} text-${config.size.md.font.size}`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.size.md.label.size}`]: {},
            },
          },
          //Size:lg
          [`&.${prefix}textarea-lg`]: {
            [`@apply min-h-${config.size.lg.height} text-${config.size.lg.font.size}`]:
              {},

            [`.${prefix}textarea-label`]: {
              [`@apply pb-1 text-${config.size.lg.label.size}`]: {},
            },
          },
          //Addon:false
          [`&:not(.${prefix}has-addon)`]: {
            [`.${prefix}textarea`]: {
              [`@apply p-2`]: {},
            },
          },
          //Addon:true
          [`&.${prefix}has-addon`]: {
            [`.${prefix}textarea`]: {
              [`@apply px-2 pb-14 pt-2`]: {},
            },
            [`.${prefix}textarea-addon`]: {
              //Base
              [`@apply absolute bottom-0 start-0 flex items-center justify-between`]:
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
            [`.${prefix}textarea-addon-start`]: {
              [`@apply flex items-center gap-2`]: {},
            },
            [`.${prefix}textarea-addon-end`]: {
              [`@apply flex items-center justify-end gap-2`]: {},
            },
          },
          //Label:float && Size:sm
          [`&.${prefix}textarea-label-float.${prefix}textarea-sm`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-7 text-${config.size.sm.label.float.size}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-6`]: {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-[0.35rem]`]: {},
            },
          },
          //Label:float && Size:md
          [`&.${prefix}textarea-label-float.${prefix}textarea-md`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-8 text-${config.size.md.label.float.size.base}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-7 !text-${config.size.md.label.float.size.focus}`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-2.5 text-${config.size.md.label.float.size.unfocus}`]:
                {},
            },
          },
          //Label:float && Size:lg
          [`&.${prefix}textarea-label-float.${prefix}textarea-lg`]: {
            [`.${prefix}label-float`]: {
              [`@apply start-3 -ms-3 -mt-8 text-${config.size.lg.label.float.size.base}`]:
                {},
            },
            [`.${prefix}textarea:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !-ms-3 !-mt-7 !text-${config.size.lg.label.float.size.focus}`]:
                {},
            },
            [`.${prefix}textarea:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply ms-0 mt-3 text-${config.size.lg.label.float.size.unfocus}`]:
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
