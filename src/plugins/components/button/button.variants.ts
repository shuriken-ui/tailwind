import type { ButtonVariant } from './button.types'

export const size = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-xlarge',
} as const satisfies ButtonVariant<'size'>

export const rounded = {
  none: '',
  sm: 'nui-button-rounded',
  md: 'nui-button-curved',
  lg: 'nui-button-smooth',
  full: 'nui-button-full',
} as const satisfies ButtonVariant<'rounded'>

export const variant = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
} as const satisfies ButtonVariant<'variant'>

export const color = {
  none: '',
  default: 'nui-button-default',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  light: 'nui-button-light',
  muted: 'nui-button-muted',
} as const satisfies ButtonVariant<'color'>

export const shadow = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
} as const satisfies ButtonVariant<'shadow'>
