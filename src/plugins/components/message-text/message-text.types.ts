import type { PropertyVariant } from '~/types/utils'

export interface MessageTextProps extends Record<string, unknown> {
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
  classes?: {
    wrapper?: string | string[]
  }
}

export interface MessageTextEvents {}

export interface MessageTextSlots {}

export type MessageTextAttrs = MessageTextProps &
  MessageTextEvents &
  MessageTextSlots
export type MessageTextVariant<T> = PropertyVariant<T, MessageTextProps>
