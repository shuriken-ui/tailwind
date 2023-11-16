export const key = 'switchBall' as const

export const defaulConfig = {
  handle: {
    border: 'muted-300',
    borderDark: 'muted-600',
    bg: 'white',
    bgDark: 'muted-700',
    size: '5',
    rounded: 'full',
  },
  track: {
    bg: 'muted-300',
    bgDark: 'muted-600',
    rounded: 'full',
    duration: '300',
  },
  icon: {
    size: '2.5',
    text: 'white',
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

export type SwitchBallConfig = typeof defaulConfig
export interface SwitchBallPluginConfig {
  [key]: SwitchBallConfig
}
