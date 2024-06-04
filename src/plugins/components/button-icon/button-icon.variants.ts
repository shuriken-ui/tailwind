import type { ButtonIconVariant } from './button-icon.types'

export const rounded = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
} as const satisfies ButtonIconVariant<'rounded'>

export const size = {
  sm: 'nui-button-sm',
  md: 'nui-button-md',
  lg: 'nui-button-lg',
  xl: 'nui-button-xl',
} as const satisfies ButtonIconVariant<'size'>

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
} as const satisfies ButtonIconVariant<'color'>
