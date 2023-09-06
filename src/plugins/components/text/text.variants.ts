import type { TextVariant } from './text.types'

export const size = {
  xs: 'nui-content-xs',
  sm: 'nui-content-sm',
  md: 'nui-content-md',
  lg: 'nui-content-lg',
  xl: 'nui-content-xl',
  '2xl': 'nui-content-2xl',
  '3xl': 'nui-content-3xl',
  '4xl': 'nui-content-4xl',
  '5xl': 'nui-content-5xl',
  '6xl': 'nui-content-6xl',
  '7xl': 'nui-content-7xl',
  '8xl': 'nui-content-8xl',
  '9xl': 'nui-content-9xl',
} as const satisfies TextVariant<'size'>

export const weight = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
} as const satisfies TextVariant<'weight'>

export const lead = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
} as const satisfies TextVariant<'lead'>
