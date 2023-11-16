export const key = 'link' as const

export const defaultConfig = {
  font: 'sans',
  textHover: 'primary-500',
  textHoverDark: 'primary-400',
  textFocus: 'primary-500',
  textFocusDark: 'primary-400',
}

export type LinkPluginConfig = typeof defaultConfig
export interface LinkPluginConfigPartial {
  [key]: LinkPluginConfig
}
