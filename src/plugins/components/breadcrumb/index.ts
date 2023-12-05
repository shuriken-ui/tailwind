import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type BreadcrumbConfig, defaultConfig, key } from './breadcrumb.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies BreadcrumbConfig

      addComponents({
        [`.${prefix}breadcrumb`]: {
          [`.${prefix}breadcrumb-list`]: {
            [`@apply mb-6 flex items-center font-${config.item.text.font.family} text-${config.item.text.font.size}`]:
              {},
            [`.${prefix}breadcrumb-item-mobile`]: {
              [`@apply me-3 sm:hidden`]: {},
            },
            [`.${prefix}breadcrumb-item:not(:last-child)`]: {
              [`@apply hidden sm:flex`]: {},
            },
            [`.${prefix}breadcrumb-item:last-child`]: {
              [`@apply flex text-${config.item.text.font.color.light} dark:text-${config.item.text.font.color.dark}`]:
                {},
            },
            [`.${prefix}item-inner`]: {
              //Base
              [`@apply text-${config.item.text.font.size} flex items-center gap-x-1`]:
                {},
              //Transition
              [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
                {},
              //Item:icon
              [`.${prefix}item-icon`]: {
                //icon
                [`@apply flex items-center justify-center h-${config.item.icon.size} w-${config.item.icon.size} shrink-0`]:
                  {},
                //dot
                [`&.${prefix}has-dot`]: {
                  [`@apply text-${config.item.dot.font.size}`]: {},
                },
              },
              //Item:link
              [`&.${prefix}has-link`]: {
                [`@apply hover:text-${config.item.link.font.color.hover} focus:text-${config.item.link.font.color.focus}`]:
                  {},
              },
              //Item:text
              [`.${prefix}item-text`]: {
                [`@apply text-${config.item.text.font.color.light} dark:text-${config.item.text.font.color.dark} px-${config.item.text.padding.x}`]:
                  {},
              },
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
