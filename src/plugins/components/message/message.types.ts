import type { PropertyVariant } from '~/types/utils'

export interface MessageProps extends Record<string, unknown> {
  type?:
    | 'default'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  message?: string
  icon?: boolean | string
  closable?: boolean
}

export interface MessageEvents {}

export interface MessageSlots {
  icon?: any
}

export type MessageAttrs = MessageProps & MessageEvents & MessageSlots
export type MessageVariant<T> = PropertyVariant<T, MessageProps>