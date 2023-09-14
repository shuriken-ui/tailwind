import type { PropertyVariant } from '~/types/utils'

export interface DropdownDividerProps extends Record<string, unknown> {}

export interface DropdownDividerEvents {}

export interface DropdownDividerSlots {}

export type DropdownDividerAttrs = DropdownDividerProps &
  DropdownDividerEvents &
  DropdownDividerSlots
export type DropdownDividerVariant<T> = PropertyVariant<T, DropdownDividerProps>
