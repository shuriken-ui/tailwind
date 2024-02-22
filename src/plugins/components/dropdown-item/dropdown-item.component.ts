import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { DropdownItemAttrs } from './dropdown-item.types'
import * as variants from './dropdown-item.variants'

/**
 * Primary UI component for user interaction
 */
export const DropdownItem = ({
  href,
  target,
  rel,
  type,
  rounded = 'sm',
  contrast = 'default',
  color = 'primary',
  title,
  text,
  active,
  classes,
  start,
  end,
  onClick,
  ...attrs
}: DropdownItemAttrs) => {
  return html`
    <div>
      ${href
        ? html`
            <a
              href="${href}"
              ${spread(attrs)}
              class=${[
                'nui-dropdown-item',
                active && 'nui-active',
                rounded && variants.rounded[rounded],
                contrast && variants.contrast[contrast],
                color && variants.color[color],
              ]
                .filter(Boolean)
                .join(' ')}
            >
              ${start}
              <div class="nui-item-content">
                <h3
                  class=${[
                    'nui-heading nui-heading-sm nui-weight-semibold nui-lead-tight text-muted-800 dark:text-white',
                    classes?.title,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  ${title}
                </h3>
                <p class="text-muted-400 font-sans text-xs">${text}</p>
              </div>
              ${end}
            </a>
          `
        : ''}
      ${type
        ? html`
            <button
              type="${type}"
              rel="${rel}"
              target="${target}"
              ${spread(attrs)}
              class=${[
                'nui-dropdown-item',
                active && 'nui-active',
                rounded && variants.rounded[rounded],
                color && variants.color[color],
              ]
                .filter(Boolean)
                .join(' ')}
              @click=${onClick}
            >
              ${start}
              <div class="nui-item-content">
                <div
                  class=${['nui-item-content', classes?.title]
                    .filter(Boolean)
                    .join(' ')}
                >
                  > ${title}
                </div>
                <p class="text-muted-400 font-sans text-xs">${text}</p>
              </div>
              ${end}
            </button>
          `
        : ''}
    </div>
  `
}
