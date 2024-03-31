import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { InputFileRegularAttrs } from './input-file-regular.types'
import * as variants from './input-file-regular.variants'
import { InputHelpText } from '../input-help-text/input-help-text.component'

/**
 * Primary UI component for user interaction
 */
export const InputFileRegular = ({
  id,
  textValue,
  rounded = 'sm',
  size = 'md',
  label,
  loading,
  placeholder,
  colorFocus,
  contrast = 'default',
  error,
  classes = {
    wrapper: '',
    label: '',
    input: '',
    icon: '',
    error: '',
  },
  icon,
  ...attrs
}: InputFileRegularAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-input-file-regular',
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        contrast && variants.contrast[contrast],
        error && !loading && 'nui-input-file-error',
        loading && 'nui-input-file-loading',
        icon && 'nui-has-icon',
        colorFocus && 'nui-input-file-color-focus',
        classes?.wrapper,
      )}
    >
      ${label
        ? html`
            <label
              for="${id}"
              class="${cn('nui-input-file-label', classes?.label)}"
            >
              ${label}
            </label>
          `
        : ''}
      <div
        class="${cn(
          'nui-input-file-outer',
          '?disabled' in attrs &&
            'opacity-50 cursor-not-allowed pointer-events-none',
        )}"
      >
        <label
          tabindex="0"
          for="${id}"
          class=${cn('nui-input-file-inner', classes?.input)}
        >
          <div class=${cn('nui-input-file-addon', classes?.text)}>
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
          ${InputHelpText({
            color: 'danger',
            children: error,
          })}
        `}
      </div>
    </div>
  `
}
