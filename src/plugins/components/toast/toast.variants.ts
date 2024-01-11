import type { ToastVariant } from './toast.types'

export const rounded = {
  none: '',
  sm: 'nui-toast-rounded',
  md: 'nui-toast-smooth',
  lg: 'nui-toast-curved',
} as const satisfies ToastVariant<'rounded'>

export const color = {
  default: 'nui-toast-default',
  primary: 'nui-toast-primary',
  info: 'nui-toast-info',
  success: 'nui-toast-success',
  warning: 'nui-toast-warning',
  danger: 'nui-toast-danger',
  none: '',
} as const satisfies ToastVariant<'color'>

export const contrast = {
  white: 'nui-toast-white',
  contrast: 'nui-toast-contrast',
} as const satisfies ToastVariant<'contrast'>
