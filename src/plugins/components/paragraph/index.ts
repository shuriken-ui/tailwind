import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type ParagraphConfig, defaultConfig, key } from './paragraph.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ParagraphConfig

      addComponents({
        [`.${prefix}paragraph`]: {
          [`@apply font-sans`]: {},

          [`&.${prefix}paragraph-xs`]: {
            [`@apply text-${config.textXS}`]: {},
          },
          [`&.${prefix}paragraph-sm`]: {
            [`@apply text-${config.textSM}`]: {},
          },
          [`&.${prefix}paragraph-md`]: {
            [`@apply text-${config.textMD}`]: {},
          },
          [`&.${prefix}paragraph-lg`]: {
            [`@apply text-${config.textLG}`]: {},
          },
          [`&.${prefix}paragraph-xl`]: {
            [`@apply text-${config.textXL}`]: {},
          },
          [`&.${prefix}paragraph-2xl`]: {
            [`@apply text-${config.text2XL}`]: {},
          },
          [`&.${prefix}paragraph-3xl`]: {
            [`@apply text-${config.text3XL}`]: {},
          },
          [`&.${prefix}paragraph-4xl`]: {
            [`@apply text-${config.text4XL}`]: {},
          },
          [`&.${prefix}paragraph-5xl`]: {
            [`@apply text-${config.text5XL}`]: {},
          },
          [`&.${prefix}paragraph-6xl`]: {
            [`@apply text-${config.text6XL}`]: {},
          },
          [`&.${prefix}paragraph-7xl`]: {
            [`@apply text-${config.text7XL}`]: {},
          },
          [`&.${prefix}paragraph-8xl`]: {
            [`@apply text-${config.text8XL}`]: {},
          },
          [`&.${prefix}paragraph-9xl`]: {
            [`@apply text-${config.text9XL}`]: {},
          },
          [`&.${prefix}weight-light`]: {
            [`@apply font-${config.textLight}`]: {},
          },
          [`&.${prefix}weight-normal`]: {
            [`@apply font-${config.textNormal}`]: {},
          },
          [`&.${prefix}weight-medium`]: {
            [`@apply font-${config.textMedium}`]: {},
          },
          [`&.${prefix}weight-semibold`]: {
            [`@apply font-${config.textSemibold}`]: {},
          },
          [`&.${prefix}weight-bold`]: {
            [`@apply font-${config.textBold}`]: {},
          },
          [`&.${prefix}weight-extrabold`]: {
            [`@apply font-${config.textExtrabold}`]: {},
          },
          [`&.${prefix}lead-none`]: {
            [`@apply leading-${config.textLeadNone}`]: {},
          },
          [`&.${prefix}lead-normal`]: {
            [`@apply leading-${config.textLeadNormal}`]: {},
          },
          [`&.${prefix}lead-tight`]: {
            [`@apply leading-${config.textLeadTight}`]: {},
          },
          [`&.${prefix}lead-snug`]: {
            [`@apply leading-${config.textLeadSnug}`]: {},
          },
          [`&.${prefix}lead-loose`]: {
            [`@apply leading-${config.textLeadLoose}`]: {},
          },
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
