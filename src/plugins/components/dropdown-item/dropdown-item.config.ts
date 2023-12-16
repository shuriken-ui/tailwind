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
  color: {
    default: {
      background: {
        light: 'muted-100',
        dark: 'muted-700',
      },
      font: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    contrast: {
      background: {
        light: 'muted-100',
        dark: 'muted-900',
      },
      font: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
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
