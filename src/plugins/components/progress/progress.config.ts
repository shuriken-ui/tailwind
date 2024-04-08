export const key = 'progress' as const

export const defaultConfig = {
  width: 'full',
  rounded: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  bar: {
    color: {
      primary: 'primary-500',
      info: 'info-500',
      success: 'success-500',
      warning: 'warning-500',
      danger: 'danger-500',
      light: 'bg-muted-500 dark:bg-muted-400',
      dark: 'bg-muted-900 dark:bg-muted-100',
      black: 'bg-black dark:bg-white',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  color: {
    default: {
      background: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    defaultContrast: {
      background: {
        light: 'muted-200',
        dark: 'muted-900',
      },
    },
  },
  size: {
    xs: '1',
    sm: '2',
    md: '3',
    lg: '3',
    xl: '5',
  },
}

export type ProgressConfig = typeof defaultConfig
export interface ProgressPluginConfig {
  [key]: ProgressConfig
}
