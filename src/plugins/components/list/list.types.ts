import type { PropertyVariant } from '~/types/utils'

export interface ListProps extends Record<string, unknown> {
  ordered?: boolean
  hasMedia?: boolean
}

export interface ListEvents {}

export interface ListSlots {
  children: any
}

export type ListAttrs = ListProps & ListEvents & ListSlots
export type ListVariant<T> = PropertyVariant<T, ListProps>
