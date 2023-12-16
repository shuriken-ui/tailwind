import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type KbdPluginConfig, defaultConfig, key } from './kbd.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies KbdPluginConfig

      addComponents({
        [`.${prefix}kbd`]: {
          [`@apply inline-flex items-center justify-center`]: {},
          //Font
          [`@apply font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
            {},
          //Icon:outer
          [`.${prefix}kbd-icon-outer`]: {
            [`@apply inline-flex items-center justify-center`]: {},
          },
          //Icon:inner
          [`.${prefix}kbd-icon`]: {
            [`@apply shrink-0`]: {},
          },
          //Rounded:sm
          [`&.${prefix}kbd-rounded-sm`]: {
            [`@apply ${config.rounded.sm}`]: {},
          },
          //Rounded:md
          [`&.${prefix}kbd-rounded-md`]: {
            [`@apply ${config.rounded.md}`]: {},
          },
          //Rounded:lg
          [`&.${prefix}kbd-rounded-lg`]: {
            [`@apply ${config.rounded.lg}`]: {},
          },
          //Rounded:full
          [`&.${prefix}kbd-rounded-full`]: {
            [`@apply ${config.rounded.full}`]: {},
          },
          //Size:xs
          [`&.${prefix}kbd-xs`]: {
            [`@apply font-medium`]: {},
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
            [`.${prefix}kbd-icon-outer`]: {
              [`@apply w-${config.size.xs.icon.outer.size} h-${config.size.xs.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}kbd-icon-inner`]: {
              [`@apply w-${config.size.xs.icon.inner.size} h-${config.size.xs.icon.inner.size}`]:
                {},
            },
          },
          //Size:sm
          [`&.${prefix}kbd-sm`]: {
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
            [`.${prefix}kbd-icon-outer`]: {
              [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}kbd-icon-inner`]: {
              [`@apply w-${config.size.sm.icon.inner.size} h-${config.size.sm.icon.inner.size}`]:
                {},
            },
          },
          //Size:md
          [`&.${prefix}kbd-md`]: {
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
            [`.${prefix}kbd-icon-outer`]: {
              [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}kbd-icon-inner`]: {
              [`@apply w-${config.size.md.icon.inner.size} h-${config.size.md.icon.inner.size}`]:
                {},
            },
          },
          //Size:lg
          [`&.${prefix}kbd-lg`]: {
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
            [`.${prefix}kbd-icon-outer`]: {
              [`@apply w-${config.size.lg.icon.outer.size} h-${config.size.lg.icon.outer.size}`]:
                {},
            },
            //Icon:inner
            [`.${prefix}kbd-icon-inner`]: {
              [`@apply w-${config.size.lg.icon.inner.size} h-${config.size.lg.icon.inner.size}`]:
                {},
            },
          },
          //Color:default
          [`&.${prefix}kbd-default`]: {
            [`@apply bg-white dark:bg-muted-800 border border-b-2 border-muted-500/20 dark:border-muted-300/20`]:
              {},
          },
          //Color:muted
          [`&.${prefix}kbd-muted`]: {
            [`@apply bg-muted-50 dark:bg-muted-800 border border-b-2 border-muted-600/20 dark:border-muted-300/20`]:
              {},
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
