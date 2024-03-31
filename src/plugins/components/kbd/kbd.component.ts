import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { KbdAttrs } from './kbd.types'
import * as variants from './kbd.variants'

/**
 * Primary UI component for user interaction
 */
export const Kbd = ({
  rounded = 'md',
  size = 'md',
  color = 'default',
  classes,
  children,
  ...attrs
}: KbdAttrs) => {
  return html`
    <kbd
      class=${cn(
        'nui-kbd',
        rounded && variants.rounded[rounded],
        size && variants.size[size],
        color && variants.color[color],
        classes?.wrapper,
      )}
      ${spread(attrs)}
    >
      ${children}
    </kbd>
  `
}
