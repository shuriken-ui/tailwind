import type { ProseVariant } from './prose.types'

export const rounded = {
  none: 'nui-prose-straight',
  sm: 'nui-prose-rounded',
  md: 'nui-prose-smooth',
  lg: 'nui-prose-curved',
} as const satisfies ProseVariant<'rounded'>
