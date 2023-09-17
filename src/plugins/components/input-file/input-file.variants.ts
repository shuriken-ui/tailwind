import type { InputFileVariant } from './input-file.types'

export const shape = {
  straight: '',
  rounded: 'nui-input-file-rounded',
  smooth: 'nui-input-file-smooth',
  curved: 'nui-input-file-curved',
  full: 'nui-input-file-full',
} as const satisfies InputFileVariant<'shape'>
