import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { BreadcrumbAttrs } from './breadcrumb.types'
import * as variants from './breadcrumb.variants'
import { Dropdown } from '../dropdown/dropdown.component'
import { DropdownItem } from '../dropdown-item/dropdown-item.component'

/**
 * Primary UI component for user interaction
 */
export const Breadcrumb = ({
  items,
  classes,
  separator = 'dot',
  color = 'primary',
  ...attrs
}: BreadcrumbAttrs) => {
  return html`
    <nav
      class=${[
        'nui-breadcrumb',
        color && variants.color[color],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      <ul class="nui-breadcrumb-list">
        <li class="nui-breadcrumb-item-mobile">
          ${Dropdown({
            variant: 'context',
            size: 'md',
            children: html`
              ${items?.slice(0, -1).map(
                (item) => html`
                  ${DropdownItem({
                    href: item.href,
                    title: item.label,
                  })}
                `,
              )}
            `,
          })}
        </li>
        ${items?.map(
          (item, index) => html`
            <li
              class=${[
                'nui-breadcrumb-item',
                index === items.length - 1 ? 'flex' : 'hidden sm:flex',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <a
                href="${item.href}"
                class=${['nui-item-inner', item.href && 'nui-has-link']
                  .filter(Boolean)
                  .join(' ')}
              >
                <svg
                  class="nui-item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48a48 48 0 0 1 48-48h128a48 48 0 0 1 48 48Z"
                      opacity=".2"
                    />
                    <path
                      d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16Zm24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16Zm88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112Z"
                    />
                  </g>
                </svg>
                <span
                  class=${[item.hideLabel && 'sr-only']
                    .filter(Boolean)
                    .join(' ')}
                >
                  ${item.label}
                </span>
              </a>
            </li>
            <li class="nui-breadcrumb-item">
              <div class="nui-item-inner">
                ${index < items.length - 1 && separator === 'dot'
                  ? html`
                      <span class="nui-item-text">·</span>
                    `
                  : ''}
                ${index < items.length - 1 && separator === 'slash'
                  ? html`
                      <span class="nui-item-text">/</span>
                    `
                  : ''}
                ${index < items.length - 1 && separator === 'chevron'
                  ? html`
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        class="nui-item-text"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 18l6-6l-6-6"
                        />
                      </svg>
                    `
                  : ''}
                ${index < items.length - 1 && separator === 'arrow'
                  ? html`
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        class="nui-item-text"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h14m-7-7l7 7l-7 7"
                        />
                      </svg>
                    `
                  : ''}
              </div>
            </li>
          `,
        )}
      </ul>
    </nav>
  `
}
