import plugin from 'tailwindcss/plugin'
import { type ProseConfig, defaultConfig, key } from './prose.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ProseConfig

  addComponents({
    '.nui-prose': {
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
      [`@apply prose-th:p-${config.padding} prose-td:p-${config.padding}`]: {},
      //Table:td
      [`@apply prose-td:border-t prose-td:border-${config.table.border.light} dark:prose-td:border-${config.table.border.dark}`]:
        {},
      //Rounded:none
      '&.nui-prose-straight': {
        '@apply prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none':
          {},
      },
      //Rounded:sm
      '&.nui-prose-rounded': {
        [`@apply prose-img:${config.rounded.sm} prose-pre:${config.rounded.sm} prose-table:${config.rounded.sm}`]:
          {},
      },
      //Rounded:md
      '&.nui-prose-smooth': {
        [`@apply prose-img:${config.rounded.md} prose-pre:${config.rounded.md} prose-table:${config.rounded.md}`]:
          {},
      },
      //Rounded:lg
      '&.nui-prose-curved': {
        [`@apply prose-img:${config.rounded.lg} prose-pre:${config.rounded.lg} prose-table:${config.rounded.lg}`]:
          {},
      },
    },
  })
}, config)
