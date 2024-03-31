import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

import type { AvatarAttrs } from './avatar.types'
import * as variants from './avatar.variants'

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
  src,
  srcDark,
  text = '?',
  badgeSrc,
  size = 'sm',
  rounded = 'full',
  mask,
  color,
  dot = false,
  ring = false,
  classes,
  children,
  badge,
  ...attrs
}: AvatarAttrs) => {
  return html`
    <div
      class="${cn(
        'nui-avatar',
        classes?.wrapper,
        variants.size[size],
        rounded && variants.rounded[rounded],
        rounded === 'none' && mask && `nui-avatar-mask ${variants.mask[mask]}`,
        color && variants.color[color],
        ring &&
          (ring === true
            ? `nui-avatar-ring ${variants.ring['primary']}`
            : `nui-avatar-ring ${variants.ring[ring]}`),
      )}
       ${spread(attrs)}"
    >
      <div class="nui-avatar-inner">
        ${src
          ? html`
              <img
                class="${srcDark ? 'dark:hidden' : ''}"
                src="${src}"
                alt="${text}"
              />
              ${srcDark
                ? html`
                    <img
                      class="hidden dark:block"
                      src="${srcDark}"
                      alt="${text}"
                    />
                  `
                : ''}
            `
          : children ||
            html`
              <span class="nui-avatar-text">${text}</span>
            `}
      </div>
      ${badgeSrc
        ? html`
            <div class="nui-avatar-badge">
              <img src="${badgeSrc}" class="nui-badge-img" alt="${text}" />
            </div>
          `
        : badge}
      ${dot
        ? html`
            <span
              class="${cn(
                'nui-avatar-dot',
                dot === true ? variants.dot['primary'] : variants.dot[dot],
              )}"
            ></span>
          `
        : ''}
    </div>
  `
}
