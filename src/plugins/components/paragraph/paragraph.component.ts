import { html, unsafeStatic } from 'lit/static-html.js'
import { spread } from '@open-wc/lit-helpers'

import type { ParagraphAttrs } from './paragraph.types'
import * as variants from './paragraph.variants'

/**
 * Primary UI component for user interaction
 */
export const Paragraph = ({
  size = 'md',
  weight = 'normal',
  lead = 'normal',
  as = 'p',
  classes,
  children,
  ...attrs
}: ParagraphAttrs) => {
  return html`
   <${unsafeStatic(as)} class=${[
     'nui-paragraph',
     size && variants.size[size],
     weight && variants.weight[weight],
     lead && variants.lead[lead],
     classes?.wrapper,
   ]
     .filter(Boolean)
     .join(' ')}
     ${spread(attrs)}>${children}</${unsafeStatic(as)}>
  `
}
