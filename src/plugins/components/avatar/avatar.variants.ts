import type { AvatarVariant } from './avatar.types'

export const dot = {
  success: 'nui-dot-success',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  pink: 'nui-dot-pink',
  yellow: 'nui-dot-yellow',
} as const satisfies AvatarVariant<'dot'>

export const ring = {
  success: 'nui-ring-success',
  primary: 'nui-ring-primary',
  info: 'nui-ring-info',
  warning: 'nui-ring-warning',
  danger: 'nui-ring-danger',
  pink: 'nui-ring-pink',
  yellow: 'nui-ring-yellow',
} as const satisfies AvatarVariant<'ring'>

export const size = {
  xxs: 'nui-avatar-xxs',
  xs: 'nui-avatar-xs',
  sm: 'nui-avatar-sm',
  md: 'nui-avatar-md',
  lg: 'nui-avatar-lg',
  xl: 'nui-avatar-xl',
  '2xl': 'nui-avatar-2xl',
  '3xl': 'nui-avatar-3xl',
  '4xl': 'nui-avatar-4xl',
} as const satisfies AvatarVariant<'size'>

export const shape = {
  straight: 'nui-avatar-straight',
  rounded: 'nui-avatar-rounded',
  curved: 'nui-avatar-curved',
  full: 'nui-avatar-full',
} as const satisfies AvatarVariant<'shape'>

export const mask = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
} as const satisfies AvatarVariant<'mask'>

export const color = {
  white: 'bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  primary: 'bg-primary-500/20 text-primary-500',
  info: 'bg-info-500/20 text-info-500',
  success: 'bg-success-500/20 text-success-500',
  warning: 'bg-warning-500/20 text-warning-500',
  danger: 'bg-danger-500/20 text-danger-500',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  pink: 'bg-pink-500/20 text-pink-400',
  indigo: 'bg-indigo-500/20 text-indigo-500',
  violet: 'bg-violet-500/20 text-violet-500',
} as const satisfies AvatarVariant<'color'>
