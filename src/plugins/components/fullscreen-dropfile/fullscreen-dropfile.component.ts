import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { FullscreenDropfileAttrs } from './fullscreen-dropfile.types'
import * as variants from './fullscreen-dropfile.variants'

/**
 * Primary UI component for user interaction
 */
export const FullscreenDropfile = ({
  label = 'Drop your files',
  color = 'primary',
  icon,
  isDropping,
  classes,
  ...attrs
}: FullscreenDropfileAttrs) => {
  return html`
    <div
      class=${[
        'nui-fullscreen-dropfile',
        color && variants.color[color],
        classes?.wrapper,
      ]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      ${isDropping
        ? html`
            <div class="nui-fullscreen-dropfile-outer"></div>
            <div class="nui-fullscreen-dropfile-inner">
              <div class="nui-fullscreen-dropfile-container">
                <div class="nui-fullscreen-dropfile-content">
                  ${icon}
                  <div class="nui-fullscreen-dropfile-label">${label}</div>
                </div>
              </div>
            </div>
          `
        : ''}
    </div>
  `
}
