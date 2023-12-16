import type { PropertyVariant } from '~/types/utils'

export interface ProseProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ProseEvents {}

export interface ProseSlots {
  children: any
}

export type ProseAttrs = ProseProps & ProseEvents & ProseSlots
export type ProseVariant<T> = PropertyVariant<T, ProseProps>
