import type { DropdownItemVariant } from './dropdown-item.types'

export const rounded = {
  none: '',
  sm: 'nui-item-rounded-sm',
  md: 'nui-item-rounded-md',
  lg: 'nui-item-rounded-lg',
} as const satisfies DropdownItemVariant<'rounded'>

export const color = {
  default: 'nui-item-default',
  contrast: 'nui-item-contrast',
} as const satisfies DropdownItemVariant<'color'>
