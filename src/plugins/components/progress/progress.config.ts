export const key = 'progress' as const

export const defaultConfig = {
  size: 'full',
  bar: {
    duration: '300',
  },
  default: {
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
  defaultContrast: {
    bg: 'muted-200',
    bgDark: 'muted-900',
  },
  progressXS: '1',
  progressSM: '2',
  progressMD: '3',
  progressLG: '3',
  progressXL: '5',
  rounded: {
    curved: 'lg',
    full: 'full',
  },
  primary: 'primary-500',
  info: 'info-500',
  success: 'success-500',
  warning: 'warning-500',
  danger: 'danger-500',
}

export type ProgressConfig = typeof defaultConfig
export interface ProgressPluginConfig {
  [key]: ProgressConfig
}
