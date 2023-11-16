export const key = 'card' as const

export const defaultConfig = {
  size: 'full',
  duration: '300',
  cardWhite: {
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardWhiteContrast: {
    bg: 'white',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardMuted: {
    bg: 'muted-100',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardMutedContrast: {
    bg: 'muted-100',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardPrimary: {
    bg: 'primary-500/10',
    border: 'primary-500',
  },
  cardInfo: {
    bg: 'info-500/10',
    border: 'info-500',
  },
  cardSuccess: {
    bg: 'success-500/10',
    border: 'success-500',
  },
  cardWarning: {
    bg: 'warning-500/10',
    border: 'warning-500',
  },
  cardDanger: {
    bg: 'danger-500/10',
    border: 'danger-500',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
  cardSadow: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
  cardSadowHover: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
}

export type CardConfig = typeof defaultConfig
export interface CardPluginConfig {
  [key]: CardConfig
}
