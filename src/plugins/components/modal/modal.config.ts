export const key = 'modal' as const

export const defaultConfig = {
  backdrop: {
    background: {
      light: 'muted-800/70',
      dark: 'muted-900/80',
    },
  },
  inner: {
    padding: '4',
  },
  panel: {
    size: 'full',
    align: 'start',
  },
  size: {
    sm: 'sm',
    md: 'md',
    lg: 'xl',
    xl: '2xl',
    xxl: '3xl',
    xxxl: '5xl',
  },
}

export type ModalConfig = typeof defaultConfig
export interface ModalPluginConfig {
  [key]: ModalConfig
}
