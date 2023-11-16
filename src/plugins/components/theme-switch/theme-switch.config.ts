export const key = 'themeSwitch' as const

export const defaultConfig = {
  bg: 'muted-200',
  bgDark: 'muted-700',
  rounded: 'full',
  input: {
    size: 'full',
  },
  inner: {
    bg: 'white',
    bgDark: 'muted-900',
    border: 'muted-200',
    borderDark: 'muted-800',
    size: '10',
    rounded: 'full',
    duration: '300',
  },
  sun: {
    size: '6',
    text: 'yellow-400',
    duration: '300',
  },
  moon: {
    size: '6',
    text: 'yellow-400',
    duration: '300',
  },
}

export type ThemeSwitchConfig = typeof defaultConfig
export interface ThemeSwitchPluginConfig {
  [key]: ThemeSwitchConfig
}
