export const key = 'checkbox' as const

export const defaultConfig = {
  rounded: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  outer: {
    size: '5',
  },
  inner: {
    size: 'full',
    background: {
      light: 'white',
      dark: 'muted-700',
    },
    border: {
      light: 'muted-400',
      dark: 'muted-700',
    },
  },
  icon: {
    size: '2.5',
    indeterminate: {
      size: '2.5',
      transition: {
        property: 'all',
        duration: '300',
      },
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
      size: 'xs',
      color: {
        light: 'danger-600',
        dark: 'danger-600',
      },
    },
  },
  color: {
    default: {
      light: 'muted-600',
      dark: 'muted-200',
    },
    muted: {
      light: 'muted-400',
      dark: 'muted-400',
    },
    light: {
      light: 'white',
      dark: 'white',
    },
    dark: {
      light: 'muted-900',
      dark: 'muted-100',
    },
    black: {
      light: 'black',
      dark: 'white',
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

export type CheckboxConfig = typeof defaultConfig
export interface CheckboxPluginConfig {
  [key]: CheckboxConfig
}
