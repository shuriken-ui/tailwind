import type { PropertyVariant } from '~/types/utils'

export interface RadioProps extends Record<string, unknown> {
  label?: string
  id?: string
  error?: string | boolean
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
    inputDot?: string | string[]
    inputBg?: string | string[]
  }
}

export interface RadioEvents {}

export interface RadioSlots {}

export type RadioAttrs = RadioProps & RadioEvents & RadioSlots
export type RadioVariant<T> = PropertyVariant<T, RadioProps>
