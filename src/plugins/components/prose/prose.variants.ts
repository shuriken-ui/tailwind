import type { ProseVariant } from './prose.types'

export const rounded = {
  none: 'nui-prose-rounded-none',
  sm: 'nui-prose-rounded-sm',
  md: 'nui-prose-rounded-md',
  lg: 'nui-prose-rounded-lg',
} as const satisfies ProseVariant<'rounded'>
