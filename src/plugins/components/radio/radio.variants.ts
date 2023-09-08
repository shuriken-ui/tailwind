import type { RadioVariant } from './radio.types'

export const color = {
  default: 'nui-radio-default',
  light: 'nui-radio-light',
  muted: 'nui-radio-muted',
  primary: 'nui-radio-primary',
  info: 'nui-radio-info',
  success: 'nui-radio-success',
  warning: 'nui-radio-warning',
  danger: 'nui-radio-danger',
} as const satisfies RadioVariant<'color'>
