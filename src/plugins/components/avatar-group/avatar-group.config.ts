export const key = 'avatarGroup' as const

export const defaultConfig = {
  avatar: {
    rounded: 'full',
    outer: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
    },
    inner: {
      background: {
        light: 'primary-500/20',
        dark: 'primary-500/20',
      },
      font: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    transition: {
      property: 'all',
      duration: '100',
    },
  },
  count: {
    outer: {
      rounded: 'full',
      background: {
        light: 'white',
        dark: 'muted-800',
      },
    },
    inner: {
      rounded: 'full',
      size: 'full',
      background: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      border: {
        light: 'white',
        dark: 'muted-800',
      },
    },
    text: {
      font: {
        family: 'sans',
        weight: 'medium',
        color: {
          light: 'muted-500',
          dark: 'muted-300',
        },
      },
    },
    transition: {
      property: 'all',
      duration: '100',
    },
  },
  size: {
    xxs: {
      outer: {
        size: '6',
      },
      count: {
        size: '6',
        font: {
          size: 'xs',
        },
      },
    },
    xs: {
      outer: {
        size: '8',
      },
      count: {
        size: '8',
        font: {
          size: 'sm',
        },
      },
    },
    sm: {
      outer: {
        size: '10',
      },
      count: {
        size: '10',
        font: {
          size: 'sm',
        },
      },
    },
    md: {
      outer: {
        size: '12',
      },
      count: {
        size: '12',
        font: {
          size: 'lg',
        },
      },
    },
    lg: {
      outer: {
        size: '16',
      },
      count: {
        size: '16',
        font: {
          size: 'xl',
        },
      },
    },
  },
}

export type AvatarGroup = typeof defaultConfig
export interface AvatarGroupPluginConfig {
  [key]: AvatarGroup
}
