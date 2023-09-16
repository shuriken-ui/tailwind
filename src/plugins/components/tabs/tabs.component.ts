import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { TabsAttrs } from './tabs.types'
import * as variants from './tabs.variants'

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({
  tabs,
  type = 'tabs',
  justify = 'start',
  hideLabel,
  children,
  ...attrs
}: TabsAttrs) => {
  return html`
    <div
      class=${['nui-tabs', justify && variants.justify[justify]]
        .filter(Boolean)
        .join(' ')}
      ${spread(attrs)}
    >
      <div class="nui-tabs-inner">
        ${tabs?.map(
          (tab, index) => html`
            <a
              class=${[
                'nui-tabs',
                type && variants.type[type],
                index === 0 && 'nui-active',
                tab.icon && 'nui-has-icon',
              ]
                .filter(Boolean)
                .join(' ')}
              tabindex="0"
            >
              <!--Icon v-if="tab.icon" :name="tab.icon" class="me-1 block h-5 w-5" /-->
              <span
                class=${[
                  'nui-tabs',
                  type === 'box' && tab.icon && 'text-[.85rem]',
                  type === 'tabs' && 'text-sm',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                ${tab.label}
              </span>
            </a>
          `,
        )}
      </div>
      <div class="relative block">${children}</div>
    </div>
  `
}
