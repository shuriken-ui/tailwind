import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { InputAttrs } from './input.types'
import * as variants from './input.variants'

/**
 * Primary UI component for user interaction
 */
export const InputNumber = ({
  id,
  shape = 'rounded',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  loading,
  colorFocus,
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
    addon: '',
    icon: '',
    error: '',
  },
  icon,
  actionSlot,
  ...attrs
}: InputAttrs) => {
  return html`
    <div
      class=${[
        'nui-input-number-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        shape && variants.shape[shape],
        error && !loading && 'nui-input-number-error',
        loading && 'nui-input-number-loading',
        labelFloat && 'nui-input-number-label-float',
        icon && 'nui-has-icon',
        colorFocus && 'nui-input-number-focus',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${['nui-input-number-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-input-number-outer">
        <input
          id="${id}"
          class="${['nui-input-number', classes?.input]
            .filter(Boolean)
            .join(' ')}"
          ${spread(attrs)}
        />
        ${label && labelFloat
          ? html`
              <label
                class="${['nui-label-float', classes?.label]
                  .filter(Boolean)
                  .join(' ')}"
                for="${id}"
              >
                ${label}
              </label>
            `
          : ''}
        ${loading &&
        html`
          <div class="nui-input-number-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div
            class="${['nui-input-number-icon', classes?.icon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${icon}
          </div>
        `}
        <div class="nui-input-number-buttons">
          <button aria-label="Increment">
            <svg
              class=${['nui-chevron', 'rotate-180'].filter(Boolean).join(' ')}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
          <button aria-label="Decrement">
            <svg
              class=${['nui-chevron'].filter(Boolean).join(' ')}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
        </div>
      </div>
      ${error &&
      typeof error === 'string' &&
      html`
        <span
          class="${['nui-input-number-error-text', classes?.error]
            .filter(Boolean)
            .join(' ')}"
        >
          ${error}
        </span>
      `}
    </div>
  `
}