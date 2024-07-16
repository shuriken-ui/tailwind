import type { PropertyVariant } from '~/types/utils'

export interface SelectProps extends Record<string, unknown> {
  id?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  placeholder?: string
  labelFloat?: boolean
  colorFocus?: boolean
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
  error?: string | boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    select?: string | string[]
    chevron?: string | string[]
    icon?: string | string[]
    error?: string | string[]
  }
}

export interface SelectEvents {}

export interface SelectSlots {
  icon?: any
  options?: any
}

export type SelectAttrs = SelectProps & SelectEvents & SelectSlots
export type SelectVariant<T> = PropertyVariant<T, SelectProps>
