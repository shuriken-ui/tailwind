import type { SnackVariant } from './snack.types'

export const size = {
  xs: 'nui-snack-xs',
  sm: 'nui-snack-sm',
  md: 'nui-snack-md',
} as const satisfies SnackVariant<'size'>

export const color = {
  default: 'nui-snack-default',
  'default-contrast': 'nui-snack-default-contrast',
  muted: 'nui-snack-muted',
  'muted-contrast': 'nui-snack-muted-contrast',
} as const satisfies SnackVariant<'color'>
