import type { BreadcrumbVariant } from './breadcrumb.types'

export const color = {
  primary: 'nui-breadcrumb-primary',
  dark: 'nui-breadcrumb-dark',
  black: 'nui-breadcrumb-black',
} as const satisfies BreadcrumbVariant<'color'>
