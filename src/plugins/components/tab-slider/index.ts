import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type TabSliderConfig, defaultConfig, key } from './tab-slider.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies TabSliderConfig

      addComponents({
        //Wrapper
        [`.${prefix}tab-slider`]: {
          [`@apply relative`]: {},
          //Tabs:inner
          [`.${prefix}tab-slider-inner`]: {
            [`@apply mb-6 flex`]: {},
          },
          //Tabs:track
          [`.${prefix}tab-slider-track`]: {
            //Base
            [`@apply relative relative flex w-${config.track.width} items-center font-${config.track.font.family}`]:
              {},
            //Background
            [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
              {},
          },
          //Tabs:item
          [`.${prefix}tab-slider-item`]: {
            //Base
            [`@apply relative z-20 h-full flex flex-1 items-center justify-center`]:
              {},
            //Font
            [`@apply text-${config.item.font.size} font-${config.item.font.family}`]:
              {},
            //Item:inactive
            [`&:not(.${prefix}active)`]: {
              [`@apply text-${config.item.font.color.inactive.light} dark:text-${config.item.font.color.inactive.dark}`]:
                {},
            },
            //Item:active
            [`&.${prefix}active`]: {
              [`@apply text-${config.item.font.color.active.light} dark:text-${config.item.font.color.active.dark}`]:
                {},
            },
          },
          //Tabs:naver
          [`.${prefix}tab-slider-naver`]: {
            //Base
            [`@apply absolute start-0 top-0 z-10 h-full`]: {},
            //Background
            [`@apply bg-${config.naver.background.light} dark:bg-${config.naver.background.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.naver.transition.property} duration-${config.naver.transition.duration}`]:
              {},
          },
          //Tabs:content
          [`.${prefix}tab-content`]: {
            [`@apply relative block`]: {},
          },
          //Align:center
          [`&.${prefix}tabs-centered`]: {
            [`.${prefix}tab-slider-inner`]: {
              [`@apply justify-center`]: {},
            },
          },
          //Align:end
          [`&.${prefix}tabs-end`]: {
            [`.${prefix}tab-slider-inner`]: {
              [`@apply justify-end`]: {},
            },
          },
          //Rounded:sm
          [`&.${prefix}tabs-rounded`]: {
            [`.${prefix}tab-slider-track, .${prefix}tab-slider-naver`]: {
              [`@apply ${config.rounded.sm}`]: {},
            },
          },
          //Rounded:md
          [`&.${prefix}tabs-smooth`]: {
            [`.${prefix}tab-slider-track, .${prefix}tab-slider-naver`]: {
              [`@apply ${config.rounded.md}`]: {},
            },
          },
          //Rounded:lg
          [`&.${prefix}tabs-curved`]: {
            [`.${prefix}tab-slider-track, .${prefix}tab-slider-naver`]: {
              [`@apply ${config.rounded.lg}`]: {},
            },
          },
          //Rounded:full
          [`&.${prefix}tabs-full`]: {
            [`.${prefix}tab-slider-track, .${prefix}tab-slider-naver`]: {
              [`@apply ${config.rounded.full}`]: {},
            },
          },
          //Size:sm
          [`&.${prefix}tabs-sm`]: {
            [`&.${prefix}tabs-two-slots .${prefix}tab-slider-track`]: {
              [`@apply max-w-${config.size.sm.slots.two}`]: {},
            },
            [`&.${prefix}tabs-three-slots .${prefix}tab-slider-track`]: {
              [`@apply max-w-${config.size.sm.slots.three}`]: {},
            },
            [`.${prefix}tab-slider-track`]: {
              [`@apply h-${config.size.sm.track.size}`]: {},
            },
          },
          //Size:md
          [`&.${prefix}tabs-md`]: {
            [`&.${prefix}tabs-two-slots .${prefix}tab-slider-track`]: {
              [`@apply max-w-${config.size.md.slots.two}`]: {},
            },
            [`&.${prefix}tabs-three-slots .${prefix}tab-slider-track`]: {
              [`@apply max-w-${config.size.md.slots.three}`]: {},
            },
            [`.${prefix}tab-slider-track`]: {
              [`@apply h-${config.size.md.track.size}`]: {},
            },
          },
          //Slots:two
          [`&.${prefix}tabs-two-slots`]: {
            [`.${prefix}tab-slider-naver, .${prefix}tab-slider-item`]: {
              [`@apply w-1/2`]: {},
            },
            [`.${prefix}tab-slider-item:first-child.${prefix}active ~ .${prefix}tab-slider-naver`]:
              {
                [`@apply ms-0`]: {},
              },
            [`.${prefix}tab-slider-item:nth-child(2).${prefix}active ~ .${prefix}tab-slider-naver`]:
              {
                [`@apply ms-[50%]`]: {},
              },
          },
          //Slots:three
          [`&.${prefix}tabs-three-slots`]: {
            [`.${prefix}tab-slider-naver, .${prefix}tab-slider-item`]: {
              [`@apply w-1/3`]: {},
            },
            [`.${prefix}tab-slider-item:first-child.${prefix}active ~ .${prefix}tab-slider-naver`]:
              {
                [`@apply ms-0`]: {},
              },
            [`.${prefix}tab-slider-item:nth-child(2).${prefix}active ~ .${prefix}tab-slider-naver`]:
              {
                [`@apply ms-[33.3%]`]: {},
              },
            [`.${prefix}tab-slider-item:nth-child(3).${prefix}active ~ .${prefix}tab-slider-naver`]:
              {
                [`@apply ms-[66.6%]`]: {},
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
