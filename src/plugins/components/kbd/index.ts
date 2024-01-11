import plugin from 'tailwindcss/plugin'
import { type KbdConfig, defaultConfig, key } from './kbd.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies KbdConfig

  addComponents({
    '.nui-kbd': {
      '@apply inline-flex items-center justify-center': {},
      //Font
      [`@apply font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
        {},
      //Icon:outer
      '.nui-kbd-icon-outer': {
        '@apply inline-flex items-center justify-center': {},
      },
      //Icon:inner
      '.nui-kbd-icon': {
        '@apply shrink-0': {},
      },
      //Rounded:sm
      '&.nui-kbd-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-kbd-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-kbd-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.nui-kbd-rounded-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Size:xs
      '&.nui-kbd-xs': {
        '@apply font-medium': {},
        //Size
        [`@apply min-h-[${config.size.xs.size}] min-w-[${config.size.xs.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.xs.padding.x} py-${config.size.xs.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.xs.font.lead} text-${config.size.xs.font.size}`]:
          {},
        //Icon:outer
        '.nui-kbd-icon-outer': {
          [`@apply w-${config.size.xs.icon.outer.size} h-${config.size.xs.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-kbd-icon-inner': {
          [`@apply w-${config.size.xs.icon.inner.size} h-${config.size.xs.icon.inner.size}`]:
            {},
        },
      },
      //Size:sm
      '&.nui-kbd-sm': {
        //Size
        [`@apply min-h-[${config.size.sm.size}] min-w-[${config.size.sm.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.sm.padding.x} py-${config.size.sm.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.sm.font.lead} text-${config.size.sm.font.size}`]:
          {},
        //Icon:outer
        '.nui-kbd-icon-outer': {
          [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-kbd-icon-inner': {
          [`@apply w-${config.size.sm.icon.inner.size} h-${config.size.sm.icon.inner.size}`]:
            {},
        },
      },
      //Size:md
      '&.nui-kbd-md': {
        //Size
        [`@apply min-h-[${config.size.md.size}] min-w-[${config.size.md.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.md.padding.x} py-${config.size.md.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.md.font.lead} text-${config.size.md.font.size}`]:
          {},
        //Icon:outer
        '.nui-kbd-icon-outer': {
          [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-kbd-icon-inner': {
          [`@apply w-${config.size.md.icon.inner.size} h-${config.size.md.icon.inner.size}`]:
            {},
        },
      },
      //Size:lg
      '&.nui-kbd-lg': {
        //Size
        [`@apply min-h-[${config.size.lg.size}] min-w-[${config.size.lg.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.lg.padding.x} py-${config.size.lg.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.lg.font.lead} text-${config.size.lg.font.size}`]:
          {},
        //Icon:outer
        '.nui-kbd-icon-outer': {
          [`@apply w-${config.size.lg.icon.outer.size} h-${config.size.lg.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-kbd-icon-inner': {
          [`@apply w-${config.size.lg.icon.inner.size} h-${config.size.lg.icon.inner.size}`]:
            {},
        },
      },
      //Color:default
      '&.nui-kbd-default': {
        '@apply bg-white dark:bg-muted-800 border border-b-2 border-muted-500/20 dark:border-muted-300/20':
          {},
      },
      //Color:muted
      '&.nui-kbd-muted': {
        '@apply bg-muted-50 dark:bg-muted-800 border border-b-2 border-muted-600/20 dark:border-muted-300/20':
          {},
      },
    },
  })
}, config)
