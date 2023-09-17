import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ThemeToggleAttrs } from './theme-toggle.types'
import * as variants from './theme-toggle.variants'

/**
 * Primary UI component for user interaction
 */
export const ThemeToggle = ({
  inverted,
  disableTransitions,
  classes,
  ...attrs
}: ThemeToggleAttrs) => {
  return html`
    <label
      class=${[
        'nui-theme-toggle',
        inverted && 'nui-theme-toggle-inverted',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input type="checkbox" class="nui-theme-toggle-input" />
      <span class="nui-theme-toggle-inner">
        <svg class="nui-sun" aria-hidden="true" viewBox="0 0 24 24">
          <g fill="currentColor" stroke="currentColor" class="stroke-2">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </g>
        </svg>
        <svg class="nui-moon" aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            stroke="currentColor"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            class="stroke-2"
          />
        </svg>
      </span>
    </label>
  `
}
