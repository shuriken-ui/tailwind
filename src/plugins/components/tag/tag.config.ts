export const key = 'tag' as const

export const defaultConfig = {
  space: '3',
  font: 'sans',
  duration: '300',
  tagSM: {
    space: '1',
    text: '[0.65rem]',
  },
  tagMD: {
    space: '1.5',
    text: 'xs',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  solid: {
    default: {
      text: 'muted-600',
      textDark: 'muted-300',
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      shadow: 'xl',
      shadowHover: 'xl',
    },
    muted: {
      text: 'muted-500',
      textDark: 'muted-200',
      bg: 'muted-100',
      bgDark: 'muted-800',
      shadow: 'xl',
      shadowHover: 'xl',
    },
    primary: {
      text: 'white',
      bg: 'primary-500',
      bgDark: 'primary-500',
      shadow: {
        size: 'xl',
        color: 'primary-500/30',
        colorDark: 'primary-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'primary-500/30',
        colorDark: 'primary-500/20',
      },
    },
    info: {
      text: 'white',
      bg: 'info-500',
      bgDark: 'info-500',
      shadow: {
        size: 'xl',
        color: 'info-500/30',
        colorDark: 'info-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'info-500/30',
        colorDark: 'info-500/20',
      },
    },
    success: {
      text: 'white',
      bg: 'success-500',
      bgDark: 'success-500',
      shadow: {
        size: 'xl',
        color: 'success-500/30',
        colorDark: 'success-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'success-500/30',
        colorDark: 'success-500/20',
      },
    },
    warning: {
      text: 'white',
      bg: 'warning-500',
      bgDark: 'warning-500',
      shadow: {
        size: 'xl',
        color: 'warning-500/30',
        colorDark: 'warning-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'warning-500/30',
        colorDark: 'warning-500/20',
      },
    },
    danger: {
      text: 'white',
      bg: 'danger-500',
      bgDark: 'danger-500',
      shadow: {
        size: 'xl',
        color: 'danger-500/30',
        colorDark: 'danger-500/20',
      },
      shadowHover: {
        size: 'xl',
        color: 'danger-500/30',
        colorDark: 'danger-500/20',
      },
    },
  },
  pastel: {
    primary: {
      bg: 'primary-500/20',
      text: 'primary-500',
      bgDark: 'primary-500/10',
    },
    info: {
      bg: 'info-500/20',
      text: 'info-500',
      bgDark: 'info-500/10',
    },
    success: {
      bg: 'success-500/20',
      text: 'success-500',
      bgDark: 'success-500/10',
    },
    warning: {
      bg: 'warning-500/20',
      text: 'warning-500',
      bgDark: 'warning-500/10',
    },
    danger: {
      bg: 'danger-500/20',
      text: 'danger-500',
      bgDark: 'danger-500/10',
    },
  },
  outline: {
    primary: {
      border: 'primary-500',
      text: 'primary-500',
    },
    info: {
      border: 'info-500',
      text: 'info-500',
    },
    success: {
      border: 'success-500',
      text: 'success-500',
    },
    warning: {
      border: 'warning-500',
      text: 'warning-500',
    },
    danger: {
      border: 'danger-500',
      text: 'danger-500',
    },
  },
}

export type TagConfig = typeof defaultConfig
export interface TagPluginConfig {
  [key]: TagConfig
}
