export const key = 'dropdown' as const

export const defaultConfig = {
  textPosition: 'start',
  contextButton: {
    ringOffsetDark: 'muted-900',
    size: '9',
    rounded: 'full',
    duration: '300',
    ringGroupHover: 'offset-4',
    inner: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
      size: '9',
      rounded: 'full',
    },
    icon: {
      text: 'muted-400',
      size: '5',
      duration: '300',
    },
  },
  textButton: {
    text: 'muted-400',
    inner: {
      font: 'sans',
    },
  },
  chevron: {
    size: '4',
    duration: '300',
  },
  dropdownMenu: {
    shadow: 'lg',
    shadowColor: 'muted-500/10',
    shadowColorDark: 'muted-800/10',
    headerTitle: {
      font: 'sans',
      fontSize: 'medium',
      text: 'muted-500',
      textDark: 'muted-200',
      textSize: 'xs',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
    },
    white: {
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    whiteContrast: {
      bg: 'white',
      bgDark: 'muted-950',
      border: 'muted-200',
      borderDark: 'muted-800',
    },
    muted: {
      bg: 'muted-100',
      bgDark: 'muted-800',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950',
      border: 'muted-200',
      borderDark: 'muted-800',
    },
    primary: {
      bg: 'primary-500/10',
      border: 'primary-500',
    },
    info: {
      bg: 'info-500/10',
      border: 'info-500',
    },
    success: {
      bg: 'success-500/10',
      border: 'success-500',
    },
    warning: {
      bg: 'warning-500/10',
      border: 'warning-500',
    },
    danger: {
      bg: 'danger-500/10',
      border: 'danger-500',
    },
  },
  hover: {
    ring: 'muted-200',
    ringDark: 'muted-700/70',
  },
}

export type DropdownConfig = typeof defaultConfig
export interface DropdownPluginConfig {
  [key]: DropdownConfig
}
