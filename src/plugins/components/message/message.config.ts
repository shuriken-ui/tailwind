export const key = 'message' as const

export const defaultConfig = {
  icon: {
    outer: {
      size: '10',
    },
    inner: {
      size: '5',
      color: {
        light: 'white',
        dark: 'white',
      },
    },
  },
  inner: {
    font: {
      family: 'sans',
      size: 'sm',
      color: {
        light: 'muted-800',
        dark: 'muted-200',
      },
    },
  },
  close: {
    color: {
      light: 'muted-800',
      dark: 'muted-800',
    },
    icon: {
      size: '4',
    },
    rounded: 'rounded-full',
    padding: '1',
    transition: {
      property: 'colors',
      duration: '200',
    },
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  color: {
    default: {
      background: {
        light: 'white',
        dark: 'muted-800',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      outer: {
        background: {
          light: 'muted-600',
          dark: 'muted-900',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'muted-500',
          dark: 'muted-400',
        },
      },
      close: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
        background: {
          hover: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          focus: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          active: {
            light: 'muted-300/20',
            dark: 'muted-500/20',
          },
        },
      },
    },
    defaultContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-800',
      },
      outer: {
        background: {
          light: 'muted-600',
          dark: 'muted-900',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'muted-500',
          dark: 'muted-400',
        },
      },
      close: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
        background: {
          hover: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          focus: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          active: {
            light: 'muted-300/20',
            dark: 'muted-500/20',
          },
        },
      },
    },
    muted: {
      background: {
        light: 'muted-100',
        dark: 'muted-500/10',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      outer: {
        background: {
          light: 'muted-400',
          dark: 'muted-900',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
      },
      close: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
        background: {
          hover: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          focus: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          active: {
            light: 'muted-300/20',
            dark: 'muted-500/20',
          },
        },
      },
    },
    mutedContrast: {
      background: {
        light: 'muted-100',
        dark: 'muted-950',
      },
      border: {
        light: 'muted-200',
        dark: 'muted-800',
      },
      outer: {
        background: {
          light: 'muted-400',
          dark: 'muted-900',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
      },
      close: {
        color: {
          light: 'muted-500',
          dark: 'muted-500',
        },
        background: {
          hover: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          focus: {
            light: 'muted-300/50',
            dark: 'muted-500/30',
          },
          active: {
            light: 'muted-300/20',
            dark: 'muted-500/20',
          },
        },
      },
    },
    primary: {
      background: {
        light: 'primary-100',
        dark: 'primary-500/10',
      },
      border: {
        light: 'primary-200',
        dark: 'primary-700',
      },
      outer: {
        background: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
      close: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
        background: {
          hover: {
            light: 'primary-300/50',
            dark: 'primary-500/30',
          },
          focus: {
            light: 'primary-300/50',
            dark: 'primary-500/30',
          },
          active: {
            light: 'primary-300/20',
            dark: 'primary-500/20',
          },
        },
      },
    },
    info: {
      background: {
        light: 'info-100',
        dark: 'info-500/10',
      },
      border: {
        light: 'info-200',
        dark: 'info-700',
      },
      outer: {
        background: {
          light: 'info-500',
          dark: 'info-500',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
      },
      close: {
        color: {
          light: 'info-500',
          dark: 'info-500',
        },
        background: {
          hover: {
            light: 'info-300/50',
            dark: 'info-500/30',
          },
          focus: {
            light: 'info-300/50',
            dark: 'info-500/30',
          },
          active: {
            light: 'info-300/20',
            dark: 'info-500/20',
          },
        },
      },
    },
    success: {
      background: {
        light: 'success-100',
        dark: 'success-500/10',
      },
      border: {
        light: 'success-200',
        dark: 'success-700',
      },
      outer: {
        background: {
          light: 'success-500',
          dark: 'success-500',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'success-500',
          dark: 'success-500',
        },
      },
      close: {
        color: {
          light: 'success-500',
          dark: 'success-500',
        },
        background: {
          hover: {
            light: 'success-300/50',
            dark: 'success-500/30',
          },
          focus: {
            light: 'success-300/50',
            dark: 'success-500/30',
          },
          active: {
            light: 'success-300/20',
            dark: 'success-500/20',
          },
        },
      },
    },
    warning: {
      background: {
        light: 'warning-100',
        dark: 'warning-500/10',
      },
      border: {
        light: 'warning-200',
        dark: 'warning-700',
      },
      outer: {
        background: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'warning-500',
          dark: 'warning-500',
        },
      },
      close: {
        color: {
          light: 'warning-500',
          dark: 'warning-500',
        },
        background: {
          hover: {
            light: 'warning-300/50',
            dark: 'warning-500/30',
          },
          focus: {
            light: 'warning-300/50',
            dark: 'warning-500/30',
          },
          active: {
            light: 'warning-300/20',
            dark: 'warning-500/20',
          },
        },
      },
    },
    danger: {
      background: {
        light: 'danger-100',
        dark: 'danger-500/10',
      },
      border: {
        light: 'danger-200',
        dark: 'danger-700',
      },
      outer: {
        background: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        color: {
          light: 'white',
          dark: 'white',
        },
      },
      inner: {
        color: {
          light: 'danger-500',
          dark: 'danger-500',
        },
      },
      close: {
        color: {
          light: 'danger-500',
          dark: 'danger-500',
        },
        background: {
          hover: {
            light: 'danger-300/50',
            dark: 'danger-500/30',
          },
          focus: {
            light: 'danger-300/50',
            dark: 'danger-500/30',
          },
          active: {
            light: 'danger-300/20',
            dark: 'danger-500/20',
          },
        },
      },
    },
    // messageMuted: {
    //   bg: 'muted-100',
    //   bgDark: 'muted-500/10',
    //   border: 'muted-200',
    //   borderDark: 'muted-700',
    //   outer: {
    //     bg: 'muted-400',
    //     text: 'white',
    //     bgDark: 'muted-900',
    //   },
    //   txtDarkInner: 'muted-500',
    //   close: {
    //     textDark: 'muted-500',
    //     bgHoverEnabled: 'muted-300/50',
    //     bgHoverEnabledDark: 'muted-500/30',
    //     bgFocusVisible: 'muted-300/50',
    //     bgFocusVisibleDark: 'muted-500/30',
    //     bgActiveEnabled: 'muted-300/20',
    //     bgActiveEnabledDark: 'muted-500/20',
    //   },
    // },
    // messagePrimary: {
    //   bg: 'primary-100',
    //   bgDark: 'primary-500/10',
    //   border: 'primary-200',
    //   borderDark: 'primary-700',
    //   outer: {
    //     bg: 'primary-500',
    //     text: 'white',
    //   },
    //   txtDarkInner: 'primary-500',
    //   close: {
    //     textDark: 'primary-500',
    //     bgHoverEnabled: 'primary-300/50',
    //     bgHoverEnabledDark: 'primary-500/30',
    //     bgFocusVisible: 'primary-300/50',
    //     bgFocusVisibleDark: 'primary-500/30',
    //     bgActiveEnabled: 'primary-300/20',
    //     bgActiveEnabledDark: 'primary-500/20',
    //   },
    // },
    // messageInfo: {
    //   bg: 'info-100',
    //   bgDark: 'info-500/10',
    //   border: 'info-200',
    //   borderDark: 'info-700',
    //   outer: {
    //     bg: 'info-500',
    //     text: 'white',
    //   },
    //   txtDarkInner: 'info-500',
    //   close: {
    //     textDark: 'info-500',
    //     bgHoverEnabled: 'info-300/50',
    //     bgHoverEnabledDark: 'info-500/30',
    //     bgFocusVisible: 'info-300/50',
    //     bgFocusVisibleDark: 'info-500/30',
    //     bgActiveEnabled: 'info-300/20',
    //     bgActiveEnabledDark: 'info-500/20',
    //   },
    // },
    // messageSuccess: {
    //   bg: 'success-100',
    //   bgDark: 'success-500/10',
    //   border: 'success-200',
    //   borderDark: 'success-700',
    //   outer: {
    //     bg: 'success-500',
    //     text: 'white',
    //   },
    //   txtDarkInner: 'success-500',
    //   close: {
    //     textDark: 'success-500',
    //     bgHoverEnabled: 'success-300/50',
    //     bgHoverEnabledDark: 'success-500/30',
    //     bgFocusVisible: 'success-300/50',
    //     bgFocusVisibleDark: 'success-500/30',
    //     bgActiveEnabled: 'success-300/20',
    //     bgActiveEnabledDark: 'success-500/20',
    //   },
    // },
    // messageWarning: {
    //   bg: 'warning-100',
    //   bgDark: 'warning-500/10',
    //   border: 'warning-200',
    //   borderDark: 'warning-700',
    //   outer: {
    //     bg: 'warning-500',
    //     text: 'white',
    //   },
    //   txtDarkInner: 'warning-500',
    //   close: {
    //     textDark: 'warning-500',
    //     bgHoverEnabled: 'warning-300/50',
    //     bgHoverEnabledDark: 'warning-500/30',
    //     bgFocusVisible: 'warning-300/50',
    //     bgFocusVisibleDark: 'warning-500/30',
    //     bgActiveEnabled: 'warning-300/20',
    //     bgActiveEnabledDark: 'warning-500/20',
    //   },
    // },
    // messageDanger: {
    //   bg: 'danger-100',
    //   bgDark: 'danger-500/10',
    //   border: 'danger-200',
    //   borderDark: 'danger-700',
    //   outer: {
    //     bg: 'danger-500',
    //     text: 'white',
    //   },
    //   txtDarkInner: 'danger-500',
    //   close: {
    //     textDark: 'danger-500',
    //     bgHoverEnabled: 'danger-300/50',
    //     bgHoverEnabledDark: 'danger-500/30',
    //     bgFocusVisible: 'danger-300/50',
    //     bgFocusVisibleDark: 'danger-500/30',
    //     bgActiveEnabled: 'danger-300/20',
    //     bgActiveEnabledDark: 'danger-500/20',
    //   },
    // },
  },
}

export type MessageConfig = typeof defaultConfig
export interface MessagePluginConfig {
  [key]: MessageConfig
}
