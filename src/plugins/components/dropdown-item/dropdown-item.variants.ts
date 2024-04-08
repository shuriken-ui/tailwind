import type { DropdownItemVariant } from './dropdown-item.types'

export const rounded = {
  none: '',
  sm: 'nui-item-rounded-sm',
  md: 'nui-item-rounded-md',
  lg: 'nui-item-rounded-lg',
} as const satisfies DropdownItemVariant<'rounded'>

export const contrast = {
  default: 'nui-item-default',
  contrast: 'nui-item-contrast',
} as const satisfies DropdownItemVariant<'contrast'>

export const color = {
  primary: 'nui-item-primary',
  info: 'nui-item-info',
  success: 'nui-item-success',
  warning: 'nui-item-warning',
  danger: 'nui-item-danger',
  dark: 'nui-item-dark',
  black: 'nui-item-black',
} as const satisfies DropdownItemVariant<'color'>
