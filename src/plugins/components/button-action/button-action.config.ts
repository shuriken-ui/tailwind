export const key = 'buttonAction' as const

export const config = {
  rounded: {
    none: 'none',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
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

export const defaultConfig = {
  font: 'normal',
  text: 'sm',
  duration: '300',
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    text: 'muted-700',
    textDark: 'white',
    bg: 'white',
    bgDark: 'muted-700',
    bgHoverEnabled: 'muted-50',
    bgHoverEnabledDark: 'muted-600',
    bgActiveEnabled: 'muted-100',
    bgActiveEnabledDark: 'muted-700/70',
    border: 'muted-300',
    borderDark: 'muted-600',
  },
  muted: {
    text: 'muted-500',
    textDark: 'white',
    bg: 'muted-200',
    bgDark: 'muted-700/40',
    bgHoverEnabled: 'muted-100',
    bgHoverEnabledDark: 'muted-700/60',
    bgActiveEnabled: 'muted-200/50',
    bgActiveEnabledDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700/40',
    borderActiveEnabledDark: 'muted-800',
  },
  primary: {
    // text: 'primary-50',
    text: 'white',
    border: 'primary-500',
    borderDark: 'primary-500',
    bg: 'primary-500',
    bdDark: 'primary-500',
    bgHoverEnabled: 'primary-400',
    bgHoverEnabledDark: 'primary-400',
    bgFocusVisible: 'primary-500',
    bgFocusVisibleDark: 'primary-500',
    bgActiveEnabled: 'primary-500',
    bgActiveEnabledDark: 'primary-500',
    focusVisible: 'primary-400/70',
    focusVisibleDark: 'primary-400',
    focusWithin: 'primary-400/70',
    focusWithinDark: 'primary-400',
  },
  info: {
    // text: 'info-50',
    text: 'white',
    border: 'info-500',
    borderDark: 'info-500',
    bg: 'info-500',
    bdDark: 'info-500',
    bgHoverEnabled: 'info-400',
    bgHoverEnabledDark: 'info-400',
    bgFocusVisible: 'info-500',
    bgFocusVisibleDark: 'info-500',
    bgActiveEnabled: 'info-500',
    bgActiveEnabledDark: 'info-500',
    focusVisible: 'info-400/70',
    focusVisibleDark: 'info-400',
    focusWithin: 'info-400/70',
    focusWithinDark: 'info-400',
  },
  success: {
    // text: 'success-50',
    text: 'white',
    border: 'success-500',
    borderDark: 'success-500',
    bg: 'success-500',
    bdDark: 'success-500',
    bgHoverEnabled: 'success-400',
    bgHoverEnabledDark: 'success-400',
    bgFocusVisible: 'success-500',
    bgFocusVisibleDark: 'success-500',
    bgActiveEnabled: 'success-500',
    bgActiveEnabledDark: 'success-500',
    focusVisible: 'success-400/70',
    focusVisibleDark: 'success-400',
    focusWithin: 'success-400/70',
    focusWithinDark: 'success-400',
  },
  warning: {
    // text: 'warning-50',
    text: 'white',
    border: 'warning-500',
    borderDark: 'warning-500',
    bg: 'warning-500',
    bdDark: 'warning-500',
    bgHoverEnabled: 'warning-400',
    bgHoverEnabledDark: 'warning-400',
    bgFocusVisible: 'warning-500',
    bgFocusVisibleDark: 'warning-500',
    bgActiveEnabled: 'warning-500',
    bgActiveEnabledDark: 'warning-500',
    focusVisible: 'warning-400/70',
    focusVisibleDark: 'warning-400',
    focusWithin: 'warning-400/70',
    focusWithinDark: 'warning-400',
  },
  danger: {
    // text: 'danger-50',
    text: 'white',
    border: 'danger-500',
    borderDark: 'danger-500',
    bg: 'danger-500',
    bdDark: 'danger-500',
    bgHoverEnabled: 'danger-400',
    bgHoverEnabledDark: 'danger-400',
    bgFocusVisible: 'danger-500',
    bgFocusVisibleDark: 'danger-500',
    bgActiveEnabled: 'danger-500',
    bgActiveEnabledDark: 'danger-500',
    focusVisible: 'danger-400/70',
    focusVisibleDark: 'danger-400',
    focusWithin: 'danger-400/70',
    focusWithinDark: 'danger-400',
  },
}

export type ButtonActionConfig = typeof defaultConfig
export interface ButtonActionPluginConfig {
  [key]: ButtonActionConfig
}
