export const key = 'buttonClose' as const

export const config = {
  size: '9',
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
      },
      font: {
        color: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
    },
  },
  icon: {
    size: '4',
  },
  transition: {
    property: 'colors',
    duration: '300',
  },
}

export const defaultConfig = {
  size: '9',
  duration: '300',
  buttonIcon: {
    size: '4',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bgHover: 'muted-100',
    bgHoverDark: 'muted-700',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  muted: {
    bg: 'muted-100',
    bgHover: 'muted-50',
    bgDark: 'muted-700',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  primary: {
    bg: 'primary-500/10',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    bg: 'info-500/10',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    bg: 'success-500/10',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    bg: 'warning-500/10',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    bg: 'danger-500/10',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export type ButtonCloseConfig = typeof defaultConfig
export interface ButtonClosePluginConfig {
  [key]: ButtonCloseConfig
}
