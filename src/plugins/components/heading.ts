import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultHeadingConfig = {
  textXS: 'xs',
  textSM: 'sm',
  textMD: 'base',
  textLG: 'lg',
  textXL: 'xl',
  text2XL: '2xl',
  text3XL: '3xl',
  text4XL: '4xl',
  text5XL: '5xl',
  text6XL: '6xl',
  text7XL: '7xl',
  text8XL: '8xl',
  text9XL: '9xl',
  textLight: 'light',
  textNormal: 'normal',
  textMedium: 'medium',
  textSemibold: 'semibold',
  textBold: 'bold',
  textExtrabold: 'extrabold',
  textLeadNone: 'none',
  textLeadNormal: 'normal',
  textLeadTight: 'tight',
  textLeadSnug: 'snug',
  textLeadLoose: 'loose',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.heading'
      ) satisfies typeof defaultHeadingConfig

      addComponents({
        [`.${prefix}-heading`]: {
          [`@apply font-heading`]: {},

          [`&.${prefix}-heading-xs`]: {
            [`@apply text-${config.textXS}`]: {},
          },
          [`&.${prefix}-heading-sm`]: {
            [`@apply text-${config.textSM}`]: {},
          },
          [`&.${prefix}-heading-md`]: {
            [`@apply text-${config.textMD}`]: {},
          },
          [`&.${prefix}-heading-lg`]: {
            [`@apply text-${config.textLG}`]: {},
          },
          [`&.${prefix}-heading-xl`]: {
            [`@apply text-${config.textXL}`]: {},
          },
          [`&.${prefix}-heading-2xl`]: {
            [`@apply text-${config.text2XL}`]: {},
          },
          [`&.${prefix}-heading-3xl`]: {
            [`@apply text-${config.text3XL}`]: {},
          },
          [`&.${prefix}-heading-4xl`]: {
            [`@apply text-${config.text4XL}`]: {},
          },
          [`&.${prefix}-heading-5xl`]: {
            [`@apply text-${config.text5XL}`]: {},
          },
          [`&.${prefix}-heading-6xl`]: {
            [`@apply text-${config.text6XL}`]: {},
          },
          [`&.${prefix}-heading-7xl`]: {
            [`@apply text-${config.text7XL}`]: {},
          },
          [`&.${prefix}-heading-8xl`]: {
            [`@apply text-${config.text8XL}`]: {},
          },
          [`&.${prefix}-heading-9xl`]: {
            [`@apply text-${config.text9XL}`]: {},
          },
          [`&.${prefix}-weight-light`]: {
            [`@apply font-${config.textLight}`]: {},
          },
          [`&.${prefix}-weight-normal`]: {
            [`@apply font-${config.textNormal}`]: {},
          },
          [`&.${prefix}-weight-medium`]: {
            [`@apply font-${config.textMedium}`]: {},
          },
          [`&.${prefix}-weight-semibold`]: {
            [`@apply font-${config.textSemibold}`]: {},
          },
          [`&.${prefix}-weight-bold`]: {
            [`@apply font-${config.textBold}`]: {},
          },
          [`&.${prefix}-weight-extrabold`]: {
            [`@apply font-${config.textExtrabold}`]: {},
          },
          [`&.${prefix}-lead-none`]: {
            [`@apply leading-${config.textLeadNone}`]: {},
          },
          [`&.${prefix}-lead-normal`]: {
            [`@apply leading-${config.textLeadNormal}`]: {},
          },
          [`&.${prefix}-lead-tight`]: {
            [`@apply leading-${config.textLeadTight}`]: {},
          },
          [`&.${prefix}-lead-snug`]: {
            [`@apply leading-${config.textLeadSnug}`]: {},
          },
          [`&.${prefix}-lead-loose`]: {
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
          heading: defaultHeadingConfig,
        },
      },
    }
  }
)
