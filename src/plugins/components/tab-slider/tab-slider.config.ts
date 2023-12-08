export const key = 'tabSlider' as const

export const defaultConfig = {
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  track: {
    width: 'full',
    font: {
      family: 'sans',
    },
    background: {
      light: 'muted-100',
      dark: 'muted-700',
    },
  },
  item: {
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        active: {
          light: 'white',
          dark: 'white',
        },
        inactive: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
  },
  naver: {
    background: {
      light: 'primary-500',
      dark: 'primary-500',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  size: {
    sm: {
      slots: {
        two: '[140px]',
        three: '[210px]',
      },
      track: {
        size: '8',
      },
    },
    md: {
      slots: {
        two: '[250px]',
        three: '[320px]',
      },
      track: {
        size: '10',
      },
    },
  },
}

export type TabSliderConfig = typeof defaultConfig
export interface TabSliderPluginConfig {
  [key]: TabSliderConfig
}
