import plugin from 'tailwindcss/plugin'
import { type TextConfig, defaultConfig, key } from './text.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TextConfig

  addComponents({
    '.nui-text': {
      '@apply font-sans': {},
      //Size
      '&.nui-content-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.nui-content-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.nui-content-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.nui-content-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.nui-content-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.nui-content-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.nui-content-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.nui-content-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.nui-content-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.nui-content-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.nui-content-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.nui-content-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.nui-content-9xl': {
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
