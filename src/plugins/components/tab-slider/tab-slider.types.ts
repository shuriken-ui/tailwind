import type { PropertyVariant } from '~/types/utils'

export interface TabSliderProps extends Record<string, unknown> {
  tabs: {
    label: string
    value: string
  }[]
  justify?: 'start' | 'center' | 'end'
  size?: 'sm' | 'md'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
}

export interface TabSliderEvents {}

export interface TabSliderSlots {
  children: any
}

export type TabSliderAttrs = TabSliderProps & TabSliderEvents & TabSliderSlots
export type TabSliderVariant<T> = PropertyVariant<T, TabSliderProps>
