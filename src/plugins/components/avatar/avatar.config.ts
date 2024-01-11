export const key = 'avatar' as const

export const defaultConfig = {
  inner: {
    size: 'full',
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  img: {
    size: 'full',
    shadow: 'sm',
  },
  text: {
    font: {
      family: 'sans',
      weight: 'medium',
    },
  },
  badge: {
    rounded: 'full',
    background: {
      light: 'white',
      dark: 'muted-800',
    },
    img: {
      size: 'full',
      rounded: 'full',
    },
  },
  dot: {
    border: {
      light: 'white',
      dark: 'muted-800',
    },
    rounded: 'full',
    color: {
      primary: 'primary-500',
      info: 'info-500',
      success: 'success-500',
      warning: 'warning-500',
      danger: 'danger-500',
      yellow: 'yellow-400',
      pink: 'pink-500',
      indigo: 'indigo-500',
    },
  },
  ring: {
    width: '2',
    offset: {
      size: '2',
      color: {
        light: 'white',
        dark: 'muted-800',
      },
    },
    color: {
      primary: 'primary-500',
      info: 'info-500',
      success: 'success-500',
      warning: 'warning-500',
      danger: 'danger-500',
      yellow: 'yellow-400',
      pink: 'pink-500',
      indigo: 'indigo-500',
    },
  },
  size: {
    xxs: {
      avatar: '6',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-md',
        full: 'rounded-full',
      },
      dot: {
        size: '1.5',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '0',
          },
        },
      },
      text: {
        font: {
          size: 'xs',
        },
      },
      badge: {
        size: '3',
        position: '1',
      },
    },
    xs: {
      avatar: '8',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      dot: {
        size: '2',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '0',
          },
        },
      },
      text: {
        font: {
          size: 'sm',
        },
      },
      badge: {
        size: '4',
        position: '1',
      },
    },
    sm: {
      avatar: '10',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-md',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        full: 'rounded-full',
      },
      dot: {
        size: '2',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '0.5',
          },
        },
      },
      text: {
        font: {
          size: 'sm',
        },
      },
      badge: {
        size: '5',
        position: '1',
      },
    },
    md: {
      avatar: '12',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full',
      },
      dot: {
        size: '3',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '0.5',
          },
        },
      },
      text: {
        font: {
          size: 'sm',
        },
      },
      badge: {
        size: '5',
        position: '1',
      },
    },
    lg: {
      avatar: '16',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full',
      },
      dot: {
        size: '3',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '1',
          },
        },
      },
      text: {
        font: {
          size: 'sm',
        },
      },
      badge: {
        size: '6',
        position: '1',
      },
    },
    xl: {
      avatar: '20',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
        full: 'rounded-full',
      },
      dot: {
        size: '4',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '1',
          },
        },
      },
      text: {
        font: {
          size: 'base',
        },
      },
      badge: {
        size: '8',
        position: '1',
      },
    },
    xxl: {
      avatar: '24',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
        full: 'rounded-full',
      },
      dot: {
        size: '4',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '1.5',
          },
        },
      },
      text: {
        font: {
          size: 'xl',
        },
      },
      badge: {
        size: '10',
        position: '1.5',
      },
    },
    xxxl: {
      avatar: '28',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
        full: 'rounded-full',
      },
      dot: {
        size: '4',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '2',
          },
        },
      },
      text: {
        font: {
          size: '2xl',
        },
      },
      badge: {
        size: '10',
        position: '1.5',
      },
    },
    xxxxl: {
      avatar: '32',
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
        full: 'rounded-full',
      },
      dot: {
        size: '4',
        position: {
          rounded: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '2.5',
          },
        },
      },
      text: {
        font: {
          size: '3xl',
        },
      },
      badge: {
        size: '12',
        position: '2',
      },
    },
  },
}

export type AvatarConfig = typeof defaultConfig
export interface AvatarPluginConfig {
  [key]: AvatarConfig
}
