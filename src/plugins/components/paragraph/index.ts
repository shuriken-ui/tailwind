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
          //Size
          [`&.${prefix}paragraph-xs`]: {
            [`@apply text-${config.size.xs}`]: {},
          },
          [`&.${prefix}paragraph-sm`]: {
            [`@apply text-${config.size.sm}`]: {},
          },
          [`&.${prefix}paragraph-md`]: {
            [`@apply text-${config.size.md}`]: {},
          },
          [`&.${prefix}paragraph-lg`]: {
            [`@apply text-${config.size.lg}`]: {},
          },
          [`&.${prefix}paragraph-xl`]: {
            [`@apply text-${config.size.xl}`]: {},
          },
          [`&.${prefix}paragraph-2xl`]: {
            [`@apply text-${config.size.xxl}`]: {},
          },
          [`&.${prefix}paragraph-3xl`]: {
            [`@apply text-${config.size.xxxl}`]: {},
          },
          [`&.${prefix}paragraph-4xl`]: {
            [`@apply text-${config.size.xxxxl}`]: {},
          },
          [`&.${prefix}paragraph-5xl`]: {
            [`@apply text-${config.size.xxxxxl}`]: {},
          },
          [`&.${prefix}paragraph-6xl`]: {
            [`@apply text-${config.size.xxxxxxl}`]: {},
          },
          [`&.${prefix}paragraph-7xl`]: {
            [`@apply text-${config.size.xxxxxxxl}`]: {},
          },
          [`&.${prefix}paragraph-8xl`]: {
            [`@apply text-${config.size.xxxxxxxxl}`]: {},
          },
          [`&.${prefix}paragraph-9xl`]: {
            [`@apply text-${config.size.xxxxxxxxxl}`]: {},
          },
          //Weight
          [`&.${prefix}weight-light`]: {
            [`@apply font-${config.weight.light}`]: {},
          },
          [`&.${prefix}weight-normal`]: {
            [`@apply font-${config.weight.normal}`]: {},
          },
          [`&.${prefix}weight-medium`]: {
            [`@apply font-${config.weight.medium}`]: {},
          },
          [`&.${prefix}weight-semibold`]: {
            [`@apply font-${config.weight.semibold}`]: {},
          },
          [`&.${prefix}weight-bold`]: {
            [`@apply font-${config.weight.bold}`]: {},
          },
          [`&.${prefix}weight-extrabold`]: {
            [`@apply font-${config.weight.extrabold}`]: {},
          },
          //Lead
          [`&.${prefix}lead-none`]: {
            [`@apply leading-${config.lead.none}`]: {},
          },
          [`&.${prefix}lead-normal`]: {
            [`@apply leading-${config.lead.normal}`]: {},
          },
          [`&.${prefix}lead-tight`]: {
            [`@apply leading-${config.lead.tight}`]: {},
          },
          [`&.${prefix}lead-snug`]: {
            [`@apply leading-${config.lead.snug}`]: {},
          },
          [`&.${prefix}lead-loose`]: {
            [`@apply leading-${config.lead.loose}`]: {},
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
