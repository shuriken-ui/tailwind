import type { PropertyVariant } from '~/types/utils'

export interface ButtonActionProps extends Record<string, unknown> {
  label?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  loading?: boolean
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
    | 'none'
  classes?: {
    wrapper?: string | string[]
  }
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
