import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ListboxConfig, defaultConfig, key } from './listbox.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ListboxConfig

      addComponents({
        //Wrapper
        [`.${prefix}listbox`]: {
          [`@apply relative w-full`]: {},
          //Listbox:label
          [`.${prefix}listbox-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          //Label:float
          [`.${prefix}label-float`]: {
            //Base
            [`@apply pointer-events-none absolute inline-flex select-none items-center leading-none`]:
              {},
            //Color & Height
            [`@apply text-${config.label.float.font.color} h-${config.label.float.height}`]:
              {},
            //Transition
            [`@apply transition-${config.label.float.transition.property} duration-${config.label.float.transition.duration}`]:
              {},
          },
          //Listbox:outer
          [`.${prefix}listbox-outer`]: {
            [`@apply relative`]: {},
          },
          //Listbox:button
          [`.${prefix}listbox-button`]: {
            //Base
            [`@apply ${prefix}focus relative w-${config.button.size} flex items-center gap-2 pe-12 ps-4 border leading-5 disabled:cursor-not-allowed disabled:opacity-75`]:
              {},
            //Font
            [`@apply font-${config.button.font.family} text-${config.button.font.size} text-${config.button.font.align}`]:
              {},
            //Button:inner
            [`.${prefix}listbox-button-inner`]: {
              '@apply flex w-full items-center': {},
              //Inner:icon-box
              [`.${prefix}icon-box`]: {
                //Outer
                [`@apply !h-${config.button.iconBox.outer.size} !w-${config.button.iconBox.outer.size}`]:
                  {},
                //Outer:margin
                [`@apply -ms-${config.button.iconBox.margin.x} me-${config.button.iconBox.margin.x}`]:
                  {},
                //Inner
                [`.${prefix}icon-box-inner`]: {
                  [`@apply h-${config.button.iconBox.inner.size} w-${config.button.iconBox.inner.size}`]:
                    {},
                },
              },
              //Inner:placeholder
              [`.${prefix}listbox-placeholder`]: {
                [`@apply text-${config.button.placeholder.font.color.light} dark:text-${config.button.placeholder.font.color.dark} truncate text-${config.button.placeholder.font.align}`]:
                  {},
              },
            },
            //Inner:chevron
            [`&:focus-visible ~ .${prefix}listbox-chevron .${prefix}listbox-chevron-inner, &:focus ~ .${prefix}listbox-chevron .${prefix}listbox-chevron-inner`]:
              {
                [`@apply !rotate-180`]: {},
              },
          },
          //Listbox:icon
          [`.${prefix}listbox-icon.${prefix}icon`]: {
            //Color
            [`@apply text-${config.button.icon.color.light} dark:text-${config.button.icon.color.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.button.icon.transition.property} duration-${config.button.icon.transition.duration}`]:
              {},
            [`@apply absolute start-0 top-0 z-10 flex items-center justify-center`]:
              {},
          },
          //Listbox:chevron
          [`.${prefix}listbox-chevron.${prefix}chevron`]: {
            //Base
            [`@apply pointer-events-none absolute top-0 end-0 flex items-center justify-center border-s`]:
              {},
            //Chevron:inner
            [`.${prefix}listbox-chevron-inner`]: {
              //Transition
              [`@apply transition-${config.chevron.inner.transition.property} duration-${config.chevron.inner.transition.duration}`]:
                {},
              //Size
              [`@apply h-${config.chevron.inner.size} w-${config.chevron.inner.size}`]:
                {},
              //Color
              [`@apply text-${config.chevron.inner.color.light} dark:text-${config.chevron.inner.color.dark}`]:
                {},
            },
          },
          //Listbox:options
          [`.${prefix}listbox-options`]: {
            [`@apply ${prefix}slimscroll absolute z-10 mt-1 max-h-60 w-full overflow-auto p-${config.options.padding}`]:
              {},
            //Font
            [`@apply text-${config.options.font.size} sm:text-sm`]: {},
            //Ring
            [`@apply focus:ring-${config.options.ring.focus.light} dark:focus:ring-${config.options.ring.focus.dark} focus:outline-none focus:ring-1`]:
              {},
            //Shadow
            [`@apply shadow-${config.options.shadow.size} shadow-${config.options.shadow.light} dark:shadow-${config.options.shadow.dark}`]:
              {},
          },
          //Listbox:option
          [`.${prefix}listbox-option`]: {
            [`@apply relative flex gap-2 cursor-pointer select-none items-center px-3 py-2`]:
              {},
            //Transition
            [`@apply transition-${config.option.transition.property} duration-${config.option.transition.duration}`]:
              {},
            //Option:icon-box
            [`.${prefix}icon-box`]: {
              //Color
              [`@apply text-${config.option.iconBox.color.light} dark:text-${config.option.iconBox.color.dark} -ms-2 me-1`]:
                {},
              //Icon-box:inner
              [`.${prefix}icon-box-inner`]: {
                [`@apply h-${config.option.iconBox.inner.size} w-${config.option.iconBox.inner.size}`]:
                  {},
              },
            },
            //Option:icon
            [`.${prefix}listbox-selected-icon`]: {
              [`@apply text-${config.option.icon.color.light} dark:text-${config.option.icon.color.light} ms-auto flex items-center`]:
                {},
            },
            //Icon:inner
            [`.${prefix}listbox-selected-icon-inner`]: {
              [`@apply h-${config.option.icon.inner.size} w-${config.option.icon.inner.size}`]:
                {},
            },
            //Option:inner
            [`.${prefix}listbox-option-inner`]: {
              [`.${prefix}listbox-heading`]: {
                //Base
                [`@apply block truncate`]: {},
                //Color
                [`@apply text-${config.option.inner.heading.font.color.light} dark:text-${config.option.inner.heading.font.color.dark}`]:
                  {},
              },
              //Option:inner:text
              [`.${prefix}listbox-text`]: {
                [`@apply text-${config.option.inner.font.color.light} dark:text-${config.option.inner.font.color.dark}`]:
                  {},
              },
            },
            //Option:not-active
            [`&:not(.${prefix}active), &:not(:hover)`]: {
              [`@apply text-muted-600 dark:text-muted-200`]: {},
            },
            //Option:active
            [`&.${prefix}active, &:hover`]: {
              //Color
              [`@apply text-${config.option.activeHover.font.color.light} dark:text-${config.option.activeHover.font.color.light}`]:
                {},
              //Background
              [`@apply bg-${config.option.activeHover.background.light} dark:bg-${config.option.activeHover.background.dark}`]:
                {},
            },
          },
          //Listbox:error
          [`.${prefix}listbox-error-text`]: {
            //Base
            [`@apply mt-1 block`]: {},
            //Font
            [`@apply font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
              {},
            //Color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Listbox:placeload
          [`.${prefix}listbox-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          //Size:sm
          [`&.${prefix}listbox-sm`]: {
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.size.sm.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            //Listbox:icon
            [`.${prefix}listbox-icon`]: {
              [`@apply h-${config.size.sm.icon.size.outer} w-${config.size.sm.icon.size.outer}`]:
                {},

              [`.${prefix}listbox-icon-inner`]: {
                [`@apply h-${config.size.sm.icon.size.inner} w-${config.size.sm.icon.size.inner}`]:
                  {},
              },
            },
            //Listbox:placeload
            [`.${prefix}listbox-placeload`]: {
              [`@apply h-${config.size.sm.placeload.size}`]: {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply h-${config.size.sm.chevron.outer.size} w-${config.size.sm.chevron.outer.size}`]:
                {},
              //Chevron:inner
              [`.${prefix}listbox-chevron-inner`]: {
                [`@apply h-${config.size.sm.chevron.inner.size} w-${config.size.sm.chevron.inner.size}`]:
                  {},
              },
            },
          },
          //Size:md
          [`&.${prefix}listbox-md`]: {
            //Listbox:label
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.size.md.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
          },
          //Listbox:icon
          [`.${prefix}listbox-icon`]: {
            [`@apply h-${config.size.md.icon.size.outer} w-${config.size.md.icon.size.outer}`]:
              {},

            [`.${prefix}listbox-icon-inner`]: {
              [`@apply h-${config.size.md.icon.size.inner} w-${config.size.md.icon.size.inner}`]:
                {},
            },
          },
          //Listbox:placeload
          [`.${prefix}listbox-placeload`]: {
            [`@apply h-${config.size.md.placeload.size}`]: {},
          },
          //Listbox:chevron
          [`.${prefix}listbox-chevron`]: {
            [`@apply h-${config.size.md.chevron.outer.size} w-${config.size.md.chevron.outer.size}`]:
              {},
            //Chevron:inner
            [`.${prefix}listbox-chevron-inner`]: {
              [`@apply h-${config.size.md.chevron.inner.size} w-${config.size.md.chevron.inner.size}`]:
                {},
            },
          },
          //Size:lg
          [`&.${prefix}listbox-lg`]: {
            [`.${prefix}listbox-label`]: {
              [`@apply pb-1 text-${config.size.lg.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            //Listbox:icon
            [`.${prefix}listbox-icon`]: {
              [`@apply h-${config.size.lg.icon.size.outer} w-${config.size.lg.icon.size.outer}`]:
                {},

              [`.${prefix}listbox-icon-inner`]: {
                [`@apply h-${config.size.lg.icon.size.inner} w-${config.size.lg.icon.size.inner}`]:
                  {},
              },
            },
            //Listbox:placeload
            [`.${prefix}listbox-placeload`]: {
              [`@apply h-${config.size.lg.placeload.size}`]: {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply h-${config.size.lg.chevron.outer.size} w-${config.size.lg.chevron.outer.size}`]:
                {},
              //Chevron:inner
              [`.${prefix}listbox-chevron-inner`]: {
                [`@apply h-${config.size.lg.chevron.inner.size} w-${config.size.lg.chevron.inner.size}`]:
                  {},
              },
            },
          },
          //Rounded:sm
          [`&.${prefix}listbox-rounded`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply ${config.rounded.sm}`]: {},
              },
          },
          //Rounded:md
          [`&.${prefix}listbox-smooth`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply ${config.rounded.md}`]: {},
              },
          },
          //Rounded:lg
          [`&.${prefix}listbox-curved`]: {
            [`.${prefix}listbox-button, .${prefix}listbox-options, .${prefix}listbox-option`]:
              {
                [`@apply ${config.rounded.lg}`]: {},
              },
          },
          //Rounded:full
          [`&.${prefix}listbox-full`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply ${config.rounded.full}`]: {},
            },

            [`.${prefix}listbox-option, .${prefix}listbox-options`]: {
              [`@apply ${config.rounded.lg}`]: {},
            },
          },
          //Color:default
          [`&.${prefix}listbox-default`]: {
            [`.${prefix}listbox-button`]: {
              //Color
              [`@apply text-${config.color.default.base.font.color.light} dark:text-${config.color.default.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.default.base.background.light} dark:bg-${config.color.default.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.default.base.border.light} dark:border-${config.color.default.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder-${config.color.default.base.placeholder.color.light} dark:placeholder-${config.color.default.base.placeholder.color.dark}`]:
                {},
              //Focus
              [`@apply focus:shadow-lg focus:shadow-${config.color.default.shadow.focus.light} dark:focus:shadow-${config.color.default.shadow.focus.dark}`]:
                {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.color.default.chevron.color.light} dark:border-${config.color.default.chevron.color.dark}`]:
                {},
            },
            //Listbox:options
            [`.${prefix}listbox-options`]: {
              //Background
              [`@apply bg-${config.color.default.option.background.light} dark:bg-${config.color.default.option.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.default.option.border.light} dark:border-${config.color.default.option.border.dark}`]:
                {},
            },
          },
          //Color:defaultContrast
          [`&.${prefix}listbox-default-contrast`]: {
            [`.${prefix}listbox-button`]: {
              //Color
              [`@apply text-${config.color.defaultContrast.base.font.color.light} dark:text-${config.color.defaultContrast.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.defaultContrast.base.background.light} dark:bg-${config.color.defaultContrast.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.defaultContrast.base.border.light} dark:border-${config.color.defaultContrast.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder-${config.color.defaultContrast.base.placeholder.color.light} dark:placeholder-${config.color.defaultContrast.base.placeholder.color.dark}`]:
                {},
              //Focus
              [`@apply focus:shadow-lg focus:shadow-${config.color.defaultContrast.shadow.focus.light} dark:focus:shadow-${config.color.defaultContrast.shadow.focus.dark}`]:
                {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.color.defaultContrast.chevron.color.light} dark:border-${config.color.defaultContrast.chevron.color.dark}`]:
                {},
            },
            //Listbox:options
            [`.${prefix}listbox-options`]: {
              //Background
              [`@apply dark:bg-${config.color.defaultContrast.option.background.light} bg-${config.color.defaultContrast.option.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.defaultContrast.option.border.light} dark:border-${config.color.defaultContrast.option.border.dark}`]:
                {},
            },
          },
          //Color:muted
          [`&.${prefix}listbox-muted`]: {
            [`.${prefix}listbox-button`]: {
              //Color
              [`@apply text-${config.color.muted.base.font.color.light} dark:text-${config.color.muted.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.muted.base.background.light} dark:bg-${config.color.muted.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.muted.base.border.light} dark:border-${config.color.muted.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder-${config.color.muted.base.placeholder.color.light} dark:placeholder-${config.color.muted.base.placeholder.color.dark}`]:
                {},
              //Focus
              [`@apply focus:shadow-lg focus:shadow-${config.color.muted.shadow.focus.light} dark:focus:shadow-${config.color.muted.shadow.focus.dark}`]:
                {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.color.muted.chevron.color.light} dark:border-${config.color.muted.chevron.color.dark}`]:
                {},
            },
            //Listbox:options
            [`.${prefix}listbox-options`]: {
              //Background
              [`@apply bg-${config.color.muted.option.background.light} dark:bg-${config.color.muted.option.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.muted.option.border.light} dark:border-${config.color.muted.option.border.dark}`]:
                {},
            },
          },
          //Color:mutedContrast
          [`&.${prefix}listbox-muted-contrast`]: {
            [`.${prefix}listbox-button`]: {
              //Color
              [`@apply text-${config.color.mutedContrast.base.font.color.light} dark:text-${config.color.mutedContrast.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.mutedContrast.base.background.light} dark:bg-${config.color.mutedContrast.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.mutedContrast.base.border.light} dark:border-${config.color.mutedContrast.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder-${config.color.mutedContrast.base.placeholder.color.light} dark:placeholder-${config.color.mutedContrast.base.placeholder.color.dark}`]:
                {},
              //Focus
              [`@apply focus:shadow-lg focus:shadow-${config.color.mutedContrast.shadow.focus.light} dark:focus:shadow-${config.color.mutedContrast.shadow.focus.dark}`]:
                {},
            },
            //Listbox:chevron
            [`.${prefix}listbox-chevron`]: {
              [`@apply border-${config.color.mutedContrast.chevron.color.light} dark:border-${config.color.mutedContrast.chevron.color.dark}`]:
                {},
            },
            //Listbox:options
            [`.${prefix}listbox-options`]: {
              //Background
              [`@apply dark:bg-${config.color.mutedContrast.option.background.light} bg-${config.color.mutedContrast.option.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.mutedContrast.option.border.light} dark:border-${config.color.mutedContrast.option.border.dark}`]:
                {},
            },
          },
          //Listbox:loaded
          [`&:not(.${prefix}listbox-loading)`]: {
            [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
              [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
                {},
            },
          },
          //Listbox:loading
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
          //Label:float
          [`&.${prefix}listbox-label-float`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          //Listbox:error
          [`&.${prefix}listbox-error`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply !border-${config.error.button.border.light} dark:!border-${config.error.button.border.dark}`]:
                {},
            },
            //Listbox:icon
            [`.${prefix}listbox-icon`]: {
              [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
                {},
            },
          },
          //Without:icon && Size:sm
          [`&:not(.${prefix}has-icon).${prefix}listbox-sm`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-8 py-1 text-${config.icon.disabled.input.sm.font.size} leading-4 px-2`]:
                {},
            },
          },
          //With:icon && Size:sm
          [`&.${prefix}has-icon.${prefix}listbox-sm`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-8 py-1 text-${config.icon.enabled.input.sm.font.size} leading-4 pe-3 ps-8`]:
                {},
            },
          },
          //Without:icon && Size:md
          [`&:not(.${prefix}has-icon).${prefix}listbox-md`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-10 py-2 text-${config.icon.disabled.input.md.font.size} leading-5 px-3`]:
                {},
            },
          },
          //With:icon && Size:md
          [`&.${prefix}has-icon.${prefix}listbox-md`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-10 py-2 text-${config.icon.enabled.input.md.font.size} leading-5 pe-4 ps-10`]:
                {},
            },
          },
          //Without:icon && Size:lg
          [`&:not(.${prefix}has-icon).${prefix}listbox-lg`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-12 py-2 text-${config.icon.disabled.input.lg.font.size} leading-5 px-4`]:
                {},
            },
          },
          //With:icon && Size:lg
          [`&.${prefix}has-icon.${prefix}listbox-lg`]: {
            [`.${prefix}listbox-button`]: {
              [`@apply h-12 py-2 text-${config.icon.enabled.input.lg.font.size} leading-5 pe-4 ps-11`]:
                {},
            },
          },
          //Without:icon && Size:sm && Label:float
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-within ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-7 !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button:not(:focus-within) ~ .${prefix}label-float, .${prefix}listbox-button:not(:focus) ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          //With:icon && Size:sm && Label:float
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.icon.disabled.label.float.sm.font.size} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-8 !-mt-7 !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          //Without:icon && Size:md && Label:float
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus} !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.base}`]:
                  {},
              },
            },
          //With:icon && Size:md && Label:float
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus} !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
                  {},
              },
            },
          //Without:icon && Size:lg && Label:float
          [`&.${prefix}listbox-label-float:not(.${prefix}has-icon).${prefix}listbox-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.lg.font.size.base} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus} !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
                  {},
              },
            },
          //With:icon && Size:lg && Label:float
          [`&.${prefix}listbox-label-float.${prefix}has-icon.${prefix}listbox-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.icon.enabled.label.float.lg.font.size.base} text-transparent`]:
                  {},
              },
              [`.${prefix}listbox-button:focus-visible ~ .${prefix}label-float, .${prefix}listbox-button:focus ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus} !text-${config.label.float.font.color}`]:
                    {},
                },
              [`.${prefix}listbox-button ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.lg.font.size.unfocus}`]:
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
