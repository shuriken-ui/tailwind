import type { PropertyVariant } from '~/types/utils'

export interface InputProps extends Record<string, unknown> {
  id?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  labelFloat?: boolean
  colorFocus?: boolean
  loading?: boolean
  error?: string | boolean
  size?: 'sm' | 'md' | 'lg'
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    input?: string | string[]
    addon?: string | string[]
    icon?: string | string[]
    error?: string | string[]
  }
}

export interface InputEvents {}

export interface InputSlots {
  icon?: any
  actionSlot?: any
}

export type InputAttrs = InputProps & InputEvents & InputSlots
export type InputVariant<T> = PropertyVariant<T, InputProps>
