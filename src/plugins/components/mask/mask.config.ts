export const key = 'mask' as const

export const defaultConfig = {}

export type MaskConfig = typeof defaultConfig
export interface MaskPluginConfig {
  [key]: MaskConfig
}
