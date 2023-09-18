import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { PlaceholderPageAttrs } from './placeholder-page.types'
import * as variants from './placeholder-page.variants'
import { Heading } from '../heading/heading.component'

/**
 * Primary UI component for user interaction
 */
export const PlaceholderPage = ({
  title,
  subtitle,
  imageSize = 'xs',
  image,
  classes,
  children,
  ...attrs
}: PlaceholderPageAttrs) => {
  return html`
    <div
      class=${[
        'nui-placeholder-page',
        imageSize && variants.size[imageSize],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      <div class="nui-placeholder-page-inner">
        ${image
          ? html`
            <div class="nui-placeholder-page-img">${image}</div>
          `
          : ''}
        <div class="nui-placeholder-page-content">
          ${Heading({
            as: 'h4',
            weight: 'medium',
            size: 'xl',
            classes: {
              wrapper: 'nui-placeholder-page-title',
            },
            children: title,
          })}
          ${subtitle
            ? html`
              <p class="nui-placeholder-page-subtitle">${subtitle}</p>
            `
            : ''}
          ${children}
        </div>
      </div>
    </div>
  `
}
