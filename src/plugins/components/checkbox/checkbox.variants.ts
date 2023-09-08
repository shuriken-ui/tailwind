import type { CheckboxVariant } from './checkbox.types'

export const shape = {
  straight: '',
  rounded: 'nui-checkbox-rounded',
  smooth: 'nui-checkbox-smooth',
  curved: 'nui-checkbox-curved',
  full: 'nui-checkbox-full',
} as const satisfies CheckboxVariant<'shape'>

export const color = {
  default: 'nui-checkbox-default',
  light: 'nui-checkbox-light',
  muted: 'nui-checkbox-muted',
  primary: 'nui-checkbox-primary',
  info: 'nui-checkbox-info',
  success: 'nui-checkbox-success',
  warning: 'nui-checkbox-warning',
  danger: 'nui-checkbox-danger',
} as const satisfies CheckboxVariant<'color'>
