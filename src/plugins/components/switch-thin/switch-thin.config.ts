export const key = 'switchThin' as const

export const defaultConfig = {
  handle: {
    border: 'muted-300',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: '6',
    rounded: 'full',
  },
  track: {
    bg: 'muted-300',
    bgDark: 'muted-600',
    rounded: 'full',
    duration: '300',
  },
  singleLabel: {
    text: 'muted-400',
    font: 'sans',
    textSize: 'sm',
  },
  dualLabel: {
    label: {
      font: 'sans',
      fontWeight: 'medium',
      text: 'muted-800',
      textDark: 'white',
      textSize: 'sm',
    },
    sublabel: {
      text: 'muted-400',
      textSize: 'xs',
      font: 'sans',
    },
  },
  input: {
    size: 'full',
  },
  primary: 'primary-400',
  info: 'info-400',
  success: 'success-400',
  warning: 'warning-400',
  danger: 'danger-400',
}

export type SwitchThinConfig = typeof defaultConfig
export interface SwitchThinPluginConfig {
  [key]: SwitchThinConfig
}
