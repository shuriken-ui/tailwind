import plugin from 'tailwindcss/plugin'
import { type TabsConfig, defaultConfig, key } from './tabs.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TabsConfig

  addComponents({
    //Wrapper
    '.nui-tabs': {
      '@apply relative': {},
      //Tabs:inner
      '.nui-tabs-inner': {
        [`@apply font-${config.inner.font.family} mb-${config.inner.margin.bottom} flex`]:
          {},
      },

      //Tabs:bordered
      '&.nui-tabs-bordered': {
        //Tabs:inner
        '.nui-tabs-inner': {
          '@apply border-b border-muted-200 dark:border-muted-800': {},
        },
      },
      //Tabs:item
      '.nui-tab-item': {
        //Base
        '@apply cursor-pointer border-b-2 px-4 py-3': {},
        //Color
        [`@apply text-${config.item.font.size}`]: {},
        //Transition
        [`@apply transition-${config.item.transition.property} duration-${config.item.transition.duration}`]:
          {},
        //Item:inactive
        '&:not(.nui-active)': {
          //Base
          '@apply border-transparent': {},
          //Color
          [`@apply text-${config.item.font.color.inactive.light} dark:text-${config.item.font.color.inactive.dark}`]:
            {},
        },
        //Item:active
        '&.nui-active': {
          //Border
          [`@apply border-${config.item.border.active.light} dark:border-${config.item.border.active.dark}`]:
            {},
          //Color
          [`@apply text-${config.item.font.color.active.light} dark:text-${config.item.font.color.active.dark}`]:
            {},
        },
        //Item:icon
        '&.nui-has-icon': {
          '@apply flex items-center gap-1': {},
        },
      },
      //Item:pill
      '.nui-pill-item': {
        [`@apply flex flex-col ${config.pill.rounded} px-5 cursor-pointer`]: {},
        //font
        [`@apply text-${config.pill.font.align}`]: {},
        //Transition
        [`@apply transition-${config.pill.transition.property} duration-${config.pill.transition.duration}`]:
          {},
        //Item:inactive
        '&:not(.nui-active)': {
          //color
          [`@apply text-${config.pill.font.color.inactive.light} dark:text-${config.pill.font.color.inactive.dark}`]:
            {},
        },
        //Item:active
        '&.nui-active': {
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
        '&:not(.nui-has-icon)': {
          '@apply flex items-center gap-1 py-2': {},
        },
        //Item:icon
        '&.nui-has-icon': {
          '@apply flex items-center gap-1 py-3': {},
        },
      },
      //Tabs:content
      '.nui-tab-content': {
        '@apply relative block': {},
      },
      //Align:center
      '&.nui-tabs-centered': {
        '.nui-tabs-inner': {
          '@apply justify-center': {},
        },
      },
      //Align:end
      '&.nui-tabs-end': {
        '.nui-tabs-inner': {
          '@apply justify-end': {},
        },
      },
    },
  })
}, config)
