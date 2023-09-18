import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { LabelAttrs } from './label.types'
import * as variants from './label.variants'

/**
 * Primary UI component for user interaction
 */
export const Label = ({ classes, children, ...attrs }: LabelAttrs) => {
  return html`
    <label
      class=${['nui-label', classes?.wrapper].filter(Boolean).join(' ')}
      ${spread(attrs)}
    >
      ${children}
    </label>
  `
}
