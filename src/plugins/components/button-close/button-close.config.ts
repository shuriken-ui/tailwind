export const key = 'buttonClose' as const

export const defaultConfig = {
  size: {
    xs: {
      outer: '6',
      inner: '3',
    },
    sm: {
      outer: '8',
      inner: '4',
    },
    md: {
      outer: '10',
      inner: '4',
    },
    lg: {
      outer: '12',
      inner: '5',
    },
    xl: {
      outer: '14',
      inner: '6',
    },
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  color: {
    default: {
      background: {
        base: {
          light: 'transparent',
          dark: 'transparent',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-700',
        },
        focus: {
          light: 'muted-100',
          dark: 'muted-700',
        },
        active: {
          light: 'transparent',
          dark: 'transparent',
        },
      },
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-50',
        },
      },
    },
    defaultContrast: {
      background: {
        base: {
          light: 'transparent',
          dark: 'transparent',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-900',
        },
        focus: {
          light: 'muted-100',
          dark: 'muted-900',
        },
        active: {
          light: 'transparent',
          dark: 'transparent',
        },
      },
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-50',
        },
      },
    },
    muted: {
      background: {
        base: {
          light: 'muted-100',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-50',
          dark: 'muted-600',
        },
        focus: {
          light: 'muted-50',
          dark: 'muted-600',
        },
        active: {
          light: 'muted-100',
          dark: 'muted-700',
        },
      },
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-50',
        },
      },
    },
    mutedContrast: {
      background: {
        base: {
          light: 'muted-100',
          dark: 'muted-950',
        },
        hover: {
          light: 'muted-50',
          dark: 'muted-900',
        },
        focus: {
          light: 'muted-50',
          dark: 'muted-900',
        },
        active: {
          light: 'muted-100',
          dark: 'muted-950',
        },
      },
      font: {
        color: {
          light: 'muted-700',
          dark: 'muted-50',
        },
      },
    },
    primary: {
      background: {
        base: {
          light: 'primary-500/10',
          dark: 'primary-500/10',
        },
        hover: {
          light: 'primary-500/20',
          dark: 'primary-500/20',
        },
        focus: {
          light: 'primary-500/20',
          dark: 'primary-500/20',
        },
        active: {
          light: 'primary-500/10',
          dark: 'primary-500/10',
        },
      },
      font: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    info: {
      background: {
        base: {
          light: 'info-500/10',
          dark: 'info-500/10',
        },
        hover: {
          light: 'info-500/20',
          dark: 'info-500/20',
        },
        focus: {
          light: 'info-500/20',
          dark: 'info-500/20',
        },
        active: {
          light: 'info-500/10',
          dark: 'info-500/10',
        },
      },
      font: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    success: {
      background: {
        base: {
          light: 'success-500/10',
          dark: 'success-500/10',
        },
        hover: {
          light: 'success-500/20',
          dark: 'success-500/20',
        },
        focus: {
          light: 'success-500/20',
          dark: 'success-500/20',
        },
        active: {
          light: 'success-500/10',
          dark: 'success-500/10',
        },
      },
      font: {
        color: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
    },
    warning: {
      background: {
        base: {
          light: 'warning-500/10',
          dark: 'warning-500/10',
        },
        hover: {
          light: 'warning-500/20',
          dark: 'warning-500/20',
        },
        focus: {
          light: 'warning-500/20',
          dark: 'warning-500/20',
        },
        active: {
          light: 'warning-500/10',
          dark: 'warning-500/10',
        },
      },
      font: {
        color: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
    },
    danger: {
      background: {
        base: {
          light: 'danger-500/10',
          dark: 'danger-500/10',
        },
        hover: {
          light: 'danger-500/20',
          dark: 'danger-500/20',
        },
        focus: {
          light: 'danger-500/20',
          dark: 'danger-500/20',
        },
        active: {
          light: 'danger-500/10',
          dark: 'danger-500/10',
        },
      },
      font: {
        color: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
    },
  },
  transition: {
    property: 'colors',
    duration: '300',
  },
}

export type ButtonCloseConfig = typeof defaultConfig
export interface ButtonClosePluginConfig {
  [key]: ButtonCloseConfig
}
