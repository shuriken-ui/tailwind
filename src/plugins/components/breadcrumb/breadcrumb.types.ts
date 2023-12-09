import type { PropertyVariant } from '~/types/utils'

export interface BreadcrumbProps extends Record<string, unknown> {
  separator?: 'slash' | 'chevron' | 'dot' | 'arrow'
  items?: {
    label?: string
    hideLabel?: boolean
    icon?: any
    href?: string
  }[]
  classes?: {
    wrapper?: string | string[]
    list?: string | string[]
    dropdown?: string | string[]
    item?: string | string[]
  }
}

export interface BreadcrumbEvents {}

export interface BreadcrumbSlots {}

export type BreadcrumbAttrs = BreadcrumbProps &
  BreadcrumbEvents &
  BreadcrumbSlots
export type BreadcrumbVariant<T> = PropertyVariant<T, BreadcrumbProps>
