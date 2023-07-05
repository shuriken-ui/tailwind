import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultButtonGroupConfig = {
  space: '2',
  border: 'muted-200',
  borderDark: 'muted-600',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.buttonGroup'
      ) satisfies typeof defaultButtonGroupConfig

      addComponents({
        [`.${prefix}-button-group`]: {
          [`@apply flex`]: {},

          '.button, .button-action, .button-icon': {
            '@apply !border-e-0': {},

            '&:not(:first-child):not(:last-child)': {
              '@apply !rounded-none': {},
            },

            '&:first-child': {
              '@apply !rounded-e-none': {},
            },

            '&:last-child': {
              '@apply !border-e !rounded-s-none': {},
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
          buttonGroup: defaultButtonGroupConfig,
        },
      },
    }
  }
)
