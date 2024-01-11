import plugin from 'tailwindcss/plugin'
import { type ToastConfig, defaultConfig, key } from './toast.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ToastConfig

  addComponents({
    //Wrapper
    '.nui-toast': {
      [`@apply relative flex font-${config.font.family} overflow-hidden`]: {},
      //Toast:inner
      '.nui-toast-inner': {
        '@apply flex items-center grow gap-2 px-4 py-3': {},
      },
      //Toast:title
      '.nui-toast-title': {
        //Font
        [`@apply nui-heading nui-heading-${config.title.font.size} nui-weight-${config.title.font.weight}`]:
          {},
        //Color
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark}`]:
          {},
      },
      //Toast:subtitle
      '.nui-toast-subtitle': {
        //Font
        [`@apply nui-paragraph text-${config.subtitle.font.size}`]: {},
        //color
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      //Icon:inner
      '.nui-toast-icon': {
        [`@apply w-${config.icon.inner.size} h-${config.icon.inner.size}`]: {},
      },
      //Icon:outer
      '.nui-toast-icon-block': {
        [`@apply h-${config.icon.outer.size} w-${config.icon.outer.size} flex items-center justify-center`]:
          {},
      },
      //Toast:close
      '.nui-button-close': {
        '@apply ms-auto': {},
      },
      //Type:default
      '&.nui-toast-default': {
        [`@apply border-2 border-${config.type.default.border.light} dark:border-${config.type.default.border.dark}`]:
          {},
      },
      //Type:contrast
      '&.nui-toast-contrast': {
        [`@apply border-2 border-${config.type.contrast.border.light} dark:border-${config.type.contrast.border.dark}`]:
          {},
      },
      //Color:white
      '&.nui-toast-white': {
        [`@apply bg-${config.color.white.background.light} dark:bg-${config.color.white.background.dark}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.white.icon.inner.color.light} dark:text-${config.color.white.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.white.icon.outer.background.light} dark:bg-${config.color.white.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:whiteContrast
      '&.nui-toast-white-contrast': {
        [`@apply bg-${config.color.whiteContrast.background.light} dark:bg-${config.color.whiteContrast.background.dark}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.whiteContrast.icon.inner.color.light} dark:text-${config.color.whiteContrast.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.whiteContrast.icon.outer.background.light} dark:bg-${config.color.whiteContrast.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-toast-primary': {
        //Border
        [`@apply border-2 border-${config.color.primary.border.light} dark:border-${config.color.primary.border.light}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.primary.icon.inner.color.light} dark:text-${config.color.primary.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.primary.icon.outer.background.light} dark:bg-${config.color.primary.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.nui-toast-info': {
        //Border
        [`@apply border-2 border-${config.color.info.border.light} dark:border-${config.color.info.border.light}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.info.icon.inner.color.light} dark:text-${config.color.info.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.info.icon.outer.background.light} dark:bg-${config.color.info.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.nui-toast-success': {
        //Border
        [`@apply border-2 border-${config.color.success.border.light} dark:border-${config.color.success.border.light}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.success.icon.inner.color.light} dark:text-${config.color.success.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.success.icon.outer.background.light} dark:bg-${config.color.success.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.nui-toast-warning': {
        //Border
        [`@apply border-2 border-${config.color.warning.border.light} dark:border-${config.color.warning.border.light}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.warning.icon.inner.color.light} dark:text-${config.color.warning.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.warning.icon.outer.background.light} dark:bg-${config.color.warning.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.nui-toast-danger': {
        //Border
        [`@apply border-2 border-${config.color.danger.border.light} dark:border-${config.color.danger.border.light}`]:
          {},
        //Icon:inner
        '.nui-toast-icon': {
          [`@apply text-${config.color.danger.icon.inner.color.light} dark:text-${config.color.danger.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.nui-toast-icon-block': {
          [`@apply bg-${config.color.danger.icon.outer.background.light} dark:bg-${config.color.danger.icon.outer.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.nui-toast-rounded': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:smooth
      '&.nui-toast-smooth': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:curved
      '&.nui-toast-curved': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Shadow:borderless
      '&.nui-toast-borderless': {
        [`@apply !border-0 shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
          {},
      },
    },
  })
}, config)
