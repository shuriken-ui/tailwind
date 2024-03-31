import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { RadioAttrs } from './radio.types'
import * as variants from './radio.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

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
      class=${cn(
        'nui-radio',
        color && variants.color[color],
        classes?.wrapper,
        '?disabled' in attrs && 'opacity-50',
      )}
    >
      <div class="nui-radio-outer">
        <input
          id="${id}"
          class=${cn('nui-radio-input', '?disabled' && 'cursor-not-allowed')}
          ${spread(attrs)}
          type="radio"
        />
        <div
          class=${cn(
            'nui-radio-inner',
            classes?.inputBg,
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
          )}
        ></div>
        <div
          class=${cn(
            'nui-radio-dot',
            classes?.inputDot,
            '?disabled' in attrs && 'opacity-50',
          )}
        ></div>
      </div>
      <div class="nui-radio-label-wrapper">
        <label
          for="${id}"
          class=${cn(
            'nui-radio-label-text',
            classes?.label,
            '?disabled' in attrs && 'cursor-not-allowed',
          )}
        >
          ${label}
        </label>
        ${error && typeof error === 'string'
          ? html`
              <div class="nui-radio-error">
                ${InputHelpText({
                  color: 'danger',
                  children: error,
                })}
              </div>
            `
          : ''}
      </div>
    </div>
  `
}
