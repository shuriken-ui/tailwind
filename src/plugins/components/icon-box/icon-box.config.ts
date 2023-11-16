export const key = 'iconBox' as const

export const defaultConfig = {
  boxXS: {
    size: '8',
    rounded: {
      default: 'lg',
      curved: 'xl',
    },
  },
  boxSM: {
    size: '10',
    rounded: {
      default: 'lg',
      curved: 'xl',
    },
  },
  boxMD: {
    size: '12',
    rounded: {
      default: 'xl',
      curved: '2xl',
    },
  },
  boxLG: {
    size: '16',
    rounded: {
      default: 'xl',
      curved: '2xl',
    },
  },
  boxXL: {
    size: '20',
    rounded: {
      default: '2xl',
      curved: '3xl',
    },
  },
  box2XL: {
    size: '24',
    rounded: {
      default: '2xl',
      curved: '3xl',
    },
  },
  boxFull: {
    rounded: 'full',
  },
  boxDefault: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    text: 'muted-600',
    textDark: 'muted-200',
  },
  boxSolid: {
    invert: {
      text: 'muted-800',
      textDark: 'muted-100',
      bg: 'white',
      bgDark: 'muted-950',
    },
    primary: {
      bg: 'primary-500',
      text: 'white',
    },
    info: {
      bg: 'info-500',
      text: 'white',
    },
    success: {
      bg: 'success-500',
      text: 'white',
    },
    warning: {
      bg: 'warning-500',
      text: 'white',
    },
    danger: {
      bg: 'danger-500',
      text: 'white',
    },
  },
  boxPastel: {
    invert: {
      text: 'muted-800',
      bg: 'white/10',
    },
    primary: {
      bg: 'primary-500/10',
      text: 'primary-500',
    },
    info: {
      bg: 'info-500/10',
      text: 'info-500',
    },
    success: {
      bg: 'success-500/10',
      text: 'success-500',
    },
    warning: {
      bg: 'warning-500/10',
      text: 'warning-500',
    },
    danger: {
      bg: 'danger-500/10',
      text: 'danger-500',
    },
  },
  boxOutline: {
    invert: {
      text: 'muted-800',
      border: 'current',
    },
    primary: {
      border: 'current',
      text: 'primary-500',
    },
    info: {
      border: 'current',
      text: 'info-500',
    },
    success: {
      border: 'current',
      text: 'success-500',
    },
    warning: {
      border: 'current',
      text: 'warning-500',
    },
    danger: {
      border: 'current',
      text: 'danger-500',
    },
  },
  boxBordered: {
    borderSize: '2',
    borderColor: 'current',
  },
}

export type IconBoxConfig = typeof defaultConfig
export interface IconBoxPluginConfig {
  [key]: IconBoxConfig
}
