export const key = 'dropdownItem' as const

export const defaultConfig = {
  align: 'start',
  font: {
    family: 'sans',
    size: 'sm',
    color: {
      inactive: {
        light: 'muted-500',
        dark: 'muted-500',
      },
    },
  },
  rounded: {
    none: 'none',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  },
  contrast: {
    default: {
      background: {
        light: 'muted-100',
        dark: 'muted-700',
      },
    },
    contrast: {
      background: {
        light: 'muted-100',
        dark: 'muted-900',
      },
    },
  },
  color: {
    primary: {
      font: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    info: {
      font: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    success: {
      font: {
        color: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
    },
    warning: {
      font: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    danger: {
      font: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
    },
    dark: {
      font: {
        color: {
          light: 'muted-900',
          dark: 'muted-100',
        },
      },
    },
    black: {
      font: {
        color: {
          light: 'black',
          dark: 'white',
        },
      },
    },
  },
  transition: {
    property: 'colors',
    duration: '300',
  },
}

export type DropdownItemConfig = typeof defaultConfig
export interface DropdownItemPluginConfig {
  [key]: DropdownItemConfig
}
