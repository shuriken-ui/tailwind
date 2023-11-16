export const key = 'avatar' as const

export const defaultConfig = {
  avatarInner: {
    size: 'full',
    duration: '300',
  },
  avatarBadge: {
    rounded: 'full',
    bg: 'white',
    bgDark: 'muted-800',
    img: {
      size: 'full',
      rounded: 'full',
    },
  },
  avatarImg: {
    maxSize: 'full',
    shadow: 'sm',
    borderDark: 'transparent',
  },
  avatarText: {
    font: 'sans',
    fontSize: 'medium',
  },
  avatarDot: {
    border: 'white',
    borderDark: 'muted-800',
    rounded: 'full',
    primary: 'primary-500',
    info: 'info-500',
    success: 'success-500',
    warning: 'warning-500',
    danger: 'danger-500',
    yellow: 'yellow-500',
    pink: 'pink-500',
    indigo: 'indigo-500',
  },
  avatarRing: {
    ring: '2',
    ringOffsetSize: '2',
    ringOffsetColor: 'white',
    ringOffsetColorDark: 'muted-800',
    primary: 'primary-500',
    info: 'info-500',
    success: 'success-500',
    warning: 'warning-500',
    danger: 'danger-500',
    yellow: 'yellow-500',
    pink: 'pink-500',
    indigo: 'indigo-500',
  },
  avatarXXS: {
    size: '6',
    badge: {
      size: '3',
      position: '1',
    },
    dot: {
      size: '1.5',
    },
    text: 'xs',
    straightPosition: '0',
    roundedOrInnerDotPosition: '0',
    curvedOrInner: {
      rounded: 'md',
      dotPosition: '0',
    },
    fullDotPosition: '0',
  },
  avatarXS: {
    size: '8',
    badge: {
      size: '4',
      position: '1',
    },
    dot: {
      size: '2',
    },
    text: 'sm',
    straightPosition: '0',
    roundedOrInnerDotPosition: '0',
    curvedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    fullDotPosition: '0',
  },
  avatarSM: {
    size: '10',
    badge: {
      size: '5',
      position: '1',
    },
    dot: {
      size: '2',
    },
    text: 'sm',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'md',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    fullDotPosition: '0.5',
  },
  avatarMD: {
    size: '12',
    badge: {
      size: '5',
      position: '1',
    },
    dot: {
      size: '3',
    },
    text: 'sm',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '2xl',
      dotPosition: '0',
    },
    fullDotPosition: '0.5',
  },
  avatarLG: {
    size: '16',
    badge: {
      size: '6',
      position: '1',
    },
    dot: {
      size: '3',
    },
    text: 'sm',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'lg',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '2xl',
      dotPosition: '0',
    },
    fullDotPosition: '1',
  },
  avatarXL: {
    size: '20',
    badge: {
      size: '8',
      position: '1',
    },
    dot: {
      size: '4',
    },
    text: 'base',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '1',
  },
  avatar2XL: {
    size: '24',
    badge: {
      size: '10',
      position: '1.5',
    },
    dot: {
      size: '4',
    },
    text: 'xl',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '1.5',
  },
  avatar3XL: {
    size: '28',
    badge: {
      size: '10',
      position: '1.5',
    },
    dot: {
      size: '4',
    },
    text: '2xl',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '2',
  },
  avatar4XL: {
    size: '32',
    badge: {
      size: '12',
      position: '2',
    },
    dot: {
      size: '4',
    },
    text: '3xl',
    straightPosition: '0',
    roundedOrInner: {
      rounded: 'xl',
      dotPosition: '0',
    },
    curvedOrInner: {
      rounded: '3xl',
      dotPosition: '0',
    },
    fullDotPosition: '2.5',
  },
  avatarFull: {
    rounded: 'full',
    avatarInnerRounded: 'full',
    avatarBadgePosition: '0',
  },
}

export type AvatarConfig = typeof defaultConfig
export interface AvatarPluginConfig {
  [key]: AvatarConfig
}
