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

export const rounded = {
  none: '',
  sm: 'nui-tabs-rounded',
  md: 'nui-tabs-smooth',
  lg: 'nui-tabs-curved',
  full: 'nui-tabs-full',
} as const satisfies TabSliderVariant<'rounded'>

export const color = {
  default: 'nui-tabs-default',
  'default-contrast': 'nui-tabs-default-contrast',
  primary: 'nui-tabs-primary',
  light: 'nui-tabs-light',
  dark: 'nui-tabs-dark',
  black: 'nui-tabs-black',
} as const satisfies TabSliderVariant<'color'>
