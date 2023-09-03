import type { PropertyVariant } from '~/types/utils'

export interface ButtonGroupProps extends Record<string, unknown> {}

export interface ButtonGroupEvents {}

export interface ButtonGroupSlots {
  children: any
}

export type ButtonGroupAttrs = ButtonGroupProps &
  ButtonGroupEvents &
  ButtonGroupSlots
export type ButtonGroupVariant<T> = PropertyVariant<T, ButtonGroupProps>
