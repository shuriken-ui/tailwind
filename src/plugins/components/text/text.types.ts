import type { PropertyVariant } from '~/types/utils'

export interface TextProps extends Record<string, unknown> {
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface TextEvents {}

export interface TextSlots {
  children: any
}

export type TextAttrs = TextProps & TextEvents & TextSlots
export type TextVariant<T> = PropertyVariant<T, TextProps>
