export const key = 'prose' as const

export const defaultConfig = {
  color: 'muted',
  dark: 'invert',
  space: '4',
  bgTable: 'white',
  bgTableDark: 'muted-800',
  borderTable: 'muted-200',
  borderTableDark: 'muted-700',
  rounded: {
    size: 'md',
    tdBorder: 'muted-200',
    tdBorderDark: 'muted-700',
  },
  curved: {
    size: 'xl',
    tdBorder: 'muted-200',
    tdBorderDark: 'muted-700',
  },
}

export type ProseConfig = typeof defaultConfig
export interface ProsePluginConfig {
  [key]: ProseConfig
}
