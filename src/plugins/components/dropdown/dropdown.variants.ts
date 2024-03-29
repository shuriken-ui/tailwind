import type { DropdownVariant } from './dropdown.types'

export const orientation = {
  start: 'nui-dropdown-start',
  end: 'nui-dropdown-end',
} as const satisfies DropdownVariant<'orientation'>

export const size = {
  md: 'nui-menu-md',
  lg: 'nui-menu-lg',
} as const satisfies DropdownVariant<'size'>

export const rounded = {
  none: '',
  sm: 'nui-menu-rounded-sm',
  md: 'nui-menu-rounded-md',
  lg: 'nui-menu-rounded-lg',
  full: 'nui-menu-rounded-lg',
} as const satisfies DropdownVariant<'rounded'>

export const color = {
  default: 'nui-menu-default',
  'default-contrast': 'nui-menu-default-contrast',
  muted: 'nui-menu-muted',
  'muted-contrast': 'nui-menu-muted-contrast',
  primary: 'nui-menu-primary',
  info: 'nui-menu-info',
  success: 'nui-menu-success',
  warning: 'nui-menu-warning',
  danger: 'nui-menu-danger',
  none: '',
} as const satisfies DropdownVariant<'color'>
