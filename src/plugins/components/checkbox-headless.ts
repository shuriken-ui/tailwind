import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultCheckboxHeadlessConfig = {
  label: {
    text: 'muted-400',
    textSize: 'sm',
    font: 'sans',
  },
  input: {
    size: 'full',
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
        'shurikenUi.checkboxHeadless'
      ) satisfies typeof defaultCheckboxHeadlessConfig

      addComponents({
        [`.${prefix}checkbox-headless`]: {
          [`@apply relative`]: {},

          [`.${prefix}checkbox-headless-label`]: {
            [`@apply text-${config.label.text} mb-1 inline-block cursor-pointer select-none font-${config.label.font} text-${config.label.textSize}`]:
              {},
          },
          [`.${prefix}checkbox-headless-inner`]: {
            [`@apply relative`]: {},
            [`.${prefix}checkbox-headless-input`]: {
              [`@apply absolute inset-0 z-20 h-${config.input.size} w-${config.input.size} cursor-pointer disabled:cursor-not-allowed opacity-0`]:
                {},
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
          checkboxHeadless: defaultCheckboxHeadlessConfig,
        },
      },
    }
  }
)
