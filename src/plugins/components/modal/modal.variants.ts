import type { ModalVariant } from './modal.types'

export const size = {
  sm: 'nui-modal-sm',
  md: 'nui-modal-md',
  lg: 'nui-modal-lg',
  xl: 'nui-modal-xl',
} as const satisfies ModalVariant<'size'>
