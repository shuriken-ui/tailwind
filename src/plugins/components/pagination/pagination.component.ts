import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { PaginationAttrs } from './pagination.types'
import * as variants from './pagination.variants'

/**
 * Primary UI component for user interaction
 */
export const Pagination = ({ rounded, classes, ...attrs }: PaginationAttrs) => {
  return html`
    <div
      class=${[
        'nui-pagination',
        rounded && variants.rounded[rounded],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      <ul class="nui-pagination-list">
        <li>
          <a href="#" class="nui-pagination-link nui-active">
            <span>1</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-link">
            <span>2</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-link">
            <span>3</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-link">
            <span>4</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-link">
            <span>5</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-ellipsis">
            <span>...</span>
          </a>
        </li>
        <li>
          <a href="#" class="nui-pagination-link">
            <span>64</span>
          </a>
        </li>
      </ul>
      <div class="nui-pagination-buttons">
        <button type="button" class="nui-pagination-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="nui-block nui-h-4 nui-w-4"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 18l-6-6l6-6"
            ></path>
          </svg>
        </button>
        <button type="button" class="nui-pagination-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="nui-block nui-h-4 nui-w-4"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18l6-6l-6-6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  `
}
