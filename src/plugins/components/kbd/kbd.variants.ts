import type { KbdVariant } from './kbd.types'

export const rounded = {
  none: '',
  sm: 'nui-kbd-rounded-sm',
  md: 'nui-kbd-rounded-md',
  lg: 'nui-kbd-rounded-lg',
  full: 'nui-kbd-rounded-full',
} as const satisfies KbdVariant<'rounded'>

export const size = {
  xs: 'nui-kbd-xs',
  sm: 'nui-kbd-sm',
  md: 'nui-kbd-md',
  lg: 'nui-kbd-lg',
} as const satisfies KbdVariant<'size'>

export const color = {
  default: 'nui-kbd-default',
  muted: 'nui-kbd-muted',
} as const satisfies KbdVariant<'color'>
