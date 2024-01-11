import plugin from 'tailwindcss/plugin'
import { type ModalConfig, defaultConfig, key } from './modal.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ModalConfig

  addComponents({
    //Wrapper
    '.nui-modal': {
      '@apply fixed inset-0 z-[9999] flex items-center justify-center': {},
      //Modal:inner
      '.nui-modal-inner': {
        '@apply relative z-[9999]': {},
      },
      //Modal:backdrop
      '.nui-modal-backdrop': {
        [`@apply bg-${config.backdrop.background.light} dark:bg-${config.backdrop.background.dark} fixed inset-0`]:
          {},
      },
      //Modal:content
      '.nui-modal-content': {
        '@apply fixed inset-0': {},
      },
      //Content:inner
      '.nui-modal-content-inner': {
        [`@apply flex w-full min-h-full items-center justify-center p-${config.inner.padding} text-center`]:
          {},
      },
      //Content:panel
      '.nui-modal-content-panel': {
        [`@apply w-${config.panel.size} text-${config.panel.align} align-middle transition-all`]:
          {},
      },
      //Size:sm
      '&.nui-modal-sm': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.sm}`]: {},
        },
      },
      //Size:md
      '&.nui-modal-md': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.md}`]: {},
        },
      },
      //Size:lg
      '&.nui-modal-lg': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.lg}`]: {},
        },
      },
      //Size:xl
      '&.nui-modal-xl': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.xl}`]: {},
        },
      },
      //Size:2xl
      '&.nui-modal-2xl': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.xxl}`]: {},
        },
      },
      //Size:3xl
      '&.nui-modal-3xl': {
        '.nui-modal-content-panel': {
          [`@apply max-w-${config.size.xxxl}`]: {},
        },
      },
    },
  })
}, config)
