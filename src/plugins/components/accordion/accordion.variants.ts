import type { AccordionVariant } from './accordion.types'

export const color = {
  default: 'nui-accordion-default',
  'default-contrast': 'nui-accordion-default-contrast',
  muted: 'nui-accordion-muted',
  'muted-contrast': 'nui-accordion-muted-contrast',
} as const satisfies AccordionVariant<'color'>

export const dotColor = {
  default: 'nui-dot-default',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  success: 'nui-dot-success',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  dark: 'nui-dot-dark',
  black: 'nui-dot-black',
} as const satisfies AccordionVariant<'dotColor'>

export const rounded = {
  none: '',
  sm: 'nui-accordion-rounded-sm',
  md: 'nui-accordion-rounded-md',
  lg: 'nui-accordion-rounded-lg',
} as const satisfies AccordionVariant<'rounded'>

export const action = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
} as const satisfies AccordionVariant<'action'>
