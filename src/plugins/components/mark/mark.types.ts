import type { PropertyVariant } from '~/types/utils'

export interface MarkProps extends Record<string, unknown> {}

export interface MarkEvents {}

export interface MarkSlots {}

export type MarkAttrs = MarkProps & MarkEvents & MarkSlots
export type MarkVariant<T> = PropertyVariant<T, MarkProps>
