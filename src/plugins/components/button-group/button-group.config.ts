export const key = 'buttonAction' as const

export const defaultConfig = {}

export type ButtonGroupConfig = typeof defaultConfig
export interface ButtonGroupPluginConfig {
  [key]: ButtonGroupConfig
}
