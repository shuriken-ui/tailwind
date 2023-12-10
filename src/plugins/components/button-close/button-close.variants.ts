import type { ButtonCloseVariant } from './button-close.types'

export const rounded = {
  none: '',
  sm: 'nui-button-rounded',
  md: 'nui-button-smooth',
  lg: 'nui-button-curved',
  full: 'nui-button-full',
} as const satisfies ButtonCloseVariant<'rounded'>

export const size = {
  xs: 'nui-button-xs',
  sm: 'nui-button-sm',
  md: 'nui-button-md',
  lg: 'nui-button-lg',
} as const satisfies ButtonCloseVariant<'size'>

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
