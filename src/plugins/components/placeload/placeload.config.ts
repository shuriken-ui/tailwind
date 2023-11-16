export const key = 'placeload' as const

export const defaultConfig = {}

export type PlaceloadConfig = typeof defaultConfig
export interface PlaceloadPluginConfig {
  [key]: PlaceloadConfig
}
