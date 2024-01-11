import plugin from 'tailwindcss/plugin'
import { type IconBoxConfig, defaultConfig, key } from './icon-box.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies IconBoxConfig

  addComponents({
    //Wrapper
    '.nui-icon-box': {
      '@apply relative inline-flex shrink-0 items-center justify-center': {},
      //Size:xs
      '&.nui-box-xs': {
        [`@apply h-${config.size.xs.size} w-${config.size.xs.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.xs.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.xs.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.xs.rounded.lg}`]: {},
        },
      },
      //Size:sm
      '&.nui-box-sm': {
        [`@apply h-${config.size.sm.size} w-${config.size.sm.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.sm.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.sm.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.sm.rounded.lg}`]: {},
        },
      },
      //Size:md
      '&.nui-box-md': {
        [`@apply h-${config.size.md.size} w-${config.size.md.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.md.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.md.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.md.rounded.lg}`]: {},
        },
      },
      //Size:lg
      '&.nui-box-lg': {
        [`@apply h-${config.size.lg.size} w-${config.size.lg.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.lg.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.lg.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.lg.rounded.lg}`]: {},
        },
      },
      //Size:xl
      '&.nui-box-xl': {
        [`@apply h-${config.size.xl.size} w-${config.size.xl.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.xl.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.xl.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.xl.rounded.lg}`]: {},
        },
      },
      //Size:xxl
      '&.nui-box-2xl': {
        [`@apply h-${config.size.xxl.size} w-${config.size.xxl.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded': {
          [`@apply ${config.size.xxl.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-smooth': {
          [`@apply ${config.size.xxl.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-curved': {
          [`@apply ${config.size.xxl.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-box-full': {
        '@apply rounded-full': {},
      },
      //Color:default
      '&.nui-box-default': {
        //Font
        [`@apply text-${config.color.variant.solid.default.font.color.light} dark:text-${config.color.variant.solid.default.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.variant.solid.default.background.light} dark:bg-${config.color.variant.solid.default.background.dark}`]:
          {},
      },
      //Variant:solid
      '&.nui-box-solid': {
        //Color:invert
        '&.nui-box-invert': {
          //Font
          [`@apply text-${config.color.variant.solid.invert.font.color.light} dark:text-${config.color.variant.solid.invert.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.invert.background.light} dark:bg-${config.color.variant.solid.invert.background.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-box-primary': {
          //Font
          [`@apply text-${config.color.variant.solid.primary.font.color.light} dark:text-${config.color.variant.solid.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.primary.background.light} dark:bg-${config.color.variant.solid.primary.background.dark}`]:
            {},
        },
        //Color:info
        '&.nui-box-info': {
          //Font
          [`@apply text-${config.color.variant.solid.info.font.color.light} dark:text-${config.color.variant.solid.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.info.background.light} dark:bg-${config.color.variant.solid.info.background.dark}`]:
            {},
        },
        //Color:success
        '&.nui-box-success': {
          //Font
          [`@apply text-${config.color.variant.solid.success.font.color.light} dark:text-${config.color.variant.solid.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.success.background.light} dark:bg-${config.color.variant.solid.success.background.dark}`]:
            {},
        },
        //Color:warning
        '&.nui-box-warning': {
          //Font
          [`@apply text-${config.color.variant.solid.warning.font.color.light} dark:text-${config.color.variant.solid.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.warning.background.light} dark:bg-${config.color.variant.solid.warning.background.dark}`]:
            {},
        },
        //Color:danger
        '&.nui-box-danger': {
          //Font
          [`@apply text-${config.color.variant.solid.danger.font.color.light} dark:text-${config.color.variant.solid.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.danger.background.light} dark:bg-${config.color.variant.solid.danger.background.dark}`]:
            {},
        },
      },
      //Variant:pastel
      '&.nui-box-pastel': {
        //Color:invert
        '&.nui-box-invert': {
          //Font
          [`@apply text-${config.color.variant.pastel.invert.font.color.light} dark:text-${config.color.variant.pastel.invert.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.invert.background.light} dark:bg-${config.color.variant.pastel.invert.background.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-box-primary': {
          //Font
          [`@apply text-${config.color.variant.pastel.primary.font.color.light} dark:text-${config.color.variant.pastel.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.primary.background.light} dark:bg-${config.color.variant.pastel.primary.background.dark}`]:
            {},
        },
        //Color:info
        '&.nui-box-info': {
          //Font
          [`@apply text-${config.color.variant.pastel.info.font.color.light} dark:text-${config.color.variant.pastel.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.info.background.light} dark:bg-${config.color.variant.pastel.info.background.dark}`]:
            {},
        },
        //Color:success
        '&.nui-box-success': {
          //Font
          [`@apply text-${config.color.variant.pastel.success.font.color.light} dark:text-${config.color.variant.pastel.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.success.background.light} dark:bg-${config.color.variant.pastel.success.background.dark}`]:
            {},
        },
        //Color:warning
        '&.nui-box-warning': {
          //Font
          [`@apply text-${config.color.variant.pastel.warning.font.color.light} dark:text-${config.color.variant.pastel.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.warning.background.light} dark:bg-${config.color.variant.pastel.warning.background.dark}`]:
            {},
        },
        //Color:danger
        '&.nui-box-danger': {
          //Font
          [`@apply text-${config.color.variant.pastel.danger.font.color.light} dark:text-${config.color.variant.pastel.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.danger.background.light} dark:bg-${config.color.variant.pastel.danger.background.dark}`]:
            {},
        },
      },
      //Variant:outline
      '&.nui-box-outline': {
        //Color:invert
        '&.nui-box-invert': {
          //Font
          [`@apply text-${config.color.variant.outline.invert.font.color.light} dark:text-${config.color.variant.outline.invert.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.invert.background.light}  bg-${config.color.variant.outline.invert.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.invert.border.light} dark:border-${config.color.variant.outline.invert.border.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-box-primary': {
          //Font
          [`@apply text-${config.color.variant.outline.primary.font.color.light} dark:text-${config.color.variant.outline.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.primary.background.light}  bg-${config.color.variant.outline.primary.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.primary.border.light} dark:border-${config.color.variant.outline.primary.border.dark}`]:
            {},
        },
        //Color:info
        '&.nui-box-info': {
          //Font
          [`@apply text-${config.color.variant.outline.info.font.color.light} dark:text-${config.color.variant.outline.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.info.background.light}  bg-${config.color.variant.outline.info.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.info.border.light} dark:border-${config.color.variant.outline.info.border.dark}`]:
            {},
        },
        //Color:success
        '&.nui-box-success': {
          //Font
          [`@apply text-${config.color.variant.outline.success.font.color.light} dark:text-${config.color.variant.outline.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.success.background.light}  bg-${config.color.variant.outline.success.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.success.border.light} dark:border-${config.color.variant.outline.success.border.dark}`]:
            {},
        },
        //Color:warning
        '&.nui-box-warning': {
          //Font
          [`@apply text-${config.color.variant.outline.warning.font.color.light} dark:text-${config.color.variant.outline.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.warning.background.light}  bg-${config.color.variant.outline.warning.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.warning.border.light} dark:border-${config.color.variant.outline.warning.border.dark}`]:
            {},
        },
        //Color:danger
        '&.nui-box-danger': {
          //Font
          [`@apply text-${config.color.variant.outline.danger.font.color.light} dark:text-${config.color.variant.outline.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.danger.background.light}  bg-${config.color.variant.outline.danger.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.danger.border.light} dark:border-${config.color.variant.outline.danger.border.dark}`]:
            {},
        },
      },
      //Bordered option
      '&.nui-box-bordered': {
        [`@apply border-${config.bordered.border.size} border-${config.bordered.border.color}`]:
          {},
      },
      //Masks
      '&.nui-box-mask:not(.nui-box-rounded):not(.nui-box-curved):not(.nui-box-full):not(.nui-box-outline):not(.nui-box-bordered)':
        {
          '@apply nui-mask': {},
        },
    },
  })
}, config)
