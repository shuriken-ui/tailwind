import type { ButtonCloseVariant } from './button-close.types'

export const rounded = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
} as const satisfies ButtonCloseVariant<'rounded'>

export const size = {
  xs: 'nui-button-xs',
  sm: 'nui-button-sm',
  md: 'nui-button-md',
  lg: 'nui-button-lg',
  xl: 'nui-button-xl',
} as const satisfies ButtonCloseVariant<'size'>

export const color = {
  default: 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  muted: 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as const satisfies ButtonCloseVariant<'color'>
