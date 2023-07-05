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
            [`@apply ${config.textXS}`]: {},
          },
          [`&.${prefix}-heading-sm`]: {
            [`@apply ${config.textSM}`]: {},
          },
          [`&.${prefix}-heading-md`]: {
            [`@apply ${config.textMD}`]: {},
          },
          [`&.${prefix}-heading-lg`]: {
            [`@apply ${config.textLG}`]: {},
          },
          [`&.${prefix}-heading-xl`]: {
            [`@apply ${config.textXL}`]: {},
          },
          [`&.${prefix}-heading-2xl`]: {
            [`@apply ${config.text2XL}`]: {},
          },
          [`&.${prefix}-heading-3xl`]: {
            [`@apply ${config.text3XL}`]: {},
          },
          [`&.${prefix}-heading-4xl`]: {
            [`@apply ${config.text4XL}`]: {},
          },
          [`&.${prefix}-heading-5xl`]: {
            [`@apply ${config.text5XL}`]: {},
          },
          [`&.${prefix}-heading-6xl`]: {
            [`@apply ${config.text6XL}`]: {},
          },
          [`&.${prefix}-heading-7xl`]: {
            [`@apply ${config.text7XL}`]: {},
          },
          [`&.${prefix}-heading-8xl`]: {
            [`@apply ${config.text8XL}`]: {},
          },
          [`&.${prefix}-heading-9xl`]: {
            [`@apply ${config.text9XL}`]: {},
          },
          [`&.${prefix}-weight-light`]: {
            [`@apply ${config.textLight}`]: {},
          },
          [`&.${prefix}-weight-normal`]: {
            [`@apply ${config.textNormal}`]: {},
          },
          [`&.${prefix}-weight-medium`]: {
            [`@apply ${config.textMedium}`]: {},
          },
          [`&.${prefix}-weight-semibold`]: {
            [`@apply ${config.textSemibold}`]: {},
          },
          [`&.${prefix}-weight-bold`]: {
            [`@apply ${config.textBold}`]: {},
          },
          [`&.${prefix}-weight-extrabold`]: {
            [`@apply ${config.textExtrabold}`]: {},
          },
          [`&.${prefix}-lead-none`]: {
            [`@apply ${config.textLeadNone}`]: {},
          },
          [`&.${prefix}-lead-normal`]: {
            [`@apply ${config.textLeadNormal}`]: {},
          },
          [`&.${prefix}-lead-tight`]: {
            [`@apply ${config.textLeadTight}`]: {},
          },
          [`&.${prefix}-lead-snug`]: {
            [`@apply ${config.textLeadSnug}`]: {},
          },
          [`&.${prefix}-lead-loose`]: {
            [`@apply ${config.textLeadLoose}`]: {},
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
