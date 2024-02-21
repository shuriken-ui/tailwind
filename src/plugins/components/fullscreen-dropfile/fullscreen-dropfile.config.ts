export const key = 'fullscreenDropfile' as const

export const defaultConfig = {
  height: '[230px]',
  width: '[500px]',
  rounded: 'rounded-md',
  label: {
    font: {
      size: 'base',
    },
  },
  icon: {
    size: '10',
    font: {
      size: '6xl',
    },
  },
  color: {
    primary: {
      light: 'primary-500',
      dark: 'primary-500',
    },
    dark: {
      light: 'muted-900',
      dark: 'muted-100',
    },
    black: {
      light: 'black',
      dark: 'white',
    },
  },
  border: {
    light: 'muted-200',
    dark: 'muted-700',
  },
}

export type FullscreenDropfileConfig = typeof defaultConfig
export interface FullscreenDropfilePluginConfig {
  [key]: FullscreenDropfileConfig
}
