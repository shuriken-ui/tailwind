import type { PropertyVariant } from '~/types/utils'

export interface MaskProps extends Record<string, unknown> {}

export interface MaskEvents {}

export interface MaskSlots {}

export type MaskAttrs = MaskProps & MaskEvents & MaskSlots
export type MaskVariant<T> = PropertyVariant<T, MaskProps>
