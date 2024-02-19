import type { PaginationVariant } from './pagination.types'

export const rounded = {
  none: '',
  sm: 'nui-pagination-rounded',
  md: 'nui-pagination-smooth',
  lg: 'nui-pagination-curved',
  full: 'nui-pagination-full',
} as const satisfies PaginationVariant<'rounded'>

export const color = {
  primary: 'nui-pagination-primary',
  dark: 'nui-pagination-dark',
  black: 'nui-pagination-black',
} as const satisfies PaginationVariant<'color'>
