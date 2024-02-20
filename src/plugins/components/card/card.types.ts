import type { PropertyVariant } from '~/types/utils'

export interface CardProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'flat' | 'hover'
  color?:
    | 'default'
    | 'default-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'dark'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface CardEvents {}

export interface CardSlots {
  children: any
}

export type CardAttrs = CardProps & CardEvents & CardSlots
export type CardVariant<T> = PropertyVariant<T, CardProps>
