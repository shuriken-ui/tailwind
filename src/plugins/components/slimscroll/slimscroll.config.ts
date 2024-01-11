export const key = 'slimscroll' as const

export const defaultConfig = {
  width: '[6px]',
  background: {
    base: {
      light: 'black/5',
      dark: 'white/5',
    },
    hover: {
      light: 'black/20',
      dark: 'white/20',
    },
  },
}

export type SlimscrollConfig = typeof defaultConfig
export interface SlimscrollPluginConfig {
  [key]: SlimscrollConfig
}
