import type { InputVariant } from './input-number.types'

export const rounded = {
  none: '',
  sm: 'nui-input-number-rounded',
  md: 'nui-input-number-smooth',
  lg: 'nui-input-number-curved',
  full: 'nui-input-number-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'nui-input-number-sm',
  md: 'nui-input-number-md',
  lg: 'nui-input-number-lg',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'nui-input-number-default',
  'default-contrast': 'nui-input-number-default-contrast',
  muted: 'nui-input-number-muted',
  'muted-contrast': 'nui-input-number-muted-contrast',
} as const satisfies InputVariant<'contrast'>
