import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ProseConfig, defaultConfig, key } from './prose.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ProseConfig

      addComponents({
        [`.${prefix}prose`]: {
          //Base
          [`@apply prose prose-primary prose-${config.color.light} dark:prose-${config.color.dark}`]:
            {},
          //Table:background
          [`@apply prose-table:bg-${config.table.background.light} dark:prose-table:bg-${config.table.background.dark}`]:
            {},
          //Table:border
          [`@apply prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-${config.table.border.light} dark:prose-table:border-${config.table.border.dark}`]:
            {},
          //Table:th
          [`@apply prose-th:p-${config.padding} prose-td:p-${config.padding}`]:
            {},
          //Table:td
          [`@apply prose-td:border-t prose-td:border-${config.table.border.light} dark:prose-td:border-${config.table.border.dark}`]:
            {},
          //Rounded:none
          [`&.${prefix}prose-straight`]: {
            [`@apply prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}prose-rounded`]: {
            [`@apply prose-img:${config.rounded.sm} prose-pre:${config.rounded.sm} prose-table:${config.rounded.sm}`]:
              {},
          },
          //Rounded:md
          [`&.${prefix}prose-smooth`]: {
            [`@apply prose-img:${config.rounded.md} prose-pre:${config.rounded.md} prose-table:${config.rounded.md}`]:
              {},
          },
          //Rounded:lg
          [`&.${prefix}prose-curved`]: {
            [`@apply prose-img:${config.rounded.lg} prose-pre:${config.rounded.lg} prose-table:${config.rounded.lg}`]:
              {},
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
