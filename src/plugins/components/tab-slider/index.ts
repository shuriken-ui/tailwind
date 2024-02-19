import plugin from 'tailwindcss/plugin'
import { type TabSliderConfig, defaultConfig, key } from './tab-slider.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TabSliderConfig

  addComponents({
    //Wrapper
    '.nui-tab-slider': {
      '@apply relative': {},
      //Tabs:inner
      '.nui-tab-slider-inner': {
        '@apply mb-6 flex': {},
      },
      //Tabs:track
      '.nui-tab-slider-track': {
        //Base
        [`@apply relative relative flex w-${config.track.width} items-center font-${config.track.font.family}`]:
          {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
      },
      //Tabs:item
      '.nui-tab-slider-item': {
        //Base
        '@apply relative z-20 h-full flex flex-1 items-center justify-center':
          {},
        //Font
        [`@apply text-${config.item.font.size} font-${config.item.font.family}`]:
          {},
      },
      //Tabs:naver
      '.nui-tab-slider-naver': {
        //Base
        '@apply absolute start-0 top-0 z-10 h-full': {},
        //Transition
        [`@apply transition-${config.naver.transition.property} duration-${config.naver.transition.duration}`]:
          {},
      },
      //Tabs:content
      '.nui-tab-content': {
        '@apply relative block': {},
      },
      //Align:center
      '&.nui-tabs-centered': {
        '.nui-tab-slider-inner': {
          '@apply justify-center': {},
        },
      },
      //Align:end
      '&.nui-tabs-end': {
        '.nui-tab-slider-inner': {
          '@apply justify-end': {},
        },
      },
      //Color:default
      '&.nui-tabs-default': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.default.tabs.color.inactive.light} dark:text-${config.color.default.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.default.tabs.color.active.light} dark:text-${config.color.default.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.default.naver.background.light} dark:bg-${config.color.default.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.default.naver.border.light} dark:border-${config.color.default.naver.border.dark}`]:
            {},
        },
      },
      //Color:default-contrast
      '&.nui-tabs-default-contrast': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.defaultContrast.tabs.color.inactive.light} dark:text-${config.color.defaultContrast.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.defaultContrast.tabs.color.active.light} dark:text-${config.color.defaultContrast.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.defaultContrast.naver.background.light} dark:bg-${config.color.defaultContrast.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.defaultContrast.naver.border.light} dark:border-${config.color.defaultContrast.naver.border.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-tabs-primary': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.primary.tabs.color.inactive.light} dark:text-${config.color.primary.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.primary.tabs.color.active.light} dark:text-${config.color.primary.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.primary.naver.background.light} dark:bg-${config.color.primary.naver.background.dark}`]:
            {},
        },
      },
      //Color:light
      '&.nui-tabs-light': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.light.tabs.color.inactive.light} dark:text-${config.color.light.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.light.tabs.color.active.light} dark:text-${config.color.light.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.light.naver.background.light} dark:bg-${config.color.light.naver.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.nui-tabs-dark': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.dark.tabs.color.inactive.light} dark:text-${config.color.dark.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.dark.tabs.color.active.light} dark:text-${config.color.dark.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.dark.naver.background.light} dark:bg-${config.color.dark.naver.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.nui-tabs-black': {
        '.nui-tab-slider-item:not(.nui-active)': {
          [`@apply text-${config.color.black.tabs.color.inactive.light} dark:text-${config.color.black.tabs.color.inactive.dark}`]:
            {},
        },
        '.nui-tab-slider-item.nui-active': {
          [`@apply text-${config.color.black.tabs.color.active.light} dark:text-${config.color.black.tabs.color.active.dark}`]:
            {},
        },
        '.nui-tab-slider-naver': {
          [`@apply bg-${config.color.black.naver.background.light} dark:bg-${config.color.black.naver.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.nui-tabs-rounded': {
        '.nui-tab-slider-track, .nui-tab-slider-naver': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.nui-tabs-smooth': {
        '.nui-tab-slider-track, .nui-tab-slider-naver': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.nui-tabs-curved': {
        '.nui-tab-slider-track, .nui-tab-slider-naver': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-tabs-full': {
        '.nui-tab-slider-track, .nui-tab-slider-naver': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.nui-tabs-sm': {
        '&.nui-tabs-two-slots .nui-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.two}`]: {},
        },
        '&.nui-tabs-three-slots .nui-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.three}`]: {},
        },
        '.nui-tab-slider-track': {
          [`@apply h-${config.size.sm.track.size}`]: {},
        },
      },
      //Size:md
      '&.nui-tabs-md': {
        '&.nui-tabs-two-slots .nui-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.two}`]: {},
        },
        '&.nui-tabs-three-slots .nui-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.three}`]: {},
        },
        '.nui-tab-slider-track': {
          [`@apply h-${config.size.md.track.size}`]: {},
        },
      },
      //Slots:two
      '&.nui-tabs-two-slots': {
        '.nui-tab-slider-naver, .nui-tab-slider-item': {
          '@apply w-1/2': {},
        },
        '.nui-tab-slider-item:first-child.nui-active ~ .nui-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.nui-tab-slider-item:nth-child(2).nui-active ~ .nui-tab-slider-naver':
          {
            '@apply ms-[50%]': {},
          },
      },
      //Slots:three
      '&.nui-tabs-three-slots': {
        '.nui-tab-slider-naver, .nui-tab-slider-item': {
          '@apply w-1/3': {},
        },
        '.nui-tab-slider-item:first-child.nui-active ~ .nui-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.nui-tab-slider-item:nth-child(2).nui-active ~ .nui-tab-slider-naver':
          {
            '@apply ms-[33.3%]': {},
          },
        '.nui-tab-slider-item:nth-child(3).nui-active ~ .nui-tab-slider-naver':
          {
            '@apply ms-[66.6%]': {},
          },
      },
    },
  })
}, config)
