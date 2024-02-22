import plugin from 'tailwindcss/plugin'
import { defaultConfig, key } from './button-group.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(
  ({ addComponents }) =>
    addComponents({
      '.nui-button-group, [role="group"]': {
        '@apply flex': {},

        '.nui-button, .nui-button-action, .nui-button-icon': {
          '@apply !border-e-0': {},
          '&:focus': {
            '@apply !z-10 relative': {},
          },
          '&:not(:first-child):not(:last-child)': {
            '@apply !rounded-none': {},
          },
          '&:first-child': {
            '@apply !rounded-e-none': {},
          },
          '&:last-child': {
            '@apply !border-e !rounded-s-none': {},
          },
        },

        '.nui-input-wrapper:not(:first-child):not(:last-child)': {
          '.nui-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-wrapper:first-child': {
          '.nui-input': {
            '@apply !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-wrapper:last-child': {
          '.nui-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-select-wrapper:not(:first-child):not(:last-child)': {
          '.nui-select': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-select-wrapper:first-child': {
          '.nui-select': {
            '@apply !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-select-wrapper:last-child': {
          '.nui-select': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-dropdown:not(:first-child):not(:last-child)': {
          '.nui-nui-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-dropdown:first-child': {
          '.nui-nui-button': {
            '@apply !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-dropdown:last-child': {
          '.nui-nui-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },
      },
    }),
  config,
)
