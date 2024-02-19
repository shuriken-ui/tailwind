import type { PropertyVariant } from '~/types/utils'

export interface SwitchBallProps extends Record<string, unknown> {
  id?: string
  label?: string
  sublabel?: string
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'black'
  classes?: {
    wrapper?: string | string[]
    outer?: string | string[]
    input?: string | string[]
    handle?: string | string[]
    track?: string | string[]
    icon?: string | string[]
  }
}

export interface SwitchBallEvents {}

export interface SwitchBallSlots {}

export type SwitchBallAttrs = SwitchBallProps &
  SwitchBallEvents &
  SwitchBallSlots
export type SwitchBallVariant<T> = PropertyVariant<T, SwitchBallProps>
