import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type InputConfig, defaultConfig, key } from './input.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies InputConfig

      addComponents({
        [`.${prefix}input-wrapper`]: {
          [`@apply relative`]: {},

          [`.${prefix}input-label, .${prefix}label-float`]: {
            [`@apply ${prefix}label`]: {},
          },
          [`.${prefix}label-float`]: {
            [`@apply text-${config.label.float.text} pointer-events-none absolute inline-flex h-${config.label.float.size} select-none items-center leading-none transition-all duration-${config.label.float.duration}`]:
              {},
          },
          [`.${prefix}input-outer`]: {
            [`@apply relative`]: {},
          },
          [`.${prefix}input-icon`]: {
            [`@apply text-${config.icon.text} absolute start-0 top-0 z-10 flex items-center justify-center transition-colors duration-${config.icon.duration}`]:
              {},
          },
          [`.${prefix}input-error-text`]: {
            [`@apply text-${config.errorText.text} mt-1 block font-${config.errorText.font} text-${config.errorText.textSize} font-${config.errorText.fontWeight} leading-none`]:
              {},
          },
          [`.${prefix}input`]: {
            [`@apply ${prefix}focus w-${config.input.focusSize} font-${config.input.font} transition-all duration-${config.input.duration} disabled:cursor-not-allowed disabled:opacity-75`]:
              {},

            [`&:focus-visible ~ .${prefix}label-float`]: {
              [`@apply !text-${config.input.focusVisible.labelFloat.text} dark:!text-${config.input.focusVisible.labelFloat.textDark}`]:
                {},
            },
            [`&:focus-visible ~ .${prefix}input-icon`]: {
              [`@apply !text-${config.input.focusVisible.icon.text}`]: {},
            },
            [`&:disabled ~ .${prefix}input-icon`]: {
              [`@apply cursor-not-allowed opacity-75`]: {},
            },
          },
          [`.${prefix}input-placeload`]: {
            [`@apply absolute start-0 top-0 flex w-full items-center px-4`]: {},

            [`.${prefix}placeload`]: {
              [`@apply h-3 w-full max-w-[75%] rounded`]: {},
            },
          },
          [`.${prefix}input-action`]: {
            [`@apply text-${config.input.action.text} absolute end-0 top-0 flex items-center justify-center transition-colors duration-${config.input.action.duration}`]:
              {},
          },
          [`&.${prefix}input-focus`]: {
            [`.${prefix}input`]: {
              [`@apply focus:border-primary-500 dark:focus:border-primary-500`]:
                {},
            },
          },
          [`&.${prefix}input-rounded`]: {
            [`.${prefix}input`]: {
              [`@apply rounded-${config.input.rounded.default}`]: {},
            },
          },
          [`&.${prefix}input-smooth`]: {
            [`.${prefix}input`]: {
              [`@apply rounded-${config.input.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}input-curved`]: {
            [`.${prefix}input`]: {
              [`@apply rounded-${config.input.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}input-full`]: {
            [`.${prefix}input`]: {
              [`@apply rounded-${config.input.rounded.full}`]: {},
            },
          },
          [`&.${prefix}input-sm`]: {
            [`.${prefix}input-label`]: {
              [`@apply pb-1 text-${config.input.sm.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-1.5`]: {},
            },
            [`.${prefix}input-icon, .${prefix}input-action`]: {
              [`@apply h-${config.input.sm.iconOrAction.size} w-${config.input.sm.iconOrAction.size}`]:
                {},

              [`.${prefix}input-icon-inner, .${prefix}input-action-inner`]: {
                [`@apply h-${config.input.sm.iconOrAcionInner.size} w-${config.input.sm.iconOrAcionInner.size}`]:
                  {},
              },
            },
            [`.${prefix}input-placeload`]: {
              [`@apply h-${config.input.sm.placeload.size}`]: {},
            },
          },
          [`&.${prefix}input-md`]: {
            [`.${prefix}input-label`]: {
              [`@apply pb-1 text-${config.input.md.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-2.5`]: {},
            },
            [`.${prefix}input-icon, .${prefix}input-action`]: {
              [`@apply h-${config.input.md.iconOrAction.size} w-${config.input.md.iconOrAction.size}`]:
                {},

              [`.${prefix}input-icon-inner, .${prefix}input-action-inner`]: {
                [`@apply h-${config.input.md.iconOrAcionInner.size} w-${config.input.md.iconOrAcionInner.size}`]:
                  {},
              },
            },
            [`.${prefix}input-placeload`]: {
              [`@apply h-${config.input.md.placeload.size}`]: {},
            },
          },
          [`&.${prefix}input-lg`]: {
            [`.${prefix}input-label`]: {
              [`@apply pb-1 text-${config.input.lg.label.text}`]: {},
            },
            [`.${prefix}label-float`]: {
              [`@apply top-3.5`]: {},
            },
            [`.${prefix}input-icon, .${prefix}input-action`]: {
              [`@apply h-${config.input.lg.iconOrAction.size} w-${config.input.lg.iconOrAction.size}`]:
                {},

              [`.${prefix}input-icon-inner, .${prefix}input-action-inner`]: {
                [`@apply h-${config.input.lg.iconOrAcionInner.size} w-${config.input.lg.iconOrAcionInner.size}`]:
                  {},
              },
            },
            [`.${prefix}input-placeload`]: {
              [`@apply h-${config.input.lg.placeload.size}`]: {},
            },
          },
          [`&.${prefix}input-default`]: {
            [`.${prefix}input`]: {
              [`@apply border bg-${config.input.default.bg} border-${config.input.default.border} text-${config.input.default.text} placeholder:text-${config.input.default.textPlaceholder} dark:border-${config.input.default.borderDark} dark:bg-${config.input.default.bgDark} dark:text-${config.input.default.textDark} dark:placeholder:text-${config.input.default.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}input-default-contrast`]: {
            [`.${prefix}input`]: {
              [`@apply border bg-${config.input.defaultContrast.bg} border-${config.input.defaultContrast.border} text-${config.input.defaultContrast.text} placeholder:text-${config.input.defaultContrast.textPlaceholder} dark:border-${config.input.defaultContrast.borderDark} dark:bg-${config.input.defaultContrast.bgDark} dark:text-${config.input.defaultContrast.textDark} dark:placeholder:text-${config.input.defaultContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}input-muted`]: {
            [`.${prefix}input`]: {
              [`@apply border bg-${config.input.muted.bg} border-${config.input.muted.border} text-${config.input.muted.text} placeholder:text-${config.input.muted.textPlaceholder} dark:border-${config.input.muted.borderDark} dark:bg-${config.input.muted.bgDark} dark:text-${config.input.muted.textDark} dark:placeholder:text-${config.input.muted.textPlaceholderDark}`]:
                {},
            },
          },
          [`&.${prefix}input-muted-contrast`]: {
            [`.${prefix}input`]: {
              [`@apply border bg-${config.input.mutedContrast.bg} border-${config.input.mutedContrast.border} text-${config.input.mutedContrast.text} placeholder:text-${config.input.mutedContrast.textPlaceholder} dark:border-${config.input.mutedContrast.borderDark} dark:bg-${config.input.mutedContrast.bgDark} dark:text-${config.input.mutedContrast.textDark} dark:placeholder:text-${config.input.mutedContrast.textPlaceholderDark}`]:
                {},
            },
          },
          [`&:not(.${prefix}input-loading)`]: {
            [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-${config.input.notLoading.text} dark:text-${config.input.notLoading.textDark}`]:
                {},
            },
          },
          [`&.${prefix}input-loading`]: {
            [`.${prefix}input`]: {
              [`@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent`]:
                {},
            },
            [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
              [`@apply text-transparent`]: {},
            },
            [`.${prefix}input-icon`]: {
              [`@apply opacity-0`]: {},
            },
          },
          [`&.${prefix}input-label-float`]: {
            [`.${prefix}input`]: {
              [`@apply placeholder:text-transparent dark:placeholder:text-transparent`]:
                {},
            },
          },
          [`&.${prefix}input-error`]: {
            [`.${prefix}input`]: {
              [`@apply !border-${config.input.error.border} dark:!border-${config.input.error.borderDark}`]:
                {},
            },

            [`.${prefix}input-icon`]: {
              [`@apply !text-${config.input.error.icon.text}`]: {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-sm`]: {
            [`.${prefix}input`]: {
              [`@apply h-8 py-1 text-${config.input.hasNotIcon.text.sm} leading-4 px-2`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-sm`]: {
            [`.${prefix}input`]: {
              [`@apply h-8 py-1 text-${config.input.hasIcon.text.sm} leading-4 pe-3 ps-8`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-md`]: {
            [`.${prefix}input`]: {
              [`@apply h-10 py-2 text-${config.input.hasNotIcon.text.md} leading-5 px-3`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-md`]: {
            [`.${prefix}input`]: {
              [`@apply h-10 py-2 text-${config.input.hasIcon.text.md} leading-5 pe-4 ps-10`]:
                {},
            },
          },
          [`&:not(.${prefix}has-icon).${prefix}input-lg`]: {
            [`.${prefix}input`]: {
              [`@apply h-12 py-2 text-${config.input.hasNotIcon.text.lg} leading-5 px-4`]:
                {},
            },
          },
          [`&.${prefix}has-icon.${prefix}input-lg`]: {
            [`.${prefix}input`]: {
              [`@apply h-12 py-2 text-${config.input.hasIcon.text.lg} leading-5 pe-4 ps-11`]:
                {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-sm`]: {
            [`.${prefix}input`]: {
              [`@apply pe-${config.input.hasAction.spaceSM}`]: {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-md`]: {
            [`.${prefix}input`]: {
              [`@apply pe-${config.input.hasAction.spaceMD}`]: {},
            },
          },
          [`&.${prefix}has-action.${prefix}input-lg`]: {
            [`.${prefix}input`]: {
              [`@apply pe-${config.input.hasAction.spaceLG}`]: {},
            },
          },
          [`&.${prefix}input-label-float:not(.${prefix}has-icon).${prefix}input-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-7 text-${config.input.hasNotIcon.labelFloat.sm}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-7`]: {},
              },

              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}input-label-float.${prefix}has-icon.${prefix}input-sm`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-8 -ms-8 -mt-7 text-${config.input.hasIcon.labelFloat.sm}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-8 !-mt-7`]: {},
              },
              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0`]: {},
              },
            },
          [`&.${prefix}input-label-float:not(.${prefix}has-icon).${prefix}input-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.input.hasNotIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-8 !text-${config.input.hasNotIcon.labelFloat.md.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.input.hasNotIcon.labelFloat.md.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}input-label-float.${prefix}has-icon.${prefix}input-md`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-10 -ms-10 -mt-8 text-${config.input.hasIcon.labelFloat.md.text}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-8 !text-${config.input.hasIcon.labelFloat.md.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.input.hasIcon.labelFloat.md.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}input-label-float:not(.${prefix}has-icon).${prefix}input-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-3 -ms-3 -mt-8 text-${config.input.hasNotIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-3 !-mt-9 !text-${config.input.hasNotIcon.labelFloat.lg.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.input.hasNotIcon.labelFloat.lg.placeholderShown.text}`]:
                  {},
              },
            },
          [`&.${prefix}input-label-float.${prefix}has-icon.${prefix}input-lg`]:
            {
              [`.${prefix}label-float`]: {
                [`@apply start-11 -ms-10 -mt-8 text-${config.input.hasIcon.labelFloat.lg.text}`]:
                  {},
              },
              [`.${prefix}input:focus-visible ~ .${prefix}label-float`]: {
                [`@apply !-ms-10 !-mt-9 !text-${config.input.hasIcon.labelFloat.lg.focusVisible.text}`]:
                  {},
              },
              [`.${prefix}input:placeholder-shown ~ .${prefix}label-float`]: {
                [`@apply ms-0 mt-0 text-${config.input.hasIcon.labelFloat.lg.placeholderShown.text}`]:
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
