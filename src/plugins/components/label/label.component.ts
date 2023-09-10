import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { LabelAttrs } from './label.types'
import * as variants from './label.variants'

/**
 * Primary UI component for user interaction
 */
export const Label = ({ children, ...attrs }: LabelAttrs) => {
  return html`
    <label class="nui-label" ${spread(attrs)}>${children}</label>
  `
}
