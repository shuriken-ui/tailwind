import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { InputAttrs } from './input-number.types'
import * as variants from './input-number.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const InputNumber = ({
  id,
  rounded = 'sm',
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
  disabled,
  actionSlot,
  ...attrs
}: InputAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-input-number-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'nui-input-number-error',
        loading && 'nui-input-number-loading',
        labelFloat && 'nui-input-number-label-float',
        icon && 'nui-has-icon',
        colorFocus && 'nui-input-number-focus',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${cn('nui-input-number-label', classes?.label)}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-input-number-outer">
        <input
          id="${id}"
          class="${cn('nui-input-number', classes?.input)}"
          ?disabled="${disabled}"
          ${spread(attrs)}
        />
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
          <div class="nui-input-number-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div class="${cn('nui-input-number-icon', classes?.icon)}">
            ${icon}
          </div>
        `}
        <div class="nui-input-number-buttons">
          <button aria-label="Increment" ?disabled="${disabled}">
            <svg
              class=${cn('nui-chevron', 'rotate-180')}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
          <button aria-label="Decrement" ?disabled="${disabled}">
            <svg
              class=${cn('nui-chevron')}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
        </div>
      </div>
      ${error &&
      typeof error === 'string' &&
      html`
        ${InputHelpText({
          color: 'danger',
          children: error,
        })}
      `}
    </div>
  `
}
