export const key = 'card' as const

const config = {
  width: 'full',
  color: {
    white: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    whiteContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-200',
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

export const defaultConfig = {
  size: 'full',
  duration: '300',
  cardWhite: {
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardWhiteContrast: {
    bg: 'white',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardMuted: {
    bg: 'muted-100',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardMutedContrast: {
    bg: 'muted-100',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardPrimary: {
    bg: 'primary-500/10',
    border: 'primary-500',
  },
  cardInfo: {
    bg: 'info-500/10',
    border: 'info-500',
  },
  cardSuccess: {
    bg: 'success-500/10',
    border: 'success-500',
  },
  cardWarning: {
    bg: 'warning-500/10',
    border: 'warning-500',
  },
  cardDanger: {
    bg: 'danger-500/10',
    border: 'danger-500',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
  cardSadow: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
  cardSadowHover: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
}

export type CardConfig = typeof defaultConfig
export interface CardPluginConfig {
  [key]: CardConfig
}
