export const key = 'snack' as const

export const defaultConfig = {
  rounded: 'rounded-full',
  icon: {
    rounded: 'rounded-full',
    border: {
      light: 'muted-200',
      dark: 'muted-700',
    },
    background: {
      light: 'white',
      dark: 'muted-950',
    },
  },
  image: {
    rounded: 'rounded-full',
    outer: {
      rounded: 'rounded-full',
    },
    inner: {
      rounded: 'rounded-full',
    },
  },
  font: {
    family: 'sans',
    color: {
      light: 'muted-600',
      dark: 'muted-300',
    },
  },
  size: {
    xs: {
      size: '6',
      font: {
        size: 'xs',
      },
      icon: {
        outer: {
          size: '6',
        },
        inner: {
          size: '3',
        },
      },
      image: {
        outer: {
          size: '6',
        },
        inner: {
          size: '6',
        },
      },
    },
    sm: {
      size: '8',
      font: {
        size: 'sm',
      },
      icon: {
        outer: {
          size: '8',
        },
        inner: {
          size: '4',
        },
      },
      image: {
        outer: {
          size: '8',
        },
        inner: {
          size: '8',
        },
      },
    },
    md: {
      size: '10',
      font: {
        size: 'sm',
      },
      icon: {
        outer: {
          size: '10',
        },
        inner: {
          size: '5',
        },
      },
      image: {
        outer: {
          size: '10',
        },
        inner: {
          size: '10',
        },
      },
    },
  },
  color: {
    default: {
      background: {
        light: 'white',
        dark: 'muted-700',
      },
      border: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
    defaultContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-300',
        dark: 'muted-800',
      },
    },
    muted: {
      background: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    mutedContrast: {
      background: {
        light: 'muted-200',
        dark: 'muted-950',
      },
    },
  },
}

export type SnackConfig = typeof defaultConfig
export interface SnackConfigPluginConfig {
  [key]: SnackConfig
}
