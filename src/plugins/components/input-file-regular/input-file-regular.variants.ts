import type { InputFileRegularVariant } from './input-file-regular.types'

export const rounded = {
  none: '',
  sm: 'nui-input-rounded',
  md: 'nui-input-smooth',
  lg: 'nui-input-curved',
  full: 'nui-input-full',
} as const satisfies InputFileRegularVariant<'rounded'>

export const size = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
} as const satisfies InputFileRegularVariant<'size'>

export const contrast = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
} as const satisfies InputFileRegularVariant<'contrast'>
