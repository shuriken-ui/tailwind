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
    },
  },
  naver: {
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  color: {
    primary: {
      tabs: {
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
      naver: {
        background: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    default: {
      tabs: {
        color: {
          active: {
            light: 'muted-800',
            dark: 'white',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
      naver: {
        background: {
          light: 'white',
          dark: 'muted-700',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-600',
        },
      },
    },
    defaultContrast: {
      tabs: {
        color: {
          active: {
            light: 'muted-900',
            dark: 'white',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
      naver: {
        background: {
          light: 'white',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-800',
        },
      },
    },
    light: {
      tabs: {
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
      naver: {
        background: {
          light: 'muted-500',
          dark: 'muted-400',
        },
      },
    },
    dark: {
      tabs: {
        color: {
          active: {
            light: 'white',
            dark: 'muted-900',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
      naver: {
        background: {
          light: 'muted-900',
          dark: 'muted-100',
        },
      },
    },
    black: {
      tabs: {
        color: {
          active: {
            light: 'white',
            dark: 'black',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
      naver: {
        background: {
          light: 'black',
          dark: 'white',
        },
      },
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
