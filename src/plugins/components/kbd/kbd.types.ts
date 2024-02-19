import type { PropertyVariant } from '~/types/utils'

export interface KbdProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface KbdEvents {}

export interface KbdSlots {
  children: any
}

export type KbdAttrs = KbdProps & KbdEvents & KbdSlots
export type KbdVariant<T> = PropertyVariant<T, KbdProps>
