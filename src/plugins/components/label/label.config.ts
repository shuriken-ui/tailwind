export const key = 'label' as const

export const defaultConfig = {
  font: {
    family: 'sans',
    color: {
      light: 'muted-400',
      dark: 'muted-400/80',
    },
  },
}

export type LabelPluginConfig = typeof defaultConfig
export interface LabelPluginConfigPartial {
  [key]: LabelPluginConfig
}
