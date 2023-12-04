import type { PropertyVariant } from '~/types/utils'

export interface ButtonProps extends Record<string, unknown> {
  label?: string
  loading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'solid' | 'pastel' | 'outline'
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
