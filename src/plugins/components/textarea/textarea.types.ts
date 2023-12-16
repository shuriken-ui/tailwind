import type { PropertyVariant } from '~/types/utils'

export interface TextareaProps extends Record<string, unknown> {
  id?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: string
  labelFloat?: boolean
  colorFocus?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'
  error?: string | boolean
  addon?: boolean
  autogrow?: boolean
  resize?: boolean
  classes?: {
    wrapper?: string | string[]
    label?: string | string[]
    textarea?: string | string[]
    addon?: string | string[]
    error?: string | string[]
  }
}

export interface TextareaEvents {}

export interface TextareaSlots {
  addon?: any
}

export type TextareaAttrs = TextareaProps & TextareaEvents & TextareaSlots
export type TextareaVariant<T> = PropertyVariant<T, TextareaProps>
