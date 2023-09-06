import type { ButtonCloseVariant } from './button-close.types'

export const shape = {
  straight: '',
  rounded: 'nui-button-rounded',
  smooth: 'nui-button-smooth',
  curved: 'nui-button-curved',
  full: 'nui-button-full',
} as const satisfies ButtonCloseVariant<'shape'>

export const color = {
  default: 'nui-button-default',
  muted: 'nui-button-muted',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as const satisfies ButtonCloseVariant<'color'>
