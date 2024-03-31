import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { InputHelpTextAttrs } from './input-help-text.types'
import * as variants from './input-help-text.variants'

/**
 * Primary UI component for user interaction
 */
export const InputHelpText = ({
  color,
  children,
  ...attrs
}: InputHelpTextAttrs) => {
  return html`
    <span
      class=${cn('nui-input-help-text', color && variants.color[color])}
      ${spread(attrs)}
    >
      ${children}
    </span>
  `
}
