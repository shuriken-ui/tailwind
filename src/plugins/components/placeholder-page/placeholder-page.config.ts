export const key = 'placeholderPage' as const

export const defaultConfig = {
  minSize: '[400px]',
  innerSize: 'full',
  maxContentSize: 'sm',
  maxSizeXS: 'xs',
  maxSizeSM: 'sm',
  maxSizeMD: 'md',
  maxSizeLG: 'lg',
  maxSizeXL: 'xl',
  title: {
    text: 'muted-800',
    textDark: 'white',
  },
  subtitle: {
    text: 'muted-400',
  },
}

export type PlaceholderPageConfig = typeof defaultConfig
export interface PlaceholderPagePluginConfig {
  [key]: PlaceholderPageConfig
}
