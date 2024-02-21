import plugin from 'tailwindcss/plugin'
import {
  type MessageTextConfig,
  defaultConfig,
  key,
} from './message-text.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies MessageTextConfig

  addComponents({
    //Wrapper
    '.nui-message-text': {
      [`@apply relative p-${config.padding}`]: {},
      //Message:header
      '.nui-message-head': {
        [`@apply flex items-center gap-${config.header.gap} mb-3`]: {},
      },
      //Message:dot
      '.nui-message-dot': {
        //Base
        [`@apply inline-block h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded}`]:
          {},
      },
      //Message:close
      '.nui-message-close': {
        [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
          {},
      },
      //Rounded:sm
      '&.nui-message-rounded-sm': {
        [`@apply ${config.rounded.default}`]: {},
      },
      //Rounded:md
      '&.nui-message-rounded-md': {
        [`@apply ${config.rounded.smooth}`]: {},
      },
      //Rounded:lg
      '&.nui-message-rounded-lg': {
        [`@apply ${config.rounded.curved}`]: {},
      },
      //Contrast:low
      '&.nui-message-low-contrast': {
        //Background
        [`@apply bg-${config.contrast.lowContrast.background.light} dark:bg-${config.contrast.lowContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.lowContrast.border.light} dark:border-${config.contrast.lowContrast.border.dark}`]:
          {},
      },
      //Contrast:high
      '&.nui-message-high-contrast': {
        //Background
        [`@apply bg-${config.contrast.highContrast.background.light} dark:bg-${config.contrast.highContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.highContrast.border.light} dark:border-${config.contrast.highContrast.border.dark}`]:
          {},
      },
      //Color:white
      '&.nui-message-default': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.default.dot.background.light} dark:bg-${config.color.default.dot.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-message-primary': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.primary.dot.background.light} dark:bg-${config.color.primary.dot.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.nui-message-info': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.info.dot.background.light} dark:bg-${config.color.info.dot.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.nui-message-success': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.success.dot.background.light} dark:bg-${config.color.success.dot.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.nui-message-warning': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.warning.dot.background.light} dark:bg-${config.color.warning.dot.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.nui-message-danger': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.danger.dot.background.light} dark:bg-${config.color.danger.dot.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.nui-message-dark': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.dark.dot.background.light} dark:bg-${config.color.dark.dot.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.nui-message-black': {
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.black.dot.background.light} dark:bg-${config.color.black.dot.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
