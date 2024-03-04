export const key = 'buttonAction' as const

export const defaultConfig = {
  rounded: {
    none: 'none',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    full: 'full',
  },
  text: {
    font: {
      family: 'sans',
      weight: 'normal',
      size: 'sm',
    },
  },
  color: {
    default: {
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-100',
        },
      },
      background: {
        base: {
          light: 'white',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-50',
          dark: 'muted-600',
        },
        active: {
          light: 'muted-100',
          dark: 'muted-700',
        },
      },
      border: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
    defaultContrast: {
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-100',
        },
      },
      background: {
        base: {
          light: 'white',
          dark: 'muted-950',
        },
        hover: {
          light: 'muted-50',
          dark: 'muted-900',
        },
        active: {
          light: 'muted-100',
          dark: 'muted-950',
        },
      },
      border: {
        light: 'muted-300',
        dark: 'muted-800',
      },
    },
    muted: {
      font: {
        color: {
          light: 'muted-500',
          dark: 'muted-100',
        },
      },
      background: {
        base: {
          light: 'muted-200',
          dark: 'muted-700/40',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-700/60',
        },
        active: {
          light: 'muted-200/50',
          dark: 'muted-800',
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700/40',
      },
    },
    mutedContrast: {
      font: {
        color: {
          light: 'muted-500',
          dark: 'muted-100',
        },
      },
      background: {
        base: {
          light: 'muted-200',
          dark: 'muted-950',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-900',
        },
        active: {
          light: 'muted-200/50',
          dark: 'muted-950',
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-800',
      },
    },
    light: {
      font: {
        color: {
          light: 'muted-500',
          dark: 'muted-100',
        },
      },
      background: {
        base: {
          light: 'muted-200',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-600',
        },
        active: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    dark: {
      font: {
        color: {
          light: 'muted-100',
          dark: 'muted-900',
        },
      },
      background: {
        base: {
          light: 'muted-900',
          dark: 'muted-100',
        },
        hover: {
          light: 'muted-800',
          dark: 'muted-50',
        },
        active: {
          light: 'muted-900',
          dark: 'muted-100',
        },
      },
      border: {
        light: 'muted-900',
        dark: 'muted-100',
      },
    },
    black: {
      font: {
        color: {
          light: 'white',
          dark: 'black',
        },
      },
      background: {
        base: {
          light: 'black',
          dark: 'white',
        },
        hover: {
          light: 'muted-800',
          dark: 'white/90',
        },
        active: {
          light: 'black',
          dark: 'white',
        },
      },
      border: {
        light: 'black',
        dark: 'white',
      },
    },
    primary: {
      font: {
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      background: {
        base: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        hover: {
          light: 'primary-400',
          dark: 'primary-400',
        },
        active: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
      border: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
    info: {
      font: {
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      background: {
        base: {
          light: 'info-500',
          dark: 'info-500',
        },
        hover: {
          light: 'info-400',
          dark: 'info-400',
        },
        active: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
      border: {
        light: 'info-500',
        dark: 'info-500',
      },
    },
    success: {
      font: {
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      background: {
        base: {
          light: 'success-500',
          dark: 'success-500',
        },
        hover: {
          light: 'success-400',
          dark: 'success-400',
        },
        active: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
      border: {
        light: 'success-500',
        dark: 'success-500',
      },
    },
    warning: {
      font: {
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      background: {
        base: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        hover: {
          light: 'warning-400',
          dark: 'warning-400',
        },
        active: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
      border: {
        light: 'warning-500',
        dark: 'warning-500',
      },
    },
    danger: {
      font: {
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      background: {
        base: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        hover: {
          light: 'danger-400',
          dark: 'danger-400',
        },
        active: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
      border: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
  },
  transition: {
    property: 'all',
    duration: '300',
  },
}

export type ButtonActionConfig = typeof defaultConfig
export interface ButtonActionPluginConfig {
  [key]: ButtonActionConfig
}
