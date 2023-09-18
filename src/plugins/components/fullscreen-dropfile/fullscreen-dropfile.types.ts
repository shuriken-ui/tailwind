import type { PropertyVariant } from '~/types/utils'

export interface FullscreenDropfileProps extends Record<string, unknown> {
  label?: string
  filterFileDropped?: (file: File) => boolean
  classes?: {
    wrapper?: string | string[]
  }
}

export interface FullscreenDropfileEvents {
  isDropping?: boolean
}

export interface FullscreenDropfileSlots {
  icon?: string
}

export type FullscreenDropfileAttrs = FullscreenDropfileProps &
  FullscreenDropfileEvents &
  FullscreenDropfileSlots
export type FullscreenDropfileVariant<T> = PropertyVariant<
  T,
  FullscreenDropfileProps
>
