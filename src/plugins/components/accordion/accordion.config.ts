export const key = 'accordion' as const

export const defaultConfig = {
  wrapper: {
    width: 'full',
    rounded: {
      none: 'none',
      sm: 'md',
      md: 'lg',
      lg: 'xl',
    },
    background: {
      light: 'white',
      dark: 'muted-800',
    },
    hover: {
      light: 'muted-50/60',
      dark: 'muted-800/60',
    },
    border: {
      light: 'muted-300',
      dark: 'muted-700',
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  inner: {
    border: {
      light: 'muted-300',
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
      size: 'sm',
      color: {
        light: 'muted-500',
        dark: 'muted-400',
      },
    },
    padding: {
      x: '4',
      y: '4',
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
        light: 'transparent',
        dark: 'transparent',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
    dot: {
      size: '3',
      rounded: 'full',
      background: {
        light: 'muted-200',
        dark: 'muted-700',
        active: 'primary-500',
      },
      transition: {
        property: 'colors',
        duration: '300',
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

export type AccordionConfig = typeof defaultConfig
export interface AccordionPluginConfig {
  [key]: AccordionConfig
}
