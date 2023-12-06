import type { PropertyVariant } from '~/types/utils'

export interface CheckboxProps extends Record<string, unknown> {
  label?: string
  id?: string
  error?: string | boolean
  indeterminate?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  color?:
    | 'default'
    | 'light'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    input?: string | string[]
  }
}

export interface CheckboxEvents {}

export interface CheckboxSlots {}

export type CheckboxAttrs = CheckboxProps & CheckboxEvents & CheckboxSlots
export type CheckboxVariant<T> = PropertyVariant<T, CheckboxProps>
