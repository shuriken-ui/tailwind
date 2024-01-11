export const key = 'progressCircle' as const

export const defaultConfig = {
  transition: {
    property: 'all',
    duration: '500',
  },
  color: {
    default: {
      color: {
        light: 'muted-200',
        dark: 'muted-700',
        stroke: 'current',
      },
    },
    contrast: {
      color: {
        light: 'muted-200',
        dark: 'muted-900',
        stroke: 'current',
      },
    },
  },
}

export type ProgressCircleConfig = typeof defaultConfig
export interface ProgressCirclePluginConfig {
  [key]: ProgressCircleConfig
}
