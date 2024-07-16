import type { PropertyVariant } from '~/types/utils'

export interface ButtonIconProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
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
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ButtonIconEvents {
  onClick?: () => void
}

export interface ButtonIconSlots {
  children: any
}

export type ButtonIconAttrs = ButtonIconProps &
  ButtonIconEvents &
  ButtonIconSlots
export type ButtonIconVariant<T> = PropertyVariant<T, ButtonIconProps>
