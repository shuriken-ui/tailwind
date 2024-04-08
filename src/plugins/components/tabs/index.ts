import plugin from 'tailwindcss/plugin'
import { type TabsConfig, defaultConfig, key } from './tabs.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

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
        //Item:no-icon
        '&:not(.nui-has-icon)': {
          '@apply flex items-center gap-1 py-2': {},
        },
        //Item:icon
        '&.nui-has-icon': {
          '@apply flex items-center gap-1 py-3': {},
        },
      },
      //Color: default
      '&.nui-tabs-default': {
        //Tabs:item
        '.nui-tab-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Base
            '@apply border-transparent': {},
            //Color
            [`@apply text-${config.tabs.color.default.font.inactive.light} dark:text-${config.tabs.color.default.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Border
            [`@apply border-${config.tabs.color.default.border.active.light} dark:border-${config.tabs.color.default.border.active.dark}`]:
              {},
            //Color
            [`@apply text-${config.tabs.color.default.font.active.light} dark:text-${config.tabs.color.default.font.active.dark}`]:
              {},
          },
        },
        //Pills:item
        '.nui-pill-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Color
            [`@apply text-${config.pill.color.default.font.inactive.light} dark:text-${config.pill.color.default.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Color
            [`@apply text-${config.pill.color.default.font.active.light} dark:text-${config.pill.color.default.font.active.dark}`]:
              {},
            //Background
            [`@apply bg-${config.pill.color.default.background.active.light} dark:bg-${config.pill.color.default.background.active.dark}`]:
              {},
            //border
            [`@apply border border-${config.pill.color.default.border.active.light} dark:border-${config.pill.color.default.border.active.dark}`]:
              {},
            //Shadow
            [`@apply shadow-${config.pill.color.default.shadow.active.size} shadow-${config.pill.color.default.shadow.active.light} dark:shadow-${config.pill.color.default.shadow.active.dark}`]:
              {},
          },
        },
      },
      //Color: primary
      '&.nui-tabs-primary': {
        //Tabs:item
        '.nui-tab-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Base
            '@apply border-transparent': {},
            //Color
            [`@apply text-${config.tabs.color.primary.font.inactive.light} dark:text-${config.tabs.color.primary.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Border
            [`@apply border-${config.tabs.color.primary.border.active.light} dark:border-${config.tabs.color.primary.border.active.dark}`]:
              {},
            //Color
            [`@apply text-${config.tabs.color.primary.font.active.light} dark:text-${config.tabs.color.primary.font.active.dark}`]:
              {},
          },
        },
        //Pills:item
        '.nui-pill-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Color
            [`@apply text-${config.pill.color.primary.font.inactive.light} dark:text-${config.pill.color.primary.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Color
            [`@apply text-${config.pill.color.primary.font.active.light} dark:text-${config.pill.color.primary.font.active.dark}`]:
              {},
            //Background
            [`@apply !bg-${config.pill.color.primary.background.active.light} dark:!bg-${config.pill.color.primary.background.active.dark}`]:
              {},
            //Shadow
            [`@apply shadow-${config.pill.color.primary.shadow.active.size} bg-${config.pill.color.primary.shadow.active.light} dark:bg-${config.pill.color.primary.shadow.active.dark}`]:
              {},
          },
        },
      },
      //Color: light
      '&.nui-tabs-light': {
        //Tabs:item
        '.nui-tab-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Base
            '@apply border-transparent': {},
            //Color
            [`@apply text-${config.tabs.color.light.font.inactive.light} dark:text-${config.tabs.color.light.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Border
            [`@apply border-${config.tabs.color.light.border.active.light} dark:border-${config.tabs.color.light.border.active.dark}`]:
              {},
            //Color
            [`@apply text-${config.tabs.color.light.font.active.light} dark:text-${config.tabs.color.light.font.active.dark}`]:
              {},
          },
        },
        //Pills:item
        '.nui-pill-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Color
            [`@apply text-${config.pill.color.light.font.inactive.light} dark:text-${config.pill.color.light.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Color
            [`@apply text-${config.pill.color.light.font.active.light} dark:text-${config.pill.color.light.font.active.dark}`]:
              {},
            //Background
            [`@apply !bg-${config.pill.color.light.background.active.light} dark:!bg-${config.pill.color.light.background.active.dark}`]:
              {},
            //Shadow
            [`@apply shadow-${config.pill.color.light.shadow.active.size} shadow-${config.pill.color.light.shadow.active.light} dark:shadow-${config.pill.color.light.shadow.active.dark}`]:
              {},
          },
        },
      },
      //Color: dark
      '&.nui-tabs-dark': {
        //Tabs:item
        '.nui-tab-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Base
            '@apply border-transparent': {},
            //Color
            [`@apply text-${config.tabs.color.dark.font.inactive.light} dark:text-${config.tabs.color.dark.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Border
            [`@apply border-${config.tabs.color.dark.border.active.light} dark:border-${config.tabs.color.dark.border.active.dark}`]:
              {},
            //Color
            [`@apply text-${config.tabs.color.dark.font.active.light} dark:text-${config.tabs.color.dark.font.active.dark}`]:
              {},
          },
        },
        //Pills:item
        '.nui-pill-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Color
            [`@apply text-${config.pill.color.dark.font.inactive.light} dark:text-${config.pill.color.dark.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Color
            [`@apply text-${config.pill.color.dark.font.active.light} dark:text-${config.pill.color.dark.font.active.dark}`]:
              {},
            //Background
            [`@apply !bg-${config.pill.color.dark.background.active.light} dark:!bg-${config.pill.color.dark.background.active.dark}`]:
              {},
            //Shadow
            [`@apply shadow-${config.pill.color.dark.shadow.active.size} shadow-${config.pill.color.dark.shadow.active.light} dark:shadow-${config.pill.color.dark.shadow.active.dark}`]:
              {},
          },
        },
      },
      //Color: black
      '&.nui-tabs-black': {
        //Tabs:item
        '.nui-tab-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Base
            '@apply border-transparent': {},
            //Color
            [`@apply text-${config.tabs.color.black.font.inactive.light} dark:text-${config.tabs.color.black.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Border
            [`@apply border-${config.tabs.color.black.border.active.light} dark:border-${config.tabs.color.black.border.active.dark}`]:
              {},
            //Color
            [`@apply text-${config.tabs.color.black.font.active.light} dark:text-${config.tabs.color.black.font.active.dark}`]:
              {},
          },
        },
        //Pills:item
        '.nui-pill-item': {
          //Item:inactive
          '&:not(.nui-active)': {
            //Color
            [`@apply text-${config.pill.color.black.font.inactive.light} dark:text-${config.pill.color.black.font.inactive.dark}`]:
              {},
          },
          //Item:active
          '&.nui-active': {
            //Color
            [`@apply text-${config.pill.color.black.font.active.light} dark:text-${config.pill.color.black.font.active.dark}`]:
              {},
            //Background
            [`@apply !bg-${config.pill.color.black.background.active.light} dark:!bg-${config.pill.color.black.background.active.dark}`]:
              {},
            //Shadow
            [`@apply shadow-${config.pill.color.black.shadow.active.size} shadow-${config.pill.color.black.shadow.active.light} dark:shadow-${config.pill.color.black.shadow.active.dark}`]:
              {},
          },
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
