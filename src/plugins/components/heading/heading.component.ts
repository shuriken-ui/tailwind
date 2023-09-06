import { html, unsafeStatic } from 'lit/static-html.js'
import { spread } from '@open-wc/lit-helpers'

import type { HeadingAttrs } from './heading.types'
import * as variants from './heading.variants'

/**
 * Primary UI component for user interaction
 */
export const Heading = ({
  size = 'xl',
  weight = 'semibold',
  lead = 'normal',
  as = 'p',
  children,
  ...attrs
}: HeadingAttrs) => {
  return html`
    <${unsafeStatic(as)} class=${[
      'nui-heading',
      size && variants.size[size],
      weight && variants.weight[weight],
      lead && variants.lead[lead],
    ]
      .filter(Boolean)
      .join(' ')}
      ${spread(attrs)}>${children}</${unsafeStatic(as)}>
  `
}
