import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

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
    <div class=${cn('nui-button-group', classes?.wrapper)} ${spread(attrs)}>
      ${children}
    </div>
  `
}
