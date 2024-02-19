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
  'default-contrast': 'nui-button-default-contrast',
  muted: 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  light: 'nui-button-light',
  dark: 'nui-button-dark',
  black: 'nui-button-black',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as const satisfies ButtonActionVariant<'color'>
