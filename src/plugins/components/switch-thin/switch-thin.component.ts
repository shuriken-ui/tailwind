import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { SwitchThinAttrs } from './switch-thin.types'
import * as variants from './switch-thin.variants'

/**
 * Primary UI component for user interaction
 */
export const SwitchThin = ({
  id,
  color = 'primary',
  label,
  sublabel,
  error,
  classes,
  ...attrs
}: SwitchThinAttrs) => {
  return html`
    <label
      for="${id}"
      class=${[
        'nui-switch-thin',
        color && variants.color[color],
        '?disabled' in attrs && 'opacity-50',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span class="nui-switch-thin-outer">
        <input
          id="${id}"
          type="checkbox"
          class="nui-switch-thin-input"
          ${spread(attrs)}
        />
        <span class="nui-switch-thin-handle"></span>
        <span class="nui-switch-thin-track"></span>
      </span>
      ${sublabel
        ? html`
          <span class="nui-switch-thin-dual-label">
            <span class="nui-switch-thin-label">${label}</span>
            <span class="nui-switch-thin-sublabel">${sublabel}</span>
          </span>
        `
        : html`
          <span class="nui-switch-thin-single-label">${label}</span>
        `}
    </label>
  `
}
