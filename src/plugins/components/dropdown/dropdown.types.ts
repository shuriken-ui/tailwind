import type { PropertyVariant } from '~/types/utils'

export interface DropdownProps extends Record<string, unknown> {
  variant?: 'button' | 'context' | 'text'
  buttonColor?:
    | 'default'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'muted'
    | 'none'
  color?:
    | 'default'
    | 'default-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  orientation?: 'start' | 'end'
  size?: 'md' | 'lg'
  label?: string
  headerLabel?: string
  open?: boolean
  classes?: {
    wrapper?: string | string[]
    menu?: string | string[]
    header?: string | string[]
    content?: string | string[]
  }
}

export interface DropdownEvents {
  onClick?: () => void
}

export interface DropdownSlots {
  children?: any
}

export type DropdownAttrs = DropdownProps & DropdownEvents & DropdownSlots
export type DropdownVariant<T> = PropertyVariant<T, DropdownProps>
