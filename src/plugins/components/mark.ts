import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultMarkConfig = {
  bg: 'primary-100',
  bgDark: 'primary-800',
  text: 'primary-800',
  textDark: 'primary-200',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.mark') satisfies typeof defaultMarkConfig

      addComponents({
        [`.${prefix}mark`]: {
          [`@apply bg-${config.bg} dark:bg-${config.bgDark}`]: {},
          [`@apply text-${config.text} dark:text-${config.textDark}`]: {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          mark: defaultMarkConfig,
        },
      },
    }
  },
)
