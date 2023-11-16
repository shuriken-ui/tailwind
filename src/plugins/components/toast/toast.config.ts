export const key = 'toast' as const

export const defaultConfig = {
  font: 'sans',
  title: {
    heading: 'sm',
    weight: 'medium',
    text: 'muted-800',
    textDark: 'muted-100',
  },
  subtitle: {
    text: 'xs',
    textColor: 'muted-400',
  },
  iconSize: '6',
  iconBlockSize: '16',
  default: {
    border: 'muted-300',
    borderDark: 'muted-700',
  },
  contrast: {
    border: 'muted-300',
    borderDark: 'muted-800',
  },
  white: {
    bg: 'white',
    bgDark: 'muted-800',
    icon: {
      text: 'muted-500',
    },
    iconBlock: {
      bg: 'muted-100',
      bgDark: 'muted-700',
    },
  },
  whiteContrast: {
    bg: 'white',
    bgDark: 'muted-950',
    icon: {
      text: 'muted-500',
    },
    iconBlock: {
      bg: 'muted-100',
      bgDark: 'muted-800',
    },
  },
  primary: {
    border: 'primary-500',
    icon: {
      text: 'primary-500',
    },
    iconBlock: {
      bg: 'primary-500/10',
    },
  },
  info: {
    border: 'info-500',
    icon: {
      text: 'info-500',
    },
    iconBlock: {
      bg: 'info-500/10',
    },
  },
  success: {
    border: 'success-500',
    icon: {
      text: 'success-500',
    },
    iconBlock: {
      bg: 'success-500/10',
    },
  },
  warning: {
    border: 'warning-500',
    icon: {
      text: 'warning-500',
    },
    iconBlock: {
      bg: 'warning-500/10',
    },
  },
  danger: {
    border: 'danger-500',
    icon: {
      text: 'danger-500',
    },
    iconBlock: {
      bg: 'danger-500/10',
    },
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
  borderless: {
    shadow: 'muted-300/30',
    shadowDark: 'muted-800/30',
    shadowSize: 'xl',
  },
}

export type ToastConfig = typeof defaultConfig
export interface ToastPluginConfig {
  [key]: ToastConfig
}
