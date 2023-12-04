export const key = 'select' as const

export const defaultConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  select: {
    size: 'full',
    font: 'sans',
    duration: '300',
    focusVisible: {
      labelFloat: {
        text: 'primary-500',
        textDark: 'primary-500',
      },
      icon: {
        text: 'primary-500',
      },
    },
    chevron: {
      text: 'muted-400',
      duration: '300',
    },
    multiple: {
      space: '2',
      size: '32',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
      full: 'full',
    },
    sm: {
      space: '8',
      labelText: 'xs',
      iconOrChevronSize: '8',
      iconOrChevronSizeInner: '4',
      placeloadSize: '8',
    },
    md: {
      space: '10',
      labelText: '[0.825rem]',
      iconOrChevronSize: '10',
      iconOrChevronSizeInner: '[1.15rem]',
      placeloadSize: '10',
    },
    lg: {
      space: '12',
      labelText: 'sm',
      iconOrChevronSize: '12',
      iconOrChevronSizeInner: '5',
      placeloadSize: '12',
    },
    default: {
      bg: 'white',
      bgDark: 'muted-900/75',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    defaultContrast: {
      bg: 'white',
      bgDark: 'muted-950/75',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    muted: {
      bg: 'muted-100',
      bgDark: 'muted-900/75',
      border: 'muted-200',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950/75',
      border: 'muted-100',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    error: {
      border: 'danger-500',
      borderDark: 'danger-500',
      icon: {
        text: 'danger-500',
      },
    },
    hasNotIcon: {
      text: {
        sm: 'xs',
        md: 'sm',
        lg: 'sm',
      },
      labelFloat: {
        sm: 'xs',
        md: {
          text: 'xs',
          focusVisible: {
            text: 'xs',
          },
          placeholderShown: {
            text: '[0.825rem]',
          },
        },
        lg: {
          text: 'xs',
          focusVisible: {
            text: 'xs',
          },
          placeholderShown: {
            text: '[0.825rem]',
          },
        },
      },
    },
    hasIcon: {
      text: {
        sm: 'xs',
        md: 'sm',
        lg: 'base',
      },
      labelFloat: {
        sm: 'xs',
        md: {
          text: 'xs',
          focusVisible: {
            text: 'xs',
          },
          placeholderShown: {
            text: '[0.825rem]',
          },
        },
        lg: {
          text: 'xs',
          focusVisible: {
            text: 'xs',
          },
          placeholderShown: {
            text: '[0.825rem]',
          },
        },
      },
    },
  },
}

export type SelectConfig = typeof defaultConfig
export interface SelectPluginConfig {
  [key]: SelectConfig
}
