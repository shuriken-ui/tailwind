import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { TextareaAttrs } from './textarea.types'
import * as variants from './textarea.variants'

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({
  id,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  error,
  addon,
  classes,
  label,
  labelFloat,
  colorFocus,
  resize,
  loading,
  ...attrs
}: TextareaAttrs) => {
  return html`
    <div
      class=${[
        'nui-textarea-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'nui-textarea-error',
        addon && 'nui-has-addon',
        !resize && 'nui-textarea-no-resize',
        loading && 'nui-textarea-loading',
        labelFloat && 'nui-textarea-label-float',
        colorFocus && 'nui-textarea-focus',

        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      ${label && !labelFloat
        ? html`
            <label
              for="${id}"
              class="${['nui-textarea-label', classes?.label]
                .filter(Boolean)
                .join(' ')}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-textarea-outer">
        <textarea
          id="${id}"
          class="${[
            'nui-textarea',
            colorFocus && 'nui-textarea-focus',
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
            classes?.textarea,
          ]
            .filter(Boolean)
            .join(' ')}"
          ${spread(attrs)}
        ></textarea>
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
          <div class="nui-textarea-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
            <span class="nui-placeload animate-nui-placeload"></span>
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${addon &&
        html`
          <div
            class="${['nui-textarea-addon', classes?.addon]
              .filter(Boolean)
              .join(' ')}"
          >
            ${addon}
          </div>
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          <span
            class="${['nui-textarea-error-text', classes?.error]
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
