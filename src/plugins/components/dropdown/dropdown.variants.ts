import type { DropdownVariant } from './dropdown.types'

export const orientation = {
  start: 'nui-dropdown-start',
  end: 'nui-dropdown-end',
} as const satisfies DropdownVariant<'orientation'>

export const size = {
  md: 'nui-menu-md',
  lg: 'nui-menu-lg',
} as const satisfies DropdownVariant<'size'>

export const shape = {
  straight: '',
  rounded: 'nui-menu-rounded',
  smooth: 'nui-menu-smooth',
  curved: 'nui-menu-curved',
  full: 'nui-menu-curved',
} as const satisfies DropdownVariant<'shape'>

export const color = {
  white: 'nui-menu-white',
  'white-contrast': 'nui-menu-white-contrast',
  muted: 'nui-menu-muted',
  'muted-contrast': 'nui-menu-muted-contrast',
  primary: 'nui-menu-primary',
  info: 'nui-menu-info',
  success: 'nui-menu-success',
  warning: 'nui-menu-warning',
  danger: 'nui-menu-danger',
  none: '',
} as const satisfies DropdownVariant<'color'>
