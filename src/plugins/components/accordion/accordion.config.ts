export const key = 'accordion' as const

export const config = {
  wrapper: {
    width: 'full',
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
    },
    background: {
      light: 'white',
      dark: 'muted-800',
    },
    border: {
      light: 'muted-200',
      dark: 'muted-700',
    },
  },
  inner: {
    border: {
      light: 'muted-200',
      dark: 'muted-700',
    },
  },
  header: {
    font: {
      color: {
        light: 'muted-800',
        dark: 'muted-100',
      },
    },
  },
  content: {
    font: {
      family: 'sans',
      color: {
        light: 'muted-500',
        dark: 'muted-400',
      },
    },
    padding: {
      x: '5',
      y: '5',
    },
  },
  icon: {
    wrapper: {
      size: '8',
      rounded: 'full',
      background: {
        light: 'white',
        dark: 'muted-700/60',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      transition: {
        property: 'transform',
        duration: '300',
      },
    },
    dot: {
      background: {
        light: 'muted-200',
        dark: 'muted-700',
        active: 'primary-500',
      },
    },
    chevron: {
      size: '4',
      transition: {
        property: 'transform',
        duration: '300',
      },
    },
    plus: {
      size: '4',
      transition: {
        property: 'transform',
        duration: '300',
      },
    },
  },
}

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
