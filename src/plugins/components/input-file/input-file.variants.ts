import type { InputFileVariant } from './input-file.types'

export const rounded = {
  none: '',
  sm: 'nui-input-file-rounded',
  md: 'nui-input-file-smooth',
  lg: 'nui-input-file-curved',
  full: 'nui-input-file-full',
} as const satisfies InputFileVariant<'rounded'>
