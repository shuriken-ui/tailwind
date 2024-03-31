import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ProgressCircleAttrs } from './progress-circle.types'
import * as variants from './progress-circle.variants'

/**
 * Primary UI component for user interaction
 */
export const ProgressCircle = ({
  color = 'primary',
  value,
  size = 60,
  thickness = 4,
  max = 100,
  classes,
  ...attrs
}: ProgressCircleAttrs) => {
  return html`
    <svg
      class=${cn('block', color && variants.color[color], classes?.wrapper)}
      ${spread(attrs)}
      role="progressbar"
      aria-valuenow="${value}"
      aria-valuemax="${max}"
      viewBox="0 0 45 45"
      width="${size}"
      height="${size}"
    >
      <circle
        class="text-muted-200 dark:text-muted-700 stroke-current"
        stroke-width="${thickness}"
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
      <circle
        class="stroke-current transition-all duration-500"
        stroke-width="${thickness}"
        stroke-dasharray="${`${value},100`}"
        stroke-linecap="round"
        fill="none"
        cx="50%"
        cy="50%"
        r="15.91549431"
      />
    </svg>
  `
}
