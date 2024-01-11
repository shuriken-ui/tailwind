import plugin from 'tailwindcss/plugin'
import {
  type PlaceholderPageConfig,
  defaultConfig,
  key,
} from './placeholder-page.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies PlaceholderPageConfig

  addComponents({
    '.nui-placeholder-page': {
      [`@apply flex min-h-${config.height.min} items-center justify-center`]:
        {},

      '.nui-placeholder-page-inner': {
        [`@apply mx-auto w-${config.inner.width} text-center`]: {},
      },
      '.nui-placeholder-page-img': {
        '@apply mx-auto block': {},
      },
      '.nui-placeholder-page-content': {
        [`@apply mx-auto max-w-${config.content.width.max}`]: {},
      },
      '.nui-placeholder-page-actions': {
        '@apply mt-4 flex justify-center gap-2': {},
      },
      '.nui-placeholder-page-title': {
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark} mb-1 mt-4`]:
          {},
      },
      '.nui-placeholder-page-subtitle': {
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      '&.nui-placeholder-xs .nui-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xs}`]: {},
      },
      '&.nui-placeholder-sm .nui-placeholder-page-img': {
        [`@apply max-w-${config.size.image.sm}`]: {},
      },
      '&.nui-placeholder-md .nui-placeholder-page-img': {
        [`@apply max-w-${config.size.image.md}`]: {},
      },
      '&.nui-placeholder-lg .nui-placeholder-page-img': {
        [`@apply max-w-${config.size.image.lg}`]: {},
      },
      '&.nui-placeholder-xl .nui-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xl}`]: {},
      },
    },
  })
}, config)
