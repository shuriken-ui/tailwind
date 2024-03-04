import type { TagVariant } from './tag.types'

export const variant = {
  solid: 'nui-tag-solid',
  pastel: 'nui-tag-pastel',
  outline: 'nui-tag-outline',
} as const satisfies TagVariant<'variant'>

export const rounded = {
  none: '',
  sm: 'nui-tag-rounded-sm',
  md: 'nui-tag-rounded-md',
  lg: 'nui-tag-rounded-lg',
  full: 'nui-tag-rounded-full',
} as const satisfies TagVariant<'rounded'>

export const color = {
  default: 'nui-tag-default',
  'default-contrast': 'nui-tag-default-contrast',
  muted: 'nui-tag-muted',
  'muted-contrast': 'nui-tag-muted-contrast',
  light: 'nui-tag-light',
  dark: 'nui-tag-dark',
  black: 'nui-tag-black',
  primary: 'nui-tag-primary',
  info: 'nui-tag-info',
  success: 'nui-tag-success',
  warning: 'nui-tag-warning',
  danger: 'nui-tag-danger',
} as const satisfies TagVariant<'color'>

export const shadow = {
  flat: 'nui-tag-shadow',
  hover: 'nui-tag-shadow-hover',
} as const satisfies TagVariant<'shadow'>

export const size = {
  sm: 'nui-tag-sm',
  md: 'nui-tag-md',
} as const satisfies TagVariant<'size'>
