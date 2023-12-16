export const key = 'buttonIcon' as const

export const defaultConfig = {
  font: {
    family: 'sans',
    size: 'sm',
    weight: 'normal',
  },
  rounded: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  size: {
    sm: {
      size: '8',
      padding: '1',
    },
    md: {
      size: '10',
      padding: '2',
    },
    lg: {
      size: '12',
      padding: '3',
    },
  },
  color: {
    default: {
      background: {
        base: {
          light: 'white',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-50',
          dark: 'muted-600',
        },
      },
      text: {
        color: {
          light: 'muted-700',
          dark: 'muted-100',
        },
      },
      border: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
    muted: {
      background: {
        base: {
          light: 'muted-200',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-600',
        },
      },
      text: {
        color: {
          light: 'muted-500',
          dark: 'muted-100',
        },
      },
    },
    primary: {
      background: {
        base: {
          light: 'primary-500/20',
          dark: 'primary-500/20',
        },
        hover: {
          light: 'primary-500/10',
          dark: 'primary-500/10',
        },
      },
      text: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    info: {
      background: {
        base: {
          light: 'info-500/20',
          dark: 'info-500/20',
        },
        hover: {
          light: 'info-500/10',
          dark: 'info-500/10',
        },
      },
      text: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    success: {
      background: {
        base: {
          light: 'success-500/20',
          dark: 'success-500/20',
        },
        hover: {
          light: 'success-500/10',
          dark: 'success-500/10',
        },
      },
      text: {
        color: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
    },
    warning: {
      background: {
        base: {
          light: 'warning-500/20',
          dark: 'warning-500/20',
        },
        hover: {
          light: 'warning-500/10',
          dark: 'warning-500/10',
        },
      },
      text: {
        color: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
    },
    danger: {
      background: {
        base: {
          light: 'danger-500/20',
          dark: 'danger-500/20',
        },
        hover: {
          light: 'danger-500/10',
          dark: 'danger-500/10',
        },
      },
      text: {
        color: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
    },
  },
  transition: {
    property: 'all',
    duration: '300',
  },
}

export type ButtonIconConfig = typeof defaultConfig
export interface ButtonIconPluginConfig {
  [key]: ButtonIconConfig
}
