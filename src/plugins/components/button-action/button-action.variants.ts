import type { ButtonActionVariant } from './button-action.types'

export const rounded = {
  none: '',
  sm: 'nui-button-rounded',
  md: 'nui-button-smooth',
  lg: 'nui-button-curved',
  full: 'nui-button-full',
} as const satisfies ButtonActionVariant<'rounded'>

export const color = {
  default: 'nui-button-default',
  muted: 'nui-button-muted',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as const satisfies ButtonActionVariant<'color'>
