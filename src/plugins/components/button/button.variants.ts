import type { ButtonVariant } from './button.types'

export const size = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-big',
} as const satisfies ButtonVariant<'size'>

export const shape = {
  straight: '',
  rounded: 'nui-button-rounded',
  curved: 'nui-button-curved',
  smooth: 'nui-button-smooth',
  full: 'nui-button-full',
} as const satisfies ButtonVariant<'shape'>

export const flavor = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
} as const satisfies ButtonVariant<'flavor'>

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
