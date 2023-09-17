import type { PropertyVariant } from '~/types/utils'

export interface PlaceloadProps extends Record<string, unknown> {
  classes?: {
    wrapper?: string | string[]
  }
}

export interface PlaceloadEvents {}

export interface PlaceloadSlots {}

export type PlaceloadAttrs = PlaceloadProps & PlaceloadEvents & PlaceloadSlots
export type PlaceloadVariant<T> = PropertyVariant<T, PlaceloadProps>
