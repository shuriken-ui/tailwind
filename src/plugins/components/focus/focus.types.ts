import type { PropertyVariant } from '~/types/utils'

export interface FocusProps extends Record<string, unknown> {}

export interface FocusEvents {}

export interface FocusSlots {}

export type FocusAttrs = FocusProps & FocusEvents & FocusSlots
export type FocusVariant<T> = PropertyVariant<T, FocusProps>
