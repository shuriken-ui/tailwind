export const key = 'autocomplete' as const

export const defaultConfig = {
  rounded: {
    none: 'none',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    full: 'full',
  },
  label: {
    float: {
      height: '5',
      font: {
        color: 'primary-500',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
  },
  input: {
    width: 'full',
    font: {
      family: 'sans',
    },
    focus: {
      label: {
        float: {
          font: {
            color: {
              light: 'primary-500',
              dark: 'primary-500',
            },
          },
        },
      },
      icon: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    icon: {
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
      transition: {
        property: 'colors',
        duration: '300',
      },
    },
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  results: {
    font: {
      size: 'base',
    },
    shadow: {
      size: 'lg',
      light: 'muted-300/30',
      dark: 'muted-800/20',
    },
  },
  item: {
    padding: '2',
    icon: {
      color: 'success-500',
      size: '4',
    },
    media: {
      size: '8',
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  placeholder: {
    font: {
      family: 'sans',
      color: {
        light: 'muted-700',
        dark: 'muted-400',
      },
    },
  },
  clear: {
    inner: {
      size: '4',
    },
    font: {
      color: {
        base: {
          light: 'muted-400',
          dark: 'muted-400',
        },
        hover: {
          light: 'muted-700',
          dark: 'muted-200',
        },
      },
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  error: {
    input: {
      border: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
    icon: {
      color: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
    font: {
      family: 'sans',
      size: '[0.65rem]',
      weight: 'medium',
      color: {
        light: 'danger-600',
        dark: 'danger-600',
      },
    },
  },
  multiple: {
    item: {
      background: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      font: {
        family: 'sans',
        size: 'xs',
        weight: 'medium',
        color: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
    icon: {
      size: '3',
    },
  },
  loaded: {
    font: {
      color: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
  },
  size: {
    sm: {
      font: {
        size: 'xs',
      },
      icon: {
        size: {
          inner: '4',
          outer: '8',
        },
      },
      placeload: {
        size: '8',
      },
      clear: {
        size: '8',
      },
    },
    md: {
      font: {
        size: '[0.825rem]',
      },
      icon: {
        size: {
          inner: '[1.15rem]',
          outer: '10',
        },
      },
      placeload: {
        size: '10',
      },
      clear: {
        size: '10',
      },
    },
    lg: {
      font: {
        size: 'sm',
      },
      icon: {
        size: {
          inner: '5',
          outer: '12',
        },
      },
      placeload: {
        size: '12',
      },
      clear: {
        size: '12',
      },
    },
  },
  color: {
    default: {
      base: {
        background: {
          light: 'white',
          dark: 'muted-900',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-700',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-500',
          },
        },
      },
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-800',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-700',
          },
        },
      },
    },
    defaultContrast: {
      base: {
        background: {
          light: 'white',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-800',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-600',
          },
        },
      },
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-950',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-800',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-800',
          },
        },
      },
    },
    muted: {
      base: {
        background: {
          light: 'muted-100',
          dark: 'muted-900',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-700',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-500',
          },
        },
      },
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-800',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
        inner: {
          background: {
            light: 'white',
            dark: 'muted-700',
          },
        },
      },
    },
    mutedContrast: {
      base: {
        background: {
          light: 'muted-100',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-100',
          dark: 'muted-800',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-600',
          },
        },
      },
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-950',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-800',
          },
        },
        inner: {
          background: {
            light: 'white',
            dark: 'muted-800',
          },
        },
      },
    },
  },
  icon: {
    disabled: {
      input: {
        sm: {
          font: {
            size: 'xs',
          },
        },
        md: {
          font: {
            size: 'sm',
          },
        },
        lg: {
          font: {
            size: 'sm',
          },
        },
      },
      label: {
        float: {
          sm: {
            font: {
              size: 'xs',
            },
          },
          md: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
          lg: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
        },
      },
    },
    enabled: {
      input: {
        sm: {
          font: {
            size: 'xs',
          },
        },
        md: {
          font: {
            size: 'sm',
          },
        },
        lg: {
          font: {
            size: 'base',
          },
        },
      },
      label: {
        float: {
          sm: {
            font: {
              size: 'xs',
            },
          },
          md: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
          lg: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
        },
      },
    },
  },
}

// export const defaultConfig = {
//   labelFloat: {
//     text: 'primary-500',
//     size: '5',
//     duration: '300',
//   },
//   multipleList: {
//     item: {
//       bg: 'muted-200',
//       bgDark: 'muted-700',
//       text: 'muted-400',
//       textSize: 'xs',
//       font: 'sans',
//       fontWeight: 'medium',
//     },
//     icon: {
//       size: '3',
//     },
//   },
//   icon: {
//     text: 'muted-400',
//     duration: '300',
//   },
//   input: {
//     size: 'full',
//     font: 'sans',
//     duration: '300',
//     focusVisible: {
//       labelFloat: {
//         text: 'primary-500',
//         textDark: 'primary-500',
//       },
//       icon: {
//         text: 'primary-500',
//       },
//     },
//   },
//   clear: {
//     text: 'muted-400',
//     textHover: 'muted-700',
//     textHoverDark: 'muted-200',
//     duration: '300',
//     inner: {
//       size: '4',
//     },
//   },
//   errorText: {
//     text: 'danger-600',
//     textSize: '[0.65rem]',
//     font: 'sans',
//     fontWeight: 'medium',
//   },
//   results: {
//     text: 'base',
//     shadow: 'muted-500/10',
//     shadowDark: 'muted-800/10',
//     shadowSize: 'lg',
//   },
//   itemInner: {
//     space: '2',
//     duration: '300',
//     selectedIcon: {
//       text: 'success-500',
//       size: '4',
//     },
//     hasMedia: {
//       size: '8',
//     },
//   },
//   placeholder: {
//     font: 'sans',
//     text: 'muted-700',
//     textDark: 'muted-400',
//   },
//   rounded: {
//     default: 'md',
//     smooth: 'lg',
//     curved: 'xl',
//     full: {
//       input: 'full',
//       inner: 'xl',
//     },
//   },
//   sm: {
//     text: 'xs',
//     icon: {
//       size: '8',
//       innerSize: '4',
//     },
//     placeload: {
//       size: '8',
//     },
//     clear: {
//       size: '8',
//     },
//   },
//   md: {
//     text: '[0.825rem]',
//     icon: {
//       size: '10',
//       innerSize: '[1.15rem]',
//     },
//     placeload: {
//       size: '10',
//     },
//     clear: {
//       size: '10',
//     },
//   },
//   lg: {
//     text: 'sm',
//     icon: {
//       size: '12',
//       innerSize: '5',
//     },
//     placeload: {
//       size: '12',
//     },
//     clear: {
//       size: '12',
//     },
//   },
//   default: {
//     bg: 'white',
//     bgDark: 'muted-900/75',
//     border: 'muted-300',
//     borderDark: 'muted-700',
//     text: 'muted-600',
//     textDark: 'muted-200',
//     textPlaceholder: 'muted-300',
//     textPlaceholderDark: 'muted-500',
//     results: {
//       border: 'muted-200',
//       borderDark: 'muted-700',
//       bg: 'white',
//       bgDark: 'muted-800',
//     },
//     resultsInner: {
//       bg: 'muted-100',
//       bgDark: 'muted-700',
//     },
//   },
//   defaultContrast: {
//     bg: 'white',
//     bgDark: 'muted-950/75',
//     border: 'muted-300',
//     borderDark: 'muted-800',
//     text: 'muted-600',
//     textDark: 'muted-200',
//     textPlaceholder: 'muted-300',
//     textPlaceholderDark: 'muted-600',
//     results: {
//       border: 'muted-200',
//       borderDark: 'muted-800',
//       bg: 'white',
//       bgDark: 'muted-950/75',
//     },
//     resultsInner: {
//       bg: 'muted-100',
//       bgDark: 'muted-800',
//     },
//   },
//   muted: {
//     bg: 'muted-100',
//     bgDark: 'muted-900/75',
//     border: 'muted-200',
//     borderDark: 'muted-700',
//     text: 'muted-600',
//     textDark: 'muted-200',
//     textPlaceholder: 'muted-300',
//     textPlaceholderDark: 'muted-500',
//     results: {
//       border: 'muted-200',
//       borderDark: 'muted-700',
//       bg: 'white',
//       bgDark: 'muted-800',
//     },
//     resultsInner: {
//       bg: 'white',
//       bgDark: 'muted-700',
//     },
//   },
//   mutedContrast: {
//     bg: 'muted-100',
//     bgDark: 'muted-950/75',
//     border: 'muted-100',
//     borderDark: 'muted-800',
//     text: 'muted-600',
//     textDark: 'muted-200',
//     textPlaceholder: 'muted-300',
//     textPlaceholderDark: 'muted-600',
//     results: {
//       border: 'muted-200',
//       borderDark: 'muted-800',
//       bg: 'white',
//       bgDark: 'muted-950/75',
//     },
//     resultsInner: {
//       bg: 'white',
//       bgDark: 'muted-700',
//     },
//   },
//   notLoading: {
//     text: 'muted-300',
//     textDark: 'muted-600',
//   },
//   error: {
//     border: 'danger-500',
//     borderDark: 'danger-500',
//     icon: {
//       text: 'danger-500',
//     },
//   },
//   hasNotIcon: {
//     text: {
//       sm: 'xs',
//       md: 'sm',
//       lg: 'sm',
//     },
//     labelFloat: {
//       sm: 'xs',
//       md: {
//         text: 'xs',
//         focusVisible: {
//           text: 'xs',
//         },
//         placeholderShown: {
//           text: '[0.825rem]',
//         },
//       },
//       lg: {
//         text: 'xs',
//         focusVisible: {
//           text: 'xs',
//         },
//         placeholderShown: {
//           text: '[0.825rem]',
//         },
//       },
//     },
//   },
//   hasIcon: {
//     text: {
//       sm: 'xs',
//       md: 'sm',
//       lg: 'base',
//     },
//     labelFloat: {
//       sm: 'xs',
//       md: {
//         text: 'xs',
//         focusVisible: {
//           text: 'xs',
//         },
//         placeholderShown: {
//           text: '[0.825rem]',
//         },
//       },
//       lg: {
//         text: 'xs',
//         focusVisible: {
//           text: 'xs',
//         },
//         placeholderShown: {
//           text: '[0.825rem]',
//         },
//       },
//     },
//   },
// }

export type AutocompleteConfig = typeof defaultConfig
export interface AutocompletePluginConfig {
  [key]: AutocompleteConfig
}
