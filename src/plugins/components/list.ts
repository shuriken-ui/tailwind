import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultlistConfig = {
  ul: 'disc',
  ol: 'decimal',
  base: {
    textMarker: 'muted-500',
    textMarkerDark: 'muted-400',
    text: 'slate-700',
    textDark: 'slate-300',
    font: 'sans',
  },
  media: {
    textMarker: 'slate-500',
    textMarkerDark: 'slate-400',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.list') satisfies typeof defaultlistConfig

      addComponents({
        [`.${prefix}list`]: {
          [`&.${prefix}list-ul`]: {
            [`@apply list-${config.ul}`]: {},
          },
          [`&.${prefix}list-ol`]: {
            [`@apply list-${config.ol}`]: {},
          },
          [`&.${prefix}list-base`]: {
            [`@apply space-y-1 marker:text-${config.base.textMarker} dark:marker:text-${config.base.textMarkerDark} font-${config.base.font} text-${config.base.text} dark:text-${config.base.textDark}`]:
              {},
          },
          [`&.${prefix}list-media`]: {
            [`@apply space-y-4 marker:text-${config.media.textMarker} dark:marker:text-${config.media.textMarkerDark}`]:
              {},
            [`.${prefix}list-item`]: {
              [`@apply flex gap-2`]: {},
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
          list: defaultlistConfig,
        },
      },
    }
  },
)
