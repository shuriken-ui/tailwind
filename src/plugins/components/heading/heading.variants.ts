import type { HeadingVariant } from './heading.types'

export const size = {
  xs: 'nui-heading-xs',
  sm: 'nui-heading-sm',
  md: 'nui-heading-md',
  lg: 'nui-heading-lg',
  xl: 'nui-heading-xl',
  '2xl': 'nui-heading-2xl',
  '3xl': 'nui-heading-3xl',
  '4xl': 'nui-heading-4xl',
  '5xl': 'nui-heading-5xl',
  '6xl': 'nui-heading-6xl',
  '7xl': 'nui-heading-7xl',
  '8xl': 'nui-heading-8xl',
  '9xl': 'nui-heading-9xl',
} as const satisfies HeadingVariant<'size'>

export const weight = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
} as const satisfies HeadingVariant<'weight'>

export const lead = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
} as const satisfies HeadingVariant<'lead'>
