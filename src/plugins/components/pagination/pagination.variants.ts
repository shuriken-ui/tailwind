import type { PaginationVariant } from './pagination.types'

export const rounded = {
  none: '',
  sm: 'nui-pagination-rounded',
  md: 'nui-pagination-smooth',
  lg: 'nui-pagination-curved',
  full: 'nui-pagination-full',
} as const satisfies PaginationVariant<'rounded'>
