export const key = 'messageText' as const

export const defaultConfig = {
  padding: '5',
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
  },
  header: {
    gap: '2',
  },
  dot: {
    size: '2',
    rounded: 'full',
  },
  close: {
    position: '2',
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
      dot: {
        background: {
          light: 'muted-300',
          dark: 'muted-700',
        },
      },
    },
    primary: {
      dot: {
        background: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    info: {
      dot: {
        background: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    success: {
      dot: {
        background: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
    },
    warning: {
      dot: {
        background: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
    },
    danger: {
      dot: {
        background: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
    },
    dark: {
      dot: {
        background: {
          light: 'muted-900',
          dark: 'muted-100',
        },
      },
    },
    black: {
      dot: {
        background: {
          light: 'black',
          dark: 'white',
        },
      },
    },
  },
}

export type MessageTextConfig = typeof defaultConfig
export interface MessageTextPluginConfig {
  [key]: MessageTextConfig
}
