export const key = 'pagination' as const

export const defaultConfig = {
  width: 'full',
  padding: '1',
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  list: {
    border: {
      light: 'muted-200',
      dark: 'muted-600',
    },
    background: {
      light: 'muted-100',
      dark: 'muted-700',
    },
  },
  buttons: {
    padding: '1',
    border: {
      light: 'muted-200',
      dark: 'muted-600',
    },
    background: {
      light: 'muted-100',
      dark: 'muted-700',
    },
    button: {
      background: {
        base: {
          light: 'white',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-900',
        },
      },
      font: {
        family: 'sans',
        size: 'sm',
        color: {
          base: {
            light: 'muted-500',
            dark: 'muted-400',
          },
          hover: {
            light: 'muted-700',
            dark: 'muted-400',
          },
        },
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      icon: {
        size: '4',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
  },
  link: {
    padding: '1',
    size: '10',
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        active: {
          light: 'white',
          dark: 'white',
        },
        inactive: {
          base: {
            light: 'muted-500',
            dark: 'muted-400',
          },
          hover: {
            light: 'muted-700',
            dark: 'muted-400',
          },
        },
      },
    },
    border: {
      base: {
        light: 'muted-200',
        dark: 'muted-600',
      },
      inactive: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      active: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
    background: {
      base: {
        light: 'muted-100',
        dark: 'muted-700',
      },
      inactive: {
        base: {
          light: 'white',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-900',
        },
      },
      active: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
    shadow: {
      active: {
        light: 'primary-500/50',
        dark: 'primary-500/20',
        size: 'sm',
      },
    },
  },
  ellipsis: {
    size: '10',
    border: {
      light: 'muted-200',
      dark: 'muted-700',
    },
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        light: 'muted-500',
        dark: 'muted-400',
      },
    },
    background: {
      light: 'white',
      dark: 'muted-800',
    },
  },
}

export type PaginationConfig = typeof defaultConfig
export interface PaginationPluginConfig {
  [key]: PaginationConfig
}
