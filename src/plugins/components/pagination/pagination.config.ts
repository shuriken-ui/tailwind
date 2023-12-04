export const key = 'pagination' as const

export const defaultConfig = {
  size: 'full',
  list: {
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
  },
  buttons: {
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
    button: {
      bg: 'white',
      bgDark: 'muted-800',
      bgHover: 'muted-100',
      bgHoverDark: 'muted-900',
      text: 'muted-500',
      textSize: 'sm',
      textHover: 'muted-700',
      textHoverDark: 'muted-400',
      border: 'muted-200',
      borderDark: 'muted-700',
      font: 'sans',
      duration: '300',
      iconSize: '4',
    },
  },
  link: {
    size: '10',
    font: 'sans',
    text: 'sm',
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
    notActive: {
      bg: 'white',
      bgDark: 'muted-800',
      bgHover: 'muted-100',
      bgHoverDark: 'muted-900',
      text: 'muted-500',
      textHover: 'muted-700',
      textHoverDark: 'muted-400',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    active: {
      bg: 'primary-500',
      text: 'white',
      border: 'primary-500',
      shadow: 'primary-500/50',
      shadowDark: 'primary-500/20',
      shadowSize: 'sm',
    },
  },
  ellipsis: {
    border: 'muted-200',
    borderDark: 'muted-700',
    text: 'muted-500',
    textSize: 'sm',
    bg: 'white',
    bgDark: 'muted-800',
    size: '10',
    font: 'sans',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
}

export type PaginationConfig = typeof defaultConfig
export interface PaginationPluginConfig {
  [key]: PaginationConfig
}
