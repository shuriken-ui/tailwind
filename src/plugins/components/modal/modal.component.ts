import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { ModalAttrs } from './modal.types'
import * as variants from './modal.variants'

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  size = 'md',
  children,
  classes,
  ...attrs
}: ModalAttrs) => {
  return html`
    <dialog class=${[
      'open:nui-modal',
      size && variants.size[size],
      classes?.wrapper,
    ]
      .filter(Boolean)
      .join(' ')} 
        ${spread(attrs)}>
    	<div class="nui-modal-inner">
    		<div class=${['nui-modal-backdrop', classes?.backdrop]
          .filter(Boolean)
          .join(' ')} ></div>
        <div class=${['nui-modal-content', classes?.content]
          .filter(Boolean)
          .join(' ')} ></div>
          <div class="nui-modal-content-inner">
            <div class="nui-modal-content-panel">
              ${children}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  `
}
