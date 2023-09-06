import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { IconBoxAttrs } from './icon-box.types'
import * as variants from './icon-box.variants'

/**
 * Primary UI component for user interaction
 */
export const IconBox = ({
  shape = 'full',
  children,
  flavor = 'solid',
  size = 'md',
  color = 'default',
  bordered,
  mask,
  onClick,
  ...attrs
}: IconBoxAttrs) => {
  return html`
    <div
      class=${[
        'nui-icon-box',
        variants.size[size],
        variants.flavor[flavor],
        variants.color[color],
        bordered && 'nui-box-bordered',
        shape && variants.shape[shape],
        shape === 'straight' && mask && `nui-box-mask ${variants.mask[mask]}`,
      ]
        .filter(Boolean)
        .join(' ')}
      @click=${onClick}
      ${spread(attrs)}
    >
      ${children}
    </div>
  `
}
