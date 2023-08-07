import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultCheckboxAnimatedConfig = {
  size: '8',
  rounded: 'full',
  label: {
    disabledOpacity: '75',
    inner: {
      duration: '300',
    },
  },
  default: {
    color: 'muted-600',
    colorDark: 'muted-200',
  },
  light: 'white',
  muted: 'muted-400',
  primary: 'primary-500',
  info: 'info-500',
  success: 'success-500',
  warning: 'warning-500',
  danger: 'danger-500',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.checkboxAnimated'
      ) satisfies typeof defaultCheckboxAnimatedConfig
      const keyframes = {
        '@keyframes stroke': {
          '100%': {
            'stroke-dashoffset': '0',
          },
        },
        '@keyframes reverseCircle': {
          from: {
            'stroke-dashoffset': '0',
          },
          to: {
            'stroke-dashoffset': '166',
          },
        },
        '@keyframes reverseCheck': {
          from: {
            'stroke-dashoffset': '0',
          },
          to: {
            'stroke-dashoffset': '48',
          },
        },
      }

      addComponents({
        [`.${prefix}-checkbox-animated`]: {
          [`@apply ${prefix}-focus relative h-${config.size} w-${config.size} rounded-${config.rounded} focus-within:outline-current`]:
            {},

          [`.${prefix}-checkbox-animated-input`]: {
            [`@apply cursor-pointer disabled:cursor-not-allowed absolute h-full w-full opacity-0 z-[1] left-0 top-0`]:
              {},
          },
          [`.${prefix}-checkbox-animated-label`]: {
            [`@apply relative h-${config.size} w-${config.size} disabled:opacity-75`]:
              {},

            [`.${prefix}-checkbox-animated-label-inner`]: {
              [`@apply absolute h-${config.size} w-${config.size} border border-solid z-0 opacity-100 transition-all duration-${config.label.inner.duration} rounded-full  left-0 top-0`]:
                {},
              [`&.${prefix}-is-opaque`]: {
                [`@apply opacity-0`]: {},
              },
            },
            [`&:deep(svg circle)`]: {
              [`@apply h-${config.size} w-${config.size} stroke-2 stroke-current fill-none`]:
                '',
              'stroke-dasharray': '166',
              'stroke-dashoffset': '166',
              'stroke-miterlimit': '10',
            },
            [`&:deep(svg)`]: {
              [`@apply h-${config.size} w-${config.size} stroke-2 text-current stroke-current shadow-[inset_0_0_0_currentColor] mx-auto my-0 rounded-full`]:
                '',
              'stroke-miterlimit': '10',
            },
            [`&:deep(svg path)`]: {
              [`@apply origin-[50%_50%] stroke-current`]: '',
              'stroke-dasharray': '48',
              'stroke-dashoffset': '48',
            },
          },
          [`&.${prefix}-checked`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`&:deep(svg circle)`]: {
                '@apply animate-[stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_both]':
                  {},
              },
              [`&:deep(svg path)`]: {
                '@apply animate-[stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_both]':
                  {},
              },
            },
          },
          [`&.${prefix}-unchecked`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`&:deep(svg circle)`]: {
                '@apply animate-[reverseCircle_0.6s_cubic-bezier(0.65,0,0.45,1)_0.2s_both]':
                  {},
              },
              [`&:deep(svg path)`]: {
                '@apply animate-[reverseCheck_0.3s_cubic-bezier(0.65,0,0.45,1)_0.1s_both]':
                  {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-default`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.default.color} dark:text-${config.default.colorDark}`]:
                {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.default.color} dark:border-${config.default.colorDark}`]:
                  {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-light`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.light}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.light}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-muted`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.muted}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.muted}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-primary`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.primary}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.primary}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-info`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.info}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.info}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-success`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.success}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.success}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-warning`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.warning}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.warning}`]: {},
              },
            },
          },
          [`&.${prefix}-checkbox-animated-danger`]: {
            [`.${prefix}-checkbox-animated-label`]: {
              [`@apply text-${config.danger}`]: {},

              [`.${prefix}-checkbox-animated-label-inner`]: {
                [`@apply border-${config.danger}`]: {},
              },
            },
          },
        },
      })
      addComponents(keyframes)
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          checkboxAnimated: defaultCheckboxAnimatedConfig,
        },
      },
    }
  }
)
