import type { PropertyVariant } from '~/types/utils'

export interface LabelProps extends Record<string, unknown> {}

export interface LabelEvents {}

export interface LabelSlots {
  children: any
}

export type LabelAttrs = LabelProps & LabelEvents & LabelSlots
export type LabelVariant<T> = PropertyVariant<T, LabelProps>
