import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultLabelConfig = {
  font: 'alt',
  text: 'muted-400',
  textDark: 'muted-400/80',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.label'
      ) satisfies typeof defaultLabelConfig

      addComponents({
        [`.${prefix}-label`]: {
          [`@apply inline-block font-${config.font} leading-none text-${config.text} dark:text-${config.textDark}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          label: defaultLabelConfig,
        },
      },
    }
  }
)
