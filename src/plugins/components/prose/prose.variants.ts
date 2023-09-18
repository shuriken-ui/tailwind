import type { ProseVariant } from './prose.types'

export const shape = {
  straight: 'nui-prose-straight',
  rounded: 'nui-prose-rounded',
  curved: 'nui-prose-curved',
} as const satisfies ProseVariant<'shape'>
