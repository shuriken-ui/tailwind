export const key = 'buttonIcon' as const

export const config = {
  font: {
    size: 'sm',
    weight: 'normal',
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
        hover: {
          light: 'primary-500/20',
        },
      },
      text: {
        color: {
          light: 'primary-500',
        },
      },
      border: {
        light: 'primary-500',
      },
    },
    info: {
      background: {
        hover: {
          light: 'info-500/20',
        },
      },
      text: {
        color: {
          light: 'info-500',
        },
      },
      border: {
        light: 'info-500',
      },
    },
    success: {
      background: {
        hover: {
          light: 'success-500/20',
        },
      },
      text: {
        color: {
          light: 'success-500',
        },
      },
      border: {
        light: 'success-500',
      },
    },
    warning: {
      background: {
        hover: {
          light: 'warning-500/20',
        },
      },
      text: {
        color: {
          light: 'warning-500',
        },
      },
      border: {
        light: 'warning-500',
      },
    },
    danger: {
      background: {
        hover: {
          light: 'danger-500/20',
        },
      },
      text: {
        color: {
          light: 'danger-500',
        },
      },
      border: {
        light: 'danger-500',
      },
    },
  },
  transition: {
    property: 'all',
    duration: '300',
  },
}

export const defaultConfig = {
  text: 'sm',
  font: 'normal',
  duration: '300',
  buttonSmall: {
    size: '8',
    space: '1',
  },
  buttonMedium: {
    size: '10',
    space: '2',
  },
  buttonLarge: {
    size: '12',
    space: '3',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bg: 'white',
    bgDark: 'muted-700',
    bgHover: 'muted-50',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'white',
    border: 'muted-300',
    borderDark: 'muted-600',
  },
  muted: {
    bg: 'muted-200',
    bgDark: 'muted-700',
    bgHover: 'muted-100',
    bgHoverDark: 'muted-600',
    text: 'muted-500',
    textDark: 'white',
  },
  primary: {
    border: 'primary-500',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    border: 'info-500',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    border: 'success-500',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    border: 'warning-500',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    border: 'danger-500',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export type ButtonIconConfig = typeof defaultConfig
export interface ButtonIconPluginConfig {
  [key]: ButtonIconConfig
}
