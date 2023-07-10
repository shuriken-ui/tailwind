import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultTabSliderConfig = {
  track: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    size: 'full',
    font: 'sans',
  },
  item: {
    notActiveText: 'muted-400',
    activeText: 'white',
  },
  naver: {
    bg: 'primary-500',
    duration: '300',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
  tabsSM: {
    twoSlotsW: '[140px]',
    threeSlotsW: '[210px]',
    track: '8',
  },
  tabsMD: {
    twoSlotsW: '[250px]',
    threeSlotsW: '[320px]',
    track: '10',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.tabSlider'
      ) satisfies typeof defaultTabSliderConfig

      addComponents({
        [`.${prefix}-tab-slider`]: {
          [`@apply relative`]: {},

          [`.${prefix}-tab-slider-inner`]: {
            [`@apply mb-6 flex`]: {},
          },
          [`.${prefix}-tab-slider-track`]: {
            [`@apply relative bg-${config.track.bg} dark:bg-${config.track.bgDark} relative flex w-${config.track.size} items-center font-${config.track.font}`]:
              {},
          },
          [`.${prefix}-tab-slider-item`]: {
            [`@apply relative z-20 flex h-full flex-1 items-center justify-center`]:
              {},

            [`&:not(.${prefix}-active)`]: {
              [`@apply text-${config.item.notActiveText}`]: {},
            },
            [`&.${prefix}-active`]: {
              [`@apply text-${config.item.activeText}`]: {},
            },
          },
          [`.${prefix}-tab-slider-naver`]: {
            [`@apply bg-${config.naver.bg} absolute start-0 top-0 z-10 h-full transition-all duration-${config.naver.duration}`]:
              {},
          },
          [`.${prefix}-tab-content`]: {
            [`@apply relative block`]: {},
          },
          [`&.${prefix}-tabs-centered`]: {
            [`.${prefix}-tab-slider-inner`]: {
              [`@apply justify-center`]: {},
            },
          },
          [`&.${prefix}-tabs-end`]: {
            [`.${prefix}-tab-slider-inner`]: {
              [`@apply justify-end`]: {},
            },
          },
          [`&.${prefix}-tabs-rounded`]: {
            [`.${prefix}-tab-slider-track, .${prefix}-tab-slider-naver`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}-tabs-smooth`]: {
            [`.${prefix}-tab-slider-track, .${prefix}-tab-slider-naver`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}-tabs-curved`]: {
            [`.${prefix}-tab-slider-track, .${prefix}-tab-slider-naver`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}-tabs-full`]: {
            [`.${prefix}-tab-slider-track, .${prefix}-tab-slider-naver`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          },
          [`&.${prefix}-tabs-sm`]: {
            [`&.${prefix}-tabs-two-slots .${prefix}-tab-slider-inner`]: {
              [`@apply max-w-${config.tabsSM.twoSlotsW}`]: {},
            },
            [`&.${prefix}-tabs-three-slots .${prefix}-tab-slider-inner`]: {
              [`@apply max-w-${config.tabsSM.threeSlotsW}`]: {},
            },
            [`.${prefix}-tab-slider-track`]: {
              [`@apply h-${config.tabsSM.track}`]: {},
            },
          },
          [`&.${prefix}-tabs-md`]: {
            [`&.${prefix}-tabs-two-slots .${prefix}-tab-slider-inner`]: {
              [`@apply max-w-${config.tabsMD.twoSlotsW}`]: {},
            },
            [`&.${prefix}-tabs-three-slots .${prefix}-tab-slider-inner`]: {
              [`@apply max-w-${config.tabsMD.threeSlotsW}`]: {},
            },
            [`.${prefix}-tab-slider-track`]: {
              [`@apply h-${config.tabsMD.track}`]: {},
            },
          },
          [`&.${prefix}-tabs-two-slots`]: {
            [`.${prefix}-tab-slider-naver, .${prefix}-tab-slider-item`]: {
              [`@apply w-1/2`]: {},
            },
            [`.${prefix}-tab-slider-item:first-child.${prefix}-active ~ .${prefix}-tab-slider-naver`]:
              {
                [`@apply ms-0`]: {},
              },
            [`.${prefix}-tab-slider-item:nth-child(2).${prefix}-active ~ .${prefix}-tab-slider-naver`]:
              {
                [`@apply ms-[50%]`]: {},
              },
          },
          [`&.${prefix}-tabs-three-slots`]: {
            [`.${prefix}-tab-slider-naver, .${prefix}-tab-slider-item`]: {
              [`@apply w-1/3`]: {},
            },
            [`.${prefix}-tab-slider-item:first-child.${prefix}-active ~ .${prefix}-tab-slider-naver`]:
              {
                [`@apply ms-0`]: {},
              },
            [`.${prefix}-tab-slider-item:nth-child(2).${prefix}-active ~ .${prefix}-tab-slider-naver`]:
              {
                [`@apply ms-[33.3%]`]: {},
              },
            [`.${prefix}-tab-slider-item:nth-child(3).${prefix}-active ~ .${prefix}-tab-slider-naver`]:
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
          tabSlider: defaultTabSliderConfig,
        },
      },
    }
  }
)
