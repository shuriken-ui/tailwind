import plugin from 'tailwindcss/plugin'
import { type HeadingConfig, defaultConfig, key } from './heading.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies HeadingConfig

  addComponents({
    '.nui-heading': {
      '@apply font-sans': {},
      //size
      '&.nui-heading-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.nui-heading-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.nui-heading-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.nui-heading-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.nui-heading-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.nui-heading-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.nui-heading-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.nui-heading-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.nui-heading-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.nui-heading-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.nui-heading-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.nui-heading-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.nui-heading-9xl': {
        [`@apply text-${config.size.xxxxxxxxxl}`]: {},
      },
      //Weight
      '&.nui-weight-light': {
        [`@apply font-${config.weight.light}`]: {},
      },
      '&.nui-weight-normal': {
        [`@apply font-${config.weight.normal}`]: {},
      },
      '&.nui-weight-medium': {
        [`@apply font-${config.weight.medium}`]: {},
      },
      '&.nui-weight-semibold': {
        [`@apply font-${config.weight.semibold}`]: {},
      },
      '&.nui-weight-bold': {
        [`@apply font-${config.weight.bold}`]: {},
      },
      '&.nui-weight-extrabold': {
        [`@apply font-${config.weight.extrabold}`]: {},
      },
      //Lead
      '&.nui-lead-none': {
        [`@apply leading-${config.lead.none}`]: {},
      },
      '&.nui-lead-normal': {
        [`@apply leading-${config.lead.normal}`]: {},
      },
      '&.nui-lead-tight': {
        [`@apply leading-${config.lead.tight}`]: {},
      },
      '&.nui-lead-snug': {
        [`@apply leading-${config.lead.snug}`]: {},
      },
      '&.nui-lead-loose': {
        [`@apply leading-${config.lead.loose}`]: {},
      },
    },
  })
}, config)
