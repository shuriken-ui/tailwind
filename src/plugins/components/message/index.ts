import plugin from 'tailwindcss/plugin'
import { type MessageConfig, defaultConfig, key } from './message.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies MessageConfig

  addComponents({
    //Wrapper
    '.nui-message': {
      '@apply relative flex gap-2 border': {},
      //Icon:outer
      '.nui-message-icon-outer': {
        [`@apply flex h-${config.icon.outer.size} w-${config.icon.outer.size} shrink-0 items-center justify-center`]:
          {},
        //Icon:inner
        '.nui-message-icon': {
          //Base
          [`@apply h-${config.icon.inner.size} w-${config.icon.inner.size}`]:
            {},
          //color
          [`@apply text-${config.icon.inner.color.light} dark:text-${config.icon.inner.color.dark}`]:
            {},
        },
      },
      //Inner:text
      '.nui-message-inner-text': {
        //Base
        '@apply inline-flex items-center leading-normal': {},
        //Font
        [`@apply font-${config.inner.font.family} text-${config.inner.font.size}`]:
          {},
        //Color
        [`@apply text-${config.inner.font.color.light} dark:text-${config.inner.font.color.dark}`]:
          {},
      },
      //Message:close
      '.nui-message-close-wrapper': {
        [`@apply absolute top-${config.close.position.top} end-${config.close.position.end} flex items-center justify-center bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 ${config.close.rounded} h-${config.close.size.outer.height} w-${config.close.size.outer.width}`]:
          {},
      },
      //Message:close
      '.nui-message-close': {
        [`@apply nui-focus flex cursor-pointer items-center justify-center shrink-0 h-${config.close.size.inner.height} w-${config.close.size.inner.width} ${config.close.rounded}`]:
          {},
        //Color
        [`@apply text-${config.close.color.light} dark:text-${config.close.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.close.transition.property} duration-${config.close.transition.duration}`]:
          {},
        //Close:icon
        '.nui-close-icon': {
          [`@apply h-${config.close.icon.size} w-${config.close.icon.size}`]:
            {},
        },
      },
      //Message:text
      '&.nui-has-text': {
        [`@apply py-2 ps-2 pe-${config.safeArea.end}`]: {},
      },
      //Message:icon
      '&.nui-has-icon': {
        [`@apply py-1 ps-1 pe-${config.safeArea.end}`]: {},
      },
      //Rounded:sm
      '&.nui-message-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},

        '.nui-message-icon-outer': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.nui-message-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},

        '.nui-message-icon-outer': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.nui-message-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},

        '.nui-message-icon-outer': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-message-rounded-full': {
        [`@apply ${config.rounded.full}`]: {},

        '.nui-message-icon-outer': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Color:default
      '&.nui-message-default': {
        //Border
        [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.default.outer.color.light} dark:text-${config.color.default.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.outer.background.light} dark:bg-${config.color.default.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.default.inner.color.light} dark:text-${config.color.default.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.default.close.color.light} dark:text-${config.color.default.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.default.close.background.hover.light} dark:hover:enabled:bg-${config.color.default.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.default.close.background.focus.light} dark:focus-visible:bg-${config.color.default.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.default.close.background.active.light} dark:active:enabled:bg-${config.color.default.close.background.active.dark}`]:
            {},
        },
      },
      //Color:default-contrast
      '&.nui-message-default-contrast': {
        //Border
        [`@apply border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.defaultContrast.outer.color.light} dark:text-${config.color.defaultContrast.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.outer.background.light} dark:bg-${config.color.defaultContrast.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.defaultContrast.inner.color.light} dark:text-${config.color.defaultContrast.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.defaultContrast.close.color.light} dark:text-${config.color.defaultContrast.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.defaultContrast.close.background.hover.light} dark:hover:enabled:bg-${config.color.defaultContrast.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.defaultContrast.close.background.focus.light} dark:focus-visible:bg-${config.color.defaultContrast.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.defaultContrast.close.background.active.light} dark:active:enabled:bg-${config.color.defaultContrast.close.background.active.dark}`]:
            {},
        },
      },
      //Color:muted
      '&.nui-message-muted': {
        //Border
        [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.muted.outer.color.light} dark:text-${config.color.muted.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.outer.background.light} dark:bg-${config.color.muted.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.muted.inner.color.light} dark:text-${config.color.muted.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.muted.close.color.light} dark:text-${config.color.muted.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.muted.close.background.hover.light} dark:hover:enabled:bg-${config.color.muted.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.muted.close.background.focus.light} dark:focus-visible:bg-${config.color.muted.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.muted.close.background.active.light} dark:active:enabled:bg-${config.color.muted.close.background.active.dark}`]:
            {},
        },
      },
      //Color:muted-contrast
      '&.nui-message-muted-contrast': {
        //Border
        [`@apply border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.mutedContrast.outer.color.light} dark:text-${config.color.mutedContrast.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.outer.background.light} dark:bg-${config.color.mutedContrast.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.mutedContrast.inner.color.light} dark:text-${config.color.mutedContrast.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.mutedContrast.close.color.light} dark:text-${config.color.mutedContrast.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.mutedContrast.close.background.hover.light} dark:hover:enabled:bg-${config.color.mutedContrast.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.mutedContrast.close.background.focus.light} dark:focus-visible:bg-${config.color.mutedContrast.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.mutedContrast.close.background.active.light} dark:active:enabled:bg-${config.color.mutedContrast.close.background.active.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-message-primary': {
        //Border
        [`@apply border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.light} dark:bg-${config.color.primary.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.primary.outer.color.light} dark:text-${config.color.primary.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.primary.outer.background.light} dark:bg-${config.color.primary.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.primary.inner.color.light} dark:text-${config.color.primary.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.primary.close.color.light} dark:text-${config.color.primary.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.primary.close.background.hover.light} dark:hover:enabled:bg-${config.color.primary.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.primary.close.background.focus.light} dark:focus-visible:bg-${config.color.primary.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.primary.close.background.active.light} dark:active:enabled:bg-${config.color.primary.close.background.active.dark}`]:
            {},
        },
      },
      //Color:info
      '&.nui-message-info': {
        //Border
        [`@apply border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.light} dark:bg-${config.color.info.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.info.outer.color.light} dark:text-${config.color.info.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.info.outer.background.light} dark:bg-${config.color.info.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.info.inner.color.light} dark:text-${config.color.info.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.info.close.color.light} dark:text-${config.color.info.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.info.close.background.hover.light} dark:hover:enabled:bg-${config.color.info.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.info.close.background.focus.light} dark:focus-visible:bg-${config.color.info.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.info.close.background.active.light} dark:active:enabled:bg-${config.color.info.close.background.active.dark}`]:
            {},
        },
      },
      //Color:success
      '&.nui-message-success': {
        //Border
        [`@apply border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.light} dark:bg-${config.color.success.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.success.outer.color.light} dark:text-${config.color.success.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.success.outer.background.light} dark:bg-${config.color.success.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.success.inner.color.light} dark:text-${config.color.success.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.success.close.color.light} dark:text-${config.color.success.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.success.close.background.hover.light} dark:hover:enabled:bg-${config.color.success.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.success.close.background.focus.light} dark:focus-visible:bg-${config.color.success.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.success.close.background.active.light} dark:active:enabled:bg-${config.color.success.close.background.active.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.nui-message-warning': {
        //Border
        [`@apply border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.light} dark:bg-${config.color.warning.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.warning.outer.color.light} dark:text-${config.color.warning.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.warning.outer.background.light} dark:bg-${config.color.warning.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.warning.inner.color.light} dark:text-${config.color.warning.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.warning.close.color.light} dark:text-${config.color.warning.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.warning.close.background.hover.light} dark:hover:enabled:bg-${config.color.warning.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.warning.close.background.focus.light} dark:focus-visible:bg-${config.color.warning.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.warning.close.background.active.light} dark:active:enabled:bg-${config.color.warning.close.background.active.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.nui-message-danger': {
        //Border
        [`@apply border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.light} dark:bg-${config.color.danger.background.dark}`]:
          {},
        //Icon:outer
        '.nui-message-icon-outer': {
          //Color
          [`@apply text-${config.color.danger.outer.color.light} dark:text-${config.color.danger.outer.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.danger.outer.background.light} dark:bg-${config.color.danger.outer.background.dark}`]:
            {},
        },
        //Inner:text
        '.nui-message-inner-text': {
          [`@apply text-${config.color.danger.inner.color.light} dark:text-${config.color.danger.inner.color.dark}`]:
            {},
        },
        //Message:close
        '.nui-message-close': {
          //Color
          [`@apply text-${config.color.danger.close.color.light} dark:text-${config.color.danger.close.color.dark}`]:
            {},
          //Background:hover
          [`@apply hover:enabled:bg-${config.color.danger.close.background.hover.light} dark:hover:enabled:bg-${config.color.danger.close.background.hover.dark}`]:
            {},
          //Background:focus
          [`@apply focus-visible:bg-${config.color.danger.close.background.focus.light} dark:focus-visible:bg-${config.color.danger.close.background.focus.dark}`]:
            {},
          //Background:active
          [`@apply active:enabled:bg-${config.color.danger.close.background.active.light} dark:active:enabled:bg-${config.color.danger.close.background.active.dark}`]:
            {},
        },
      },
    },
  })
}, config)
