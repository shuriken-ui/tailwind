import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { RadioAttrs } from './radio.types'
import * as variants from './radio.variants'
import { e } from 'vitest/dist/reporters-2ff87305'

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  id,
  color = 'default',
  label,
  error,
  classes = {
    wrapper: '',
    label: '',
    inputDot: '',
    inputBg: '',
  },
  ...attrs
}: RadioAttrs) => {
  return html`
    <div
      class=${[
        'nui-radio',
        color && variants.color[color],
        classes?.wrapper,
        '?disabled' in attrs && 'opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div class="nui-radio-outer">
        <input
          id="${id}"
          class=${['nui-radio-input', '?disabled' && 'cursor-not-allowed']
            .filter(Boolean)
            .join(' ')}
          ${spread(attrs)}
          type="radio"
        />
        <div
          class=${[
            'nui-radio-inner',
            classes?.inputBg,
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
          ]
            .filter(Boolean)
            .join(' ')}
        ></div>
        <div
          class=${[
            'nui-radio-dot',
            classes?.inputDot,
            '?disabled' in attrs && 'opacity-50',
          ]
            .filter(Boolean)
            .join(' ')}
        ></div>
      </div>
      <div class="nui-radio-label-wrapper">
        <label
          for="${id}"
          class=${[
            'nui-radio-label-text',
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
            <div class="nui-radio-error">${error}</div>
          `
          : ''}
      </div>
    </div>
  `
}
