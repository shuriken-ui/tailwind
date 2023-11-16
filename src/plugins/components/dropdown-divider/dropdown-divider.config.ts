export const key = 'drodownDivider' as const

export const defaultConfig = {
  space: '2',
  border: 'muted-200',
  borderDark: 'muted-600',
}

export type DropdownDividerConfig = typeof defaultConfig
export interface DropdownDividerPluginConfig {
  [key]: DropdownDividerConfig
}
