export const key = 'placeholderPage' as const

export const defaultConfig = {
  height: {
    min: '[400px]',
  },
  inner: {
    width: 'full',
  },
  content: {
    width: {
      max: 'sm',
    },
  },
  size: {
    image: {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
    },
  },
  title: {
    font: {
      color: {
        light: 'muted-800',
        dark: 'white',
      },
    },
  },
  subtitle: {
    font: {
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
    },
  },
}

export type PlaceholderPageConfig = typeof defaultConfig
export interface PlaceholderPagePluginConfig {
  [key]: PlaceholderPageConfig
}
