import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { InputFileRegularAttrs } from './input-file-regular.types'
import * as variants from './input-file-regular.variants'

/**
 * Primary UI component for user interaction
 */
export const InputFileRegular = ({
  id,
  textValue,
  shape = 'rounded',
  size = 'md',
  label,
  loading,
  placeholder,
  colorFocus,
  contrast = 'white',
  icon,
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
    icon: '',
    error: '',
  },
  iconSlot,
  actionSlot,
  ...attrs
}: InputFileRegularAttrs) => {
  return html`
    <div
      class=${[
        'nui-input-file-regular',
        size && variants.size[size],
        shape && variants.shape[shape],
        contrast && variants.contrast[contrast],
        error && !loading && 'nui-input-file-error',
        loading && 'nui-input-file-loading',
        iconSlot && 'nui-has-icon',
        colorFocus && 'nui-input-color-focus',
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label
        ? html`
          <label
            class="${['nui-input-file-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
            for="${id}"
          >
            ${label}
          </label>
        `
        : ''}
      <div
        class="${[
          'nui-input-file-outer',
          '?disabled' in attrs &&
            'opacity-50 cursor-not-allowed pointer-events-none',
        ]
          .filter(Boolean)
          .join(' ')}"
      >
        <label
          tabindex="0"
          for="${id}"
          class=${[
            'nui-input-file-inner',
            colorFocus && 'nui-color-focus',
            classes?.input,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div
            class=${['nui-input-file-addon', classes?.text]
              .filter(Boolean)
              .join(' ')}
          >
            <span class="text-xs">${placeholder}</span>
            ${icon}
          </div>

          <div class="nui-input-file-text">${textValue}</div>
          <input id="${id}" type="file" class="hidden" ${spread(attrs)} />
        </label>
        ${loading &&
        html`
          <div class="nui-input-file-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-input-file-error-text', classes?.error]
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
