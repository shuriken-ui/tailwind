export const key = 'prose' as const

export const defaultConfig = {
  color: {
    light: 'muted',
    dark: 'invert',
  },
  padding: '4',
  table: {
    background: {
      light: 'white',
      dark: 'muted-800',
    },
    border: {
      light: 'muted-200',
      dark: 'muted-700',
    },
  },
  rounded: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
}

export type ProseConfig = typeof defaultConfig
export interface ProsePluginConfig {
  [key]: ProseConfig
}
