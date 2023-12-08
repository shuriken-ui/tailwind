export const key = 'tooltip' as const

export const defaultConfig = {
  font: {
    family: 'sans',
    color: {
      light: '[#fff]',
      dark: '[#fff]',
    },
  },
  background: {
    light: '[#1e293b]',
    dark: '[#ec4899]',
  },
  size: {
    width: {
      min: '3rem',
      max: '21rem',
    },
  },
}

export type TooltipConfig = typeof defaultConfig
export interface TooltipPluginConfig {
  [key]: TooltipConfig
}
