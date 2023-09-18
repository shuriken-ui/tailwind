import type { PropertyVariant } from '~/types/utils'

export interface SnackProps extends Record<string, unknown> {
  label?: string
  image?: string
  size?: 'sm' | 'md'
  color?: 'default' | 'muted'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface SnackEvents {}

export interface SnackSlots {
  icon?: any
}

export type SnackAttrs = SnackProps & SnackEvents & SnackSlots
export type SnackVariant<T> = PropertyVariant<T, SnackProps>
