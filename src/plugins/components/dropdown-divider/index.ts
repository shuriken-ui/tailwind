import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type DropdownDividerConfig,
  defaultConfig,
  key,
} from './dropdown-divider.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies DropdownDividerConfig

      addComponents({
        [`.${prefix}dropdown-divider`]: {
          [`@apply my-${config.margin.y} block h-px w-full border-t border-${config.border.light} dark:border-${config.border.dark}`]:
            {},
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
