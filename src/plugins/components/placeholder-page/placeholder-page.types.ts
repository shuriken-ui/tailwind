import type { PropertyVariant } from '~/types/utils'

export interface PlaceholderPageProps extends Record<string, unknown> {
  title: string
  subtitle?: string
  imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  classes?: {
    wrapper?: string | string[]
    inner?: string | string[]
    img?: string | string[]
    content?: string | string[]
    title?: string | string[]
    subtitle?: string | string[]
  }
}

export interface PlaceholderPageEvents {}

export interface PlaceholderPageSlots {
  children?: any
  image?: any
}

export type PlaceholderPageAttrs = PlaceholderPageProps &
  PlaceholderPageEvents &
  PlaceholderPageSlots
export type PlaceholderPageVariant<T> = PropertyVariant<T, PlaceholderPageProps>
