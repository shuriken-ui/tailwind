import type { InputVariant } from './input.types'

export const shape = {
  straight: '',
  rounded: 'nui-input-number-rounded',
  smooth: 'nui-input-number-smooth',
  curved: 'nui-input-number-curved',
  full: 'nui-input-number-full',
} as const satisfies InputVariant<'shape'>

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
