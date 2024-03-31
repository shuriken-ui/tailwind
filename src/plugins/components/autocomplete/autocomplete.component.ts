import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { AutocompleteAttrs } from './autocomplete.types'
import * as variants from './autocomplete.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Autocomplete = ({
  id,
  items,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  colorFocus,
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
      class=${cn(
        'nui-autocomplete',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'nui-autocomplete-error',
        loading && 'nui-autocomplete-loading',
        labelFloat && 'nui-autocomplete-label-float',
        colorFocus && 'nui-autocomplete-focus',
        icon && 'nui-has-icon',
        classes?.wrapper,
      )}
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
              class="${cn('nui-autocomplete-label', classes?.label)}"
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
          class="${cn('nui-autocomplete-input', classes?.input)}"
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
          <div class="nui-autocomplete-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
          </div>
        `}
        ${icon &&
        html`
          <div class="${cn('nui-autocomplete-icon', classes?.icon)}">
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
          ${InputHelpText({
            color: 'danger',
            children: error,
          })}
        `}
        <div class="nui-autocomplete-results">${items}</div>
      </div>
    </div>
  `
}
