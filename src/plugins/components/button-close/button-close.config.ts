export const key = 'buttonClose' as const

export const defaultConfig = {
  size: '9',
  duration: '300',
  buttonIcon: {
    size: '4',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
  },
  default: {
    bgHover: 'muted-100',
    bgHoverDark: 'muted-700',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  muted: {
    bg: 'muted-100',
    bgHover: 'muted-50',
    bgDark: 'muted-700',
    bgHoverDark: 'muted-600',
    text: 'muted-700',
    textDark: 'muted-50',
  },
  primary: {
    bg: 'primary-500/10',
    bgHover: 'primary-500/20',
    text: 'primary-500',
  },
  info: {
    bg: 'info-500/10',
    bgHover: 'info-500/20',
    text: 'info-500',
  },
  success: {
    bg: 'success-500/10',
    bgHover: 'success-500/20',
    text: 'success-500',
  },
  warning: {
    bg: 'warning-500/10',
    bgHover: 'warning-500/20',
    text: 'warning-500',
  },
  danger: {
    bg: 'danger-500/10',
    bgHover: 'danger-500/20',
    text: 'danger-500',
  },
}

export type ButtonCloseConfig = typeof defaultConfig
export interface ButtonClosePluginConfig {
  [key]: ButtonCloseConfig
}
