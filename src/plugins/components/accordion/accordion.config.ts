export const key = 'accordion' as const

export const defaultConfig = {
  size: 'full',
  border: 'muted-200',
  borderDark: 'muted-700',
  bg: 'white',
  bgDark: 'muted-800',
  detail: {
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  detailAndDot: {
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
  detailOpenAndDot: {
    bg: 'primary-500',
  },
  headerInner: {
    text: 'muted-800',
    textDark: 'white',
  },
  dot: {
    size: '3',
    rounded: 'full',
    duration: '300',
  },
  outer: {
    border: 'muted-200',
    borderDark: 'muted-700',
    bg: 'white',
    bgDark: 'muted-700/60',
    size: '8',
    rounded: 'full',
    duration: '300',
  },
  chevronIcon: {
    size: '4',
    duration: '300',
  },
  plusIcon: {
    size: '4',
    duration: '300',
  },
  content: {
    space: '5',
    font: 'sans',
    text: 'muted-500',
    textDark: 'muted-400',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
}

export type AccordionConfig = typeof defaultConfig
export interface AccordionPluginConfig {
  [key]: AccordionConfig
}
