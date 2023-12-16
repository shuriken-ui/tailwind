import type { CardVariant } from './card.types'

export const rounded = {
  none: '',
  sm: 'nui-card-rounded',
  md: 'nui-card-smooth',
  lg: 'nui-card-curved',
} as const satisfies CardVariant<'rounded'>

export const color = {
  white: 'nui-card-white',
  'white-contrast': 'nui-card-white-contrast',
  muted: 'nui-card-muted',
  'muted-contrast': 'nui-card-muted-contrast',
  primary: 'nui-card-primary',
  info: 'nui-card-info',
  success: 'nui-card-success',
  warning: 'nui-card-warning',
  danger: 'nui-card-danger',
  none: '',
} as const satisfies CardVariant<'color'>
