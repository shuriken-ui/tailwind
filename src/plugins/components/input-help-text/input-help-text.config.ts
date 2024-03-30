export const key = 'inputHelpText' as const

export const defaultConfig = {
  font: {
    size: '[0.65rem]',
    weight: 'medium',
  },
}

export type InputHelpTextConfig = typeof defaultConfig
export interface InputHelpTextPluginConfig {
  [key]: InputHelpTextConfig
}
