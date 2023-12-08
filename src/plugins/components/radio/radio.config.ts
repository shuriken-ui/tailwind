export const key = 'radio' as const

export const defaultConfig = {
  outer: {
    size: '5',
  },
  inner: {
    size: 'full',
    rounded: 'rounded-full',
    border: {
      light: 'muted-400',
      dark: 'muted-600',
    },
    background: {
      light: 'white',
      dark: 'muted-700',
    },
  },
  dot: {
    size: '1',
    rounded: 'rounded-full',
    background: {
      light: 'current',
      dark: 'current',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  input: {
    size: '5',
  },
  label: {
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
    },
  },
  error: {
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        light: 'danger-600',
        dark: 'danger-500',
      },
    },
  },
  color: {
    default: {
      light: 'muted-600',
      dark: 'muted-200',
    },
    light: {
      light: 'muted-100',
      dark: 'muted-100',
    },
    muted: {
      light: 'muted-400',
      dark: 'muted-400',
    },
    primary: {
      light: 'primary-500',
      dark: 'primary-500',
    },
    info: {
      light: 'info-500',
      dark: 'info-500',
    },
    success: {
      light: 'success-500',
      dark: 'success-500',
    },
    warning: {
      light: 'warning-500',
      dark: 'warning-500',
    },
    danger: {
      light: 'danger-500',
      dark: 'danger-500',
    },
  },
}

export type RadioConfig = typeof defaultConfig
export interface RadioPluginConfig {
  [key]: RadioConfig
}
