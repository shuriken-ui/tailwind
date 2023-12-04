export const key = 'label' as const

export const defaultConfig = {
  font: 'sans',
  text: 'muted-400',
  textDark: 'muted-400/80',
}

export type LabelPluginConfig = typeof defaultConfig
export interface LabelPluginConfigPartial {
  [key]: LabelPluginConfig
}
