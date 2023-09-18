import type { ProgressVariant } from './progress.types'

export const color = {
  primary: 'nui-progress-primary',
  info: 'nui-progress-info',
  success: 'nui-progress-success',
  warning: 'nui-progress-warning',
  danger: 'nui-progress-danger',
} as const satisfies ProgressVariant<'color'>

export const contrast = {
  default: 'nui-progress-default',
  contrast: 'nui-progress-contrast',
} as const satisfies ProgressVariant<'contrast'>

export const shape = {
  straight: '',
  rounded: 'nui-progress-rounded',
  curved: 'nui-progress-curved',
  full: 'nui-progress-full',
} as const satisfies ProgressVariant<'shape'>

export const size = {
  xs: 'nui-progress-xs',
  sm: 'nui-progress-sm',
  md: 'nui-progress-md',
  lg: 'nui-progress-lg',
  xl: 'nui-progress-xl',
} as const satisfies ProgressVariant<'size'>
