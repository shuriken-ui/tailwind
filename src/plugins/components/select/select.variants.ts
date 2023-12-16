import type { SelectVariant } from './select.types'

export const rounded = {
  none: '',
  sm: 'nui-select-rounded',
  md: 'nui-select-smooth',
  lg: 'nui-select-curved',
  full: 'nui-select-full',
} as const satisfies SelectVariant<'rounded'>

export const size = {
  sm: 'nui-select-sm',
  md: 'nui-select-md',
  lg: 'nui-select-lg',
} as const satisfies SelectVariant<'size'>

export const contrast = {
  default: 'nui-select-default',
  'default-contrast': 'nui-select-default-contrast',
  muted: 'nui-select-muted',
  'muted-contrast': 'nui-select-muted-contrast',
} as const satisfies SelectVariant<'contrast'>
