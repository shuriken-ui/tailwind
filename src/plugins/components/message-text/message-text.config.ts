export const key = 'messageText' as const

export const defaultConfig = {
  space: '6',
  head: {
    space: '2',
  },
  dot: {
    size: '3',
    rounded: 'full',
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
  close: {
    position: '2',
  },
  white: {
    bg: 'white',
    bgDark: 'muted-800',
  },
  whiteContrast: {
    bg: 'white',
    bgDark: 'muted-950',
  },
  default: {
    border: 'muted-300',
    borderDark: 'muted-700',
    dot: {
      bg: 'muted-200',
      bgDark: 'muted-700',
    },
  },
  contrast: {
    border: 'muted-300',
    borderDark: 'muted-800',
    dot: {
      bg: 'muted-200',
      bgDark: 'muted-800',
    },
  },
  primary: {
    border: 'primary-500',
    dot: {
      bg: 'primary-500',
    },
  },
  info: {
    border: 'info-500',
    dot: {
      bg: 'info-500',
    },
  },
  success: {
    border: 'success-500',
    dot: {
      bg: 'success-500',
    },
  },
  warning: {
    border: 'warning-500',
    dot: {
      bg: 'warning-500',
    },
  },
  danger: {
    border: 'danger-500',
    dot: {
      bg: 'danger-500',
    },
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
}

export type MessageTextConfig = typeof defaultConfig
export interface MessageTextPluginConfig {
  [key]: MessageTextConfig
}
