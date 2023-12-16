export const key = 'themeToggle' as const

export const defaultConfig = {
  outer: {
    size: '9',
    rounded: 'full',
  },
  ring: {
    light: 'muted-200',
    dark: 'muted-900',
  },
  inner: {
    size: '9',
    rounded: 'full',
    background: {
      light: 'white',
      dark: 'muted-800',
    },
    border: {
      light: 'muted-300',
      dark: 'muted-700',
    },
  },
  input: {
    size: 'full',
  },
  icon: {
    sun: {
      size: '5',
      color: 'yellow-400',
      duration: '300',
    },
    moon: {
      size: '5',
      color: 'yellow-400',
      duration: '300',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  inverted: {
    enabled: {
      ring: {
        light: 'muted-500',
        dark: 'muted-400',
      },
      inner: {
        background: {
          light: 'primary-700',
          dark: 'primary-700',
        },
      },
    },
    disabled: {
      ring: {
        light: 'muted-500',
        dark: 'muted-900',
      },
      inner: {
        background: {
          light: 'white',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-700',
        },
      },
    },
  },
  transition: {
    property: 'all',
    duration: '300',
  },
}

export type ThemeToggleConfig = typeof defaultConfig
export interface ThemeTogglePluginConfig {
  [key]: ThemeToggleConfig
}
