import type { ButtonVariant } from './button.types'

export const size = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-big',
} as const satisfies ButtonVariant<'size'>

export const rounded = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
} as const satisfies ButtonVariant<'rounded'>

export const variant = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
} as const satisfies ButtonVariant<'variant'>

export const color = {
  none: '',
  default: 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  muted: 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  light: 'nui-button-light',
  dark: 'nui-button-dark',
  black: 'nui-button-black',
} as const satisfies ButtonVariant<'color'>

export const shadow = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
} as const satisfies ButtonVariant<'shadow'>
