import type { PropertyVariant } from '~/types/utils'

export interface ButtonActionProps extends Record<string, unknown> {
  label?: string
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  loading?: boolean
  color?:
    | 'default'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
}

export interface ButtonActionEvents {
  onClick?: () => void
}

export interface ButtonActionSlots {
  children?: any
}

export type ButtonActionAttrs = ButtonActionProps &
  ButtonActionEvents &
  ButtonActionSlots
export type ButtonActionVariant<T> = PropertyVariant<T, ButtonActionProps>
