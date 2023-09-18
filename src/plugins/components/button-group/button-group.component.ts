import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ButtonGroupAttrs } from './button-group.types'
import * as variants from './button-group.variants'

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup = ({
  classes,
  children,
  ...attrs
}: ButtonGroupAttrs) => {
  return html`
    <div
      class=${['nui-button-group', classes?.wrapper].filter(Boolean).join(' ')}
      ${spread(attrs)}
    >
      ${children}
    </div>
  `
}
