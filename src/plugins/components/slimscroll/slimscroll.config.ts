export const key = 'slimscroll' as const

export const defaultConfig = {
  width: '[6px]',
  bg: 'black/5',
  bgDark: 'white/5',
  bgHover: 'black/20',
  bgHoverDark: 'white/20',
}

export type SlimscrollConfig = typeof defaultConfig
export interface SlimscrollPluginConfig {
  [key]: SlimscrollConfig
}
