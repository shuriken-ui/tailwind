export const key = 'iconBox' as const

export const defaultConfig = {
  bordered: {
    border: {
      size: '2',
      color: 'current',
    },
  },
  size: {
    xs: {
      size: '8',
      rounded: {
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    sm: {
      size: '10',
      rounded: {
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    md: {
      size: '12',
      rounded: {
        sm: 'rounded-md',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    lg: {
      size: '16',
      rounded: {
        sm: 'rounded-md',
        md: 'rounded-lg',
        lg: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    xl: {
      size: '20',
      rounded: {
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    xxl: {
      size: '24',
      rounded: {
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-3xl',
        full: 'rounded-full',
      },
    },
  },
  color: {
    variant: {
      solid: {
        default: {
          background: {
            light: 'muted-100',
            dark: 'muted-700',
          },
          font: {
            color: {
              light: 'muted-600',
              dark: 'muted-200',
            },
          },
        },
        invert: {
          background: {
            light: 'white',
            dark: 'muted-950',
          },
          font: {
            color: {
              light: 'muted-800',
              dark: 'muted-100',
            },
          },
        },
        primary: {
          background: {
            light: 'primary-500',
            dark: 'primary-500',
          },
          font: {
            color: {
              light: 'primary-invert',
              dark: 'primary-invert',
            },
          },
        },
        info: {
          background: {
            light: 'info-500',
            dark: 'info-500',
          },
          font: {
            color: {
              light: 'white',
              dark: 'white',
            },
          },
        },
        success: {
          background: {
            light: 'success-500',
            dark: 'success-500',
          },
          font: {
            color: {
              light: 'white',
              dark: 'white',
            },
          },
        },
        warning: {
          background: {
            light: 'warning-500',
            dark: 'warning-500',
          },
          font: {
            color: {
              light: 'white',
              dark: 'white',
            },
          },
        },
        danger: {
          background: {
            light: 'danger-500',
            dark: 'danger-500',
          },
          font: {
            color: {
              light: 'white',
              dark: 'white',
            },
          },
        },
      },
      pastel: {
        invert: {
          background: {
            light: 'white/10',
            dark: 'white/10',
          },
          font: {
            color: {
              light: 'muted-800',
              dark: 'muted-800',
            },
          },
        },
        primary: {
          background: {
            light: 'primary-500/10',
            dark: 'primary-500/10',
          },
          font: {
            color: {
              light: 'primary-500',
              dark: 'primary-500',
            },
          },
        },
        info: {
          background: {
            light: 'info-500/10',
            dark: 'info-500/10',
          },
          font: {
            color: {
              light: 'info-500',
              dark: 'info-500',
            },
          },
        },
        success: {
          background: {
            light: 'success-500/10',
            dark: 'success-500/10',
          },
          font: {
            color: {
              light: 'success-500',
              dark: 'success-500',
            },
          },
        },
        warning: {
          background: {
            light: 'warning-500/10',
            dark: 'warning-500/10',
          },
          font: {
            color: {
              light: 'warning-500',
              dark: 'warning-500',
            },
          },
        },
        danger: {
          background: {
            light: 'danger-500/10',
            dark: 'danger-500/10',
          },
          font: {
            color: {
              light: 'danger-500',
              dark: 'danger-500',
            },
          },
        },
      },
      outline: {
        invert: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'muted-800',
              dark: 'muted-800',
            },
          },
        },
        primary: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'primary-500',
              dark: 'primary-500',
            },
          },
        },
        info: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'info-500',
              dark: 'info-500',
            },
          },
        },
        success: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'success-500',
              dark: 'success-500',
            },
          },
        },
        warning: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'warning-500',
              dark: 'warning-500',
            },
          },
        },
        danger: {
          background: {
            light: 'transparent',
            dark: 'transparent',
          },
          border: {
            light: 'current',
            dark: 'current',
          },
          font: {
            color: {
              light: 'danger-500',
              dark: 'danger-500',
            },
          },
        },
      },
    },
  },
}

export type IconBoxConfig = typeof defaultConfig
export interface IconBoxPluginConfig {
  [key]: IconBoxConfig
}
