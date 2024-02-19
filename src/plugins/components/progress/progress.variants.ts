import type { ProgressVariant } from './progress.types'

export const color = {
  primary: 'nui-progress-primary',
  info: 'nui-progress-info',
  success: 'nui-progress-success',
  warning: 'nui-progress-warning',
  danger: 'nui-progress-danger',
  light: 'nui-progress-light',
  dark: 'nui-progress-dark',
  black: 'nui-progress-black',
} as const satisfies ProgressVariant<'color'>

export const contrast = {
  default: 'nui-progress-default',
  contrast: 'nui-progress-contrast',
} as const satisfies ProgressVariant<'contrast'>

export const rounded = {
  none: '',
  sm: 'nui-progress-rounded',
  md: 'nui-progress-smooth',
  lg: 'nui-progress-curved',
  full: 'nui-progress-full',
} as const satisfies ProgressVariant<'rounded'>

export const size = {
  xs: 'nui-progress-xs',
  sm: 'nui-progress-sm',
  md: 'nui-progress-md',
  lg: 'nui-progress-lg',
  xl: 'nui-progress-xl',
} as const satisfies ProgressVariant<'size'>
