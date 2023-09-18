import type { PropertyVariant } from '~/types/utils'

export interface ButtonProps extends Record<string, unknown> {
  label?: string
  loading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  flavor?: 'solid' | 'pastel' | 'outline'
  color?:
    | 'default'
    | 'light'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  shadow?: 'flat' | 'hover'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ButtonEvents {
  onClick?: () => void
}

export interface ButtonSlots {
  children?: any
}

export type ButtonAttrs = ButtonProps & ButtonEvents & ButtonSlots
export type ButtonVariant<T> = PropertyVariant<T, ButtonProps>
