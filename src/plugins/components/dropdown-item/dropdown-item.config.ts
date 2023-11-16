export const key = 'dropdownItem' as const

export const defaultConfig = {
  itemRounded: 'md',
  textPosition: 'left',
  textSize: 'sm',
  duration: '300',
  notActive: {
    text: 'muted-500',
  },
  default: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    text: 'primary-500',
  },
  contrast: {
    bg: 'muted-100',
    bgDark: 'muted-900',
    text: 'primary-500',
  },
  rounded: {
    straight: 'none',
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
}

export type DropdownItemConfig = typeof defaultConfig
export interface DropdownItemPluginConfig {
  [key]: DropdownItemConfig
}
