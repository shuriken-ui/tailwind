import type { DropdownItemVariant } from './dropdown-item.types'

export const shape = {
  straight: '',
  rounded: 'nui-item-rounded',
  smooth: 'nui-item-smooth',
  curved: 'nui-item-curved',
} as const satisfies DropdownItemVariant<'shape'>

export const color = {
  default: 'nui-item-default',
  contrast: 'nui-item-contrast',
} as const satisfies DropdownItemVariant<'color'>
