import type { InputVariant } from './input.types'

export const rounded = {
  none: '',
  sm: 'nui-input-rounded-sm',
  md: 'nui-input-rounded-md',
  lg: 'nui-input-rounded-lg',
  full: 'nui-input-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
  xl: 'nui-input-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
  muted: 'nui-input-muted',
  'muted-contrast': 'nui-input-muted-contrast',
} as const satisfies InputVariant<'contrast'>
