import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { MessageTextAttrs } from './message-text.types'
import * as variants from './message-text.variants'
import { ButtonClose } from '../button-close/button-close.component'
import { Heading } from '../heading/heading.component'
import { Paragraph } from '../paragraph/paragraph.component'

/**
 * Primary UI component for user interaction
 */
export const MessageText = ({
  title,
  text,
  contrast = 'low-contrast',
  color = 'default',
  rounded = 'sm',
  classes,
  ...attrs
}: MessageTextAttrs) => {
  return html`
    <div
      class=${cn(
        'nui-message-text',
        color && variants.color[color],
        contrast && variants.contrast[contrast],
        rounded && variants.rounded[rounded],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      <div class="nui-message-head">
        <span class="nui-message-dot"></span>
        ${Heading({
          as: 'h5',
          size: 'md',
          weight: 'medium',
          lead: 'none',
          classes: {
            wrapper: 'text-muted-800 dark:text-muted-50',
          },
          children: title,
        })}
      </div>
      ${Paragraph({
        size: 'sm',
        classes: {
          wrapper: 'text-muted-400 dark:text-muted-300 nui-sm:inline',
        },
        children: text,
      })}
      ${ButtonClose({
        rounded: 'full',
        color: 'default',
        size: 'xs',
        classes: {
          wrapper: 'nui-message-close',
        },
      })}
    </div>
  `
}
