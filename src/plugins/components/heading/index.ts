import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type HeadingConfig, defaultConfig, key } from './heading.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies HeadingConfig

      addComponents({
        [`.${prefix}heading`]: {
          [`@apply font-sans`]: {},

          [`&.${prefix}heading-xs`]: {
            [`@apply text-${config.textXS}`]: {},
          },
          [`&.${prefix}heading-sm`]: {
            [`@apply text-${config.textSM}`]: {},
          },
          [`&.${prefix}heading-md`]: {
            [`@apply text-${config.textMD}`]: {},
          },
          [`&.${prefix}heading-lg`]: {
            [`@apply text-${config.textLG}`]: {},
          },
          [`&.${prefix}heading-xl`]: {
            [`@apply text-${config.textXL}`]: {},
          },
          [`&.${prefix}heading-2xl`]: {
            [`@apply text-${config.text2XL}`]: {},
          },
          [`&.${prefix}heading-3xl`]: {
            [`@apply text-${config.text3XL}`]: {},
          },
          [`&.${prefix}heading-4xl`]: {
            [`@apply text-${config.text4XL}`]: {},
          },
          [`&.${prefix}heading-5xl`]: {
            [`@apply text-${config.text5XL}`]: {},
          },
          [`&.${prefix}heading-6xl`]: {
            [`@apply text-${config.text6XL}`]: {},
          },
          [`&.${prefix}heading-7xl`]: {
            [`@apply text-${config.text7XL}`]: {},
          },
          [`&.${prefix}heading-8xl`]: {
            [`@apply text-${config.text8XL}`]: {},
          },
          [`&.${prefix}heading-9xl`]: {
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
