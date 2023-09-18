import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { InputAttrs } from './input.types'
import * as variants from './input.variants'

/**
 * Primary UI component for user interaction
 */
export const Input = ({
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
        'nui-input-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        shape && variants.shape[shape],
        error && !loading && 'nui-input-error',
        loading && 'nui-input-loading',
        labelFloat && 'nui-input-label-float',
        icon && 'nui-has-icon',
        colorFocus && 'nui-input-focus',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${['nui-input-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-input-outer">
        <input
          id="${id}"
          class="${['nui-input', classes?.input].filter(Boolean).join(' ')}"
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
          <div class="nui-input-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div
            class="${['nui-input-icon', classes?.icon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${icon}
          </div>
        `}
        ${actionSlot &&
        html`
          ${actionSlot}
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-input-error-text', classes?.error]
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
