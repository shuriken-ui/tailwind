import type { MessageTextVariant } from './message-text.types'

export const rounded = {
  none: '',
  sm: 'nui-message-rounded-sm',
  md: 'nui-message-rounded-md',
  lg: 'nui-message-rounded-lg',
} as const satisfies MessageTextVariant<'rounded'>

export const color = {
  default: 'nui-message-default',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
  dark: 'nui-message-dark',
  black: 'nui-message-black',
  none: '',
} as const satisfies MessageTextVariant<'color'>

export const contrast = {
  'low-contrast': 'nui-message-low-contrast',
  'high-contrast': 'nui-message-high-contrast',
} as const satisfies MessageTextVariant<'contrast'>
