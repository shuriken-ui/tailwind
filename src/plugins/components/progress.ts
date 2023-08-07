import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultProgressConfig = {
  size: 'full',
  bar: {
    duration: '300',
  },
  default: {
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
  defaultContrast: {
    bg: 'muted-200',
    bgDark: 'muted-900',
  },
  progressXS: '1',
  progressSM: '2',
  progressMD: '3',
  progressLG: '3',
  progressXL: '5',
  rounded: {
    curved: 'lg',
    full: 'full',
  },
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
        'shurikenUi.progress'
      ) satisfies typeof defaultProgressConfig

      addComponents({
        [`.${prefix}-progress`]: {
          [`@apply relative w-${config.size} overflow-hidden`]: {},

          [`.${prefix}-progress-bar`]: {
            [`@apply absolute start-0 top-0 h-full transition-all duration-${config.bar.duration}`]:
              {},
          },
          [`&.${prefix}-progress-default`]: {
            [`@apply bg-${config.default.bg} dark:bg-${config.default.bgDark}`]:
              {},
          },
          [`&.${prefix}-progress-contrast`]: {
            [`@apply bg-${config.defaultContrast.bg} dark:bg-${config.defaultContrast.bgDark}`]:
              {},
          },
          [`&.${prefix}-progress-xs`]: {
            [`@apply h-${config.progressXS}`]: {},
          },
          [`&.${prefix}-progress-sm`]: {
            [`@apply h-${config.progressSM}`]: {},
          },
          [`&.${prefix}-progress-md`]: {
            [`@apply h-${config.progressMD}`]: {},
          },
          [`&.${prefix}-progress-lg`]: {
            [`@apply h-${config.progressLG}`]: {},
          },
          [`&.${prefix}-progress-xl`]: {
            [`@apply h-${config.progressXL}`]: {},
          },
          [`&.${prefix}-progress-rounded, &.${prefix}-progress-rounded .${prefix}-progress-bar`]:
            {
              [`@apply rounded`]: {},
            },
          [`&.${prefix}-progress-curved, &.${prefix}-progress-curved .${prefix}-progress-bar`]:
            {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          [`&.${prefix}-progress-full, &.${prefix}-progress-full .${prefix}-progress-bar`]:
            {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
          [`&.${prefix}-progress-indeterminate .${prefix}-progress-bar`]: {
            [`@apply w-full`]: {},
          },
          [`&.${prefix}-progress-primary`]: {
            [`.${prefix}-progress-bar`]: {
              [`@apply bg-${config.primary}`]: {},
            },
          },
          [`&.${prefix}-progress-info`]: {
            [`.${prefix}-progress-bar`]: {
              [`@apply bg-${config.info}`]: {},
            },
          },
          [`&.${prefix}-progress-success`]: {
            [`.${prefix}-progress-bar`]: {
              [`@apply bg-${config.success}`]: {},
            },
          },
          [`&.${prefix}-progress-warning`]: {
            [`.${prefix}-progress-bar`]: {
              [`@apply bg-${config.warning}`]: {},
            },
          },
          [`&.${prefix}-progress-danger`]: {
            [`.${prefix}-progress-bar`]: {
              [`@apply bg-${config.danger}`]: {},
            },
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          progress: defaultProgressConfig,
        },
      },
    }
  }
)
