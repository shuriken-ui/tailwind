import type { PropertyVariant } from '~/types/utils'

export interface AccordionProps extends Record<string, unknown> {
  items: {
    title: string
    content: string
  }[]
  openItems?: number[]
  exclusive?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  action?: 'dot' | 'chevron' | 'plus'
  classes?: {
    wrapper?: string | string[]
    details?: string | string[]
    summary?: string | string[]
    header?: string | string[]
    content?: string | string[]
  }
}

export interface AccordionEvents {}

export interface AccordionSlots {}

export type AccordionAttrs = AccordionProps & AccordionEvents & AccordionSlots
export type AccordionVariant<T> = PropertyVariant<T, AccordionProps>
