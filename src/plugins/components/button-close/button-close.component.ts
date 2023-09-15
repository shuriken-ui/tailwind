import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ButtonCloseAttrs } from './button-close.types'
import * as variants from './button-close.variants'

/**
 * Primary UI component for user interaction
 */
export const ButtonClose = ({
  shape,
  color = 'default',
  classes,
  onClick,
  ...attrs
}: ButtonCloseAttrs) => {
  return html`
    <button
      class=${[
        'nui-button-close',
        variants.color[color],
        shape && variants.shape[shape],
        classes,
      ]
        .filter(Boolean)
        .join(' ')}
      @click=${onClick}
      ${spread(attrs)}
    >
      <svg class="nui-button-icon" aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 6 6 18M6 6l12 12"
        />
      </svg>
    </button>
  `
}
