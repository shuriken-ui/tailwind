import type { PaginationVariant } from './pagination.types'

export const shape = {
  straight: '',
  rounded: 'nui-pagination-rounded',
  smooth: 'nui-pagination-smooth',
  curved: 'nui-pagination-curved',
  full: 'nui-pagination-full',
} as const satisfies PaginationVariant<'shape'>
