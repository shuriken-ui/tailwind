import plugin from 'tailwindcss/plugin'
import { type AvatarGroup, defaultConfig, key } from './avatar-group.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies AvatarGroup

  addComponents({
    '.nui-avatar-group': {
      '@apply flex': {},
      //AvatarGroup:outer
      '.nui-avatar-outer': {
        //Base
        [`@apply relative flex shrink-0 items-center justify-center rounded-${config.avatar.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.avatar.outer.background.light} dark:bg-${config.avatar.outer.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.avatar.transition.property} duration-${config.avatar.transition.duration} ease-in`]:
          {},
        //AvatarGroup:inner
        '.nui-avatar': {
          [`@apply bg-${config.avatar.inner.background.light} text-${config.avatar.inner.background.dark} !scale-90`]:
            {},
        },
      },
      //AvatarGroup:count
      '.nui-avatar-count': {
        //Base
        [`@apply relative shrink-0 rounded-${config.count.outer.rounded}`]: {},
        //Background
        [`@apply bg-${config.count.outer.background.light} dark:bg-${config.count.outer.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.count.transition.property} duration-${config.count.transition.duration} ease-in`]:
          {},
        //Count:inner
        '.nui-avatar-count-inner': {
          [`@apply relative scale-90 inline-flex items-center justify-center rounded-${config.count.inner.rounded}`]:
            {},
          //Size
          [`@apply h-${config.count.inner.size} w-${config.count.inner.size}`]:
            {},
          //Background
          [`@apply bg-${config.count.inner.background.light} dark:bg-${config.count.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.count.inner.border.light} dark:border-${config.count.inner.border.dark}`]:
            {},
        },
        //Count:text
        '.nui-avatar-count-text': {
          '@apply -ms-1 uppercase': {},
          //Font
          [`@apply font-${config.count.text.font.family} font-${config.count.text.font.weight}`]:
            {},
          //Font Color
          [`@apply text-${config.count.text.font.color.light} dark:text-${config.count.text.font.color.dark}`]:
            {},
        },
      },
      //Size:xxs
      '&.nui-avatar-group-xxs': {
        //outer
        '.nui-avatar-outer': {
          [`@apply h-${config.size.xxs.outer.size} w-${config.size.xxs.outer.size}`]:
            {},

          '&:first-child': {
            '@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2': {},
          },
          '&:not(:first-child)': {
            '@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2': {},
          },
        },
        //count
        '.nui-avatar-count': {
          [`@apply -ms-2 h-${config.size.xxs.count.size} w-${config.size.xxs.count.size}`]:
            {},

          '.nui-avatar-count-text': {
            [`@apply text-${config.size.xxs.count.font.size}`]: {},
          },
        },
      },
      //Size:xs
      '&.nui-avatar-group-xs': {
        //outer
        '.nui-avatar-outer': {
          [`@apply h-${config.size.xs.outer.size} w-${config.size.xs.outer.size}`]:
            {},

          '&:first-child': {
            '@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2': {},
          },
          '&:not(:first-child)': {
            '@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2': {},
          },
        },
        //count
        '.nui-avatar-count': {
          [`@apply -ms-2 h-${config.size.xs.count.size} w-${config.size.xs.count.size}`]:
            {},

          '.nui-avatar-count-text': {
            [`@apply text-${config.size.xs.count.font.size}`]: {},
          },
        },
      },
      //Size:sm
      '&.nui-avatar-group-sm': {
        //outer
        '.nui-avatar-outer': {
          [`@apply h-${config.size.sm.outer.size} w-${config.size.sm.outer.size}`]:
            {},

          '&:first-child': {
            '@apply hover:-ms-2 hover:me-2 focus:me-2': {},
          },
          '&:not(:first-child)': {
            '@apply -ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2': {},
          },
        },
        //count
        '.nui-avatar-count': {
          [`@apply -ms-3 h-${config.size.sm.count.size} w-${config.size.sm.count.size}`]:
            {},

          '.nui-avatar-count-text': {
            [`@apply text-${config.size.sm.count.font.size}`]: {},
          },
        },
      },
      //Size:md
      '&.nui-avatar-group-md': {
        //outer
        '.nui-avatar-outer': {
          [`@apply h-${config.size.md.outer.size} w-${config.size.md.outer.size}`]:
            {},

          '&:first-child': {
            '@apply hover:-ms-3 hover:me-3 focus:me-3': {},
          },
          '&:not(:first-child)': {
            '@apply -ms-4 hover:-ms-7 hover:me-3 focus:me-3': {},
          },
        },
        //count
        '.nui-avatar-count': {
          [`@apply -ms-4 h-${config.size.md.count.size} w-${config.size.md.count.size}`]:
            {},

          '.nui-avatar-count-text': {
            [`@apply text-${config.size.md.count.font.size}`]: {},
          },
        },
      },
      //Size:lg
      '&.nui-avatar-group-lg': {
        '.nui-avatar-outer': {
          [`@apply h-${config.size.lg.outer.size} w-${config.size.lg.outer.size}`]:
            {},

          '&:first-child': {
            '@apply hover:-ms-4 hover:me-4 focus:me-4': {},
          },
          '&:not(:first-child)': {
            '@apply -ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4': {},
          },
        },
        '.nui-avatar-count': {
          [`@apply -ms-5 h-${config.size.lg.count.size} w-${config.size.lg.count.size}`]:
            {},

          '.nui-avatar-count-text': {
            [`@apply text-${config.size.lg.count.font.size}`]: {},
          },
        },
      },
    },
  })
}, config)
