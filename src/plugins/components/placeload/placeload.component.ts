import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { PlaceloadAttrs } from './placeload.types'
import * as variants from './placeload.variants'

/**
 * Primary UI component for user interaction
 */
export const Placeload = ({ classes, ...attrs }: PlaceloadAttrs) => {
  return html`
    <div
      class=${['nui-placeload animate-nui-placeload', classes]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    ></div>
  `
}
