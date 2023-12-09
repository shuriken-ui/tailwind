import type { PropertyVariant } from '~/types/utils'

export interface TabsProps extends Record<string, unknown> {
  tabs: {
    label: string
    value: string
    icon?: string
  }[]
  type?: 'tabs' | 'box'
  justify?: 'start' | 'center' | 'end'
  hideLabel?: boolean
  bordered?: boolean
  classes?: {
    wrapper?: string | string[]
    inner?: string | string[]
    item?: string | string[]
    content?: string | string[]
  }
}

export interface TabsEvents {}

export interface TabsSlots {
  children: any
}

export type TabsAttrs = TabsProps & TabsEvents & TabsSlots
export type TabsVariant<T> = PropertyVariant<T, TabsProps>
