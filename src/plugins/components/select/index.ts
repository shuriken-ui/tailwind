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
        [`.${prefix}select-wrapper`]: {
          [`@apply relative`]: {},

          [`.${prefix}select-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          [`.${prefix}label-float`]: {
            [`@apply text-${config.labelFloat.text} pointer-events-none absolute inline-flex h-${config.labelFloat.size} select-none items-center leading-none transition-all duration-${config.labelFloat.duration}`]:
              {},
          },
          [`.${prefix}select-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}select-icon`]: {
            [`@apply text-${config.icon.text} absolute start-0 top-0 z-10 flex items-center justify-center transition-colors duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}select-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}select`]: {
            [`@apply ${prefix}focus appearance-none w-${config.select.size} font-${config.select.font} transition-all duration-${config.select.duration} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},

            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.select.focusVisible.labelFloat.text} dark:!text-${config.select.focusVisible.labelFloat.textDark}`]:
                {},
            },
            [`&:focus-visible ~ .${prefix}select-icon`]: {
              [`@apply !text-${config.select.focusVisible.icon.text}`]: {},
            },
            [`&:focus-visible ~ .${prefix}select-chevron`]: {
              [`@apply rotate-180`]: {},
            },
            [`&:disabled ~ .${prefix}select-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`.${prefix}select-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`.${prefix}select-chevron`]: {
            '@apply pointer-events-none': {},
            [`@apply text-${config.select.chevron.text} absolute end-0 top-0 z-10 flex items-center justify-center transition-transform duration-${config.select.chevron.duration}`]:
              {},
          },
          [`&.${prefix}select-multiple`]: {
            [`.${prefix}select`]: {
              [`@apply p-${config.select.multiple.space} h-${config.select.multiple.size}`]:
                {},
            },
          },
          [`&.${prefix}select-rounded`]: {
            [`.${prefix}select`]: {
              [`@apply rounded-${config.select.rounded.default}`]: {},
            },
          },
          [`&.${prefix}select-smooth`]: {
            [`.${prefix}select`]: {
              [`@apply rounded-${config.select.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}select-curved`]: {
            [`.${prefix}select`]: {
              [`@apply rounded-${config.select.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}select-full`]: {
            [`.${prefix}select`]: {
              [`@apply rounded-${config.select.rounded.full}`]: {},
            },
          },
          [`&.${prefix}select-sm`]: {
            [`.${prefix}select`]: {
              [`@apply pe-${config.select.sm.space}`]: {},
            },
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.select.sm.labelText}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.select.sm.iconOrChevronSize} w-${config.select.sm.iconOrChevronSize}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.select.sm.iconOrChevronSizeInner} w-${config.select.sm.iconOrChevronSizeInner}`]:
                  {},
              },
            },
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.select.sm.placeloadSize}`]: {},
            },
          },
          [`&.${prefix}select-md`]: {
            [`.${prefix}select`]: {
              [`@apply pe-${config.select.md.space}`]: {},
            },
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.select.md.labelText}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.select.md.iconOrChevronSize} w-${config.select.md.iconOrChevronSize}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.select.md.iconOrChevronSizeInner} w-${config.select.md.iconOrChevronSizeInner}`]:
                  {},
              },
            },
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.select.md.placeloadSize}`]: {},
            },
          },
          [`&.${prefix}select-lg`]: {
            [`.${prefix}select`]: {
              [`@apply pe-${config.select.lg.space}`]: {},
            },
            [`.${prefix}select-label`]: {
              [`@apply pb-1 text-${config.select.lg.labelText}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}select-icon, .${prefix}select-chevron`]: {
              [`@apply h-${config.select.lg.iconOrChevronSize} w-${config.select.lg.iconOrChevronSize}`]:
                {},

              [`.${prefix}select-icon-inner, .${prefix}select-chevron-inner`]: {
                [`@apply h-${config.select.lg.iconOrChevronSizeInner} w-${config.select.lg.iconOrChevronSizeInner}`]:
                  {},
              },
            },
            [`.${prefix}select-placeload`]: {
              [`@apply h-${config.select.lg.placeloadSize}`]: {},
            },
          },
          [`&.${prefix}select-default`]: {
            [`.${prefix}select`]: {
              [`@apply border bg-${config.select.default.bg} border-${config.select.default.border} text-${config.select.default.text} placeholder:text-${config.select.default.textPlaceholder} dark:border-${config.select.default.borderDark} dark:bg-${config.select.default.bgDark} dark:text-${config.select.default.textDark} dark:placeholder:text-${config.select.default.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}select-default-contrast`]: {
            [`.${prefix}select`]: {
              [`@apply border bg-${config.select.defaultContrast.bg} border-${config.select.defaultContrast.border} text-${config.select.defaultContrast.text} placeholder:text-${config.select.defaultContrast.textPlaceholder} dark:border-${config.select.defaultContrast.borderDark} dark:bg-${config.select.defaultContrast.bgDark} dark:text-${config.select.defaultContrast.textDark} dark:placeholder:text-${config.select.defaultContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}select-muted`]: {
            [`.${prefix}select`]: {
              [`@apply border bg-${config.select.muted.bg} border-${config.select.muted.border} text-${config.select.muted.text} placeholder:text-${config.select.muted.textPlaceholder} dark:border-${config.select.muted.borderDark} dark:bg-${config.select.muted.bgDark} dark:text-${config.select.muted.textDark} dark:placeholder:text-${config.select.muted.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}select-muted-contrast`]: {
            [`.${prefix}select`]: {
              [`@apply border bg-${config.select.mutedContrast.bg} border-${config.select.mutedContrast.border} text-${config.select.mutedContrast.text} placeholder:text-${config.select.mutedContrast.textPlaceholder} dark:border-${config.select.mutedContrast.borderDark} dark:bg-${config.select.mutedContrast.bgDark} dark:text-${config.select.mutedContrast.textDark} dark:placeholder:text-${config.select.mutedContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&:not(.${prefix}select-loading)`]: {
            [`.${prefix}select ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
          },
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
          [`&.${prefix}select-label-float`]: {
            [`.${prefix}select`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}select-error`]: {
            [`.${prefix}select`]: {
              [`@apply !border-${config.select.error.border} dark:!border-${config.select.error.borderDark}`]:
                {},
            },

            [`.${prefix}select-icon`]: {
              [`@apply !text-${config.select.error.icon.text}`]: {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}select-sm`]: {
            [`.${prefix}select`]: {
              [`@apply h-8 py-1 text-${config.select.hasNotIcon.text.sm} leading-4 ps-2 pe-7`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}select-sm`]: {
            [`.${prefix}select`]: {
              [`@apply h-8 py-1 text-${config.select.hasIcon.text.sm} leading-4 pe-7 ps-8`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}select-md`]: {
            [`.${prefix}select`]: {
              [`@apply h-10 py-2 text-${config.select.hasNotIcon.text.md} leading-5 ps-3 pe-8`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}select-md`]: {
            [`.${prefix}select`]: {
              [`@apply h-10 py-2 text-${config.select.hasIcon.text.md} leading-5 pe-8 ps-10`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}select-lg`]: {
            [`.${prefix}select`]: {
              [`@apply h-12 py-2 text-${config.select.hasNotIcon.text.lg} leading-5 ps-4 pe-9`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}select-lg`]: {
            [`.${prefix}select`]: {
              [`@apply h-12 py-2 text-${config.select.hasIcon.text.lg} leading-5 pe-9 ps-11`]:
                {},
            },
          },
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.select.hasNotIcon.labelFloat.sm}`]:
                  {},
              },

              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-7`]: {},
              },

              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.select.hasIcon.labelFloat.sm}`]:
                  {},
              },

              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-8 !-mt-7`]: {},
              },

              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.select.hasNotIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-8 !text-${config.select.hasNotIcon.labelFloat.md.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.select.hasNotIcon.labelFloat.md.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.select.hasIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-8 !text-${config.select.hasIcon.labelFloat.md.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.select.hasIcon.labelFloat.md.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}select-label-float:not(.${prefix}has-icon).${prefix}select-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.select.hasNotIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-9 !text-${config.select.hasNotIcon.labelFloat.lg.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.select.hasNotIcon.labelFloat.lg.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}select-label-float.${prefix}has-icon.${prefix}select-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.select.hasIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}select:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-9 !text-${config.select.hasIcon.labelFloat.lg.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}select ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.select.hasIcon.labelFloat.lg.placeholderShown.text}`]:
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
