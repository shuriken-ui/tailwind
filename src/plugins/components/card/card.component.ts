import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { CardAttrs } from './card.types'
import * as variants from './card.variants'

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  color = 'default',
  shadow,
  rounded = 'sm',
  classes,
  children,
  ...attrs
}: CardAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-card',
        color && variants.color[color],
        rounded && variants.rounded[rounded],
        shadow === 'flat' && 'nui-card-shadow',
        shadow === 'hover' && 'nui-card-shadow-hover',
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${children}
    </div>
  `
}
