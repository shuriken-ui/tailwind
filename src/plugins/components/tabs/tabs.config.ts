export const key = 'tabs' as const

export const defaultConfig = {
  inner: {
    font: {
      family: 'sans',
    },
    margin: {
      bottom: '6',
    },
  },
  item: {
    font: {
      size: 'sm',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  tabs: {
    color: {
      default: {
        font: {
          active: {
            light: 'muted-800',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        border: {
          active: {
            light: 'muted-500',
            dark: 'muted-100',
          },
          inactive: {
            light: 'transparent',
            dark: 'transparent',
          },
        },
      },
      primary: {
        font: {
          active: {
            light: 'muted-800',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        border: {
          active: {
            light: 'primary-500',
            dark: 'primary-500',
          },
          inactive: {
            light: 'transparent',
            dark: 'transparent',
          },
        },
      },
      light: {
        font: {
          active: {
            light: 'muted-600',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        border: {
          active: {
            light: 'muted-600',
            dark: 'muted-100',
          },
          inactive: {
            light: 'transparent',
            dark: 'transparent',
          },
        },
      },
      dark: {
        font: {
          active: {
            light: 'muted-900',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        border: {
          active: {
            light: 'muted-900',
            dark: 'muted-100',
          },
          inactive: {
            light: 'transparent',
            dark: 'transparent',
          },
        },
      },
      black: {
        font: {
          active: {
            light: 'black',
            dark: 'white',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        border: {
          active: {
            light: 'black',
            dark: 'white',
          },
          inactive: {
            light: 'transparent',
            dark: 'transparent',
          },
        },
      },
    },
  },
  pill: {
    rounded: 'rounded-xl',
    font: {
      align: 'center',
      size: 'xs',
    },
    color: {
      default: {
        font: {
          active: {
            light: 'muted-800',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        background: {
          active: {
            light: 'white',
            dark: 'muted-800',
          },
        },
        border: {
          active: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
        shadow: {
          active: {
            size: 'lg',
            light: 'muted-500/30',
            dark: 'muted-800/50',
          },
        },
      },
      primary: {
        font: {
          active: {
            light: 'primary-invert',
            dark: 'primary-invert',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        background: {
          active: {
            light: 'primary-600',
            dark: 'primary-600',
          },
        },
        shadow: {
          active: {
            size: 'lg',
            light: 'primary-500/50',
            dark: 'primary-500/50',
          },
        },
      },
      light: {
        font: {
          active: {
            light: 'muted-700',
            dark: 'muted-100',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        background: {
          active: {
            light: 'muted-100',
            dark: 'muted-800',
          },
        },
        shadow: {
          active: {
            size: 'lg',
            light: 'muted-500/30',
            dark: 'muted-800/50',
          },
        },
      },
      dark: {
        font: {
          active: {
            light: 'muted-100',
            dark: 'muted-900',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        background: {
          active: {
            light: 'muted-900',
            dark: 'muted-100',
          },
        },
        shadow: {
          active: {
            size: 'lg',
            light: 'muted-500/30',
            dark: 'muted-800/50',
          },
        },
      },
      black: {
        font: {
          active: {
            light: 'white',
            dark: 'black',
          },
          inactive: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
        background: {
          active: {
            light: 'black',
            dark: 'white',
          },
        },
        shadow: {
          active: {
            size: 'lg',
            light: 'muted-500/30',
            dark: 'muted-800/50',
          },
        },
      },
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
}

export type TabsConfig = typeof defaultConfig
export interface TabsPluginConfig {
  [key]: TabsConfig
}
