import type { PaginationVariant } from './pagination.types'

export const rounded = {
  none: '',
  sm: 'nui-pagination-rounded-sm',
  md: 'nui-pagination-rounded-md',
  lg: 'nui-pagination-rounded-lg',
  full: 'nui-pagination-rounded-full',
} as const satisfies PaginationVariant<'rounded'>

export const color = {
  primary: 'nui-pagination-primary',
  dark: 'nui-pagination-dark',
  black: 'nui-pagination-black',
} as const satisfies PaginationVariant<'color'>
