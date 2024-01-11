export const key = 'drodownDivider' as const

export const defaultConfig = {
  margin: {
    y: '2',
  },
  border: {
    light: 'muted-200',
    dark: 'muted-700',
  },
}

export type DropdownDividerConfig = typeof defaultConfig
export interface DropdownDividerPluginConfig {
  [key]: DropdownDividerConfig
}
