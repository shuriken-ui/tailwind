import type { ListboxVariant } from './listbox.types'

export const rounded = {
  none: '',
  sm: 'nui-listbox-rounded',
  md: 'nui-listbox-smooth',
  lg: 'nui-listbox-curved',
  full: 'nui-listbox-full',
} as const satisfies ListboxVariant<'rounded'>

export const size = {
  sm: 'nui-listbox-sm',
  md: 'nui-listbox-md',
  lg: 'nui-listbox-lg',
} as const satisfies ListboxVariant<'size'>

export const contrast = {
  default: 'nui-listbox-default',
  'default-contrast': 'nui-listbox-default-contrast',
  muted: 'nui-listbox-muted',
  'muted-contrast': 'nui-listbox-muted-contrast',
} as const satisfies ListboxVariant<'contrast'>
