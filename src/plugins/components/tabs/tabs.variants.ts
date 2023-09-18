import type { TabsVariant } from './tabs.types'

export const justify = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
} as const satisfies TabsVariant<'justify'>

export const type = {
  tabs: 'nui-tab-item',
  box: 'nui-pill-item',
} as const satisfies TabsVariant<'type'>
