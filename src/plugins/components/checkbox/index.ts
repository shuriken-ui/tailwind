import plugin from 'tailwindcss/plugin'
import { type CheckboxConfig, defaultConfig, key } from './checkbox.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies CheckboxConfig

  addComponents({
    //Wrapper
    '.nui-checkbox': {
      '@apply relative inline-flex items-start gap-1': {},
      //Outer
      '.nui-checkbox-outer': {
        [`@apply nui-focus relative flex items-center justify-center h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden`]:
          {},
      },
      //Inner
      '.nui-checkbox-inner': {
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
      '.nui-icon-check': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      '.nui-icon-indeterminate': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.indeterminate.size} w-${config.icon.indeterminate.size}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.indeterminate.transition.property} duration-${config.icon.indeterminate.transition.duration}`]:
          {},
      },
      //Input
      '.nui-checkbox-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer disabled:cursor-not-allowed opacity-0`]:
          {},
        //Input:checked ~ inner
        '&:checked ~ .nui-checkbox-inner, &:indeterminate ~ .nui-checkbox-inner':
          {
            '@apply border-current dark:border-current': {},
          },
        //Input:checked ~ icon
        '&:checked ~ .nui-icon-check': {
          '@apply translate-y-0 opacity-100': {},
        },
        //Input:indeterminate ~ check
        '&:indeterminate ~ .nui-icon-check': {
          '@apply !translate-y-6': {},
        },
        //Input:checked ~ icon
        '&:indeterminate ~ .nui-icon-indeterminate': {
          '@apply !translate-y-0 !opacity-100': {},
        },
      },
      //Label
      '.nui-checkbox-label-wrapper': {
        '@apply inline-flex flex-col': {},
      },
      //Label:text
      '.nui-checkbox-label-text': {
        [`@apply font-${config.label.font.family} text-${config.label.font.size} ms-1 cursor-pointer select-none`]:
          {},
        //Color
        [`@apply text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
          {},
      },
      //Error
      '.nui-checkbox-error': {
        [`@apply font-${config.error.font.family} text-${config.error.font.size} ms-1 inline-block`]:
          {},
        //Color
        [`@apply text-${config.error.font.color.light} dark:text-${config.error.font.color.dark}`]:
          {},
      },
      //Rounded:sm
      '&.nui-checkbox-rounded .nui-checkbox-outer, &.nui-checkbox-rounded .nui-checkbox-inner':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      //Rounded:md
      '&.nui-checkbox-smooth .nui-checkbox-outer, &.nui-checkbox-smooth .nui-checkbox-inner':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      //Rounded:lg
      '&.nui-checkbox-curved .nui-checkbox-outer, &.nui-checkbox-curved .nui-checkbox-inner':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      //Rounded:full
      '&.nui-checkbox-full .nui-checkbox-outer, &.nui-checkbox-full .nui-checkbox-inner':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      //Color:default
      '&.nui-checkbox-default': {
        [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:light
      '&.nui-checkbox-light': {
        [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
          {},
      },
      //Color:muted
      '&.nui-checkbox-muted': {
        [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
          {},
      },
      //Color:primary
      '&.nui-checkbox-primary': {
        [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
          {},
      },
      //Color:info
      '&.nui-checkbox-info': {
        [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
          {},
      },
      //Color:success
      '&.nui-checkbox-success': {
        [`@apply text-${config.color.success.light} dark:text-${config.color.success.dark}`]:
          {},
      },
      //Color:warning
      '&.nui-checkbox-warning': {
        [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
          {},
      },
      //Color:danger
      '&.nui-checkbox-danger': {
        [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
          {},
      },
    },
  })
}, config)
