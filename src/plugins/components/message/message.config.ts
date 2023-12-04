export const key = 'message' as const

export const defaultConfig = {
  messageIconOuter: {
    size: '10',
    icon: {
      size: '5',
      text: 'white',
    },
  },
  messageInnerText: {
    text: 'sm',
    textColor: 'muted-800',
    font: 'sans',
  },
  messageClose: {
    text: 'muted-800',
    rounded: 'full',
    duration: '200',
    iconSize: '4',
    space: '1',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
  messageDefault: {
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
    outer: {
      bg: 'muted-600',
      bgDark: 'muted-900',
      text: 'white',
    },
    txtDarkInner: 'muted-500',
    close: {
      textDark: 'muted-500',
      bgHoverEnabled: 'muted-300/50',
      bgHoverEnabledDark: 'muted-500/30',
      bgFocusVisible: 'muted-300/50',
      bgFocusVisibleDark: 'muted-500/30',
      bgActiveEnabled: 'muted-300/20',
      bgActiveEnabledDark: 'muted-500/20',
    },
  },
  messageMuted: {
    bg: 'muted-100',
    bgDark: 'muted-500/10',
    border: 'muted-200',
    borderDark: 'muted-700',
    outer: {
      bg: 'muted-400',
      text: 'white',
      bgDark: 'muted-900',
    },
    txtDarkInner: 'muted-500',
    close: {
      textDark: 'muted-500',
      bgHoverEnabled: 'muted-300/50',
      bgHoverEnabledDark: 'muted-500/30',
      bgFocusVisible: 'muted-300/50',
      bgFocusVisibleDark: 'muted-500/30',
      bgActiveEnabled: 'muted-300/20',
      bgActiveEnabledDark: 'muted-500/20',
    },
  },
  messagePrimary: {
    bg: 'primary-100',
    bgDark: 'primary-500/10',
    border: 'primary-200',
    borderDark: 'primary-700',
    outer: {
      bg: 'primary-500',
      text: 'white',
    },
    txtDarkInner: 'primary-500',
    close: {
      textDark: 'primary-500',
      bgHoverEnabled: 'primary-300/50',
      bgHoverEnabledDark: 'primary-500/30',
      bgFocusVisible: 'primary-300/50',
      bgFocusVisibleDark: 'primary-500/30',
      bgActiveEnabled: 'primary-300/20',
      bgActiveEnabledDark: 'primary-500/20',
    },
  },
  messageInfo: {
    bg: 'info-100',
    bgDark: 'info-500/10',
    border: 'info-200',
    borderDark: 'info-700',
    outer: {
      bg: 'info-500',
      text: 'white',
    },
    txtDarkInner: 'info-500',
    close: {
      textDark: 'info-500',
      bgHoverEnabled: 'info-300/50',
      bgHoverEnabledDark: 'info-500/30',
      bgFocusVisible: 'info-300/50',
      bgFocusVisibleDark: 'info-500/30',
      bgActiveEnabled: 'info-300/20',
      bgActiveEnabledDark: 'info-500/20',
    },
  },
  messageSuccess: {
    bg: 'success-100',
    bgDark: 'success-500/10',
    border: 'success-200',
    borderDark: 'success-700',
    outer: {
      bg: 'success-500',
      text: 'white',
    },
    txtDarkInner: 'success-500',
    close: {
      textDark: 'success-500',
      bgHoverEnabled: 'success-300/50',
      bgHoverEnabledDark: 'success-500/30',
      bgFocusVisible: 'success-300/50',
      bgFocusVisibleDark: 'success-500/30',
      bgActiveEnabled: 'success-300/20',
      bgActiveEnabledDark: 'success-500/20',
    },
  },
  messageWarning: {
    bg: 'warning-100',
    bgDark: 'warning-500/10',
    border: 'warning-200',
    borderDark: 'warning-700',
    outer: {
      bg: 'warning-500',
      text: 'white',
    },
    txtDarkInner: 'warning-500',
    close: {
      textDark: 'warning-500',
      bgHoverEnabled: 'warning-300/50',
      bgHoverEnabledDark: 'warning-500/30',
      bgFocusVisible: 'warning-300/50',
      bgFocusVisibleDark: 'warning-500/30',
      bgActiveEnabled: 'warning-300/20',
      bgActiveEnabledDark: 'warning-500/20',
    },
  },
  messageDanger: {
    bg: 'danger-100',
    bgDark: 'danger-500/10',
    border: 'danger-200',
    borderDark: 'danger-700',
    outer: {
      bg: 'danger-500',
      text: 'white',
    },
    txtDarkInner: 'danger-500',
    close: {
      textDark: 'danger-500',
      bgHoverEnabled: 'danger-300/50',
      bgHoverEnabledDark: 'danger-500/30',
      bgFocusVisible: 'danger-300/50',
      bgFocusVisibleDark: 'danger-500/30',
      bgActiveEnabled: 'danger-300/20',
      bgActiveEnabledDark: 'danger-500/20',
    },
  },
}

export type MessageConfig = typeof defaultConfig
export interface MessagePluginConfig {
  [key]: MessageConfig
}
