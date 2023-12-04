export const key = 'checkbox' as const

export const defaultConfig = {
  outer: {
    size: '5',
  },
  inner: {
    border: 'muted-400',
    borderDark: 'muted-700',
    bg: 'white',
    bgDark: 'muted-700',
    size: 'full',
  },
  check: {
    size: '2.5',
    duration: '300',
  },
  indeterminate: {
    size: '2.5',
    duration: '300',
  },
  input: {
    size: '5',
  },
  labelText: {
    text: 'muted-400',
    font: 'sans',
    textSize: 'sm',
  },
  error: {
    text: 'danger-600',
    font: 'sans',
    textSixe: 'xs',
  },
  rounded: {
    smooth: 'md',
    curved: 'lg',
    full: 'full',
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

export type CheckboxConfig = typeof defaultConfig
export interface CheckboxPluginConfig {
  [key]: CheckboxConfig
}
