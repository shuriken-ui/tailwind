import type { TabSliderVariant } from './tab-slider.types'

export const justify = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
} as const satisfies TabSliderVariant<'justify'>

export const size = {
  sm: 'nui-tabs-sm',
  md: 'nui-tabs-md',
} as const satisfies TabSliderVariant<'size'>

export const shape = {
  straight: '',
  rounded: 'nui-tabs-rounded',
  smooth: 'nui-tabs-smooth',
  curved: 'nui-tabs-curved',
  full: 'nui-tabs-full',
} as const satisfies TabSliderVariant<'shape'>
