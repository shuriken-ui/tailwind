import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { SwitchBallAttrs } from './switch-ball.types'
import * as variants from './switch-ball.variants'

/**
 * Primary UI component for user interaction
 */
export const SwitchBall = ({
  id,
  color = 'primary',
  label,
  sublabel,
  error,
  ...attrs
}: SwitchBallAttrs) => {
  return html`
    <label
      for="${id}"
      class=${[
        'nui-switch-ball',
        color && variants.color[color],
        '?disabled' in attrs && 'opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span class="nui-switch-ball-outer">
        <input
          id="${id}"
          type="checkbox"
          class="nui-switch-ball-input"
          ${spread(attrs)}
        />
        <span class="nui-switch-ball-handle"></span>
        <span class="nui-switch-ball-track"></span>
        <svg
          class="nui-switch-ball-icon"
          aria-hidden="true"
          viewBox="0 0 17 12"
        >
          <path
            fill="currentColor"
            d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
          />
        </svg>
      </span>
      ${sublabel
        ? html`
          <span class="nui-switch-ball-dual-label">
            <span class="nui-switch-ball-label">${label}</span>
            <span class="nui-switch-ball-sublabel">${sublabel}</span>
          </span>
        `
        : html`
          <span class="nui-switch-ball-single-label">${label}</span>
        `}
    </label>
  `
}
