export const key = 'button' as const

export const defaultConfig = {
  font: {
    family: 'sans',
    weight: 'normal',
  },
  transition: {
    property: 'all',
    duration: '300',
  },
  size: {
    small: {
      button: {
        text: 'sm',
        height: '8',
        padding: {
          x: '3',
          y: '1',
        },
      },
      icon: {
        size: '3',
      },
    },
    medium: {
      button: {
        text: 'sm',
        height: '10',
        padding: {
          x: '5',
          y: '2',
        },
      },
      icon: {
        size: '4',
      },
    },
    large: {
      button: {
        text: 'base',
        height: '12',
        padding: {
          x: '6',
          y: '2',
        },
      },
      icon: {
        size: '5',
      },
    },
    xlarge: {
      button: {
        text: 'base',
        height: '14',
        padding: {
          x: '10',
          y: '4',
        },
      },
      icon: {
        size: '5',
      },
    },
  },
  rounded: {
    none: 'none',
    small: 'md',
    medium: 'lg',
    large: 'xl',
    full: 'full',
  },
  variant: {
    solid: {
      default: {
        text: {
          light: 'muted-700',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'white',
            hover: 'muted-50',
            active: 'white',
            focus: 'muted-50',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-300',
          },
          dark: {
            base: 'muted-600',
            hover: 'muted-500',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      muted: {
        text: {
          light: 'muted-500',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
            active: 'muted-200',
            focus: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      light: {
        text: {
          light: 'muted-500',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
            active: 'muted-200',
            focus: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
            active: 'muted-700',
            focus: 'muted-600',
          },
        },
        border: {
          light: {
            base: 'muted-200',
            hover: 'muted-100',
          },
          dark: {
            base: 'muted-700',
            hover: 'muted-600',
          },
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/30',
          dark: 'muted-800/20',
        },
      },
      primary: {
        text: {
          light: 'primary-invert',
          dark: 'primary-invert',
        },
        background: {
          light: {
            base: 'primary-500',
            hover: 'primary-400',
            active: 'primary-500',
            focus: 'primary-400',
          },
          dark: {
            base: 'primary-500',
            hover: 'primary-400',
            active: 'primary-500',
            focus: 'primary-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'primary-500/50',
          dark: 'primary-800/50',
        },
      },
      info: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'info-500',
            hover: 'info-400',
            active: 'info-500',
            focus: 'info-400',
          },
          dark: {
            base: 'info-500',
            hover: 'info-400',
            active: 'info-500',
            focus: 'info-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'info-500/50',
          dark: 'info-800/50',
        },
      },
      success: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'success-500',
            hover: 'success-400',
            active: 'success-500',
            focus: 'success-400',
          },
          dark: {
            base: 'success-500',
            hover: 'success-400',
            active: 'success-500',
            focus: 'success-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'success-500/50',
          dark: 'success-800/50',
        },
      },
      warning: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'warning-500',
            hover: 'warning-400',
            active: 'warning-500',
            focus: 'warning-400',
          },
          dark: {
            base: 'warning-500',
            hover: 'warning-400',
            active: 'warning-500',
            focus: 'warning-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'warning-500/50',
          dark: 'warning-800/50',
        },
      },
      danger: {
        text: {
          light: 'white',
          dark: 'white',
        },
        background: {
          light: {
            base: 'danger-500',
            hover: 'danger-400',
            active: 'danger-500',
            focus: 'danger-400',
          },
          dark: {
            base: 'danger-500',
            hover: 'danger-400',
            active: 'danger-500',
            focus: 'danger-400',
          },
        },
        shadow: {
          size: 'xl',
          light: 'danger-500/50',
          dark: 'danger-800/50',
        },
      },
    },
    pastel: {
      default: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
          dark: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
        },
      },
      muted: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
          dark: {
            base: 'muted-500/10',
            hover: 'muted-500/20',
            active: 'muted-500/10',
            focus: 'muted-500/20',
          },
        },
      },
      light: {
        text: {
          light: 'muted-800',
          dark: 'muted-100',
        },
        background: {
          light: {
            base: 'white/30',
            hover: 'white/20',
            active: 'white/30',
            focus: 'white/20',
          },
          dark: {
            base: 'white/20',
            hover: 'white/10',
            active: 'white/20',
            focus: 'white/10',
          },
        },
      },
      primary: {
        text: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        background: {
          light: {
            base: 'primary-500/10',
            hover: 'primary-500/20',
            active: 'primary-500/10',
            focus: 'primary-500/20',
          },
          dark: {
            base: 'primary-500/10',
            hover: 'primary-500/20',
            active: 'primary-500/10',
            focus: 'primary-500/20',
          },
        },
      },
      info: {
        text: {
          light: 'info-500',
          dark: 'info-500',
        },
        background: {
          light: {
            base: 'info-500/10',
            hover: 'info-500/20',
            active: 'info-500/10',
            focus: 'info-500/20',
          },
          dark: {
            base: 'info-500/10',
            hover: 'info-500/20',
            active: 'info-500/10',
            focus: 'info-500/20',
          },
        },
      },
      success: {
        text: {
          light: 'success-500',
          dark: 'success-500',
        },
        background: {
          light: {
            base: 'success-500/10',
            hover: 'success-500/20',
            active: 'success-500/10',
            focus: 'success-500/20',
          },
          dark: {
            base: 'success-500/10',
            hover: 'success-500/20',
            active: 'success-500/10',
            focus: 'success-500/20',
          },
        },
      },
      warning: {
        text: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        background: {
          light: {
            base: 'warning-500/10',
            hover: 'warning-500/20',
            active: 'warning-500/10',
            focus: 'warning-500/20',
          },
          dark: {
            base: 'warning-500/10',
            hover: 'warning-500/20',
            active: 'warning-500/10',
            focus: 'warning-500/20',
          },
        },
      },
      danger: {
        text: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        background: {
          light: {
            base: 'danger-500/10',
            hover: 'danger-500/20',
            active: 'danger-500/10',
            focus: 'danger-500/20',
          },
          dark: {
            base: 'danger-500/10',
            hover: 'danger-500/20',
            active: 'danger-500/10',
            focus: 'danger-500/20',
          },
        },
      },
    },
    outline: {
      default: {
        text: {
          light: {
            base: 'muted-500',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'muted-500',
            active: 'muted-400',
            focus: 'muted-500',
          },
          dark: {
            base: 'transparent',
            hover: 'muted-800',
            active: 'muted-700',
            focus: 'muted-800',
          },
        },
        border: {
          light: 'muted-500',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      light: {
        text: {
          light: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
        },
        border: {
          light: 'white',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      muted: {
        text: {
          light: {
            base: 'muted-400',
            hover: 'white',
            active: 'muted-800',
            focus: 'white',
          },
          dark: {
            base: 'white',
            hover: 'muted-800',
            active: 'muted-800',
            focus: 'muted-800',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'white',
            active: 'muted-400',
            focus: 'muted-300',
          },
          dark: {
            base: 'transparent',
            hover: 'white',
            active: 'white/80',
            focus: 'white',
          },
        },
        border: {
          light: 'muted-300',
          dark: 'white',
        },
        shadow: {
          size: 'xl',
          light: 'muted-500/50',
          dark: 'muted-800/20',
        },
      },
      primary: {
        text: {
          light: {
            base: 'primary-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'primary-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'primary-500',
            active: 'primary-400',
            focus: 'primary-500',
          },
          dark: {
            base: 'transparent',
            hover: 'primary-500',
            active: 'primary-400',
            focus: 'primary-500',
          },
        },
        border: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        shadow: {
          size: 'xl',
          light: 'primary-500/30',
          dark: 'primary-800/30',
        },
      },
      info: {
        text: {
          light: {
            base: 'info-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'info-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'info-500',
            active: 'info-400',
            focus: 'info-500',
          },
          dark: {
            base: 'transparent',
            hover: 'info-500',
            active: 'info-400',
            focus: 'info-500',
          },
        },
        border: {
          light: 'info-500',
          dark: 'info-500',
        },
        shadow: {
          size: 'xl',
          light: 'info-500/30',
          dark: 'info-800/30',
        },
      },
      success: {
        text: {
          light: {
            base: 'success-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'success-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'success-500',
            active: 'success-400',
            focus: 'success-500',
          },
          dark: {
            base: 'transparent',
            hover: 'success-500',
            active: 'success-400',
            focus: 'success-500',
          },
        },
        border: {
          light: 'success-500',
          dark: 'success-500',
        },
        shadow: {
          size: 'xl',
          light: 'success-500/30',
          dark: 'success-800/30',
        },
      },
      warning: {
        text: {
          light: {
            base: 'warning-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'warning-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'warning-500',
            active: 'warning-400',
            focus: 'warning-500',
          },
          dark: {
            base: 'transparent',
            hover: 'warning-500',
            active: 'warning-400',
            focus: 'warning-500',
          },
        },
        border: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        shadow: {
          size: 'xl',
          light: 'warning-500/30',
          dark: 'warning-800/30',
        },
      },
      danger: {
        text: {
          light: {
            base: 'danger-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
          dark: {
            base: 'danger-500',
            hover: 'white',
            active: 'white',
            focus: 'white',
          },
        },
        background: {
          light: {
            base: 'transparent',
            hover: 'danger-500',
            active: 'danger-400',
            focus: 'danger-500',
          },
          dark: {
            base: 'transparent',
            hover: 'danger-500',
            active: 'danger-400',
            focus: 'danger-500',
          },
        },
        border: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        shadow: {
          size: 'xl',
          light: 'danger-500/30',
          dark: 'danger-800/30',
        },
      },
    },
  },
  badge: {
    size: '2.5',
    colors: {
      primary: 'primary-400',
      primaryDark: 'primary-400',
      info: 'info-400',
      success: 'success-400',
      warning: 'warning-400',
      danger: 'danger-400',
    },
  },
}

export type ButtonConfig = typeof defaultConfig
export interface ButtonPluginConfig {
  [key]: ButtonConfig
}
