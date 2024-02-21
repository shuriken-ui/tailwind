import type { ToastVariant } from './toast.types'

export const rounded = {
  none: '',
  sm: 'nui-toast-rounded-sm',
  md: 'nui-toast-rounded-md',
  lg: 'nui-toast-rounded-lg',
} as const satisfies ToastVariant<'rounded'>

export const color = {
  default: 'nui-toast-default',
  primary: 'nui-toast-primary',
  info: 'nui-toast-info',
  success: 'nui-toast-success',
  warning: 'nui-toast-warning',
  danger: 'nui-toast-danger',
  dark: 'nui-toast-dark',
  black: 'nui-toast-black',
  none: '',
} as const satisfies ToastVariant<'color'>

export const contrast = {
  'low-contrast': 'nui-toast-low-contrast',
  'high-contrast': 'nui-toast-high-contrast',
} as const satisfies ToastVariant<'contrast'>
