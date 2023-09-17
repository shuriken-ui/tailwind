import type { PropertyVariant } from '~/types/utils'

export interface ThemeToggleProps extends Record<string, unknown> {
  inverted?: boolean
  disableTransitions?: boolean
  classes?: {
    wrapper?: string | string[]
  }
}

export interface ThemeToggleEvents {}

export interface ThemeToggleSlots {}

export type ThemeToggleAttrs = ThemeToggleProps &
  ThemeToggleEvents &
  ThemeToggleSlots
export type ThemeToggleVariant<T> = PropertyVariant<T, ThemeToggleProps>
