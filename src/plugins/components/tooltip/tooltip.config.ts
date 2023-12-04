export const key = 'tooltip' as const

export const defaultConfig = {
  font: 'sans',
  bg: '[#1e293b]',
  bgDark: '[#ec4899]',
  text: '[#fff]',
  textDark: '[#fff]',
  minWidth: '3rem',
  maxWidth: '21rem',
}

export type TooltipConfig = typeof defaultConfig
export interface TooltipPluginConfig {
  [key]: TooltipConfig
}
