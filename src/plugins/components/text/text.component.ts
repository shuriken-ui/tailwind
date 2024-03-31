import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { TextAttrs } from './text.types'
import * as variants from './text.variants'

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  size = 'sm',
  weight = 'normal',
  lead = 'normal',
  classes,
  children,
  ...attrs
}: TextAttrs) => {
  return html`
    <span
      class=${cn(
        'nui-text',
        size && variants.size[size],
        weight && variants.weight[weight],
        lead && variants.lead[lead],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${children}
    </span>
  `
}
