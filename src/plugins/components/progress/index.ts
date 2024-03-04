import plugin from 'tailwindcss/plugin'
import { type ProgressConfig, defaultConfig, key } from './progress.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
    extend: {
      keyframes: {
        'nui-progress-indeterminate': {
          '0%': { 'margin-left': '-100%' },
          '60%': { 'margin-left': '100%' },
          '100%': { 'margin-left': '-100%' },
        },
      },
      animation: {
        'nui-progress-indeterminate': `nui-progress-indeterminate 3s linear infinite forwards`,
      },
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies ProgressConfig

  addComponents({
    '.nui-progress': {
      [`@apply relative w-${config.width} overflow-hidden`]: {},
      //Bar
      '.nui-progress-bar': {
        [`@apply absolute start-0 top-0 h-full transition-${config.bar.transition.property} duration-${config.bar.transition.duration}`]:
          {},
      },
      //Color
      '&.nui-progress-default': {
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
      },
      '&.nui-progress-contrast': {
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
      },
      //Size
      '&.nui-progress-xs': {
        [`@apply h-${config.size.xs}`]: {},
      },
      '&.nui-progress-sm': {
        [`@apply h-${config.size.sm}`]: {},
      },
      '&.nui-progress-md': {
        [`@apply h-${config.size.md}`]: {},
      },
      '&.nui-progress-lg': {
        [`@apply h-${config.size.lg}`]: {},
      },
      '&.nui-progress-xl': {
        [`@apply h-${config.size.xl}`]: {},
      },
      //Rounded
      '&.nui-progress-rounded-sm, &.nui-progress-rounded-sm .nui-progress-bar':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      '&.nui-progress-rounded-md, &.nui-progress-rounded-md .nui-progress-bar':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      '&.nui-progress-rounded-lg, &.nui-progress-rounded-lg .nui-progress-bar':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      '&.nui-progress-rounded-full, &.nui-progress-rounded-full .nui-progress-bar':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      '&.nui-progress-indeterminate .nui-progress-bar': {
        '@apply w-full': {},
      },
      //Bar color
      '&.nui-progress-primary': {
        '.nui-progress-bar': {
          [`@apply bg-${config.bar.color.primary}`]: {},
        },
      },
      '&.nui-progress-info': {
        '.nui-progress-bar': {
          [`@apply bg-${config.bar.color.info}`]: {},
        },
      },
      '&.nui-progress-success': {
        '.nui-progress-bar': {
          [`@apply bg-${config.bar.color.success}`]: {},
        },
      },
      '&.nui-progress-warning': {
        '.nui-progress-bar': {
          [`@apply bg-${config.bar.color.warning}`]: {},
        },
      },
      '&.nui-progress-danger': {
        '.nui-progress-bar': {
          [`@apply bg-${config.bar.color.danger}`]: {},
        },
      },
      '&.nui-progress-light': {
        '.nui-progress-bar': {
          [`@apply ${config.bar.color.light}`]: {},
        },
      },
      '&.nui-progress-dark': {
        '.nui-progress-bar': {
          [`@apply ${config.bar.color.dark}`]: {},
        },
      },
      '&.nui-progress-black': {
        '.nui-progress-bar': {
          [`@apply ${config.bar.color.black}`]: {},
        },
      },
    },
  })
}, config)
