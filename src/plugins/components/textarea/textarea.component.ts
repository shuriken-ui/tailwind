import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { TextareaAttrs } from './textarea.types'
import * as variants from './textarea.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

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
      class=${cn(
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
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              for="${id}"
              class="${cn('nui-textarea-label', classes?.label)}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-textarea-outer">
        <textarea
          id="${id}"
          class="${cn(
            'nui-textarea',
            colorFocus && 'nui-textarea-focus',
            '?disabled' in attrs && 'opacity-50 cursor-not-allowed',
            classes?.textarea,
          )}"
          ${spread(attrs)}
        ></textarea>
        ${label && labelFloat
          ? html`
              <label
                class="${cn('nui-label-float', classes?.label)}"
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
          <div class="${cn('nui-textarea-addon', classes?.addon)}">
            ${addon}
          </div>
        `}
        ${error &&
        typeof error === 'string' &&
        html`
          ${InputHelpText({
            color: 'danger',
            children: error,
          })}
        `}
      </div>
    </div>
  `
}
