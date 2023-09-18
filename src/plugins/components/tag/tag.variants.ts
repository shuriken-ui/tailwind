import type { TagVariant } from './tag.types'

export const flavor = {
  solid: 'nui-tag-solid',
  pastel: 'nui-tag-pastel',
  outline: 'nui-tag-outline',
} as const satisfies TagVariant<'flavor'>

export const shape = {
  straight: '',
  rounded: 'nui-tag-rounded',
  curved: 'nui-tag-curved',
  full: 'nui-tag-full',
} as const satisfies TagVariant<'shape'>

export const color = {
  default: 'nui-tag-default',
  muted: 'nui-tag-muted',
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
