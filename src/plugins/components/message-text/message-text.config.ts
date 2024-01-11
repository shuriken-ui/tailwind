export const key = 'messageText' as const

export const defaultConfig = {
  padding: '6',
  rounded: {
    default: 'rounded-md',
    smooth: 'rounded-lg',
    curved: 'rounded-xl',
  },
  header: {
    gap: '2',
  },
  dot: {
    size: '3',
    rounded: 'full',
    background: {
      light: 'muted-200',
      dark: 'muted-700',
    },
  },
  close: {
    position: '2',
  },
  color: {
    default: {
      border: {
        light: 'muted-300',
        dark: 'muted-700',
      },
      dot: {
        background: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
    },
    white: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
    },
    whiteContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
    },
    contrast: {
      border: {
        light: 'muted-300',
        dark: 'muted-800',
      },
      dot: {
        background: {
          light: 'muted-200',
          dark: 'muted-800',
        },
      },
    },
    primary: {
      border: {
        light: 'primary-500',
        dark: 'primary-500',
      },
      dot: {
        background: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    info: {
      border: {
        light: 'info-500',
        dark: 'info-500',
      },
      dot: {
        background: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    success: {
      border: {
        light: 'success-500',
        dark: 'success-500',
      },
      dot: {
        background: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
    },
    warning: {
      border: {
        light: 'warning-500',
        dark: 'warning-500',
      },
      dot: {
        background: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
    },
    danger: {
      border: {
        light: 'danger-500',
        dark: 'danger-500',
      },
      dot: {
        background: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
    },
  },
}

export type MessageTextConfig = typeof defaultConfig
export interface MessageTextPluginConfig {
  [key]: MessageTextConfig
}
