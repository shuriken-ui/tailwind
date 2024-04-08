import type { PropertyVariant } from '~/types/utils'

export interface SwitchThinProps extends Record<string, unknown> {
  id?: string
  label?: string
  sublabel?: string
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'black'
  classes?: {
    wrapper?: string | string[]
    outer?: string | string[]
    input?: string | string[]
    handle?: string | string[]
    track?: string | string[]
  }
}

export interface SwitchThinEvents {}

export interface SwitchThinSlots {}

export type SwitchThinAttrs = SwitchThinProps &
  SwitchThinEvents &
  SwitchThinSlots
export type SwitchThinVariant<T> = PropertyVariant<T, SwitchThinProps>
