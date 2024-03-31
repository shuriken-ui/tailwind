import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { ProgressAttrs } from './progress.types'
import * as variants from './progress.variants'

/**
 * Primary UI component for user interaction
 */
export const Progress = ({
  color = 'primary',
  contrast = 'default',
  rounded = 'full',
  size = 'md',
  value,
  classes,
  max = 100,
  ...attrs
}: ProgressAttrs) => {
  return html`
    <div
      role="progressbar"
      aria-valuenow="${value}"
      aria-valuemax="${max}"
      class=${cn(
        'nui-progress',
        color && variants.color[color],
        contrast && variants.contrast[contrast],
        size && variants.size[size],
        rounded && variants.rounded[rounded],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <div
        class=${cn(
          'nui-progress-bar',
          value === undefined &&
            'nui-progress-indeterminate animate-nui-progress-indeterminate',
        )}
        style="${value ? `width: ${value}%` : 'width: 100%'}"
      ></div>
    </div>
  `
}
