import type { InputFileRegularVariant } from './input-file-regular.types'

export const shape = {
  straight: '',
  rounded: 'nui-input-rounded',
  smooth: 'nui-input-smooth',
  curved: 'nui-input-curved',
  full: 'nui-input-full',
} as const satisfies InputFileRegularVariant<'shape'>

export const size = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
} as const satisfies InputFileRegularVariant<'size'>

export const contrast = {
  white: 'nui-input-white',
  'white-contrast': 'nui-input-white-contrast',
} as const satisfies InputFileRegularVariant<'contrast'>
