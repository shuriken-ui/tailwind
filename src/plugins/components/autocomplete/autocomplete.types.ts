import type { PropertyVariant } from '~/types/utils'

export interface AutocompleteProps extends Record<string, unknown> {
  id?: string
  items?: any[]
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  labelFloat?: boolean
  colorFocus?: boolean
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
  }
}

export interface AutocompleteEvents {}

export interface AutocompleteSlots {
  items?: any
  chips?: any
  icon?: any
}

export type AutocompleteAttrs = AutocompleteProps &
  AutocompleteEvents &
  AutocompleteSlots
export type AutocompleteVariant<T> = PropertyVariant<T, AutocompleteProps>
