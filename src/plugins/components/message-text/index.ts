import plugin from 'tailwindcss/plugin'
import {
  type MessageTextConfig,
  defaultConfig,
  key,
} from './message-text.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

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
        //Background
        [`@apply bg-${config.dot.background.light} dark:bg-${config.dot.background.dark}`]:
          {},
      },
      //Message:close
      '.nui-message-close': {
        [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
          {},
      },
      //Rounded:sm
      '&.nui-message-rounded': {
        [`@apply ${config.rounded.default}`]: {},
      },
      //Rounded:md
      '&.nui-message-smooth': {
        [`@apply ${config.rounded.smooth}`]: {},
      },
      //Rounded:lg
      '&.nui-message-curved': {
        [`@apply ${config.rounded.curved}`]: {},
      },
      //Color:white
      '&.nui-message-white': {
        [`@apply bg-${config.color.white.background.light} dark:bg-${config.color.white.background.dark}`]:
          {},
      },
      //Color:whiteContrast
      '&.nui-message-white-contrast': {
        [`@apply bg-${config.color.whiteContrast.background.light} dark:bg-${config.color.whiteContrast.background.dark}`]:
          {},
      },
      //Color:default
      '&.nui-message-default': {
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.default.dot.background.light} dark:bg-${config.color.default.dot.background.dark}`]:
            {},
        },
      },
      //Color:contrast
      '&.nui-message-contrast': {
        [`@apply border border-${config.color.contrast.border.light} dark:border-${config.color.contrast.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.contrast.dot.background.light} dark:bg-${config.color.contrast.dot.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.nui-message-primary': {
        [`@apply border border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.primary.dot.background.light} dark:bg-${config.color.primary.dot.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.nui-message-info': {
        [`@apply border border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.info.dot.background.light} dark:bg-${config.color.info.dot.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.nui-message-success': {
        [`@apply border border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.success.dot.background.light} dark:bg-${config.color.success.dot.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.nui-message-warning': {
        [`@apply border border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.warning.dot.background.light} dark:bg-${config.color.warning.dot.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.nui-message-danger': {
        [`@apply border border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
        //Message:dot
        '.nui-message-dot': {
          [`@apply bg-${config.color.danger.dot.background.light} dark:bg-${config.color.danger.dot.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
