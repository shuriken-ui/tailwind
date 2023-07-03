import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultProseConfig = {
  color: 'muted',
  colorDark: 'invert',
  space: '4',
  tableBg: 'white',
  tableBgDark: 'muted-800',
  tableBorder: 'muted-200',
  tableBorderDark: 'muted-700',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.prose'
      ) satisfies typeof defaultProseConfig

      addComponents({
        [`.${prefix}-prose`]: {
          [`@apply prose prose-primary prose-${config.color} dark:prose-${config.colorDark} prose-th:p-${config.space} prose-td:p-${config.space} prose-table:bg-${config.tableBg} dark:prose-table:bg-${config.tableBgDark} prose-table:border prose-table:border-${config.tableBorder} dark:prose-table:border-${config.tableBorderDark}`]:
            {},
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
  }
)
