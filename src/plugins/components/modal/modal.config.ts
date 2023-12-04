export const key = 'modal' as const

export const defaultConfig = {
  backdrop: {
    bg: 'muted-800/70',
    bgDark: 'muted-900/80',
  },
  contentInner: {
    space: '4',
  },
  contentPanel: {
    size: 'full',
    text: 'start',
  },
  modalSM: 'sm',
  modalMD: 'md',
  modalLG: 'xl',
  modalXL: '2xl',
  modal2XL: '3xl',
  modal3XL: '5xl',
}

export type ModalConfig = typeof defaultConfig
export interface ModalPluginConfig {
  [key]: ModalConfig
}
