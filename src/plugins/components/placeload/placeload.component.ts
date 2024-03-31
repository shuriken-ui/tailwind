import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { PlaceloadAttrs } from './placeload.types'
import * as variants from './placeload.variants'

/**
 * Primary UI component for user interaction
 */
export const Placeload = ({ classes, ...attrs }: PlaceloadAttrs) => {
  return html`
    <div
      class=${cn('nui-placeload animate-nui-placeload', classes?.wrapper)}
      ${spread(attrs)}
    ></div>
  `
}
