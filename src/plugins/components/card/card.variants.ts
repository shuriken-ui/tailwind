import type { CardVariant } from './card.types'

export const shape = {
  straight: '',
  rounded: 'nui-card-rounded',
  smooth: 'nui-card-smooth',
  curved: 'nui-card-curved',
} as const satisfies CardVariant<'shape'>

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
