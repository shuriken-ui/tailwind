import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { CardAttrs } from './card.types'
import * as variants from './card.variants'

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  color = 'white',
  elevated,
  elevatedHover,
  shape = 'rounded',
  children,
  ...attrs
}: CardAttrs) => {
  return html`
    <div
      class=${[
        'nui-card',
        color && variants.color[color],
        shape && variants.shape[shape],
        elevated && 'nui-card-shadow',
        elevatedHover && 'nui-card-shadow-hover',
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${children}
    </div>
  `
}
