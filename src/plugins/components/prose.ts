import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultProseConfig = {
  color: 'muted',
  dark: 'invert',
  space: '4',
  bgTable: 'white',
  bgTableDark: 'muted-800',
  borderTable: 'muted-200',
  borderTableDark: 'muted-700',
  rounded: {
    size: 'md',
    tdBorder: 'muted-200',
    tdBorderDark: 'muted-700',
  },
  curved: {
    size: 'xl',
    tdBorder: 'muted-200',
    tdBorderDark: 'muted-700',
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
        'shurikenUi.prose',
      ) satisfies typeof defaultProseConfig

      addComponents({
        [`.${prefix}prose`]: {
          [`@apply prose prose-primary prose-${config.color} dark:prose-${config.dark} prose-th:p-${config.space} prose-td:p-${config.space} prose-table:bg-${config.bgTable} dark:prose-table:bg-${config.bgTableDark} prose-table:border prose-table:border-${config.borderTable} dark:prose-table:border-${config.borderTableDark}`]:
            {},

          [`&.${prefix}prose-straight`]: {
            [`@apply prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none`]:
              {},
          },
          [`&.${prefix}prose-rounded`]: {
            [`@apply prose-img:rounded-${config.rounded.size} prose-pre:rounded-${config.rounded.size} prose-table:rounded-${config.rounded.size} prose-table:border-separate prose-table:border-spacing-0 prose-td:border-t prose-td:border-${config.rounded.tdBorder} dark:prose-td:border-${config.rounded.tdBorderDark}`]:
              {},
          },
          [`&.${prefix}prose-curved`]: {
            [`@apply prose-img:rounded-${config.curved.size} prose-pre:rounded-${config.curved.size} prose-table:rounded-${config.curved.size} prose-table:border-separate prose-table:border-spacing-0 prose-td:border-t prose-td:border-${config.curved.tdBorder} dark:prose-td:border-${config.curved.tdBorderDark}`]:
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
          prose: defaultProseConfig,
        },
      },
    }
  },
)
