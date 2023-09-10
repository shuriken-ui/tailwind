import type { PropertyVariant } from '~/types/utils'

export interface IconBoxProps extends Record<string, unknown> {
  shape?: 'straight' | 'rounded' | 'curved' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?:
    | 'default'
    | 'invert'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  flavor?: 'solid' | 'outline' | 'pastel'
  bordered?: boolean
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
}

export interface IconBoxEvents {}

export interface IconBoxSlots {
  children: any
}

export type IconBoxAttrs = IconBoxProps & IconBoxEvents & IconBoxSlots
export type IconBoxVariant<T> = PropertyVariant<T, IconBoxProps>
