import type { PropertyVariant } from '~/types/utils'

export interface ButtonCloseProps extends Record<string, unknown> {
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  color?:
    | 'default'
    | 'muted'
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

export interface ButtonCloseEvents {
  onClick?: () => void
}

export interface ButtonCloseSlots {}

export type ButtonCloseAttrs = ButtonCloseProps &
  ButtonCloseEvents &
  ButtonCloseSlots
export type ButtonCloseVariant<T> = PropertyVariant<T, ButtonCloseProps>
