export const key = 'themeToggle' as const

export const defaultConfig = {
  size: '9',
  rounded: 'full',
  duration: '300',
  ringDark: 'muted-900',
  inner: {
    size: '9',
    rounded: 'full',
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-300',
    borderDark: 'muted-700',
  },
  input: {
    size: 'full',
  },
  sun: {
    size: '5',
    duration: '300',
    text: 'yellow-400',
  },
  moon: {
    size: '5',
    duration: '300',
    text: 'yellow-400',
  },
  inverted: {
    ring: 'muted-500',
    ringDark: 'muted-400',
    inner: {
      bg: 'primary-700',
    },
  },
  notInverted: {
    ringDark: 'muted-900',
    inner: {
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
    },
  },
}

export type ThemeToggleConfig = typeof defaultConfig
export interface ThemeTogglePluginConfig {
  [key]: ThemeToggleConfig
}
