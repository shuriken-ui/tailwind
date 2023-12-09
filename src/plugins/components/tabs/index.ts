import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type TabsConfig, defaultConfig, key } from './tabs.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies TabsConfig

      addComponents({
        //Wrapper
        [`.${prefix}tabs`]: {
          [`@apply relative`]: {},
          //Tabs:inner
          [`.${prefix}tabs-inner`]: {
            [`@apply font-${config.inner.font.family} mb-${config.inner.margin.bottom} flex`]:
              {},
          },

          //Tabs:bordered
          [`&.${prefix}tabs-bordered`]: {
            //Tabs:inner
            [`.${prefix}tabs-inner`]: {
              [`@apply border-b border-muted-200 dark:border-muted-800`]: {},
            },
          },
          //Tabs:item
          [`.${prefix}tab-item`]: {
            //Base
            [`@apply cursor-pointer border-b-2 px-4 py-3`]: {},
            //Color
            [`@apply text-${config.item.font.size}`]: {},
            //Transition
            [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
              {},
            //Item:inactive
            [`&:not(.${prefix}active)`]: {
              //Base
              [`@apply border-transparent`]: {},
              //Color
              [`@apply text-${config.item.font.color.inactive.light} dark:text-${config.item.font.color.inactive.dark}`]:
                {},
            },
            //Item:active
            [`&.${prefix}active`]: {
              //Border
              [`@apply border-${config.item.border.active.light} dark:border-${config.item.border.active.dark}`]:
                {},
              //Color
              [`@apply text-${config.item.font.color.active.light} dark:text-${config.item.font.color.active.dark}`]:
                {},
            },
            //Item:icon
            [`&.${prefix}has-icon`]: {
              [`@apply flex items-center gap-1`]: {},
            },
          },
          //Item:pill
          [`.${prefix}pill-item`]: {
            [`@apply flex flex-col ${config.pill.rounded} px-5 cursor-pointer`]:
              {},
            //font
            [`@apply text-${config.pill.font.align}`]: {},
            //Transition
            [`@apply transition-${config.pill.transition.property} duration-${config.pill.transition.duration}`]:
              {},
            //Item:inactive
            [`&:not(.${prefix}active)`]: {
              //color
              [`@apply text-${config.pill.font.color.inactive.light} dark:text-${config.pill.font.color.inactive.dark}`]:
                {},
            },
            //Item:active
            [`&.${prefix}active`]: {
              //Color
              [`@apply !text-${config.pill.font.color.active.light} dark:!text-${config.pill.font.color.active.dark}`]:
                {},
              //Background
              [`@apply !bg-${config.pill.background.active.light} dark:!bg-${config.pill.background.active.dark}`]:
                {},
              //Shadow
              [`@apply shadow-${config.pill.shadow.active.size} bg-${config.pill.shadow.active.light} dark:bg-${config.pill.shadow.active.dark}`]:
                {},
            },
            //Item:no-icon
            [`&:not(.${prefix}has-icon)`]: {
              [`@apply flex items-center gap-1 py-2`]: {},
            },
            //Item:icon
            [`&.${prefix}has-icon`]: {
              [`@apply flex items-center gap-1 py-3`]: {},
            },
          },
          //Tabs:content
          [`.${prefix}tab-content`]: {
            [`@apply relative block`]: {},
          },
          //Align:center
          [`&.${prefix}tabs-centered`]: {
            [`.${prefix}tabs-inner`]: {
              [`@apply justify-center`]: {},
            },
          },
          //Align:end
          [`&.${prefix}tabs-end`]: {
            [`.${prefix}tabs-inner`]: {
              [`@apply justify-end`]: {},
            },
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
