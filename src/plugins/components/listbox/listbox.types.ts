import type { PropertyVariant } from '~/types/utils'

export interface ListboxProps extends Record<string, unknown> {
  id?: string
  value?: any
  items?: any[]
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  labelFloat?: boolean
  error?: string | boolean
  size?: 'sm' | 'md' | 'lg'
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'
  loading?: boolean
  clearable?: boolean
  dropdown?: boolean
  multiple?: boolean
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    input?: string | string[]
    icon?: string | string[]
    error?: string | string[]
    value?: string
    sublabel?: string
    media?: string
  }
}

export interface ListboxEvents {}

export interface ListboxSlots {
  items?: any
  icon?: any
}

export type ListboxAttrs = ListboxProps & ListboxEvents & ListboxSlots
export type ListboxVariant<T> = PropertyVariant<T, ListboxProps>
