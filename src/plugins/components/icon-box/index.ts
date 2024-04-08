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
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.xs.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.xs.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.xs.rounded.lg}`]: {},
        },
      },
      //Size:sm
      '&.nui-box-sm': {
        [`@apply h-${config.size.sm.size} w-${config.size.sm.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.sm.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.sm.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.sm.rounded.lg}`]: {},
        },
      },
      //Size:md
      '&.nui-box-md': {
        [`@apply h-${config.size.md.size} w-${config.size.md.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.md.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.md.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.md.rounded.lg}`]: {},
        },
      },
      //Size:lg
      '&.nui-box-lg': {
        [`@apply h-${config.size.lg.size} w-${config.size.lg.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.lg.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.lg.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.lg.rounded.lg}`]: {},
        },
      },
      //Size:xl
      '&.nui-box-xl': {
        [`@apply h-${config.size.xl.size} w-${config.size.xl.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.xl.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.xl.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.xl.rounded.lg}`]: {},
        },
      },
      //Size:xxl
      '&.nui-box-2xl': {
        [`@apply h-${config.size.xxl.size} w-${config.size.xxl.size}`]: {},
        //Rounded:sm
        '&.nui-box-rounded-sm': {
          [`@apply ${config.size.xxl.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-box-rounded-md': {
          [`@apply ${config.size.xxl.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-box-rounded-lg': {
          [`@apply ${config.size.xxl.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-box-rounded-full': {
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
        //Color:default
        '&.nui-box-default': {
          //Font
          [`@apply text-${config.color.variant.solid.default.font.color.light} dark:text-${config.color.variant.solid.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.default.background.light} dark:bg-${config.color.variant.solid.default.background.dark}`]:
            {},
        },
        //Color:default-contrast
        '&.nui-box-default-contrast': {
          //Font
          [`@apply text-${config.color.variant.solid.defaultContrast.font.color.light} dark:text-${config.color.variant.solid.defaultContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.defaultContrast.background.light} dark:bg-${config.color.variant.solid.defaultContrast.background.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-box-muted': {
          //Font
          [`@apply text-${config.color.variant.solid.muted.font.color.light} dark:text-${config.color.variant.solid.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.muted.background.light} dark:bg-${config.color.variant.solid.muted.background.dark}`]:
            {},
        },
        //Color:muted-contrast
        '&.nui-box-muted-contrast': {
          //Font
          [`@apply text-${config.color.variant.solid.mutedContrast.font.color.light} dark:text-${config.color.variant.solid.mutedContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.mutedContrast.background.light} dark:bg-${config.color.variant.solid.mutedContrast.background.dark}`]:
            {},
        },
        //Color:light
        '&.nui-box-light': {
          //Font
          [`@apply text-${config.color.variant.solid.light.font.color.light} dark:text-${config.color.variant.solid.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.light.background.light} dark:bg-${config.color.variant.solid.light.background.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-box-dark': {
          //Font
          [`@apply text-${config.color.variant.solid.dark.font.color.light} dark:text-${config.color.variant.solid.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.dark.background.light} dark:bg-${config.color.variant.solid.dark.background.dark}`]:
            {},
        },
        //Color:black
        '&.nui-box-black': {
          //Font
          [`@apply text-${config.color.variant.solid.black.font.color.light} dark:text-${config.color.variant.solid.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.solid.black.background.light} dark:bg-${config.color.variant.solid.black.background.dark}`]:
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
        //Color:default
        '&.nui-box-default': {
          //Font
          [`@apply text-${config.color.variant.pastel.default.font.color.light} dark:text-${config.color.variant.pastel.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.default.background.light} dark:bg-${config.color.variant.pastel.default.background.dark}`]:
            {},
        },
        //Color:default-contrast
        '&.nui-box-default-contrast': {
          //Font
          [`@apply text-${config.color.variant.pastel.defaultContrast.font.color.light} dark:text-${config.color.variant.pastel.defaultContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.defaultContrast.background.light} dark:bg-${config.color.variant.pastel.defaultContrast.background.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-box-muted': {
          //Font
          [`@apply text-${config.color.variant.pastel.muted.font.color.light} dark:text-${config.color.variant.pastel.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.muted.background.light} dark:bg-${config.color.variant.pastel.muted.background.dark}`]:
            {},
        },
        //Color:muted-contrast
        '&.nui-box-muted-contrast': {
          //Font
          [`@apply text-${config.color.variant.pastel.mutedContrast.font.color.light} dark:text-${config.color.variant.pastel.mutedContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.mutedContrast.background.light} dark:bg-${config.color.variant.pastel.mutedContrast.background.dark}`]:
            {},
        },
        //Color:light
        '&.nui-box-light': {
          //Font
          [`@apply text-${config.color.variant.pastel.light.font.color.light} dark:text-${config.color.variant.pastel.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.light.background.light} dark:bg-${config.color.variant.pastel.light.background.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-box-dark': {
          //Font
          [`@apply text-${config.color.variant.pastel.dark.font.color.light} dark:text-${config.color.variant.pastel.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.dark.background.light} dark:bg-${config.color.variant.pastel.dark.background.dark}`]:
            {},
        },
        //Color:black
        '&.nui-box-black': {
          //Font
          [`@apply text-${config.color.variant.pastel.black.font.color.light} dark:text-${config.color.variant.pastel.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.pastel.black.background.light} dark:bg-${config.color.variant.pastel.black.background.dark}`]:
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
        //Color:default
        '&.nui-box-default': {
          //Font
          [`@apply text-${config.color.variant.outline.default.font.color.light} dark:text-${config.color.variant.outline.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.default.background.light}  bg-${config.color.variant.outline.default.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.default.border.light} dark:border-${config.color.variant.outline.default.border.dark}`]:
            {},
        },
        //Color:default-contrast
        '&.nui-box-default-contrast': {
          //Font
          [`@apply text-${config.color.variant.outline.defaultContrast.font.color.light} dark:text-${config.color.variant.outline.defaultContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.defaultContrast.background.light}  bg-${config.color.variant.outline.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.defaultContrast.border.light} dark:border-${config.color.variant.outline.defaultContrast.border.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-box-muted': {
          //Font
          [`@apply text-${config.color.variant.outline.muted.font.color.light} dark:text-${config.color.variant.outline.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.muted.background.light}  bg-${config.color.variant.outline.muted.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.muted.border.light} dark:border-${config.color.variant.outline.muted.border.dark}`]:
            {},
        },
        //Color:muted-contrast
        '&.nui-box-muted-contrast': {
          //Font
          [`@apply text-${config.color.variant.outline.mutedContrast.font.color.light} dark:text-${config.color.variant.outline.mutedContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.mutedContrast.background.light}  bg-${config.color.variant.outline.mutedContrast.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.mutedContrast.border.light} dark:border-${config.color.variant.outline.mutedContrast.border.dark}`]:
            {},
        },
        //Color:light
        '&.nui-box-light': {
          //Font
          [`@apply text-${config.color.variant.outline.light.font.color.light} dark:text-${config.color.variant.outline.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.light.background.light}  bg-${config.color.variant.outline.light.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.light.border.light} dark:border-${config.color.variant.outline.light.border.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-box-dark': {
          //Font
          [`@apply text-${config.color.variant.outline.dark.font.color.light} dark:text-${config.color.variant.outline.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.dark.background.light}  bg-${config.color.variant.outline.dark.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.dark.border.light} dark:border-${config.color.variant.outline.dark.border.dark}`]:
            {},
        },
        //Color:black
        '&.nui-box-black': {
          //Font
          [`@apply text-${config.color.variant.outline.black.font.color.light} dark:text-${config.color.variant.outline.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.variant.outline.black.background.light}  bg-${config.color.variant.outline.black.background.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.color.variant.outline.black.border.light} dark:border-${config.color.variant.outline.black.border.dark}`]:
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
      '&.nui-box-mask:not(.nui-box-rounded-sm):not(.nui-box-rounded-lg):not(.nui-box-rounded-full):not(.nui-box-outline):not(.nui-box-bordered)':
        {
          '@apply nui-mask': {},
        },
    },
  })
}, config)
