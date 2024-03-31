import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ToastAttrs } from './toast.types'
import * as variants from './toast.variants'
import { ButtonClose } from '../button-close/button-close.component'

/**
 * Primary UI component for user interaction
 */
export const Toast = ({
  title,
  text,
  contrast = 'low-contrast',
  color = 'default',
  rounded = 'md',
  borderless,
  icon,
  iconBlock,
  classes,
  ...attrs
}: ToastAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-toast',
        color && variants.color[color],
        contrast && variants.contrast[contrast],
        rounded && variants.rounded[rounded],
        borderless && 'nui-toast-borderless',
        classes?.wrapper,
      )}
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
        <div class=${cn(icon && !iconBlock && 'ms-2')}>
          <h4 class="nui-toast-title">${title}</h4>
          <p class="nui-toast-subtitle">${text}</p>
        </div>
        ${ButtonClose({
          rounded: 'full',
          color: 'default',
        })}
      </div>
    </div>
  `
}
