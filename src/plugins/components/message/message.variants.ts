import type { MessageVariant } from './message.types'

export const shape = {
  straight: '',
  rounded: 'nui-message-rounded',
  smooth: 'nui-message-smooth',
  curved: 'nui-message-curved',
  full: 'nui-message-full',
} as const satisfies MessageVariant<'shape'>

export const type = {
  default: 'nui-message-default',
  muted: 'nui-message-muted',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
} as const satisfies MessageVariant<'type'>
