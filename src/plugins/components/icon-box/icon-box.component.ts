import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { IconBoxAttrs } from './icon-box.types'
import * as variants from './icon-box.variants'

/**
 * Primary UI component for user interaction
 */
export const IconBox = ({
  rounded = 'full',
  children,
  variant = 'solid',
  size = 'md',
  color = 'default',
  bordered,
  mask,
  classes,
  onClick,
  ...attrs
}: IconBoxAttrs) => {
  return html`
    <div
      class=${[
        'nui-icon-box',
        variants.size[size],
        variants.variant[variant],
        variants.color[color],
        bordered && 'nui-box-bordered',
        rounded && variants.rounded[rounded],
        rounded === 'none' && mask && `nui-box-mask ${variants.mask[mask]}`,
        classes?.wrapper,
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
