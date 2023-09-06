import type { ParagraphVariant } from './paragraph.types'

export const size = {
  xs: 'nui-paragraph-xs',
  sm: 'nui-paragraph-sm',
  md: 'nui-paragraph-md',
  lg: 'nui-paragraph-lg',
  xl: 'nui-paragraph-xl',
  '2xl': 'nui-paragraph-2xl',
  '3xl': 'nui-paragraph-3xl',
  '4xl': 'nui-paragraph-4xl',
  '5xl': 'nui-paragraph-5xl',
  '6xl': 'nui-paragraph-6xl',
  '7xl': 'nui-paragraph-7xl',
  '8xl': 'nui-paragraph-8xl',
  '9xl': 'nui-paragraph-9xl',
} as const satisfies ParagraphVariant<'size'>

export const weight = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
} as const satisfies ParagraphVariant<'weight'>

export const lead = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
} as const satisfies ParagraphVariant<'lead'>
