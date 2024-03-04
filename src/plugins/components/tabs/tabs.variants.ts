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

export const color = {
  default: 'nui-tabs-default',
  primary: 'nui-tabs-primary',
  light: 'nui-tabs-light',
  dark: 'nui-tabs-dark',
  black: 'nui-tabs-black',
} as const satisfies TabsVariant<'color'>
