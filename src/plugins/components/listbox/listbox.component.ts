import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ListboxAttrs } from './listbox.types'
import * as variants from './listbox.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const Listbox = ({
  id,
  value,
  items,
  rounded = 'sm',
  size = 'md',
  contrast = 'default',
  label,
  labelFloat,
  colorFocus,
  multiple,
  loading,
  error,
  classes,
  icon,
  ...attrs
}: ListboxAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-listbox',
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        error && !loading && 'nui-listbox-error',
        loading && 'nui-listbox-loading',
        labelFloat && 'nui-listbox-label-float',
        colorFocus && 'nui-listbox-focus',
        icon && 'nui-has-icon',
        classes?.wrapper,
      )}
    >
      ${label && !labelFloat
        ? html`
            <label
              class="${cn('nui-listbox-label', classes?.label)}"
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
                class="${cn('nui-label-float', classes?.label)}"
                for="${id}"
              >
                ${label}
              </label>
            `
          : ''}
        ${icon &&
        html`
          <div class="${cn('nui-listbox-icon nui-icon', classes?.icon)}">
            ${icon}
          </div>
        `}
        <div class="nui-listbox-chevron nui-chevron">
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
          <div class="nui-listbox-placeload nui-loading-placeload">
            <span class="nui-placeload animate-nui-placeload"></span>
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
        <div class="nui-listbox-options">${items}</div>
      </div>
    </div>
  `
}
