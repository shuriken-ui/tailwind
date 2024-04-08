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
  color: {
    default: {
      background: {
        base: {
          light: 'white',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-50/60',
          dark: 'muted-800/60',
        },
      },
      border: {
        light: 'muted-300',
        dark: 'muted-700',
      },
    },
    defaultContrast: {
      background: {
        base: {
          light: 'white',
          dark: 'muted-950',
        },
        hover: {
          light: 'muted-50/60',
          dark: 'muted-950/60',
        },
      },
      border: {
        light: 'muted-300',
        dark: 'muted-800',
      },
    },
    muted: {
      background: {
        base: {
          light: 'muted-100',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-100/60',
          dark: 'muted-800/60',
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
    },
    mutedContrast: {
      background: {
        base: {
          light: 'muted-100',
          dark: 'muted-950',
        },
        hover: {
          light: 'muted-100/60',
          dark: 'muted-950/60',
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-800',
      },
    },
  },
  dotColor: {
    default: {
      background: {
        light: 'muted-400',
        dark: 'muted-700',
      },
    },
    primary: {
      background: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
    info: {
      background: {
        light: 'info-500',
        dark: 'info-500',
      },
    },
    success: {
      background: {
        light: 'success-500',
        dark: 'success-500',
      },
    },
    warning: {
      background: {
        light: 'warning-500',
        dark: 'warning-500',
      },
    },
    danger: {
      background: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
    dark: {
      background: {
        light: 'muted-900',
        dark: 'muted-100',
      },
    },
    black: {
      background: {
        light: 'black',
        dark: 'white',
      },
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
