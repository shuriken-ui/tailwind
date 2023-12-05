import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type AutocompleteConfig,
  defaultConfig,
  key,
} from './autocomplete.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies AutocompleteConfig

      addComponents({
        [`.${prefix}autocomplete`]: {
          [`@apply w-full relative`]: {},
          //Autocomplete:label
          [`.${prefix}autocomplete-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          //Autocomplete:label float
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
          //Autocomplete:multiple
          [`.${prefix}autocomplete-multiple`]: {
            [`@apply block`]: {},
            //multiple:list
            [`.${prefix}autocomplete-multiple-list`]: {
              [`@apply my-2 flex flex-wrap gap-1`]: {},
            },
            //multiple:list item
            [`.${prefix}autocomplete-multiple-list-item`]: {
              //Base
              [`@apply flex items-center py-2 pe-2 ps-3`]: {},
              //Font
              [`@apply font-${config.multiple.item.font.family} text-${config.multiple.item.font.size} font-${config.multiple.item.font.weight}`]:
                {},
              //Text color
              [`@apply text-${config.multiple.item.font.color.light} dark:text-${config.multiple.item.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.multiple.item.background.light} dark:bg-${config.multiple.item.background.dark}`]:
                {},
            },
            //multiple:list icon
            [`.${prefix}autocomplete-multiple-list-item-icon`]: {
              [`@apply ms-1 block h-${config.multiple.icon.size} w-${config.multiple.icon.size}`]:
                {},
            },
          },
          //Autocomplete:outer
          [`.${prefix}autocomplete-outer`]: {
            [`@apply relative`]: {},
          },
          //Autocomplete:icon
          [`.${prefix}autocomplete-icon`]: {
            [`@apply absolute start-0 top-0 z-10 flex items-center justify-center`]:
              {},
            //Font
            [`@apply text-${config.input.icon.color.light} dark:text-${config.input.icon.color.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.input.icon.transition.property} duration-${config.input.icon.transition.duration}`]:
              {},
          },
          //Autocomplete:input
          [`.${prefix}autocomplete-input`]: {
            [`@apply ${prefix}focus w-${config.input.width} font-${config.input.font.family}`]:
              {},
            //State
            [`@apply disabled:cursor-not-allowed disabled:opacity-75`]: {},
            //Transition
            [`@apply transition-${config.input.transition.property} duration-${config.input.transition.duration}`]:
              {},
            //Focus:label float
            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.input.focus.label.float.font.color.light} dark:!text-${config.input.focus.label.float.font.color.dark}`]:
                {},
            },
            //Focus:icon
            [`&:focus-visible ~ .${prefix}autocomplete-icon`]: {
              [`@apply !text-${config.input.focus.icon.color.light} dark:!text-${config.input.focus.icon.color.dark}`]:
                {},
            },
            //State:disabled
            [`&:disabled ~ .${prefix}autocomplete-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          //Autocomplete:clear
          [`.${prefix}autocomplete-clear`]: {
            [`@apply absolute end-0 top-0 z-auto flex items-center justify-center cursor-pointer`]:
              {},
            //Text color
            [`@apply text-${config.clear.font.color.base.light} dark:text-${config.clear.font.color.base.dark}`]:
              {},
            //Text color hover
            [`@apply hover:text-${config.clear.font.color.hover.light} dark:hover:text-${config.clear.font.color.hover.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.clear.transition.property} duration-${config.clear.transition.duration}`]:
              {},
            //Clear:inner
            [`.${prefix}autocomplete-clear-inner`]: {
              [`@apply w-${config.clear.inner.size} h-${config.clear.inner.size}`]:
                {},
            },
          },
          //Autocomplete:placeload
          [`.${prefix}autocomplete-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},
            //Placeload:inner
            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          //Autocomplete:error
          [`.${prefix}autocomplete-error-text`]: {
            //Base
            [`@apply mt-1 block leading-none`]: {},
            //Error text font
            [`@apply font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight}`]:
              {},
            //Error text color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Autocomplete:results
          [`.${prefix}autocomplete-results`]: {
            [`@apply ${prefix}slimscroll absolute z-20 mt-1 max-h-[265px] w-full overflow-auto py-1 outline-none sm:text-sm`]:
              {},
            //Font size
            [`@apply text-${config.results.font.size}`]: {},
            //Shadow
            [`@apply shadow-${config.results.shadow.size} shadow-${config.results.shadow.light} dark:shadow-${config.results.shadow.dark}`]:
              {},
            //Results:header & footer
            [`.${prefix}autocomplete-results-header, .${prefix}autocomplete-results-footer`]:
              {
                [`@apply relative px-2 py-1`]: {},
              },
          },
          //Autocomplete:results item
          [`.${prefix}autocomplete-results-item`]: {
            [`@apply px-2 py-1`]: {},
          },
          //Item:inner
          [`.${prefix}autocomplete-results-item-inner`]: {
            [`@apply text-muted-800 dark:text-muted-100 flex gap-2 cursor-pointer items-center`]:
              {},
            //Padding
            [`@apply p-${config.item.padding}`]: {},
            //Transition
            [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
              {},
            //Item:selected
            [`.${prefix}autocomplete-results-item-selected`]: {
              [`@apply ms-auto flex items-center justify-center`]: {},
            },
            //Selected:icon
            [`.${prefix}autocomplete-results-item-selected-icon`]: {
              [`@apply block text-${config.item.icon.color}`]: {},
              //Size
              [`@apply h-${config.item.icon.size} w-${config.item.icon.size}`]:
                {},
            },
            //Item:media
            [`&.${prefix}has-media`]: {
              [`.${prefix}autocomplete-results-item-selected`]: {
                [`@apply h-${config.item.media.size} w-${config.item.media.size}`]:
                  {},
              },
            },
          },
          //Results:placeholder
          [`.${prefix}autocomplete-results-placeholder`]: {
            //Base
            [`@apply relative px-4 py-2 cursor-default select-none`]: {},
            //Font
            [`@apply font-${config.placeholder.font.family} text-${config.placeholder.font.color.light} dark:text-${config.placeholder.font.color.dark}`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}autocomplete-rounded`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply rounded-${config.rounded.sm}`]: {},
            },
            //Inner elements
            [`.${prefix}autocomplete-results, .${prefix}autocomplete-results-item-inner, .${prefix}autocomplete-multiple .${prefix}autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.sm}`]: {},
              },
          },
          //Rounded:md
          [`&.${prefix}autocomplete-smooth`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply rounded-${config.rounded.md}`]: {},
            },
            //Inner elements
            [`.${prefix}autocomplete-results, .${prefix}autocomplete-results-item-inner, .${prefix}autocomplete-multiple .${prefix}autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.md}`]: {},
              },
          },
          //Rounded:lg
          [`&.${prefix}autocomplete-curved`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply rounded-${config.rounded.lg}`]: {},
            },
            //Inner elements
            [`.${prefix}autocomplete-results, .${prefix}autocomplete-results-item-inner, .${prefix}autocomplete-multiple .${prefix}autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.lg}`]: {},
              },
          },
          //Rounded:full
          [`&.${prefix}autocomplete-full`]: {
            [`.${prefix}autocomplete-input, .${prefix}autocomplete-multiple .${prefix}autocomplete-multiple-list-item`]:
              {
                [`@apply rounded-${config.rounded.full}`]: {},
              },

            [`.${prefix}autocomplete-results, .${prefix}autocomplete-results-item-inner`]:
              {
                [`@apply rounded-${config.rounded.lg}`]: {},
              },
          },
          //Size:sm
          [`&.${prefix}autocomplete-sm`]: {
            [`.${prefix}autocomplete-label`]: {
              [`@apply pb-1 text-${config.size.sm.font.size}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}autocomplete-icon`]: {
              [`@apply h-${config.size.sm.icon.size.outer} w-${config.size.sm.icon.size.outer}`]:
                {},
              [`.${prefix}autocomplete-icon-inner`]: {
                [`@apply h-${config.size.sm.icon.size.inner} w-${config.size.sm.icon.size.inner}`]:
                  {},
              },
            },
            [`.${prefix}autocomplete-placeload`]: {
              [`@apply h-${config.size.sm.placeload.size}`]: {},
            },
            [`.${prefix}autocomplete-clear`]: {
              [`@apply h-${config.size.sm.clear.size} w-${config.size.sm.clear.size}`]:
                {},
            },
          },
          //Size:md
          [`&.${prefix}autocomplete-md`]: {
            [`.${prefix}autocomplete-label`]: {
              [`@apply pb-1 text-${config.size.md.font.size}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-2.5`]: {},
            },
            [`.${prefix}autocomplete-icon`]: {
              [`@apply h-${config.size.md.icon.size.outer} w-${config.size.md.icon.size.outer}`]:
                {},
              [`.${prefix}autocomplete-icon-inner`]: {
                [`@apply h-${config.size.md.icon.size.inner} w-${config.size.md.icon.size.inner}`]:
                  {},
              },
            },
            [`.${prefix}autocomplete-placeload`]: {
              [`@apply h-${config.size.md.placeload.size}`]: {},
            },
            [`.${prefix}autocomplete-clear`]: {
              [`@apply h-${config.size.md.clear.size} w-${config.size.md.clear.size}`]:
                {},
            },
          },
          //Size:lg
          [`&.${prefix}autocomplete-lg`]: {
            [`.${prefix}autocomplete-label`]: {
              [`@apply pb-1 text-${config.size.lg.font.size}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-3.5`]: {},
            },
            [`.${prefix}autocomplete-icon`]: {
              [`@apply h-${config.size.lg.icon.size.outer} w-${config.size.lg.icon.size.outer}`]:
                {},
              [`.${prefix}autocomplete-icon-inner`]: {
                [`@apply h-${config.size.lg.icon.size.inner} w-${config.size.lg.icon.size.inner}`]:
                  {},
              },
            },
            [`.${prefix}autocomplete-placeload`]: {
              [`@apply h-${config.size.lg.placeload.size}`]: {},
            },
            [`.${prefix}autocomplete-clear`]: {
              [`@apply h-${config.size.lg.clear.size} w-${config.size.lg.clear.size}`]:
                {},
            },
          },
          //Color:default
          [`&.${prefix}autocomplete-default`]: {
            [`.${prefix}autocomplete-input`]: {
              //Text
              [`@apply text-${config.color.default.base.font.color.light} dark:text-${config.color.default.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.default.base.background.light} dark:bg-${config.color.default.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.default.base.border.light} dark:border-${config.color.default.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.default.base.placeholder.color.light} dark:placeholder:text-${config.color.default.base.placeholder.color.dark}`]:
                {},
            },
            //Results
            [`.${prefix}autocomplete-results`]: {
              //Border
              [`@apply border border-${config.color.default.results.outer.border.light} dark:border-${config.color.default.results.outer.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.default.results.outer.background.light} dark:bg-${config.color.default.results.outer.background.dark}`]:
                {},
            },
            //Results:inner
            [`.${prefix}autocomplete-results-item-inner.${prefix}active`]: {
              [`@apply bg-${config.color.default.results.inner.background.light} dark:bg-${config.color.default.results.inner.background.dark}`]:
                {},
            },
          },
          //Color:default contrast
          [`&.${prefix}autocomplete-default-contrast`]: {
            [`.${prefix}autocomplete-input`]: {
              //Text
              [`@apply text-${config.color.defaultContrast.base.font.color.light} dark:text-${config.color.defaultContrast.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.defaultContrast.base.background.light} dark:bg-${config.color.defaultContrast.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.defaultContrast.base.border.light} dark:border-${config.color.defaultContrast.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.defaultContrast.base.placeholder.color.light} dark:placeholder:text-${config.color.defaultContrast.base.placeholder.color.dark}`]:
                {},
            },
            //Results
            [`.${prefix}autocomplete-results`]: {
              //Border
              [`@apply border border-${config.color.defaultContrast.results.outer.border.light} dark:border-${config.color.defaultContrast.results.outer.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.defaultContrast.results.outer.background.light} dark:bg-${config.color.defaultContrast.results.outer.background.dark}`]:
                {},
            },
            //Results:inner
            [`.${prefix}autocomplete-results-item-inner.${prefix}active`]: {
              [`@apply bg-${config.color.defaultContrast.results.inner.background.light} dark:bg-${config.color.defaultContrast.results.inner.background.dark}`]:
                {},
            },
          },
          //Color:muted
          [`&.${prefix}autocomplete-muted`]: {
            [`.${prefix}autocomplete-input`]: {
              //Text
              [`@apply text-${config.color.muted.base.font.color.light} dark:text-${config.color.muted.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.muted.base.background.light} dark:bg-${config.color.muted.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.muted.base.border.light} dark:border-${config.color.muted.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.muted.base.placeholder.color.light} dark:placeholder:text-${config.color.muted.base.placeholder.color.dark}`]:
                {},
            },
            //Results
            [`.${prefix}autocomplete-results`]: {
              //Border
              [`@apply border border-${config.color.muted.results.outer.border.light} dark:border-${config.color.muted.results.outer.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.muted.results.outer.background.light} dark:bg-${config.color.muted.results.outer.background.dark}`]:
                {},
            },
            //Results:inner
            [`.${prefix}autocomplete-results-item-inner.${prefix}active`]: {
              [`@apply bg-${config.color.muted.results.inner.background.light} dark:bg-${config.color.muted.results.inner.background.dark}`]:
                {},
            },
          },
          //Color:muted contrast
          [`&.${prefix}autocomplete-muted-contrast`]: {
            [`.${prefix}autocomplete-input`]: {
              //Text
              [`@apply text-${config.color.mutedContrast.base.font.color.light} dark:text-${config.color.mutedContrast.base.font.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.mutedContrast.base.background.light} dark:bg-${config.color.mutedContrast.base.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.color.mutedContrast.base.border.light} dark:border-${config.color.mutedContrast.base.border.dark}`]:
                {},
              //Placeholder
              [`@apply placeholder:text-${config.color.mutedContrast.base.placeholder.color.light} dark:placeholder:text-${config.color.mutedContrast.base.placeholder.color.dark}`]:
                {},
            },
            //Results
            [`.${prefix}autocomplete-results`]: {
              //Border
              [`@apply border border-${config.color.mutedContrast.results.outer.border.light} dark:border-${config.color.mutedContrast.results.outer.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.mutedContrast.results.outer.background.light} dark:bg-${config.color.mutedContrast.results.outer.background.dark}`]:
                {},
            },
            //Results:inner
            [`.${prefix}autocomplete-results-item-inner.${prefix}active`]: {
              [`@apply bg-${config.color.mutedContrast.results.inner.background.light} dark:bg-${config.color.mutedContrast.results.inner.background.dark}`]:
                {},
            },
          },
          //Autocomplete:not loading
          [`&:not(.${prefix}autocomplete-loading)`]: {
            [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
              {
                [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
                  {},
              },
          },
          //Autocomplete:loading
          [`&.${prefix}autocomplete-loading`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
              {
                [`@apply text-transparent`]: {},
              },

            [`.${prefix}autocomplete-icon`]: {
              [`@apply opacity-50`]: {},
            },
          },
          //Autocomplete:label float
          [`&.${prefix}autocomplete-label-float`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
            [`.${prefix}autocomplete-multiple .${prefix}autocomplete-multiple-list`]:
              {
                [`@apply mb-6`]: {},
              },
          },
          //Autocomplte:input error
          [`&.${prefix}autocomplete-error`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply !border-${config.error.input.border.light} dark:!border-${config.error.input.border.dark}`]:
                {},
            },
            //Input:icon
            [`.${prefix}autocomplete-icon`]: {
              [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
                {},
            },
          },
          //Size:sm without icon
          [`&:not(.${prefix}has-icon).${prefix}autocomplete-sm`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-8 py-1 text-${config.icon.disabled.input.sm.font.size} leading-4 px-2`]:
                {},
            },
          },
          //Size:sm with icon
          [`&.${prefix}has-icon.${prefix}autocomplete-sm`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-8 py-1 text-${config.icon.enabled.input.sm.font.size} leading-4 pe-3 ps-8`]:
                {},
            },
          },
          //Size:md without icon
          [`&:not(.${prefix}has-icon).${prefix}autocomplete-md`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-10 py-2 text-${config.icon.disabled.input.md.font.size} leading-5 px-3`]:
                {},
            },
          },
          //Size:md with icon
          [`&.${prefix}has-icon.${prefix}autocomplete-md`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-10 py-2 text-${config.icon.enabled.input.md.font.size} leading-5 pe-4 ps-10`]:
                {},
            },
          },
          //Size:lg without icon
          [`&:not(.${prefix}has-icon).${prefix}autocomplete-lg`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-12 py-2 text-${config.icon.disabled.input.lg.font.size} leading-5 px-4`]:
                {},
            },
          },
          //Size:lg with icon
          [`&.${prefix}has-icon.${prefix}autocomplete-lg`]: {
            [`.${prefix}autocomplete-input`]: {
              [`@apply h-12 py-2 text-${config.icon.enabled.input.lg.font.size} leading-5 pe-4 ps-11`]:
                {},
            },
          },
          //Size:sm without icon and label float
          [`&.${prefix}autocomplete-label-float:not(.${prefix}has-icon).${prefix}autocomplete-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
                  {},
              },
              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-7`]: {},
                },
              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          //Size:sm with icon and label float
          [`&.${prefix}autocomplete-label-float.${prefix}has-icon.${prefix}autocomplete-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
                  {},
              },

              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-8 !-mt-7`]: {},
                },

              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0`]: {},
                },
            },
          //Size:md without icon and label float
          [`&.${prefix}autocomplete-label-float:not(.${prefix}has-icon).${prefix}autocomplete-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
                  {},
              },

              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
                    {},
                },

              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
                    {},
                },
            },
          //Size:md with icon and label float
          [`&.${prefix}autocomplete-label-float.${prefix}has-icon.${prefix}autocomplete-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
                  {},
              },
              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
                    {},
                },
              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
                    {},
                },
            },
          //Size:lg without icon and label float
          [`&.${prefix}autocomplete-label-float:not(.${prefix}has-icon).${prefix}autocomplete-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
                  {},
              },
              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
                    {},
                },
              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
                  [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
                    {},
                },
            },
          //Size:lg with icon and label float
          [`&.${prefix}autocomplete-label-float.${prefix}has-icon.${prefix}autocomplete-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
                  {},
              },
              [`.${prefix}autocomplete-input:focus-visible ~ .${prefix}label-float`]:
                {
                  [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
                    {},
                },
              [`.${prefix}autocomplete-input:placeholder-shown ~ .${prefix}label-float`]:
                {
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
