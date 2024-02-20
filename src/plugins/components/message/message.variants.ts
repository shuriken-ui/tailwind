import type { MessageVariant } from './message.types'

export const rounded = {
  none: '',
  sm: 'nui-message-rounded',
  md: 'nui-message-smooth',
  lg: 'nui-message-curved',
  full: 'nui-message-full',
} as const satisfies MessageVariant<'rounded'>

export const type = {
  default: 'nui-message-default',
  'default-contrast': 'nui-message-default-contrast',
  muted: 'nui-message-muted',
  'muted-contrast': 'nui-message-muted-contrast',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
} as const satisfies MessageVariant<'type'>
