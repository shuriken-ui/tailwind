import type { PropertyVariant } from '~/types/utils'

export interface InputFileProps extends Record<string, unknown> {
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  type?: 'combo' | 'dropzone' | 'button'
  classes?: string | string[]
}

export interface InputFileEvents {}

export interface InputFileSlots {}

export type InputFileAttrs = InputFileProps & InputFileEvents & InputFileSlots
export type InputFileVariant<T> = PropertyVariant<T, InputFileProps>
