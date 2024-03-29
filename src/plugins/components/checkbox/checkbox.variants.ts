import type { CheckboxVariant } from './checkbox.types'

export const rounded = {
  none: '',
  sm: 'nui-checkbox-rounded-sm',
  md: 'nui-checkbox-rounded-md',
  lg: 'nui-checkbox-rounded-lg',
  full: 'nui-checkbox-rounded-full',
} as const satisfies CheckboxVariant<'rounded'>

export const color = {
  default: 'nui-checkbox-default',
  muted: 'nui-checkbox-muted',
  light: 'nui-checkbox-light',
  dark: 'nui-checkbox-dark',
  black: 'nui-checkbox-black',
  primary: 'nui-checkbox-primary',
  info: 'nui-checkbox-info',
  success: 'nui-checkbox-success',
  warning: 'nui-checkbox-warning',
  danger: 'nui-checkbox-danger',
} as const satisfies CheckboxVariant<'color'>
