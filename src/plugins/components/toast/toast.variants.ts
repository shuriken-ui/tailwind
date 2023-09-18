import type { ToastVariant } from './toast.types'

export const shape = {
  straight: '',
  rounded: 'nui-toast-rounded',
  smooth: 'nui-toast-smooth',
  curved: 'nui-toast-curved',
} as const satisfies ToastVariant<'shape'>

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
