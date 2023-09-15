import type { PropertyVariant } from '~/types/utils'

export interface HeadingProps extends Record<string, unknown> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
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
  classes?: string | string[]
}

export interface HeadingEvents {}

export interface HeadingSlots {
  children: any
}

export type HeadingAttrs = HeadingProps & HeadingEvents & HeadingSlots
export type HeadingVariant<T> = PropertyVariant<T, HeadingProps>
