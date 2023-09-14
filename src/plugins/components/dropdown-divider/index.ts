import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultDropdownDividerConfig = {
  space: '2',
  border: 'muted-200',
  borderDark: 'muted-600',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.dropdownDivider',
      ) satisfies typeof defaultDropdownDividerConfig

      addComponents({
        [`.${prefix}dropdown-divider`]: {
          [`@apply my-${config.space} block h-px w-full border-t border-${config.border} dark:border-${config.borderDark}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          dropdownDivider: defaultDropdownDividerConfig,
        },
      },
    }
  },
)
