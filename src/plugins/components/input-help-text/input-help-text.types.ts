import type { PropertyVariant } from '~/types/utils'

export interface InputHelpTextProps extends Record<string, unknown> {
  color?:
    | 'default'
    | 'default-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
}

export interface InputHelpTextEvents {}

export interface InputHelpTextSlots {}

export type InputHelpTextAttrs = InputHelpTextProps &
  InputHelpTextEvents &
  InputHelpTextSlots
export type InputHelpTextVariant<T> = PropertyVariant<T, InputHelpTextProps>
