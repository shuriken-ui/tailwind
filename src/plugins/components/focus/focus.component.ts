import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { FocusAttrs } from './focus.types'
import * as variants from './focus.variants'

/**
 * Primary UI component for user interaction
 */
export const Focus = ({ ...attrs }: FocusAttrs) => {
  return html`
    <div
      tabindex="0"
      role="button"
      class="nui-focus h-12 flex items-center p-6 rounded-md bg-muted-100 dark:bg-muted-800"
    >
      <span>Iam a focus ready block. Focus me!</span>
    </div>
  `
}
