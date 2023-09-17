import type { PropertyVariant } from '~/types/utils'

export interface AvatarProps extends Record<string, unknown> {
  src?: string
  srcDark?: string
  badgeSrc?: string
  text?: string
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  shape?: 'straight' | 'rounded' | 'curved' | 'full'
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
  color?:
    | 'white'
    | 'muted'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'pink'
    | 'yellow'
    | 'indigo'
    | 'violet'
  dot?:
    | boolean
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'pink'
    | 'yellow'
  ring?:
    | boolean
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'pink'
    | 'yellow'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface AvatarEvents {}

export interface AvatarSlots {
  children?: any
  badge?: any
}

export type AvatarAttrs = AvatarProps & AvatarEvents & AvatarSlots
export type AvatarVariant<T> = PropertyVariant<T, AvatarProps>
