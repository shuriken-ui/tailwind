import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { SnackAttrs } from './snack.types'
import * as variants from './snack.variants'
import { ButtonClose } from '../button-close/button-close.component'

/**
 * Primary UI component for user interaction
 */
export const Snack = ({
  label,
  size = 'md',
  color = 'muted',
  classes,
  icon,
  image,
  ...attrs
}: SnackAttrs) => {
  return html`
    <div
      class=${[
        'nui-snack',
        color && variants.color[color],
        size && variants.size[size],
        icon || image ? 'nui-has-media' : '',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${icon &&
      !image &&
      html`
        <div class="nui-snack-icon">${icon}</div>
      `}
      ${image &&
      !icon &&
      html`
        <div class="nui-snack-image">
          <img
            src="${image}"
            class="nui-snack-image-inner"
            alt="${label} image"
          />
        </div>
      `}
      <span class="nui-snack-text">
        <slot>${label}</slot>
      </span>
      ${size === 'xs'
        ? html`
            ${ButtonClose({
              rounded: 'full',
              size: 'xs',
              classes: {
                wrapper: 'nui-snack-button scale-75',
              },
            })}
          `
        : ''}
      ${size === 'sm'
        ? html`
            ${ButtonClose({
              rounded: 'full',
              size: 'sm',
              classes: {
                wrapper: 'nui-snack-button scale-75',
              },
            })}
          `
        : ''}
      ${size === 'md'
        ? html`
            ${ButtonClose({
              rounded: 'full',
              size: 'md',
              classes: {
                wrapper: 'nui-snack-button scale-75',
              },
            })}
          `
        : ''}
    </div>
  `
}
