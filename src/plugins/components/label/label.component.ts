import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { LabelAttrs } from './label.types'
import * as variants from './label.variants'

/**
 * Primary UI component for user interaction
 */
export const Label = ({ classes, children, ...attrs }: LabelAttrs) => {
  return html`
    <label class=${cn('nui-label', classes?.wrapper)} ${spread(attrs)}>
      ${children}
    </label>
  `
}
