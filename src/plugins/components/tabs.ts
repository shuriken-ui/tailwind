import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultTabsConfig = {
  inner: {
    font: 'alt',
    space: '6',
  },
  item: {
    text: 'sm',
    duration: '300',
    notActive: {
      text: 'muted-400',
    },
    active: {
      border: 'primary-500',
      text: 'muted-800',
      textDark: 'muted-100',
    },
  },
  pillItem: {
    rounded: 'xl',
    textPosition: 'center',
    text: 'xs',
    duration: '300',
    notActive: {
      text: 'muted-400',
    },
    active: {
      bg: 'primary-500',
      text: 'white',
      shadow: 'primary-500/50',
      shadowSize: 'lg',
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.tabs') satisfies typeof defaultTabsConfig

      addComponents({
        [`.${prefix}-tabs`]: {
          [`@apply relative`]: {},

          [`.${prefix}-tabs-inner`]: {
            [`@apply font-${config.inner.font} mb-${config.inner.space} flex`]:
              {},
          },
          [`.${prefix}-tab-item`]: {
            [`@apply cursor-pointer text-${config.item.text} border-b-2 px-4 py-3 transition-all duration-${config.item.duration}`]:
              {},
            [`&:not(.${prefix}-active)`]: {
              [`@apply text-${config.item.notActive.text} border-transparent`]:
                {},
            },
            [`&.${prefix}-active`]: {
              [`@apply border-${config.item.active.border} text-${config.item.active.text} dark:text-${config.item.active.textDark}`]:
                {},
            },
            [`&.${prefix}-has-icon`]: {
              [`@apply flex items-center gap-1`]: {},
            },
          },
          [`.${prefix}-pill-item`]: {
            [`@apply flex flex-col rounded-${config.pillItem.rounded} px-5 text-${config.pillItem.textPosition} cursor-pointer text-${config.pillItem.text} transition-all duration-${config.pillItem.duration}`]:
              {},
            [`&:not(.${prefix}-active)`]: {
              [`@apply text-${config.pillItem.notActive.text}`]: {},
            },
            [`&.${prefix}-active`]: {
              [`@apply bg-${config.pillItem.active.bg} shadow-${config.pillItem.active.shadow} !text-${config.pillItem.active.text} shadow-${config.pillItem.active.shadowSize}`]:
                {},
            },
            [`&:not(.${prefix}-has-icon)`]: {
              [`@apply flex items-center gap-1 py-2`]: {},
            },
            [`&.${prefix}-has-icon`]: {
              [`@apply flex items-center gap-1 py-3`]: {},
            },
          },
          [`.${prefix}-tab-content`]: {
            [`@apply relative block`]: {},
          },
          [`&.${prefix}-tabs-centered`]: {
            [`.${prefix}-tabs-inner`]: {
              [`@apply justify-center`]: {},
            },
          },
          [`&.${prefix}-tabs-end`]: {
            [`.${prefix}-tabs-inner`]: {
              [`@apply justify-end`]: {},
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
          tabs: defaultTabsConfig,
        },
      },
    }
  }
)
