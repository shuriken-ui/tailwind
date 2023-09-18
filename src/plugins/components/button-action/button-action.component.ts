import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ButtonActionAttrs } from './button-action.types'
import * as variants from './button-action.variants'

/**
 * Primary UI component for user interaction
 */
export const ButtonAction = ({
  label,
  loading,
  shape,
  children,
  color = 'default',
  classes,
  onClick,
  ...attrs
}: ButtonActionAttrs) => {
  return html`
    <button
      class=${[
        'nui-button-action',
        variants.color[color],
        loading && 'nui-button-loading',
        shape && variants.shape[shape],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      @click=${onClick}
      ${spread(attrs)}
    >
      ${loading
        ? /* @todo: replace nui-placeload with component */ html`
          <span
            class="nui-placeload animate-nui-placeload h-3 w-8 rounded"
          ></span>
        `
        : children ||
          html`
            <span>${label}</span>
          `}
    </button>
  `
}
