export const key = 'mark' as const

export const defaultConfig = {
  bg: 'primary-100',
  bgDark: 'primary-800',
  text: 'primary-800',
  textDark: 'primary-200',
}

export type MarkConfig = typeof defaultConfig
export interface MarkPluginConfig {
  [key]: MarkConfig
}
