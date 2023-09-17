import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ProseAttrs } from './prose.types'
import * as variants from './prose.variants'

/**
 * Primary UI component for user interaction
 */
export const Prose = ({
  children,
  shape = 'rounded',
  classes,
  ...attrs
}: ProseAttrs) => {
  return html`
    <div
      class=${['nui-prose', shape && variants.shape[shape], classes?.wrapper]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${children}
    </div>
  `
}
