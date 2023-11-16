import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type DropdownItemConfig,
  defaultConfig,
  key,
} from './dropdown-item.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies DropdownItemConfig

      addComponents({
        [`.${prefix}dropdown-item`]: {
          [`@apply ${prefix}focus flex w-full items-center justify-start gap-2 px-3 py-2 text-${config.textPosition} text-${config.textSize} cursor-pointer transition-colors duration-${config.duration}`]:
            {},

          [`.${prefix}item-content`]: {
            [`@apply grow`]: {},
          },
          [`&:not(.${prefix}active)`]: {
            [`@apply text-${config.notActive.text}`]: {},
          },
          [`&.${prefix}item-default`]: {
            [`&.${prefix}active, &:hover`]: {
              [`@apply bg-${config.default.bg} dark:bg-${config.default.bgDark} text-${config.default.text}`]:
                {},
            },
          },
          [`&.${prefix}item-contrast`]: {
            [`&.${prefix}active, &:hover`]: {
              [`@apply bg-${config.contrast.bg} dark:bg-${config.contrast.bgDark} text-${config.contrast.text}`]:
                {},
            },
          },
          [`&.${prefix}item-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},
          },
          [`&.${prefix}item-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}item-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
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
