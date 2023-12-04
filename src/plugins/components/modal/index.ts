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
        [`.${prefix}modal`]: {
          [`@apply fixed inset-0 z-[9999] flex items-center justify-center`]:
            {},

          [`.${prefix}modal-inner`]: {
            [`@apply relative z-[9999]`]: {},
          },
          [`.${prefix}modal-backdrop`]: {
            [`@apply bg-${config.backdrop.bg} dark:bg-${config.backdrop.bgDark} fixed inset-0`]:
              {},
          },
          [`.${prefix}modal-content`]: {
            [`@apply fixed inset-0`]: {},
          },
          [`.${prefix}modal-content-inner`]: {
            [`@apply flex w-full min-h-full items-center justify-center p-${config.contentInner.space} text-center`]:
              {},
          },
          [`.${prefix}modal-content-panel`]: {
            [`@apply w-${config.contentPanel.size} text-${config.contentPanel.text} align-middle transition-all`]:
              {},
          },
          [`&.${prefix}modal-sm`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modalSM}`]: {},
            },
          },
          [`&.${prefix}modal-md`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modalMD}`]: {},
            },
          },
          [`&.${prefix}modal-lg`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modalLG}`]: {},
            },
          },
          [`&.${prefix}modal-xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modalXL}`]: {},
            },
          },
          [`&.${prefix}modal-2xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modal2XL}`]: {},
            },
          },
          [`&.${prefix}modal-3xl`]: {
            [`.${prefix}modal-content-panel`]: {
              [`@apply max-w-${config.modal3XL}`]: {},
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
