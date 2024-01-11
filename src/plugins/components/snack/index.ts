import plugin from 'tailwindcss/plugin'
import { type SnackConfig, defaultConfig, key } from './snack.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies SnackConfig

  addComponents({
    //Wrapper
    '.nui-snack': {
      [`@apply inline-flex items-center gap-1 ${config.rounded} outline-transparent`]:
        {},

      '.nui-snack-icon': {
        //Base
        [`@apply -ms-0.5 flex items-center justify-center ${config.icon.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.icon.background.light} dark:bg-${config.icon.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.icon.border.light} dark:border-${config.icon.border.dark}`]:
          {},
      },
      //Snack:image
      '.nui-snack-image': {
        [`@apply -ms-0.5 flex items-center justify-center ${config.image.rounded} shrink-0`]:
          {},
      },
      //Image:inner
      '.nui-snack-image-inner': {
        [`@apply ${config.image.rounded}`]: {},
      },
      //Snack:text
      '.nui-snack-text': {
        //Font
        [`@apply font-${config.font.family}`]: {},
        //Color
        [`@apply text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
          {},
      },
      //Snack:button
      '.nui-snack-button': {
        '@apply hover:!bg-transparent': {},
      },
      //Size:xs
      '&.nui-snack-xs': {
        //Snack:media:xs
        '&:not(.nui-has-media)': {
          '@apply !ps-2': {},
        },
        //Snack:text
        '.nui-snack-text': {
          //Font
          [`@apply text-${config.size.xs.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.xs.size}`]: {},
        //Snack:icon
        '.nui-snack-icon': {
          [`@apply w-${config.size.xs.icon.outer.size} h-${config.size.xs.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-snack-icon-inner': {
          [`@apply h-${config.size.xs.icon.inner.size} w-${config.size.xs.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.nui-snack-image, .nui-snack-image-inner': {
          [`@apply w-${config.size.xs.image.outer.size} h-${config.size.xs.image.outer.size}`]:
            {},
        },
      },
      //Size:sm
      '&.nui-snack-sm': {
        //Snack:media:sm
        '&:not(.nui-has-media)': {
          '@apply !ps-3': {},
        },
        //Snack:text
        '.nui-snack-text': {
          //Font
          [`@apply text-${config.size.sm.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.sm.size}`]: {},
        //Snack:icon
        '.nui-snack-icon': {
          [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-snack-icon-inner': {
          [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.nui-snack-image, .nui-snack-image-inner': {
          [`@apply w-${config.size.sm.image.outer.size} h-${config.size.sm.image.outer.size}`]:
            {},
        },
      },
      //Size:md
      '&.nui-snack-md': {
        //Snack:media:md
        '&:not(.nui-has-media)': {
          '@apply !ps-4': {},
        },
        //Snack:text
        '.nui-snack-text': {
          //Font
          [`@apply text-${config.size.md.font.size}`]: {},
        },
        //Size
        [`@apply h-${config.size.md.size}`]: {},
        //Snack:icon
        '.nui-snack-icon': {
          [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.nui-snack-icon-inner': {
          [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
            {},
        },
        //Snack:image
        '.nui-snack-image, .nui-snack-image-inner': {
          [`@apply w-${config.size.md.image.outer.size} h-${config.size.md.image.outer.size}`]:
            {},
        },
      },
      //Color:default
      '&.nui-snack-default': {
        //Background
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      '&.nui-snack-muted': {
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
          {},
      },
    },
  })
}, config)
