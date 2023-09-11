import type { PropertyVariant } from '~/types/utils'

export interface SwitchThinProps extends Record<string, unknown> {
  id?: string
  label?: string
  sublabel?: string
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export interface SwitchThinEvents {}

export interface SwitchThinSlots {}

export type SwitchThinAttrs = SwitchThinProps &
  SwitchThinEvents &
  SwitchThinSlots
export type SwitchThinVariant<T> = PropertyVariant<T, SwitchThinProps>
