import type { PropertyVariant } from '~/types/utils'

export interface InputFileProps extends Record<string, unknown> {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  color?: 'primary' | 'dark' | 'black'
  type?: 'combo' | 'dropzone' | 'button'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface InputFileEvents {}

export interface InputFileSlots {}

export type InputFileAttrs = InputFileProps & InputFileEvents & InputFileSlots
export type InputFileVariant<T> = PropertyVariant<T, InputFileProps>
