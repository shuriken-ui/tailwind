import type { PropertyVariant } from '~/types/utils'

export interface ThemeSwitchProps extends Record<string, unknown> {
  inverted?: boolean
  disableTransitions?: boolean
}

export interface ThemeSwitchEvents {}

export interface ThemeSwitchSlots {}

export type ThemeSwitchAttrs = ThemeSwitchProps &
  ThemeSwitchEvents &
  ThemeSwitchSlots
export type ThemeSwitchVariant<T> = PropertyVariant<T, ThemeSwitchProps>
