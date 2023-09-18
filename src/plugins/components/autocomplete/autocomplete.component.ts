import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { AutocompleteAttrs } from './autocomplete.types'
import * as variants from './autocomplete.variants'

/**
 * Primary UI component for user interaction
 */
export const Autocomplete = ({
  id,
  items,
  shape = 'rounded',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  clearable,
  dropdown,
  multiple,
  loading,
  error,
  classes,
  icon,
  chips,
  ...attrs
}: AutocompleteAttrs) => {
  return html`
    <div
      class=${[
        'nui-autocomplete',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        shape && variants.shape[shape],
        error && !loading && 'nui-autocomplete-error',
        loading && 'nui-autocomplete-loading',
        labelFloat && 'nui-autocomplete-label-float',
        icon && 'nui-has-icon',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${multiple &&
      html`
        <div class="nui-autocomplete-multiple">
          <ul class="nui-autocomplete-multiple-list">
            ${chips}
          </ul>
        </div>
      `}
      ${label && !labelFloat
        ? html`
            <label
              class="${['nui-autocomplete-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-autocomplete-outer">
        <input
          id="${id}"
          type="text"
          class="${['nui-autocomplete-input', classes?.input]
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
          <div class="nui-autocomplete-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div
            class="${['nui-autocomplete-icon', classes?.icon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${icon}
          </div>
        `}
        ${clearable &&
        html`
          <button type="button" class="nui-autocomplete-clear">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="nui-autocomplete-clear-inner"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 6 6 18M6 6l12 12"
              ></path>
            </svg>
          </button>
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-autocomplete-error-text', classes?.error]
              .filter(Boolean)
              .join(' ')}"
          >
            ${error}
          </span>
        `}
        <div class="nui-autocomplete-results">${items}</div>
      </div>
    </div>
  `
}
