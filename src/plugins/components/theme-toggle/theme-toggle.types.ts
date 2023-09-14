import type { PropertyVariant } from '~/types/utils'

export interface ThemeToggleProps extends Record<string, unknown> {
  inverted?: boolean
  disableTransitions?: boolean
}

export interface ThemeToggleEvents {}

export interface ThemeToggleSlots {}

export type ThemeToggleAttrs = ThemeToggleProps &
  ThemeToggleEvents &
  ThemeToggleSlots
export type ThemeToggleVariant<T> = PropertyVariant<T, ThemeToggleProps>
