import type { PropertyVariant } from '~/types/utils'

export interface ParagraphProps extends Record<string, unknown> {
  as?: string
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

export interface ParagraphEvents {}

export interface ParagraphSlots {
  children: any
}

export type ParagraphAttrs = ParagraphProps & ParagraphEvents & ParagraphSlots
export type ParagraphVariant<T> = PropertyVariant<T, ParagraphProps>
