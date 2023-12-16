export const key = 'tabs' as const

export const defaultConfig = {
  inner: {
    font: {
      family: 'sans',
    },
    margin: {
      bottom: '6',
    },
  },
  item: {
    font: {
      size: 'sm',
      color: {
        active: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        inactive: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
    border: {
      active: {
        light: 'primary-500',
        dark: 'primary-500',
      },
      inactive: {
        light: 'transparent',
        dark: 'transparent',
      },
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  pill: {
    rounded: 'rounded-xl',
    font: {
      align: 'center',
      size: 'xs',
      color: {
        active: {
          light: 'primary-invert',
          dark: 'primary-invert',
        },
        inactive: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
    background: {
      active: {
        light: 'primary-600',
        dark: 'primary-600',
      },
    },
    shadow: {
      active: {
        size: 'lg',
        light: 'primary-500/50',
        dark: 'primary-500/50',
      },
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
}

export type TabsConfig = typeof defaultConfig
export interface TabsPluginConfig {
  [key]: TabsConfig
}
