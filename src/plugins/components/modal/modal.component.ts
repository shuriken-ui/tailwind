import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'
import { cn } from '../../../utils/lit'

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
   <dialog class=${cn(
     'open:nui-modal',
     size && variants.size[size],
     classes?.wrapper,
   )} 
       ${spread(attrs)}>
   	<div class="nui-modal-inner">
   		<div class=${cn('nui-modal-backdrop', classes?.backdrop)} ></div>
       <div class=${cn('nui-modal-content', classes?.content)} ></div>
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
