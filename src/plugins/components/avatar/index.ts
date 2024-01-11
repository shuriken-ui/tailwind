import plugin from 'tailwindcss/plugin'
import { type AvatarConfig, defaultConfig, key } from './avatar.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies AvatarConfig

  addComponents({
    '.nui-avatar': {
      //Avatar:wrapper
      '@apply relative inline-flex shrink-0 items-center justify-center outline-none':
        {},
      //Avatar:inner
      '.nui-avatar-inner': {
        //Base
        '@apply flex items-center justify-center overflow-hidden text-center':
          {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size}`]: {},
        //Transitions
        [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
          {},
      },
      //Avatar:badge
      '.nui-avatar-badge': {
        //Base
        [`@apply absolute z-10 block overflow-hidden rounded-${config.badge.rounded}`]:
          {},
        //Background
        [`@apply bg-${config.badge.background.light} dark:bg-${config.badge.background.dark}`]:
          {},
        //Badge:img
        '.nui-badge-img': {
          //Base
          '@apply relative scale-90 object-cover': {},
          //Size & Radius
          [`@apply h-${config.badge.img.size} w-${config.badge.img.size} rounded-${config.badge.img.rounded}`]:
            {},
        },
      },
      //Avatar:img
      '.nui-avatar-img': {
        //Base
        '@apply object-cover': {},
        //Size & Radius
        [`@apply h-${config.img.size} max-h-${config.img.size} w-${config.img.size} max-w-${config.img.size}`]:
          {},
        //Shadow
        [`@apply shadow-${config.img.shadow}`]: {},
      },
      //Avatar:text
      '.nui-avatar-text': {
        [`@apply font-${config.text.font.family} font-${config.text.font.weight} text-center uppercase`]:
          {},
      },
      //Avatar:dot
      '.nui-avatar-dot': {
        //Base
        '@apply absolute block': {},
        //Border & Radius
        [`@apply border border-${config.dot.border.light} dark:border-${config.dot.border.dark} rounded-${config.dot.rounded}`]:
          {},
        //Color:primary
        '&.nui-dot-primary': {
          [`@apply bg-${config.dot.color.primary}`]: {},
        },
        //Color:info
        '&.nui-dot-info': {
          [`@apply bg-${config.dot.color.info}`]: {},
        },
        //Color:success
        '&.nui-dot-success': {
          [`@apply bg-${config.dot.color.success}`]: {},
        },
        //Color:warning
        '&.nui-dot-warning': {
          [`@apply bg-${config.dot.color.warning}`]: {},
        },
        //Color:danger
        '&.nui-dot-danger': {
          [`@apply bg-${config.dot.color.danger}`]: {},
        },
        //Color:yellow
        '&.nui-dot-yellow': {
          [`@apply bg-${config.dot.color.yellow}`]: {},
        },
        //Color:pink
        '&.nui-dot-pink': {
          [`@apply bg-${config.dot.color.pink}`]: {},
        },
        //Color:indigo
        '&.nui-dot-indigo': {
          [`@apply bg-${config.dot.color.indigo}`]: {},
        },
      },
      //Avatar:ring
      '&.nui-avatar-ring': {
        //Base (requires rounded:full)
        '&.nui-avatar-full': {
          [`@apply ring-${config.ring.width}`]: {},
          //Offset
          [`@apply ring-offset-${config.ring.offset.size} ring-offset-${config.ring.offset.color.light} dark:ring-offset-${config.ring.offset.color.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-ring-primary': {
          [`@apply bg-${config.ring.color.primary}`]: {},
        },
        //Color:info
        '&.nui-ring-info': {
          [`@apply bg-${config.ring.color.info}`]: {},
        },
        //Color:success
        '&.nui-ring-success': {
          [`@apply bg-${config.ring.color.success}`]: {},
        },
        //Color:warning
        '&.nui-ring-warning': {
          [`@apply bg-${config.ring.color.warning}`]: {},
        },
        //Color:danger
        '&.nui-ring-danger': {
          [`@apply bg-${config.ring.color.danger}`]: {},
        },
        //Color:yellow
        '&.nui-ring-yellow': {
          [`@apply bg-${config.ring.color.yellow}`]: {},
        },
        //Color:pink
        '&.nui-ring-pink': {
          [`@apply bg-${config.ring.color.pink}`]: {},
        },
        //Color:indigo
        '&.nui-ring-indigo': {
          [`@apply bg-${config.ring.color.indigo}`]: {},
        },
      },
      //Size:xxs
      '&.nui-avatar-xxs': {
        [`@apply h-${config.size.xxs.avatar} w-${config.size.xxs.avatar}`]: {},
        //xxs:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xxs.badge.size} w-${config.size.xxs.badge.size} -bottom-${config.size.xxs.badge.position} -end-${config.size.xxs.badge.position}`]:
            {},
        },
        //xxs:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xxs.dot.size} w-${config.size.xxs.dot.size}`]:
            {},
        },
        //xxs:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xxs.text.font.size}`]: {},
        },
        //xxs:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xxs.rounded.none}`]: {},
          //xxs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.none}`]: {},
          },
          //xxs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.none} top-${config.size.xxs.dot.position.rounded.none}`]:
              {},
          },
        },
        //xxs:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xxs.rounded.sm}`]: {},
          //xxs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.sm}`]: {},
          },
          //xxs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.sm} top-${config.size.xxs.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xxs:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xxs.rounded.md}`]: {},
          //xxs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.md}`]: {},
          },
          //xxs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.md} top-${config.size.xxs.dot.position.rounded.md}`]:
              {},
          },
        },
        //xxs:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xxs.rounded.lg}`]: {},
          //xxs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxs.rounded.lg}`]: {},
          },
          //xxs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.lg} top-${config.size.xxs.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xxs:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxs.dot.position.rounded.full} top-${config.size.xxs.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:xs
      '&.nui-avatar-xs': {
        [`@apply h-${config.size.xs.avatar} w-${config.size.xs.avatar}`]: {},
        //xs:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xs.badge.size} w-${config.size.xs.badge.size} -bottom-${config.size.xs.badge.position} -end-${config.size.xs.badge.position}`]:
            {},
        },
        //xs:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xs.dot.size} w-${config.size.xs.dot.size}`]:
            {},
        },
        //xs:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xs.text.font.size}`]: {},
        },
        //xs:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xs.rounded.none}`]: {},
          //xs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xs.rounded.none}`]: {},
          },
          //xs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.none} top-${config.size.xs.dot.position.rounded.none}`]:
              {},
          },
        },
        //xs:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xs.rounded.sm}`]: {},
          //xs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xs.rounded.sm}`]: {},
          },
          //xs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.sm} top-${config.size.xs.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xs:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xs.rounded.md}`]: {},
          //xs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xs.rounded.md}`]: {},
          },
          //xs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.md} top-${config.size.xs.dot.position.rounded.md}`]:
              {},
          },
        },
        //xs:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xs.rounded.lg}`]: {},
          //xs:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xs.rounded.lg}`]: {},
          },
          //xs:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.lg} top-${config.size.xs.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xs:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xs.dot.position.rounded.full} top-${config.size.xs.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:sm
      '&.nui-avatar-sm': {
        [`@apply h-${config.size.sm.avatar} w-${config.size.sm.avatar}`]: {},
        //sm:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.sm.badge.size} w-${config.size.sm.badge.size} -bottom-${config.size.sm.badge.position} -end-${config.size.sm.badge.position}`]:
            {},
        },
        //sm:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.sm.dot.size} w-${config.size.sm.dot.size}`]:
            {},
        },
        //sm:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.sm.text.font.size}`]: {},
        },
        //sm:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.sm.rounded.none}`]: {},
          //sm:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.sm.rounded.none}`]: {},
          },
          //sm:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.none} top-${config.size.sm.dot.position.rounded.none}`]:
              {},
          },
        },
        //sm:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.sm.rounded.sm}`]: {},
          //sm:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.sm.rounded.sm}`]: {},
          },
          //sm:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.sm} top-${config.size.sm.dot.position.rounded.sm}`]:
              {},
          },
        },
        //sm:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.sm.rounded.md}`]: {},
          //sm:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.sm.rounded.md}`]: {},
          },
          //sm:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.md} top-${config.size.sm.dot.position.rounded.md}`]:
              {},
          },
        },
        //sm:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.sm.rounded.lg}`]: {},
          //sm:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.sm.rounded.lg}`]: {},
          },
          //sm:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.lg} top-${config.size.sm.dot.position.rounded.lg}`]:
              {},
          },
        },
        //sm:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.sm.dot.position.rounded.full} top-${config.size.sm.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:md
      '&.nui-avatar-md': {
        [`@apply h-${config.size.md.avatar} w-${config.size.md.avatar}`]: {},
        //md:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.md.badge.size} w-${config.size.md.badge.size} -bottom-${config.size.md.badge.position} -end-${config.size.md.badge.position}`]:
            {},
        },
        //md:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.md.dot.size} w-${config.size.md.dot.size}`]:
            {},
        },
        //md:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.md.text.font.size}`]: {},
        },
        //md:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.md.rounded.none}`]: {},
          //md:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.md.rounded.none}`]: {},
          },
          //md:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.none} top-${config.size.md.dot.position.rounded.none}`]:
              {},
          },
        },
        //md:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.md.rounded.sm}`]: {},
          //md:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.md.rounded.sm}`]: {},
          },
          //md:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.sm} top-${config.size.md.dot.position.rounded.sm}`]:
              {},
          },
        },
        //md:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.md.rounded.md}`]: {},
          //md:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.md.rounded.md}`]: {},
          },
          //md:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.md} top-${config.size.md.dot.position.rounded.md}`]:
              {},
          },
        },
        //md:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.md.rounded.lg}`]: {},
          //md:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.md.rounded.lg}`]: {},
          },
          //md:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.lg} top-${config.size.md.dot.position.rounded.lg}`]:
              {},
          },
        },
        //md:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.md.dot.position.rounded.full} top-${config.size.md.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:lg
      '&.nui-avatar-lg': {
        [`@apply h-${config.size.lg.avatar} w-${config.size.lg.avatar}`]: {},
        //lg:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.lg.badge.size} w-${config.size.lg.badge.size} -bottom-${config.size.lg.badge.position} -end-${config.size.lg.badge.position}`]:
            {},
        },
        //lg:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.lg.dot.size} w-${config.size.lg.dot.size}`]:
            {},
        },
        //lg:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.lg.text.font.size}`]: {},
        },
        //lg:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.lg.rounded.none}`]: {},
          //lg:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.lg.rounded.none}`]: {},
          },
          //lg:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.none} top-${config.size.lg.dot.position.rounded.none}`]:
              {},
          },
        },
        //lg:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.lg.rounded.sm}`]: {},
          //lg:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.lg.rounded.sm}`]: {},
          },
          //lg:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.sm} top-${config.size.lg.dot.position.rounded.sm}`]:
              {},
          },
        },
        //lg:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.lg.rounded.md}`]: {},
          //lg:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.lg.rounded.md}`]: {},
          },
          //lg:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.md} top-${config.size.lg.dot.position.rounded.md}`]:
              {},
          },
        },
        //lg:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.lg.rounded.lg}`]: {},
          //lg:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.lg.rounded.lg}`]: {},
          },
          //lg:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.lg} top-${config.size.lg.dot.position.rounded.lg}`]:
              {},
          },
        },
        //lg:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.lg.dot.position.rounded.full} top-${config.size.lg.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:xl
      '&.nui-avatar-xl': {
        [`@apply h-${config.size.xl.avatar} w-${config.size.xl.avatar}`]: {},
        //xl:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xl.badge.size} w-${config.size.xl.badge.size} -bottom-${config.size.xl.badge.position} -end-${config.size.xl.badge.position}`]:
            {},
        },
        //xl:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xl.dot.size} w-${config.size.xl.dot.size}`]:
            {},
        },
        //xl:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xl.text.font.size}`]: {},
        },
        //xl:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xl.rounded.none}`]: {},
          //xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xl.rounded.none}`]: {},
          },
          //xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.none} top-${config.size.xl.dot.position.rounded.none}`]:
              {},
          },
        },
        //xl:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xl.rounded.sm}`]: {},
          //xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xl.rounded.sm}`]: {},
          },
          //xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.sm} top-${config.size.xl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //xl:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xl.rounded.md}`]: {},
          //xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xl.rounded.md}`]: {},
          },
          //xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.md} top-${config.size.xl.dot.position.rounded.md}`]:
              {},
          },
        },
        //xl:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xl.rounded.lg}`]: {},
          //xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xl.rounded.lg}`]: {},
          },
          //xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.lg} top-${config.size.xl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //xl:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xl.dot.position.rounded.full} top-${config.size.xl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:2xl
      '&.nui-avatar-2xl': {
        [`@apply h-${config.size.xxl.avatar} w-${config.size.xxl.avatar}`]: {},
        //2xl:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xxl.badge.size} w-${config.size.xxl.badge.size} -bottom-${config.size.xxl.badge.position} -end-${config.size.xxl.badge.position}`]:
            {},
        },
        //2xl:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xxl.dot.size} w-${config.size.xxl.dot.size}`]:
            {},
        },
        //2xl:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xxl.text.font.size}`]: {},
        },
        //2xl:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xxl.rounded.none}`]: {},
          //2xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.none}`]: {},
          },
          //2xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.none} top-${config.size.xxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //2xl:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xxl.rounded.sm}`]: {},
          //2xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.sm}`]: {},
          },
          //2xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.sm} top-${config.size.xxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //2xl:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xxl.rounded.md}`]: {},
          //2xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.md}`]: {},
          },
          //2xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.md} top-${config.size.xxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //2xl:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xxl.rounded.lg}`]: {},
          //2xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxl.rounded.lg}`]: {},
          },
          //2xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.lg} top-${config.size.xxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //2xl:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxl.dot.position.rounded.full} top-${config.size.xxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:3xl
      '&.nui-avatar-3xl': {
        [`@apply h-${config.size.xxxl.avatar} w-${config.size.xxxl.avatar}`]:
          {},
        //3xl:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xxxl.badge.size} w-${config.size.xxxl.badge.size} -bottom-${config.size.xxxl.badge.position} -end-${config.size.xxxl.badge.position}`]:
            {},
        },
        //3xl:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xxxl.dot.size} w-${config.size.xxxl.dot.size}`]:
            {},
        },
        //3xl:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xxxl.text.font.size}`]: {},
        },
        //3xl:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xxxl.rounded.none}`]: {},
          //3xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.none}`]: {},
          },
          //3xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.none} top-${config.size.xxxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //3xl:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xxxl.rounded.sm}`]: {},
          //3xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.sm}`]: {},
          },
          //3xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.sm} top-${config.size.xxxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //3xl:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xxxl.rounded.md}`]: {},
          //3xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.md}`]: {},
          },
          //3xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.md} top-${config.size.xxxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //3xl:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xxxl.rounded.lg}`]: {},
          //3xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxl.rounded.lg}`]: {},
          },
          //3xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.lg} top-${config.size.xxxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //3xl:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxl.dot.position.rounded.full} top-${config.size.xxxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },
      //Size:4xl
      '&.nui-avatar-4xl': {
        [`@apply h-${config.size.xxxxl.avatar} w-${config.size.xxxxl.avatar}`]:
          {},
        //4xl:badge
        '.nui-avatar-badge': {
          [`@apply h-${config.size.xxxxl.badge.size} w-${config.size.xxxxl.badge.size} -bottom-${config.size.xxxxl.badge.position} -end-${config.size.xxxxl.badge.position}`]:
            {},
        },
        //4xl:dot
        '.nui-avatar-dot': {
          [`@apply h-${config.size.xxxxl.dot.size} w-${config.size.xxxxl.dot.size}`]:
            {},
        },
        //4xl:text
        '.nui-avatar-text': {
          [`@apply text-${config.size.xxxxl.text.font.size}`]: {},
        },
        //4xl:rounded-none
        '&.nui-avatar-straight': {
          [`@apply ${config.size.xxxxl.rounded.none}`]: {},
          //4xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.none}`]: {},
          },
          //4xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.none} top-${config.size.xxxxl.dot.position.rounded.none}`]:
              {},
          },
        },
        //4xl:rounded-sm
        '&.nui-avatar-rounded': {
          [`@apply ${config.size.xxxxl.rounded.sm}`]: {},
          //4xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.sm}`]: {},
          },
          //4xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.sm} top-${config.size.xxxxl.dot.position.rounded.sm}`]:
              {},
          },
        },
        //4xl:rounded-md
        '&.nui-avatar-smooth': {
          [`@apply ${config.size.xxxxl.rounded.md}`]: {},
          //4xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.md}`]: {},
          },
          //4xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.md} top-${config.size.xxxxl.dot.position.rounded.md}`]:
              {},
          },
        },
        //4xl:rounded-lg
        '&.nui-avatar-curved': {
          [`@apply ${config.size.xxxxl.rounded.lg}`]: {},
          //4xl:inner
          '.nui-avatar-inner': {
            [`@apply ${config.size.xxxxl.rounded.lg}`]: {},
          },
          //4xl:dot
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.lg} top-${config.size.xxxxl.dot.position.rounded.lg}`]:
              {},
          },
        },
        //4xl:rounded-full
        '&.nui-avatar-full': {
          '.nui-avatar-dot': {
            [`@apply end-${config.size.xxxxl.dot.position.rounded.full} top-${config.size.xxxxl.dot.position.rounded.full}`]:
              {},
          },
        },
      },

      '&.nui-avatar-full': {
        '@apply rounded-full': {},

        '.nui-avatar-inner': {
          '@apply rounded-full': {},
        },

        '.nui-avatar-badge': {
          '@apply -bottom-0 -end-0': {},
        },
      },

      '&.nui-avatar-mask:not(.nui-avatar-rounded):not(.nui-avatar-smooth):not(.nui-avatar-curved):not(.nui-avatar-full)':
        {
          '@apply nui-mask': {},
        },
    },
  })
}, config)
