import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultRadioHeadlessConfig = {
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
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.radioHeadless'
      ) satisfies typeof defaultRadioHeadlessConfig

      addComponents({
        [`.${prefix}-radio-headless`]: {
          [`@apply relative`]: {},

          [`.${prefix}-radio-headless-label`]: {
            [`@apply text-${config.label.text} mb-1 inline-block cursor-pointer select-none font-${config.label.font} text-${config.label.textSize}`]:
              {},
          },
          [`.${prefix}-radio-headless-inner`]: {
            [`@apply relative`]: {},
            [`.${prefix}-radio-headless-input`]: {
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
          radioHeadless: defaultRadioHeadlessConfig,
        },
      },
    }
  }
)
