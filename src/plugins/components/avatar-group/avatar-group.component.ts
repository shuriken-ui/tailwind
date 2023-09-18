import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { AvatarGroupAttrs } from './avatar-group.types'
import { Avatar } from '../avatar/avatar.component'
import * as variants from './avatar-group.variants'

/**
 * Primary UI component for user interaction
 */
export const AvatarGroup = ({
  avatars,
  size = 'sm',
  limit = 4,
  classes,
  ...attrs
}: AvatarGroupAttrs) => {
  return html`
    <div
      class=${[
        'nui-avatar-group',
        size && variants.size[size],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${avatars.map(
        (avatar) => html`
          <div class="nui-avatar-outer">
            ${Avatar({
              shape: 'full',
              size: size,
              src: avatar.src,
              'data-nui-tooltip': avatar.text,
            })}
          </div>
        `,
      )}
      ${avatars.length > limit
        ? html`
            <div class="nui-avatar-count">
              <div class="nui-avatar-count-inner">
                <span class="nui-avatar-count-text">
                  +${avatars.length - limit + 1}
                </span>
              </div>
            </div>
          `
        : ''}
    </div>
  `
}
