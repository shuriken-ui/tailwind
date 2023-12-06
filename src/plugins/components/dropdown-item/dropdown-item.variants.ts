import type { DropdownItemVariant } from './dropdown-item.types'

export const rounded = {
  none: '',
  sm: 'nui-item-rounded',
  md: 'nui-item-smooth',
  lg: 'nui-item-curved',
} as const satisfies DropdownItemVariant<'rounded'>

export const color = {
  default: 'nui-item-default',
  contrast: 'nui-item-contrast',
} as const satisfies DropdownItemVariant<'color'>
