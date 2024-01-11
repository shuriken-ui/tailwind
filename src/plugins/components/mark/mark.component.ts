import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { MarkAttrs } from './mark.types'
import * as variants from './mark.variants'

/**
 * Primary UI component for user interaction
 */
export const Mark = ({ ...attrs }: MarkAttrs) => {
  return html`
    <div>
      <p class="nui-text nui-text-md text-muted-800 dark:text-muted-100">
        Iam a text that contains
        <span class="nui-mark">some marked words</span>
        inside.
      </p>
    </div>
  `
}
