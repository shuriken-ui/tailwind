import type { RadioVariant } from './radio.types'

export const color = {
  default: 'nui-radio-default',
  muted: 'nui-radio-muted',
  light: 'nui-radio-light',
  dark: 'nui-radio-dark',
  black: 'nui-radio-black',
  primary: 'nui-radio-primary',
  info: 'nui-radio-info',
  success: 'nui-radio-success',
  warning: 'nui-radio-warning',
  danger: 'nui-radio-danger',
} as const satisfies RadioVariant<'color'>
