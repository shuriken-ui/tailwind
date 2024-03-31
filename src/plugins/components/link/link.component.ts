import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { LinkAttrs } from './link.types'
import * as variants from './link.variants'

/**
 * Primary UI component for user interaction
 */
export const Link = ({ href, classes, children, ...attrs }: LinkAttrs) => {
  return html`
    <a
      href="${href}"
      class=${cn('nui-link', classes?.wrapper)}
      ${spread(attrs)}
    >
      ${children}
    </a>
  `
}
