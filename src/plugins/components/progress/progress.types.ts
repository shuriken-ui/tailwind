import type { PropertyVariant } from '~/types/utils'

export interface ProgressProps extends Record<string, unknown> {
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  contrast?: 'default' | 'contrast'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  value?: number
  max?: number
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ProgressEvents {}

export interface ProgressSlots {}

export type ProgressAttrs = ProgressProps & ProgressEvents & ProgressSlots
export type ProgressVariant<T> = PropertyVariant<T, ProgressProps>
