export const key = 'buttonIcon' as const

export const defaultConfig = {
  text: 'sm',
  font: 'normal',
  duration: '300',
  buttonSmall: {
    size: '8',
    space: '1',
  },
  buttonMedium: {
    size: '10',
    space: '2',
  },
  buttonLarge: {
    size: '12',
    space: '3',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bg: 'white',
    bgDark: 'muted-700',
    bgHover: 'muted-50',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'white',
    border: 'muted-300',
    borderDark: 'muted-600',
  },
  muted: {
    bg: 'muted-200',
    bgDark: 'muted-700',
    bgHover: 'muted-100',
    bgHoverDark: 'muted-600',
    text: 'muted-500',
    textDark: 'white',
  },
  primary: {
    border: 'primary-500',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    border: 'info-500',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    border: 'success-500',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    border: 'warning-500',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    border: 'danger-500',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export type ButtonIconConfig = typeof defaultConfig
export interface ButtonIconPluginConfig {
  [key]: ButtonIconConfig
}
