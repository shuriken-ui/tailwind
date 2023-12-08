import type { PropertyVariant } from '~/types/utils'

export interface ToastProps extends Record<string, unknown> {
  title?: string
  text?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  color?:
    | 'default'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  contrast?: 'white' | 'contrast'
  borderless?: boolean
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ToastEvents {}

export interface ToastSlots {
  icon?: any
  iconBlock?: any
}

export type ToastAttrs = ToastProps & ToastEvents & ToastSlots
export type ToastVariant<T> = PropertyVariant<T, ToastProps>
