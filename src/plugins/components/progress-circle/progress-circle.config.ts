export const key = 'progressCircle' as const

export const defaultConfig = {
  circleDuration: '500',
  default: {
    text: 'muted-200',
    textDark: 'muted-700',
    stroke: 'current',
  },
  contrast: {
    text: 'muted-200',
    textDark: 'muted-900',
    stroke: 'current',
  },
}

export type ProgressCircleConfig = typeof defaultConfig
export interface ProgressCirclePluginConfig {
  [key]: ProgressCircleConfig
}
