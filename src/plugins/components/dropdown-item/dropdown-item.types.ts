import type { PropertyVariant } from '~/types/utils'

export interface DropdownItemProps extends Record<string, unknown> {
  type?: 'button' | 'submit' | 'reset'
  href?: string
  active?: boolean
  disabled?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'contrast'
  rel?: string
  target?: string
  title?: string
  text?: string
  classes?: {
    title?: string | string[]
    text?: string | string[]
  }
}

export interface DropdownItemEvents {
  onClick?: () => void
}

export interface DropdownItemSlots {
  start?: any
  end?: any
}

export type DropdownItemAttrs = DropdownItemProps &
  DropdownItemEvents &
  DropdownItemSlots
export type DropdownItemVariant<T> = PropertyVariant<T, DropdownItemProps>
