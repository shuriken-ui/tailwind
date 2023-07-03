import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultAccordionConfig = {
  bg: 'white',
  bgDark: 'muted-800',
  border: 'muted-200',
  borderDack: 'muted-700',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.accordion'
      ) satisfies typeof defaultAccordionConfig

      addComponents({
        [`.${prefix}-accordion`]: {
          [`@apply border-${config.border} dark:border-${config.borderDack} dark:bg-${config.bgDark} block overflow-hidden border bg-${config.bg}`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          accordion: defaultAccordionConfig,
        },
      },
    }
  }
)
