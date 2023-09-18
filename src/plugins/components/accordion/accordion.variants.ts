import type { AccordionVariant } from './accordion.types'

export const shape = {
  straight: '',
  rounded: 'nui-accordion-rounded',
  smooth: 'nui-accordion-smooth',
  curved: 'nui-accordion-curved',
} as const satisfies AccordionVariant<'shape'>

export const action = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
} as const satisfies AccordionVariant<'action'>
