import type { PropertyVariant } from '~/types/utils'

export interface ProgressCircleProps extends Record<string, unknown> {
  value?: number
  max?: number
  size?: number
  thickness?: number
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export interface ProgressCircleEvents {}

export interface ProgressCircleSlots {}

export type ProgressCircleAttrs = ProgressCircleProps &
  ProgressCircleEvents &
  ProgressCircleSlots
export type ProgressCircleVariant<T> = PropertyVariant<T, ProgressCircleProps>
