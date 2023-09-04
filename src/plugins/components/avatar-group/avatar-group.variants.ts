import type { AvatarGroupVariant } from './avatar-group.types'

export const size = {
  xxs: 'nui-avatar-group-xxs',
  xs: 'nui-avatar-group-xs',
  sm: 'nui-avatar-group-sm',
  md: 'nui-avatar-group-md',
  lg: 'nui-avatar-group-lg',
} as const satisfies AvatarGroupVariant<'size'>
