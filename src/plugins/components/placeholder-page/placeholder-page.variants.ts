import type { PlaceholderPageVariant } from './placeholder-page.types'

export const size = {
  xs: 'nui-placeholder-xs',
  sm: 'nui-placeholder-sm',
  md: 'nui-placeholder-md',
  lg: 'nui-placeholder-lg',
  xl: 'nui-placeholder-xl',
} as const satisfies PlaceholderPageVariant<'imageSize'>
