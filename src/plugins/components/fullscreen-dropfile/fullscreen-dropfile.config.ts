export const key = 'fullscreenDropfile' as const

export const defaultConfig = {
  border: 'primary-500',
  height: '[230px]',
  width: '[500px]',
  icon: {
    text: 'primary-500',
    textSize: '6xl',
  },
  labelTextSize: 'base',
}

export type FullscreenDropfileConfig = typeof defaultConfig
export interface FullscreenDropfilePluginConfig {
  [key]: FullscreenDropfileConfig
}
