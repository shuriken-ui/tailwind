import type { PropertyVariant } from '~/types/utils'

export interface InputFileRegularProps extends Record<string, unknown> {
  id?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  placeholder?: string
  colorFocus?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  contrast?: 'white' | 'white-contrast'
  error?: string | boolean
  textValue?: (fileList?: FileList | null) => string
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    input?: string | string[]
    text?: string | string[]
    error?: string | string[]
    icon?: string | string[]
  }
}

export interface InputFileRegularEvents {}

export interface InputFileRegularSlots {
  icon?: string
}

export type InputFileRegularAttrs = InputFileRegularProps &
  InputFileRegularEvents &
  InputFileRegularSlots
export type InputFileRegularVariant<T> = PropertyVariant<
  T,
  InputFileRegularProps
>
