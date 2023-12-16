export const key = 'list' as const

export const defaultConfig = {
  ul: 'disc',
  ol: 'decimal',
  base: {
    font: {
      family: 'sans',
      color: {
        marker: {
          light: 'muted-500',
          dark: 'muted-400',
        },
        text: {
          light: 'muted-700',
          dark: 'muted-300',
        },
      },
    },
  },
  media: {
    marker: {
      color: {
        light: 'muted-500',
        dark: 'muted-400',
      },
    },
  },
}

export type ListPluginConfig = typeof defaultConfig
export interface ListPluginConfigPartial {
  [key]: ListPluginConfig
}
