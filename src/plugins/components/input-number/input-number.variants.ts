import type { InputVariant } from './input-number.types'

export const rounded = {
  none: '',
  sm: 'nui-input-number-rounded-sm',
  md: 'nui-input-number-rounded-md',
  lg: 'nui-input-number-rounded-lg',
  full: 'nui-input-number-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'nui-input-number-sm',
  md: 'nui-input-number-md',
  lg: 'nui-input-number-lg',
  xl: 'nui-input-number-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'nui-input-number-default',
  'default-contrast': 'nui-input-number-default-contrast',
  muted: 'nui-input-number-muted',
  'muted-contrast': 'nui-input-number-muted-contrast',
} as const satisfies InputVariant<'contrast'>
