import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { SelectAttrs } from './select.types'
import * as variants from './select.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  id,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  colorFocus,
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
      class=${cn(
        'nui-select-wrapper',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'nui-select-error',
        loading && 'nui-select-loading',
        labelFloat && 'nui-select-label-float',
        colorFocus && 'nui-select-focus',
        icon && 'nui-has-icon',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${cn('nui-select-label', classes?.label)}"
              for="${id}"
            >
              ${label}
            </label>
          `
        : ''}
      <div class="nui-select-outer">
        <select
          id="${id}"
          class="${cn('nui-select', classes?.select)}"
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
                class="${cn('nui-label-float', classes?.label)}"
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
          <div class="${cn('nui-select-icon', classes?.icon)}">${icon}</div>
        `}
        <div class="${cn('nui-select-chevron nui-chevron', classes?.chevron)}">
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
          ${InputHelpText({
            color: 'danger',
            children: error,
          })}
        `}
      </div>
    </div>
  `
}
