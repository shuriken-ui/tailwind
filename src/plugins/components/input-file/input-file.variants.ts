import type { InputFileVariant } from './input-file.types'

export const rounded = {
  none: '',
  sm: 'nui-input-file-rounded-sm',
  md: 'nui-input-file-rounded-md',
  lg: 'nui-input-file-rounded-lg',
  full: 'nui-input-file-rounded-full',
} as const satisfies InputFileVariant<'rounded'>

export const color = {
  primary: 'nui-input-file-primary',
  dark: 'nui-input-file-dark',
  black: 'nui-input-file-black',
} as const satisfies InputFileVariant<'color'>
