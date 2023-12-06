import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { CheckboxAttrs } from './checkbox.types'
import * as variants from './checkbox.variants'

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  id,
  rounded = 'sm',
  color = 'default',
  label,
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
  },
  ...attrs
}: CheckboxAttrs) => {
  return html`
    <div
      class=${[
        'nui-checkbox',
        rounded && variants.rounded[rounded],
        color && variants.color[color],
        classes?.wrapper,
        '?disabled' in attrs && 'opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div class="nui-checkbox-outer">
        <input
          id="${id}"
          class=${['nui-checkbox-input', classes?.input]
            .filter(Boolean)
            .join(' ')}
          ${spread(attrs)}
          type="checkbox"
        />
        <div class="nui-checkbox-inner"></div>
        <svg class="nui-icon-check" aria-hidden="true" viewBox="0 0 17 12">
          <path
            fill="currentColor"
            d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
          />
        </svg>
      </div>
      <div class="nui-checkbox-label-wrapper">
        <label
          for="${id}"
          class=${[
            'nui-checkbox-label-text',
            classes?.label,
            '?disabled' in attrs && 'cursor-not-allowed',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          ${label}
        </label>
        ${error && typeof error === 'string'
          ? html`
              <div class="nui-checkbox-error">${error}</div>
            `
          : ''}
      </div>
    </div>
  `
}
