import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { DropdownDividerAttrs } from './dropdown-divider.types'
import * as variants from './dropdown-divider.variants'

/**
 * Primary UI component for user interaction
 */
export const DropdownDivider = ({
  classes,
  ...attrs
}: DropdownDividerAttrs) => {
  return html`
    <div
      class=${['nui-dropdown-divider', classes?.wrapper]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    ></div>
  `
}
