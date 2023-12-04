export const key = 'input' as const

export const defaultConfig = {
  label: {
    float: {
      text: 'primary-500',
      duration: '300',
      size: '5',
    },
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
  input: {
    focusSize: 'full',
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
    action: {
      text: 'muted-400',
      duration: '300',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
      full: 'full',
    },
    sm: {
      label: {
        text: 'xs',
      },
      iconOrAction: {
        size: '8',
      },
      iconOrAcionInner: {
        size: '4',
      },
      placeload: {
        size: '8',
      },
    },
    md: {
      label: {
        text: '[0.825rem]',
      },
      iconOrAction: {
        size: '10',
      },
      iconOrAcionInner: {
        size: '[1.15rem]',
      },
      placeload: {
        size: '10',
      },
    },
    lg: {
      label: {
        text: 'sm',
      },
      iconOrAction: {
        size: '12',
      },
      iconOrAcionInner: {
        size: '5',
      },
      placeload: {
        size: '12',
      },
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
    notLoading: {
      text: 'muted-300',
      textDark: 'muted-600',
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
    hasAction: {
      spaceSM: '8',
      spaceMD: '10',
      spaceLG: '12',
    },
  },
}

export type InputConfig = typeof defaultConfig
export interface InputPluginConfig {
  [key]: InputConfig
}
