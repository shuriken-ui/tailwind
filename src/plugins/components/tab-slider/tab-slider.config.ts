export const key = 'tabSlider' as const

export const defaultConfig = {
  track: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    size: 'full',
    font: 'sans',
  },
  item: {
    notActiveText: 'muted-400',
    activeText: 'white',
    fontSize: 'sm',
    fontFamily: 'sans',
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

export type TabSliderConfig = typeof defaultConfig
export interface TabSliderPluginConfig {
  [key]: TabSliderConfig
}
