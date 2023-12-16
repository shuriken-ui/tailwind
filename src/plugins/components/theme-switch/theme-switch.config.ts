export const key = 'themeSwitch' as const

export const defaultConfig = {
  outer: {
    rounded: 'full',
    backgound: {
      light: 'muted-200',
      dark: 'muted-700',
    },
  },
  inner: {
    size: '10',
    rounded: 'full',
    background: {
      light: 'white',
      dark: 'muted-900',
    },
    border: {
      light: 'muted-200',
      dark: 'muted-800',
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  input: {
    size: 'full',
  },
  icon: {
    sun: {
      size: '6',
      color: 'yellow-400',
      duration: '300',
    },
    moon: {
      size: '6',
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
}

export type ThemeSwitchConfig = typeof defaultConfig
export interface ThemeSwitchPluginConfig {
  [key]: ThemeSwitchConfig
}
