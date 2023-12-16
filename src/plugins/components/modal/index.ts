import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ModalConfig, defaultConfig, key } from './modal.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ModalConfig

      addComponents({
        //Wrapper
        [`.${prefix}modal`]: {
          [`@apply fixed inset-0 z-[9999] flex items-center justify-center`]:
            {},
          //Modal:inner
          [`.${prefix}modal-inner`]: {
            [`@apply relative z-[9999]`]: {},
          },
          //Modal:backdrop
          [`.${prefix}modal-backdrop`]: {
            [`@apply bg-${config.backdrop.background.light} dark:bg-${config.backdrop.background.dark} fixed inset-0`]:
              {},
          },
          //Modal:content
          [`.${prefix}modal-content`]: {
            [`@apply fixed inset-0`]: {},
          },
          //Content:inner
          [`.${prefix}modal-content-inner`]: {
            [`@apply flex w-full min-h-full items-center justify-center p-${config.inner.padding} text-center`]:
              {},
          },
          //Content:panel
          [`.${prefix}modal-content-panel`]: {
            [`@apply w-${config.panel.size} text-${config.panel.align} align-middle transition-all`]:
              {},
          },
          //Size:sm
          [`&.${prefix}modal-sm`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.sm}`]: {},
            },
          },
          //Size:md
          [`&.${prefix}modal-md`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.md}`]: {},
            },
          },
          //Size:lg
          [`&.${prefix}modal-lg`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.lg}`]: {},
            },
          },
          //Size:xl
          [`&.${prefix}modal-xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.xl}`]: {},
            },
          },
          //Size:2xl
          [`&.${prefix}modal-2xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.xxl}`]: {},
            },
          },
          //Size:3xl
          [`&.${prefix}modal-3xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.size.xxxl}`]: {},
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
