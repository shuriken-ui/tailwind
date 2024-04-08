import type { PropertyVariant } from '~/types/utils'

export interface TagProps extends Record<string, unknown> {
  variant?: 'solid' | 'outline' | 'pastel'
  color?:
    | 'default'
    | 'default-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
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
