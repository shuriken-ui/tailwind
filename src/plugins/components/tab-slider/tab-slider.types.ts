import type { PropertyVariant } from '~/types/utils'

export interface TabSliderProps extends Record<string, unknown> {
  tabs: {
    label: string
    value: string
  }[]
  color?:
    | 'default'
    | 'default-contrast'
    | 'primary'
    | 'light'
    | 'dark'
    | 'black'
  justify?: 'start' | 'center' | 'end'
  size?: 'sm' | 'md'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  classes?: {
    wrapper?: string | string[]
    inner?: string | string[]
    track?: string | string[]
    item?: string | string[]
    naver?: string | string[]
    content?: string | string[]
  }
}

export interface TabSliderEvents {}

export interface TabSliderSlots {
  children: any
}

export type TabSliderAttrs = TabSliderProps & TabSliderEvents & TabSliderSlots
export type TabSliderVariant<T> = PropertyVariant<T, TabSliderProps>
