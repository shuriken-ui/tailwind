import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { SelectAttrs } from './select.types'
import * as variants from './select.variants'

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  id,
  shape = 'rounded',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  loading,
  placeholder,
  error,
  classes = {
    wrapper: '',
    label: '',
    select: '',
    chevron: '',
    icon: '',
    error: '',
  },
  icon,
  options,
  ...attrs
}: SelectAttrs) => {
  return html`
    <div
      class=${[
        'nui-select-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        shape && variants.shape[shape],
        error && !loading && 'nui-select-error',
        loading && 'nui-select-loading',
        labelFloat && 'nui-select-label-float',
        icon && 'nui-has-icon',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label && !labelFloat
        ? html`
          <label
            class="${['nui-select-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
            for="${id}"
          >
            ${label}
          </label>
        `
        : ''}
      <div class="nui-select-outer">
        <select
          id="${id}"
          class="${['nui-select', classes?.select].filter(Boolean).join(' ')}"
          ${spread(attrs)}
        >
          ${placeholder
            ? html`
              <option value="" disabled hidden>${placeholder}</option>
            `
            : ''}
          ${options}
        </select>
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
          <div class="nui-select-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div
            class="${['nui-select-icon', classes?.icon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${icon}
          </div>
        `}
        <div
          class="${['nui-select-chevron', classes?.chevron]
            .filter(Boolean)
            .join(' ')}"
        >
          <svg
            class="nui-select-chevron-inner"
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
        </div>
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-select-error-text', classes?.error]
              .filter(Boolean)
              .join(' ')}"
          >
            ${error}
          </span>
        `}
      </div>
    </div>
  `
}
