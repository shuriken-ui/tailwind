import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ListPluginConfig, defaultConfig, key } from './list.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ListPluginConfig

      addComponents({
        [`.${prefix}list`]: {
          [`&.${prefix}list-ul`]: {
            [`@apply list-${config.ul}`]: {},
          },
          [`&.${prefix}list-ol`]: {
            [`@apply list-${config.ol}`]: {},
          },
          [`&.${prefix}list-base`]: {
            //Base
            [`@apply space-y-1 font-${config.base.font.family}`]: {},
            //Text
            [`@apply text-${config.base.font.color.text.light} dark:text-${config.base.font.color.text.dark}`]:
              {},
            //Marker
            [`@apply marker:text-${config.base.font.color.marker.light} dark:marker:text-${config.base.font.color.marker.dark}`]:
              {},
          },
          [`&.${prefix}list-media`]: {
            [`@apply space-y-4 marker:text-${config.media.marker.color.light} dark:marker:text-${config.media.marker.color.dark}`]:
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
          [key]: defaultConfig,
        },
      },
    }
  },
)
