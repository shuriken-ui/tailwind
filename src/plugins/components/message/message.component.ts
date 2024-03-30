import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { MessageAttrs } from './message.types'
import * as variants from './message.variants'

/**
 * Primary UI component for user interaction
 */
export const Message = ({
  color = 'success',
  rounded = 'sm',
  closable,
  icon,
  message,
  classes,
  ...attrs
}: MessageAttrs) => {
  return html`
    <div
      class=${[
        'nui-message',
        color && variants.color[color],
        rounded && variants.rounded[rounded],
        classes?.wrapper,
        icon ? 'nui-has-icon' : 'nui-has-text',
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${icon
        ? html`
            <div class="nui-message-icon-outer">${icon}</div>
          `
        : ''}
      <span class="nui-message-inner-text">${message}</span>
      ${closable
        ? html`
            <button
              type="button"
              tabindex="0"
              class="nui-message-close"
              class=${[
                'nui-message-close',
                rounded && variants.rounded[rounded],
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <svg
                class="nui-close-icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
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
        : ''}
    </div>
  `
}
