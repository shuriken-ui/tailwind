import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type CheckboxConfig, defaultConfig, key } from './checkbox.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies CheckboxConfig

      addComponents({
        //Wrapper
        [`.${prefix}checkbox`]: {
          [`@apply relative inline-flex items-start gap-1`]: {},
          //Outer
          [`.${prefix}checkbox-outer`]: {
            [`@apply ${prefix}focus relative flex items-center justify-center h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden`]:
              {},
          },
          //Inner
          [`.${prefix}checkbox-inner`]: {
            [`@apply absolute start-0 top-0 z-0 h-${config.inner.size} w-${config.inner.size}`]:
              {},
            //Background
            [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
              {},
            //Border
            [`@apply border-2 border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
              {},
          },
          //Icon
          [`.${prefix}icon-check`]: {
            [`@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0`]:
              {},
            //Size
            [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
            //Transition
            [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
              {},
          },
          [`.${prefix}icon-indeterminate`]: {
            [`@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0`]:
              {},
            //Size
            [`@apply h-${config.icon.indeterminate.size} w-${config.icon.indeterminate.size}`]:
              {},
            //Transition
            [`@apply transition-${config.icon.indeterminate.transition.property} duration-${config.icon.indeterminate.transition.duration}`]:
              {},
          },
          //Input
          [`.${prefix}checkbox-input`]: {
            [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer disabled:cursor-not-allowed opacity-0`]:
              {},
            //Input:checked ~ inner
            [`&:checked ~ .${prefix}checkbox-inner, &:indeterminate ~ .${prefix}checkbox-inner`]:
              {
                [`@apply border-current dark:border-current`]: {},
              },
            //Input:checked ~ icon
            [`&:checked ~ .${prefix}icon-check`]: {
              [`@apply translate-y-0 opacity-100`]: {},
            },
            //Input:indeterminate ~ check
            [`&:indeterminate ~ .${prefix}icon-check`]: {
              [`@apply !translate-y-6`]: {},
            },
            //Input:checked ~ icon
            [`&:indeterminate ~ .${prefix}icon-indeterminate`]: {
              [`@apply !translate-y-0 !opacity-100`]: {},
            },
          },
          //Label
          [`.${prefix}checkbox-label-wrapper`]: {
            [`@apply inline-flex flex-col`]: {},
          },
          //Label:text
          [`.${prefix}checkbox-label-text`]: {
            [`@apply font-${config.label.font.family} text-${config.label.font.size} ms-1 cursor-pointer select-none`]:
              {},
            //Color
            [`@apply text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
              {},
          },
          //Error
          [`.${prefix}checkbox-error`]: {
            [`@apply font-${config.error.font.family} text-${config.error.font.size} ms-1 inline-block`]:
              {},
            //Color
            [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}checkbox-rounded .${prefix}checkbox-outer, &.${prefix}checkbox-rounded .${prefix}checkbox-inner`]:
            {
              [`@apply ${config.rounded.sm}`]: {},
            },
          //Rounded:md
          [`&.${prefix}checkbox-smooth .${prefix}checkbox-outer, &.${prefix}checkbox-smooth .${prefix}checkbox-inner`]:
            {
              [`@apply ${config.rounded.md}`]: {},
            },
          //Rounded:lg
          [`&.${prefix}checkbox-curved .${prefix}checkbox-outer, &.${prefix}checkbox-curved .${prefix}checkbox-inner`]:
            {
              [`@apply ${config.rounded.lg}`]: {},
            },
          //Rounded:full
          [`&.${prefix}checkbox-full .${prefix}checkbox-outer, &.${prefix}checkbox-full .${prefix}checkbox-inner`]:
            {
              [`@apply ${config.rounded.full}`]: {},
            },
          //Color:default
          [`&.${prefix}checkbox-default`]: {
            [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
              {},
          },
          //Color:light
          [`&.${prefix}checkbox-light`]: {
            [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
              {},
          },
          //Color:muted
          [`&.${prefix}checkbox-muted`]: {
            [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
              {},
          },
          //Color:primary
          [`&.${prefix}checkbox-primary`]: {
            [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
              {},
          },
          //Color:info
          [`&.${prefix}checkbox-info`]: {
            [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
              {},
          },
          //Color:success
          [`&.${prefix}checkbox-success`]: {
            [`@apply text-${config.color.success.light} dark:text-${config.color.success.dark}`]:
              {},
          },
          //Color:warning
          [`&.${prefix}checkbox-warning`]: {
            [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
              {},
          },
          //Color:danger
          [`&.${prefix}checkbox-danger`]: {
            [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
              {},
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
