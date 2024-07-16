import type { InputFileRegularVariant } from './input-file-regular.types'

export const rounded = {
  none: '',
  sm: 'nui-input-rounded-sm',
  md: 'nui-input-rounded-md',
  lg: 'nui-input-rounded-lg',
  full: 'nui-input-rounded-full',
} as const satisfies InputFileRegularVariant<'rounded'>

export const size = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
  xl: 'nui-input-xl',
} as const satisfies InputFileRegularVariant<'size'>

export const contrast = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
} as const satisfies InputFileRegularVariant<'contrast'>
