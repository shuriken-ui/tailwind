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
          //size
          [`&.${prefix}heading-xs`]: {
            [`@apply text-${config.size.xs}`]: {},
          },
          [`&.${prefix}heading-sm`]: {
            [`@apply text-${config.size.sm}`]: {},
          },
          [`&.${prefix}heading-md`]: {
            [`@apply text-${config.size.md}`]: {},
          },
          [`&.${prefix}heading-lg`]: {
            [`@apply text-${config.size.lg}`]: {},
          },
          [`&.${prefix}heading-xl`]: {
            [`@apply text-${config.size.xl}`]: {},
          },
          [`&.${prefix}heading-2xl`]: {
            [`@apply text-${config.size.xxl}`]: {},
          },
          [`&.${prefix}heading-3xl`]: {
            [`@apply text-${config.size.xxxl}`]: {},
          },
          [`&.${prefix}heading-4xl`]: {
            [`@apply text-${config.size.xxxxl}`]: {},
          },
          [`&.${prefix}heading-5xl`]: {
            [`@apply text-${config.size.xxxxxl}`]: {},
          },
          [`&.${prefix}heading-6xl`]: {
            [`@apply text-${config.size.xxxxxxl}`]: {},
          },
          [`&.${prefix}heading-7xl`]: {
            [`@apply text-${config.size.xxxxxxxl}`]: {},
          },
          [`&.${prefix}heading-8xl`]: {
            [`@apply text-${config.size.xxxxxxxxl}`]: {},
          },
          [`&.${prefix}heading-9xl`]: {
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
