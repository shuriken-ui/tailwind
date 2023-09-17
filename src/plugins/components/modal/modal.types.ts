import type { PropertyVariant } from '~/types/utils'

export interface ModalProps extends Record<string, unknown> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  classes?: {
    wrapper?: string | string[]
    backdrop?: string | string[]
    content?: string | string[]
    dialog?: string | string[]
  }
}

export interface ModalEvents {}

export interface ModalSlots {
  children: any
}

export type ModalAttrs = ModalProps & ModalEvents & ModalSlots
export type ModalVariant<T> = PropertyVariant<T, ModalProps>
