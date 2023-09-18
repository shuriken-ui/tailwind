import type { PropertyVariant } from '~/types/utils'

export interface TagProps extends Record<string, unknown> {
  flavor?: 'solid' | 'outline' | 'pastel'
  color?:
    | 'default'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  shape?: 'straight' | 'rounded' | 'curved' | 'full'
  size?: 'sm' | 'md'
  shadow?: 'flat' | 'hover'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface TagEvents {}

export interface TagSlots {
  children: any
}

export type TagAttrs = TagProps & TagEvents & TagSlots
export type TagVariant<T> = PropertyVariant<T, TagProps>
