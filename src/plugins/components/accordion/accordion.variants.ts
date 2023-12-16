import type { AccordionVariant } from './accordion.types'

export const rounded = {
  none: '',
  sm: 'nui-accordion-rounded',
  md: 'nui-accordion-smooth',
  lg: 'nui-accordion-curved',
} as const satisfies AccordionVariant<'rounded'>

export const action = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
} as const satisfies AccordionVariant<'action'>
