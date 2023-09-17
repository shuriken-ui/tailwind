import type { MessageTextVariant } from './message-text.types'

export const shape = {
  straight: '',
  rounded: 'nui-message-rounded',
  smooth: 'nui-message-smooth',
  curved: 'nui-message-curved',
} as const satisfies MessageTextVariant<'shape'>

export const color = {
  default: 'nui-message-default',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
  none: '',
} as const satisfies MessageTextVariant<'color'>

export const contrast = {
  white: 'nui-message-white',
  contrast: 'nui-message-contrast',
} as const satisfies MessageTextVariant<'contrast'>
