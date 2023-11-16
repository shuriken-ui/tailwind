export const key = 'radio' as const

export const defaultConfig = {
  outer: {
    size: '5',
  },
  inner: {
    border: 'muted-400',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: 'full',
    rounded: 'full',
  },
  dot: {
    size: '1',
    rounded: 'full',
    bg: 'current',
    duration: '300',
  },
  input: {
    size: '5',
  },
  labelText: {
    text: 'muted-400',
    textSize: 'sm',
    font: 'sans',
  },
  error: {
    text: 'danger-600',
    textSize: 'sm',
    font: 'sans',
  },
  default: {
    text: 'muted-600',
    textDark: 'muted-200',
  },
  light: 'white',
  muted: 'muted-400',
  primary: 'primary-500',
  info: 'info-500',
  success: 'success-500',
  warning: 'warning-500',
  danger: 'danger-500',
}

export type RadioConfig = typeof defaultConfig
export interface RadioPluginConfig {
  [key]: RadioConfig
}
