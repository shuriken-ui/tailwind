import type { PropertyVariant } from '~/types/utils'

export interface ListProps extends Record<string, unknown> {
  ordered?: boolean
  hasMedia?: boolean
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ListEvents {}

export interface ListSlots {
  children: any
}

export type ListAttrs = ListProps & ListEvents & ListSlots
export type ListVariant<T> = PropertyVariant<T, ListProps>
