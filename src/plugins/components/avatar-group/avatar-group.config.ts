export const key = 'avatarGroup' as const

export const config = {
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

export const defaultConfig = {
  avatarOuter: {
    bg: 'white',
    bgDark: 'muted-800',
    rounded: 'full',
    duration: '100',
    avatar: {
      bg: 'primary-500/20',
      text: 'primary-500',
    },
  },
  avatarCount: {
    bg: 'white',
    bgDark: 'muted-800',
    rounded: 'full',
    duration: '100',
    inner: {
      bg: 'muted-200',
      bgDark: 'muted-700',
      border: 'white',
      borderDark: 'muted-800',
      size: 'full',
      rounded: 'full',
    },
    text: {
      text: 'muted-500',
      textDark: 'muted-300',
      font: 'normal',
    },
  },
  avatarGroupXXS: {
    outer: {
      size: '6',
    },
    count: {
      size: '6',
      text: 'xs',
    },
  },
  avatarGroupXS: {
    outer: {
      size: '8',
    },
    count: {
      size: '8',
      text: 'sm',
    },
  },
  avatarGroupSM: {
    outer: {
      size: '10',
    },
    count: {
      size: '10',
      text: 'sm',
    },
  },
  avatarGroupMD: {
    outer: {
      size: '12',
    },
    count: {
      size: '12',
      text: 'lg',
    },
  },
  avatarGroupLG: {
    outer: {
      size: '16',
    },
    count: {
      size: '16',
      text: 'xl',
    },
  },
}

export type AvatarGroup = typeof defaultConfig
export interface AvatarGroupPluginConfig {
  [key]: AvatarGroup
}
