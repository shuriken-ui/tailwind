import type { PropertyVariant } from '~/types/utils'

export interface AccordionProps extends Record<string, unknown> {
  items: {
    title: string
    content: string
  }[]
  openItems?: number[]
  exclusive?: boolean
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved'
  action?: 'dot' | 'chevron' | 'plus'
}

export interface AccordionEvents {}

export interface AccordionSlots {}

export type AccordionAttrs = AccordionProps & AccordionEvents & AccordionSlots
export type AccordionVariant<T> = PropertyVariant<T, AccordionProps>
