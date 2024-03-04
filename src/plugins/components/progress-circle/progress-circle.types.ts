import type { PropertyVariant } from '~/types/utils'

export interface ProgressCircleProps extends Record<string, unknown> {
  value?: number
  max?: number
  size?: number
  thickness?: number
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'black'
  classes?: {
    wrapper?: string | string[]
    track?: string | string[]
    progress?: string | string[]
  }
}

export interface ProgressCircleEvents {}

export interface ProgressCircleSlots {}

export type ProgressCircleAttrs = ProgressCircleProps &
  ProgressCircleEvents &
  ProgressCircleSlots
export type ProgressCircleVariant<T> = PropertyVariant<T, ProgressCircleProps>
