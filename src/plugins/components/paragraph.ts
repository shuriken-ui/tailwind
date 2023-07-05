import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultParagraphConfig = {
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
        'shurikenUi.paragraph'
      ) satisfies typeof defaultParagraphConfig

      addComponents({
        [`.${prefix}-paragraph`]: {
          [`@apply font-sans`]: {},

          [`&.${prefix}-paragraph-xs`]: {
            [`@apply ${config.textXS}`]: {},
          },
          [`&.${prefix}-paragraph-sm`]: {
            [`@apply ${config.textSM}`]: {},
          },
          [`&.${prefix}-paragraph-md`]: {
            [`@apply ${config.textMD}`]: {},
          },
          [`&.${prefix}-paragraph-lg`]: {
            [`@apply ${config.textLG}`]: {},
          },
          [`&.${prefix}-paragraph-xl`]: {
            [`@apply ${config.textXL}`]: {},
          },
          [`&.${prefix}-paragraph-2xl`]: {
            [`@apply ${config.text2XL}`]: {},
          },
          [`&.${prefix}-paragraph-3xl`]: {
            [`@apply ${config.text3XL}`]: {},
          },
          [`&.${prefix}-paragraph-4xl`]: {
            [`@apply ${config.text4XL}`]: {},
          },
          [`&.${prefix}-paragraph-5xl`]: {
            [`@apply ${config.text5XL}`]: {},
          },
          [`&.${prefix}-paragraph-6xl`]: {
            [`@apply ${config.text6XL}`]: {},
          },
          [`&.${prefix}-paragraph-7xl`]: {
            [`@apply ${config.text7XL}`]: {},
          },
          [`&.${prefix}-paragraph-8xl`]: {
            [`@apply ${config.text8XL}`]: {},
          },
          [`&.${prefix}-paragraph-9xl`]: {
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
          paragraph: defaultParagraphConfig,
        },
      },
    }
  }
)
