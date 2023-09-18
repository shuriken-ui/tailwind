import type { PropertyVariant } from '~/types/utils'

export interface PaginationProps extends Record<string, unknown> {
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface PaginationEvents {}

export interface PaginationSlots {}

export type PaginationAttrs = PaginationProps &
  PaginationEvents &
  PaginationSlots
export type PaginationVariant<T> = PropertyVariant<T, PaginationProps>
