import type { PropertyVariant } from '~/types/utils'

export interface SwitchBallProps extends Record<string, unknown> {
  id?: string
  label?: string
  sublabel?: string
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  classes?: {
    wrapper?: string | string[]
  }
}

export interface SwitchBallEvents {}

export interface SwitchBallSlots {}

export type SwitchBallAttrs = SwitchBallProps &
  SwitchBallEvents &
  SwitchBallSlots
export type SwitchBallVariant<T> = PropertyVariant<T, SwitchBallProps>
