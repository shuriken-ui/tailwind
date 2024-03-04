export const key = 'toast' as const

export const defaultConfig = {
  font: {
    family: 'sans',
  },
  title: {
    font: {
      size: 'sm',
      weight: 'medium',
      color: {
        light: 'muted-800',
        dark: 'muted-100',
      },
    },
  },
  subtitle: {
    font: {
      size: 'xs',
      color: {
        light: 'muted-400',
        dark: 'muted-500',
      },
    },
  },
  icon: {
    outer: {
      size: '16',
    },
    inner: {
      size: '6',
    },
  },
  contrast: {
    lowContrast: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-300',
        dark: 'muted-700',
      },
    },
    highContrast: {
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
  color: {
    default: {
      icon: {
        outer: {
          background: {
            light: 'muted-100',
            dark: 'muted-700',
          },
        },
        inner: {
          color: {
            light: 'muted-500',
            dark: 'muted-500',
          },
        },
      },
    },
    primary: {
      border: {
        light: 'primary-500',
        dark: 'primary-500',
      },
      icon: {
        outer: {
          background: {
            light: 'primary-500/10',
            dark: 'primary-500/10',
          },
        },
        inner: {
          color: {
            light: 'primary-500',
            dark: 'primary-500',
          },
        },
      },
    },
    info: {
      border: {
        light: 'info-500',
        dark: 'info-500',
      },
      icon: {
        outer: {
          background: {
            light: 'info-500/10',
            dark: 'info-500/10',
          },
        },
        inner: {
          color: {
            light: 'info-500',
            dark: 'info-500',
          },
        },
      },
    },
    success: {
      border: {
        light: 'success-500',
        dark: 'success-500',
      },
      icon: {
        outer: {
          background: {
            light: 'success-500/10',
            dark: 'success-500/10',
          },
        },
        inner: {
          color: {
            light: 'success-500',
            dark: 'success-500',
          },
        },
      },
    },
    warning: {
      border: {
        light: 'warning-500',
        dark: 'warning-500',
      },
      icon: {
        outer: {
          background: {
            light: 'warning-500/10',
            dark: 'warning-500/10',
          },
        },
        inner: {
          color: {
            light: 'warning-500',
            dark: 'warning-500',
          },
        },
      },
    },
    danger: {
      border: {
        light: 'danger-500',
        dark: 'danger-500',
      },
      icon: {
        outer: {
          background: {
            light: 'danger-500/10',
            dark: 'danger-500/10',
          },
        },
        inner: {
          color: {
            light: 'danger-500',
            dark: 'danger-500',
          },
        },
      },
    },
    dark: {
      border: {
        light: 'muted-900',
        dark: 'muted-100',
      },
      icon: {
        outer: {
          background: {
            light: 'muted-900/10',
            dark: 'muted-100/10',
          },
        },
        inner: {
          color: {
            light: 'muted-900',
            dark: 'muted-100',
          },
        },
      },
    },
    black: {
      border: {
        light: 'black',
        dark: 'white',
      },
      icon: {
        outer: {
          background: {
            light: 'black/10',
            dark: 'white/10',
          },
        },
        inner: {
          color: {
            light: 'black',
            dark: 'white',
          },
        },
      },
    },
  },
  rounded: {
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  },
  shadow: {
    light: 'muted-300/30',
    dark: 'muted-800/30',
    size: 'xl',
  },
}

export type ToastConfig = typeof defaultConfig
export interface ToastPluginConfig {
  [key]: ToastConfig
}
