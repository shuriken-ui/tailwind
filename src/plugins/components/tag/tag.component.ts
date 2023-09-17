import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { TagAttrs } from './tag.types'
import * as variants from './tag.variants'

/**
 * Primary UI component for user interaction
 */
export const Tag = ({
  shadow,
  shape = 'full',
  children,
  flavor = 'solid',
  size = 'md',
  color = 'default',
  classes,
  ...attrs
}: TagAttrs) => {
  return html`
    <span
      class=${[
        'nui-tag',
        variants.size[size],
        variants.flavor[flavor],
        variants.color[color],
        shape && variants.shape[shape],
        shadow && flavor === 'solid' && variants.shadow[shadow],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${children}
    </span>
  `
}
