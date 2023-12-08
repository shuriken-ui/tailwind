export const key = 'mark' as const

export const defaultConfig = {
  background: {
    light: 'primary-100',
    dark: 'primary-800',
  },
  color: {
    light: 'primary-800',
    dark: 'primary-200',
  },
}

export type MarkConfig = typeof defaultConfig
export interface MarkPluginConfig {
  [key]: MarkConfig
}
