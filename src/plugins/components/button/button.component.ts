import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ButtonAttrs } from './button.types'
import * as variants from './button.variants'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  loading,
  shadow,
  shape,
  children,
  flavor = 'solid',
  size = 'md',
  color = 'default',
  onClick,
  ...attrs
}: ButtonAttrs) => {
  return html`
    <button
      class=${[
        'nui-button',
        variants.size[size],
        variants.flavor[flavor],
        variants.color[color],
        loading && 'nui-button-loading',
        shape && variants.shape[shape],
        shadow && variants.shadow[shadow],
      ]
        .filter(Boolean)
        .join(' ')}
      @click=${onClick}
      ${spread(attrs)}
    >
      ${loading
        ? /* @todo: replace nui-placeload with component */ html`
          <span
            class="nui-placeload animate-nui-placeload h-4 w-12 rounded"
          ></span>
        `
        : children ||
          html`
            <span>${label}</span>
          `}
    </button>
  `
}
