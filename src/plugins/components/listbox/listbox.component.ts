import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ListboxAttrs } from './listbox.types'
import * as variants from './listbox.variants'

/**
 * Primary UI component for user interaction
 */
export const Listbox = ({
  id,
  value,
  items,
  shape = 'rounded',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  multiple,
  loading,
  error,
  classes,
  iconSlot,
  ...attrs
}: ListboxAttrs) => {
  return html`
    <div
      class=${[
        'nui-listbox',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        shape && variants.shape[shape],
        error && !loading && 'nui-listbox-error',
        loading && 'nui-listbox-loading',
        labelFloat && 'nui-listbox-label-float',
        iconSlot && 'nui-has-icon',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label && !labelFloat
        ? html`
          <label
            class="${['nui-listbox-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
            for="${id}"
          >
            ${label}
          </label>
        `
        : ''}
      <div class="nui-listbox-outer">
        <button type="button" class="nui-listbox-button" ${spread(attrs)}>
          ${value}
        </button>
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
        ${iconSlot &&
        html`
          <div
            class="${['nui-listbox-icon', classes?.icon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${iconSlot}
          </div>
        `}
        <div class="nui-listbox-chevron">
          <svg
            class="nui-listbox-chevron-inner"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        ${loading &&
        html`
          <div class="nui-listbox-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-listbox-error-text', classes?.error]
              .filter(Boolean)
              .join(' ')}"
          >
            ${error}
          </span>
        `}
        <div class="nui-listbox-options">${items}</div>
      </div>
    </div>
  `
}
