import type { InputFileVariant } from './input-file.types'

export const rounded = {
  none: '',
  sm: 'nui-input-file-rounded',
  md: 'nui-input-file-smooth',
  lg: 'nui-input-file-curved',
  full: 'nui-input-file-full',
} as const satisfies InputFileVariant<'rounded'>

export const color = {
  primary: 'nui-input-file-primary',
  dark: 'nui-input-file-dark',
  black: 'nui-input-file-black',
} as const satisfies InputFileVariant<'color'>
