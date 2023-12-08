import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type SelectConfig, defaultConfig, key } from './select.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies SelectConfig

      addComponents({
        //Wrapper
        [`.${prefix}select-wrapper`]: {
          [`@apply relative`]: {},
          //Select:label
          [`.${prefix}select-label, .${prefix}label-float`]: {
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
          //Select:outer
          [`.${prefix}select-outer`]: {
            [`@apply relative`]: {},
          },
          //Select:icon
          [`.${prefix}select-icon`]: {
            [`@apply absolute start-0 top-0 z-10 flex items-center justify-center`]:
              {},
            //Color
            [`@apply text-${config.select.icon.color.base.light} dark:text-${config.select.icon.color.base.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.select.icon.transition.property} duration-${config.select.icon.transition.duration}`]:
              {},
          },
          //Error:text
          [`.${prefix}select-error-text`]: {
            //Base
            [`@apply mt-1 block`]: {},
            //Font
            [`@apply font-${config.error.font.family} text-${config.error.font.size} font-${config.error.font.weight} leading-none`]:
              {},
            //Font color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Select
          [`.${prefix}select`]: {
            //Base
            [`@apply ${prefix}focus appearance-none w-${config.select.width} font-${config.select.font.family} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},
            //Transition
            [`@apply transition-${config.select.transition.property} duration-${config.select.transition.duration}`]:
              {},
            //Focus:label:float
            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.select.focus.label.float.font.color.light} dark:!text-${config.select.focus.label.float.font.color.dark}`]:
                {},
            },
            //Focus:icon
            [`&:focus-visible ~ .${prefix}select-icon`]: {
              [`@apply !text-${config.select.icon.color.focus.light} dark:!text-${config.select.icon.color.focus.dark}`]:
                {},
            },
            //Focus:chevron
            [`&:focus-visible ~ .${prefix}select-chevron`]: {
              [`@apply rotate-180`]: {},
            },
            //Disabled:icon
            [`&:disabled ~ .${prefix}select-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          //Select:placeload
          [`.${prefix}select-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          //Select:chevron
          [`.${prefix}select-chevron.${prefix}chevron`]: {
            '@apply pointer-events-none': {},
            [`@apply absolute end-0 top-0 z-10 flex items-center justify-center`]:
              {},
            //Color
            [`@apply text-${config.select.chevron.color.light} dark:text-${config.select.chevron.color.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.select.chevron.transition.property} duration-${config.select.chevron.transition.duration}`]:
              {},
          },
          //Select:multiple
          [`&.${prefix}select-multiple`]: {
            [`.${prefix}select`]: {
              [`@apply p-${config.select.multiple.padding} h-${config.select.multiple.size}`]:
                {},
            },
          },
          //Rounded:sm
          [`&.${prefix}select-rounded`]: {
            [`.${prefix}select`]: {
              [`@apply ${config.rounded.sm}`]: {},
            },
          },
          //Rounded:md
          [`&.${prefix}select-smooth`]: {
            [`.${prefix}select`]: {
              [`@apply ${config.rounded.md}`]: {},
            },
          },
          //Rounded:lg
          [`&.${prefix}select-curved`]: {
            [`.${prefix}select`]: {
              [`@apply ${config.rounded.lg}`]: {},
            },
          },
          //Rounded:full
          [`&.${prefix}select-full`]: {
            [`.${prefix}select`]: {
              [`@apply ${config.rounded.full}`]: {},
            },
          },
          //Size:sm
          [`&.${prefix}select-sm`]: {
            //Select
            [`.${prefix}select`]: {
              [`@apply pe-${config.size.sm.padding}`]: {},
            },
            //Select:label
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.size.sm.label.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            //Select:icon
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.size.sm.icon.outer.size} w-${config.size.sm.icon.outer.size}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
                  {},
              },
            },
            //Select:placeload
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.size.sm.placeload.size}`]: {},
            },
          },
          //Size:md
          [`&.${prefix}select-md`]: {
            //Select
            [`.${prefix}select`]: {
              [`@apply pe-${config.size.md.padding}`]: {},
            },
            //Select:label
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.size.md.label.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            //Select:icon
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.size.md.icon.outer.size} w-${config.size.md.icon.outer.size}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
                  {},
              },
            },
            //Select:placeload
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.size.md.placeload.size}`]: {},
            },
          },
          //Size:lg
          [`&.${prefix}select-lg`]: {
            //Select
            [`.${prefix}select`]: {
              [`@apply pe-${config.size.lg.padding}`]: {},
            },
            //Select:label
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.size.lg.label.font.size}`]: {},
            },
            //Label:float
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            //Select:icon
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.size.lg.icon.outer.size} w-${config.size.lg.icon.outer.size}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.size.lg.icon.inner.size} w-${config.size.lg.icon.inner.size}`]:
                  {},
              },
            },
            //Select:placeload
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.size.lg.placeload.size}`]: {},
            },
          },
          //Color:default
          [`&.${prefix}select-default`]: {
            [`.${prefix}select`]: {
              //Font
              [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark}`]:
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
          //Color:default-contrast
          [`&.${prefix}select-default-contrast`]: {
            [`.${prefix}select`]: {
              //Font
              [`@apply text-${config.color.defaultContrast.color.light} dark:text-${config.color.defaultContrast.color.dark}`]:
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
          [`&.${prefix}select-muted`]: {
            [`.${prefix}select`]: {
              //Font
              [`@apply text-${config.color.muted.color.light} dark:text-${config.color.muted.color.dark}`]:
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
          [`&.${prefix}select-muted-contrast`]: {
            [`.${prefix}select`]: {
              //Font
              [`@apply text-${config.color.mutedContrast.color.light} dark:text-${config.color.mutedContrast.color.dark}`]:
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
          //Loaded
          [`&:not(.${prefix}select-loading)`]: {
            [`.${prefix}select ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
          },
          //Loading
          [`&.${prefix}select-loading`]: {
            [`.${prefix}select`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}select ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },

            [`.${prefix}select-icon`]: {
              [`@apply opacity-0`]: {},
            },
          },
          //Label:float
          [`&.${prefix}select-label-float`]: {
            [`.${prefix}select`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          //Select:error
          [`&.${prefix}select-error`]: {
            [`.${prefix}select`]: {
              [`@apply !border-${config.error.select.border.light} dark:!border-${config.error.select.border.dark}`]:
                {},
            },
            //Select:icon
            [`.${prefix}select-icon`]: {
              [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
                {},
            },
          },
          //Without:icon && Size:sm
          [`&:not(.${prefix}has-icon).${prefix}select-sm`]: {
            [`.${prefix}select`]: {
              [`@apply h-8 py-1 text-${config.icon.disabled.select.sm.font.size} leading-4 ps-2 pe-7`]:
                {},
            },
          },
          //With:icon && Size:sm
          [`&.${prefix}has-icon.${prefix}select-sm`]: {
            [`.${prefix}select`]: {
              [`@apply h-8 py-1 text-${config.icon.enabled.select.sm.font.size} leading-4 pe-7 ps-8`]:
                {},
            },
          },
          //Without:icon && Size:md
          [`&:not(.${prefix}has-icon).${prefix}select-md`]: {
            [`.${prefix}select`]: {
              [`@apply h-10 py-2 text-${config.icon.disabled.select.md.font.size} leading-5 ps-3 pe-8`]:
                {},
            },
          },
          //With:icon && Size:md
          [`&.${prefix}has-icon.${prefix}select-md`]: {
            [`.${prefix}select`]: {
              [`@apply h-10 py-2 text-${config.icon.enabled.select.md.font.size} leading-5 pe-8 ps-10`]:
                {},
            },
          },
          //Without:icon && Size:lg
          [`&:not(.${prefix}has-icon).${prefix}select-lg`]: {
            [`.${prefix}select`]: {
              [`@apply h-12 py-2 text-${config.icon.disabled.select.lg.font.size} leading-5 ps-4 pe-9`]:
                {},
            },
          },
          //With:icon && Size:lg
          [`&.${prefix}has-icon.${prefix}select-lg`]: {
            [`.${prefix}select`]: {
              [`@apply h-12 py-2 text-${config.icon.enabled.select.lg.font.size} leading-5 pe-9 ps-11`]:
                {},
            },
          },
          //Without:icon && Size:sm && Label:float
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
                  {},
              },

              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-7`]: {},
              },

              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          //With:icon && Size:sm && Label:float
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
                  {},
              },

              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-8 !-mt-7`]: {},
              },

              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          //Without:icon && Size:md && Label:float
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
                  {},
              },
            },
          //With:icon && Size:md && Label:float
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
                  {},
              },
            },
          //Without:icon && Size:lg && Label:float
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
                  {},
              },
            },
          //With:icon && Size:lg && Label:float
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
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
