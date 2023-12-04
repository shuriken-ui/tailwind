export const key = 'list' as const

export const defaultConfig = {
  ul: 'disc',
  ol: 'decimal',
  base: {
    textMarker: 'muted-500',
    textMarkerDark: 'muted-400',
    text: 'slate-700',
    textDark: 'slate-300',
    font: 'sans',
  },
  media: {
    textMarker: 'slate-500',
    textMarkerDark: 'slate-400',
  },
}

export type ListPluginConfig = typeof defaultConfig
export interface ListPluginConfigPartial {
  [key]: ListPluginConfig
}
