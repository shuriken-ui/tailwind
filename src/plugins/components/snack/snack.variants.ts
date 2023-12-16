import type { SnackVariant } from './snack.types'

export const size = {
  xs: 'nui-snack-xs',
  sm: 'nui-snack-sm',
  md: 'nui-snack-md',
} as const satisfies SnackVariant<'size'>

export const color = {
  default: 'nui-snack-default',
  muted: 'nui-snack-muted',
} as const satisfies SnackVariant<'color'>
