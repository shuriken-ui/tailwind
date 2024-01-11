import plugin from 'tailwindcss/plugin'
import { type ParagraphConfig, defaultConfig, key } from './paragraph.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ParagraphConfig

  addComponents({
    '.nui-paragraph': {
      '@apply font-sans': {},
      //Size
      '&.nui-paragraph-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.nui-paragraph-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.nui-paragraph-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.nui-paragraph-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.nui-paragraph-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.nui-paragraph-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.nui-paragraph-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.nui-paragraph-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.nui-paragraph-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.nui-paragraph-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.nui-paragraph-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.nui-paragraph-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.nui-paragraph-9xl': {
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
