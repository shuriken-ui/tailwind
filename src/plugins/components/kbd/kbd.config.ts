export const key = 'kbd' as const

export const defaultConfig = {
  font: {
    family: 'mono',
    color: {
      light: 'muted-700',
      dark: 'muted-200',
    },
  },
  rounded: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  size: {
    xs: {
      font: {
        size: 'xs',
        lead: '4',
      },
      padding: {
        x: '1',
        y: '0.5',
      },
      size: '1.2em',
      icon: {
        outer: {
          size: '4',
        },
        inner: {
          size: '3.5',
        },
      },
    },
    sm: {
      font: {
        size: 'sm',
        lead: '5',
      },
      padding: {
        x: '1',
        y: '0.5',
      },
      size: '1.6em',
      icon: {
        outer: {
          size: '5',
        },
        inner: {
          size: '3.5',
        },
      },
    },
    md: {
      font: {
        size: 'base',
        lead: '6',
      },
      padding: {
        x: '2',
        y: '1',
      },
      size: '2.2em',
      icon: {
        outer: {
          size: '5',
        },
        inner: {
          size: '4',
        },
      },
    },
    lg: {
      font: {
        size: 'lg',
        lead: '7',
      },
      padding: {
        x: '4',
        y: '1',
      },
      size: '2.5em',
      icon: {
        outer: {
          size: '6',
        },
        inner: {
          size: '5',
        },
      },
    },
  },
  color: {
    default: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-500/20',
        dark: 'muted-300/20',
      },
    },
    muted: {
      background: {
        light: 'muted-50',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-600/20',
        dark: 'muted-300/20',
      },
    },
  },
}

export type KbdConfig = typeof defaultConfig
export interface KbdPluginConfig {
  [key]: KbdConfig
}
