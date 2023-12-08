import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type PlaceholderPageConfig,
  defaultConfig,
  key,
} from './placeholder-page.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies PlaceholderPageConfig

      addComponents({
        [`.${prefix}placeholder-page`]: {
          [`@apply flex min-h-${config.height.min} items-center justify-center`]:
            {},

          [`.${prefix}placeholder-page-inner`]: {
            [`@apply mx-auto w-${config.inner.width} text-center`]: {},
          },
          [`.${prefix}placeholder-page-img`]: {
            [`@apply mx-auto block`]: {},
          },
          [`.${prefix}placeholder-page-content`]: {
            [`@apply mx-auto max-w-${config.content.width.max}`]: {},
          },
          [`.${prefix}placeholder-page-actions`]: {
            [`@apply mt-4 flex justify-center gap-2`]: {},
          },
          [`.${prefix}placeholder-page-title`]: {
            [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark} mb-1 mt-4`]:
              {},
          },
          [`.${prefix}placeholder-page-subtitle`]: {
            [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
              {},
          },
          [`&.${prefix}placeholder-xs .${prefix}placeholder-page-img`]: {
            [`@apply max-w-${config.size.image.xs}`]: {},
          },
          [`&.${prefix}placeholder-sm .${prefix}placeholder-page-img`]: {
            [`@apply max-w-${config.size.image.sm}`]: {},
          },
          [`&.${prefix}placeholder-md .${prefix}placeholder-page-img`]: {
            [`@apply max-w-${config.size.image.md}`]: {},
          },
          [`&.${prefix}placeholder-lg .${prefix}placeholder-page-img`]: {
            [`@apply max-w-${config.size.image.lg}`]: {},
          },
          [`&.${prefix}placeholder-xl .${prefix}placeholder-page-img`]: {
            [`@apply max-w-${config.size.image.xl}`]: {},
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
