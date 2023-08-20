import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultBreadcrumbConfig = {
  list: {
    font: 'sans',
    text: '[0.85rem]',
    itemInner: {
      text: 'muted-500',
      duration: '300',
      icon: {
        size: '4',
        dot: {
          text: 'xl',
        },
      },
      link: {
        textHover: 'primary-500',
        texFocus: 'primary-500',
      },
      itemText: {
        text: 'muted-500',
        space: '2',
      },
    },
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.breadcrumb'
      ) satisfies typeof defaultBreadcrumbConfig

      addComponents({
        [`.${prefix}breadcrumb`]: {
          [`.${prefix}breadcrumb-list`]: {
            [`@apply mb-6 flex items-center font-${config.list.font} text-${config.list.text}`]:
              {},
            [`.${prefix}breadcrumb-item-mobile`]: {
              [`@apply me-3 sm:hidden`]: {},
            },
            [`.${prefix}breadcrumb-item:not(:last-child)`]: {
              [`@apply hidden sm:flex`]: {},
            },
            [`.${prefix}breadcrumb-item:last-child`]: {
              [`@apply flex`]: {},
            },
            [`.${prefix}item-inner`]: {
              [`@apply text-${config.list.itemInner.text} flex items-center gap-x-1 transition-colors duration-${config.list.itemInner.duration}`]:
                {},

              [`.${prefix}item-icon`]: {
                [`@apply flex items-center justify-center h-${config.list.itemInner.icon.size} w-${config.list.itemInner.icon.size} shrink-0`]:
                  {},
                [`&.${prefix}has-dot`]: {
                  [`@apply text-${config.list.itemInner.icon.dot.text}`]: {},
                },
              },
              [`&.${prefix}has-link`]: {
                [`@apply hover:text-${config.list.itemInner.link.textHover} focus:text-${config.list.itemInner.link.texFocus}`]:
                  {},
              },
              [`.${prefix}item-text`]: {
                [`@apply text-${config.list.itemInner.itemText.text} px-${config.list.itemInner.itemText.space}`]:
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
          breadcrumb: defaultBreadcrumbConfig,
        },
      },
    }
  }
)
