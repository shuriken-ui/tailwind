import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ButtonIconAttrs } from './button-icon.types'
import * as variants from './button-icon.variants'

/**
 * Primary UI component for user interaction
 */
export const ButtonIcon = ({
  size = 'md',
  loading,
  rounded = 'sm',
  children,
  color = 'default',
  classes,
  onClick,
  ...attrs
}: ButtonIconAttrs) => {
  return html`
    <button
      class=${cn(
        'nui-button-icon',
        variants.size[size],
        variants.color[color],
        loading && 'nui-button-loading',
        rounded && variants.rounded[rounded],
        classes?.wrapper,
      )}
      @click=${onClick}
      ${spread(attrs)}
    >
      ${loading
        ? /* @todo: replace nui-placeload with component */ html`
            <span
              class="nui-placeload animate-nui-placeload h-4 w-4 rounded-md"
            ></span>
          `
        : children}
    </button>
  `
}
