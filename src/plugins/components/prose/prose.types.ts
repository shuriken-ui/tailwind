import type { PropertyVariant } from '~/types/utils'

export interface ProseProps extends Record<string, unknown> {
  shape?: 'straight' | 'rounded' | 'curved'
}

export interface ProseEvents {}

export interface ProseSlots {
  children: any
}

export type ProseAttrs = ProseProps & ProseEvents & ProseSlots
export type ProseVariant<T> = PropertyVariant<T, ProseProps>
