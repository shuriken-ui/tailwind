import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

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
      class=${cn('nui-dropdown-divider', classes?.wrapper)}
      ${spread(attrs)}
    ></div>
  `
}
