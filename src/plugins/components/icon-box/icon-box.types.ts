import type { PropertyVariant } from '~/types/utils'

export interface IconBoxProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?:
    | 'default'
    | 'default-contrast'
    | 'dark'
    | 'black'
    | 'invert'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  variant?: 'solid' | 'outline' | 'pastel'
  bordered?: boolean
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface IconBoxEvents {}

export interface IconBoxSlots {
  children: any
}

export type IconBoxAttrs = IconBoxProps & IconBoxEvents & IconBoxSlots
export type IconBoxVariant<T> = PropertyVariant<T, IconBoxProps>
