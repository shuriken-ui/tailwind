import type { PropertyVariant } from '~/types/utils'

export interface LinkProps extends Record<string, unknown> {
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top' | string | null
  classes?: {
    wrapper?: string | string[]
  }
}

export interface LinkEvents {}

export interface LinkSlots {
  children: any
}

export type LinkAttrs = LinkProps & LinkEvents & LinkSlots
export type LinkVariant<T> = PropertyVariant<T, LinkProps>
