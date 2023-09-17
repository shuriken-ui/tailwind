import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ToastAttrs } from './toast.types'
import * as variants from './toast.variants'
import { ButtonClose } from '../button-close/button-close.component'

/**
 * Primary UI component for user interaction
 */
export const Toast = ({
  title,
  text,
  contrast = 'white',
  color = 'default',
  shape = 'rounded',
  borderless,
  icon,
  iconBlock,
  ...attrs
}: ToastAttrs) => {
  return html`
    <div
      class=${[
        'nui-toast',
        color && variants.color[color],
        contrast && variants.contrast[contrast],
        shape && variants.shape[shape],
        borderless && 'nui-toast-borderless',
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${iconBlock && !icon
        ? html`
          <div class="nui-toast-icon-block">${iconBlock}</div>
        `
        : ''}
      <div class="nui-toast-inner">
        ${icon && !iconBlock
          ? html`
            ${icon}
          `
          : ''}
        <div>
          <h4 class="nui-toast-title">${title}</h4>
          <p class="nui-toast-subtitle">${text}</p>
        </div>
        ${ButtonClose({
          shape: 'full',
          color: 'default',
        })}
      </div>
    </div>
  `
}
