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
        //Wrapper
        [`.${prefix}dropdown-item`]: {
          [`@apply ${prefix}focus flex w-full items-center justify-start gap-2 px-3 py-2 cursor-pointer`]:
            {},
          //Font
          [`@apply text-${config.align} font-${config.font.family} text-${config.font.size}`]:
            {},
          //Transition
          [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
            {},
          //Item:content
          [`.${prefix}item-content`]: {
            [`@apply grow`]: {},
          },
          //Item:text
          [`&:not(.${prefix}active)`]: {
            [`@apply text-${config.font.color.inactive.light} dark:text-${config.font.color.inactive.dark}`]:
              {},
          },
          //Color:default
          [`&.${prefix}item-default`]: {
            [`&.${prefix}active, &:hover`]: {
              //Background:hover
              [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
                {},
              //Font:hover
              [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
                {},
            },
          },
          //Color:contrast
          [`&.${prefix}item-contrast`]: {
            [`&.${prefix}active, &:hover`]: {
              //Background:hover
              [`@apply bg-${config.color.contrast.background.light} dark:bg-${config.color.contrast.background.dark}`]:
                {},
              //Font:hover
              [`@apply text-${config.color.contrast.font.color.light} dark:text-${config.color.contrast.font.color.dark}`]:
                {},
            },
          },
          //Rounded:sm
          [`&.${prefix}item-rounded`]: {
            [`@apply rounded-${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}item-smooth`]: {
            [`@apply rounded-${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}item-curved`]: {
            [`@apply rounded-${config.rounded.lg}`]: {},
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
