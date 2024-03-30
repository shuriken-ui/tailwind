export const key = 'dropdown' as const

export const defaultConfig = {
  align: 'start',
  button: {
    context: {
      size: '9',
      rounded: 'full',
      inner: {
        size: '9',
        rounded: 'full',
        background: {
          light: 'white',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      icon: {
        size: '5',
        font: {
          color: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
      ring: {
        offset: {
          size: '4',
          color: {
            light: 'white',
            dark: 'muted-900',
          },
        },
        color: {
          hover: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
      },
      transition: {
        property: 'all',
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
  },
  menu: {
    header: {
      title: {
        font: {
          family: 'sans',
          weight: 'medium',
          size: 'xs',
          color: {
            light: 'muted-500',
            dark: 'muted-200',
          },
        },
      },
    },
    rounded: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
    },
    color: {
      default: {
        background: {
          light: 'white',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      defaultContrast: {
        background: {
          light: 'white',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-800',
        },
      },
      muted: {
        background: {
          light: 'white',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      mutedContrast: {
        background: {
          light: 'white',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-800',
        },
      },
    },
    shadow: {
      size: 'lg',
      light: 'muted-300/30',
      dark: 'muted-800/20',
    },
  },
}

export type DropdownConfig = typeof defaultConfig
export interface DropdownPluginConfig {
  [key]: DropdownConfig
}
