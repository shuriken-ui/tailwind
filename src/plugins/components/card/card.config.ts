export const key = 'card' as const

export const defaultConfig = {
  width: 'full',
  rounded: {
    none: 'none',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  },
  shadow: {
    light: 'muted-300/30',
    dark: 'muted-800/30',
    size: 'xl',
  },
  color: {
    default: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    defaultContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-300',
        dark: 'muted-800',
      },
    },
    muted: {
      background: {
        light: 'muted-100',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    mutedContrast: {
      background: {
        light: 'muted-100',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-800',
      },
    },
    dark: {
      background: {
        light: 'muted-900',
        dark: 'muted-100',
      },
      border: {
        light: 'muted-800',
        dark: 'muted-50',
      },
    },
    black: {
      background: {
        light: 'black',
        dark: 'white',
      },
      border: {
        light: 'black',
        dark: 'white',
      },
    },
    primary: {
      background: {
        light: 'primary-500/10',
        dark: 'primary-500/10',
      },
      border: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
    info: {
      background: {
        light: 'info-500/10',
        dark: 'info-500/10',
      },
      border: {
        light: 'info-500',
        dark: 'info-500',
      },
    },
    success: {
      background: {
        light: 'success-500/10',
        dark: 'success-500/10',
      },
      border: {
        light: 'success-500',
        dark: 'success-500',
      },
    },
    warning: {
      background: {
        light: 'warning-500/10',
        dark: 'warning-500/10',
      },
      border: {
        light: 'warning-500',
        dark: 'warning-500',
      },
    },
    danger: {
      background: {
        light: 'danger-500/10',
        dark: 'danger-500/10',
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

export type CardConfig = typeof defaultConfig
export interface CardPluginConfig {
  [key]: CardConfig
}
