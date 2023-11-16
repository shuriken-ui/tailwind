export const key = 'tabs' as const

export const defaultConfig = {
  inner: {
    font: 'sans',
    space: '6',
  },
  item: {
    text: 'sm',
    duration: '300',
    notActive: {
      text: 'muted-400',
    },
    active: {
      border: 'primary-500',
      text: 'muted-800',
      textDark: 'muted-100',
    },
  },
  pillItem: {
    rounded: 'xl',
    textPosition: 'center',
    text: 'xs',
    duration: '300',
    notActive: {
      text: 'muted-400',
    },
    active: {
      bg: 'primary-500',
      text: 'white',
      shadow: 'primary-500/50',
      shadowSize: 'lg',
    },
  },
}

export type TabsConfig = typeof defaultConfig
export interface TabsPluginConfig {
  [key]: TabsConfig
}
