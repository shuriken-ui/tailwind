import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { AccordionAttrs } from './accordion.types'
import * as variants from './accordion.variants'
import { Heading } from '../heading/heading.component'
import { Paragraph } from '../paragraph/paragraph.component'

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({
  items,
  openItems,
  rounded,
  exclusive,
  action = 'dot',
  classes,
  ...attrs
}: AccordionAttrs) => {
  return html`
    ${items?.map(
      (item) => html`
        <div
          class=${[
            'nui-accordion',
            action && variants.action[action],
            rounded && variants.rounded[rounded],
            classes?.wrapper,
          ]
            .filter(Boolean)
            .join(' ')}
          ${spread(attrs)}
        >
          <details class="nui-accordion-detail" ?open=${openItems?.includes(0)}>
            <summary class="nui-accordion-summary" tabindex="0">
              <div class="nui-accordion-header">
                ${Heading({
                  as: 'h4',
                  weight: 'semibold',
                  size: 'sm',
                  classes: {
                    wrapper: 'nui-accordion-header-inner',
                  },
                  children: item.title,
                })}
                ${action === 'dot'
                  ? html`
                      <div class="nui-accordion-dot"></div>
                    `
                  : ''}
                ${action === 'chevron'
                  ? html`
                      <div class="nui-icon-outer">
                        <svg
                          class="nui-chevron-icon"
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
                    `
                  : ''}
                ${action === 'plus'
                  ? html`
                      <div class="nui-icon-outer">
                        <svg
                          class="nui-plus-icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      </div>
                    `
                  : ''}
              </div>
            </summary>
            <div class="nui-accordion-content">
              ${Paragraph({
                size: 'sm',
                lead: 'tight',
                children: item.content,
              })}
            </div>
          </details>
        </div>
      `,
    )}
  `
}
