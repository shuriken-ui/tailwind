import plugin from 'tailwindcss/plugin'
import { type TagConfig, defaultConfig, key } from './tag.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TagConfig

  addComponents({
    //Wrapper
    '.nui-tag': {
      [`@apply inline-block px-${config.padding.x} font-${config.font.family} transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Size:sm
      '&.nui-tag-sm': {
        //Padding
        [`@apply py-${config.size.sm.padding.y}`]: {},
        //Size
        [`@apply text-${config.size.sm.font.size}`]: {},
      },
      //Size:md
      '&.nui-tag-md': {
        //Padding
        [`@apply py-${config.size.md.padding.y}`]: {},
        //Size
        [`@apply text-${config.size.md.font.size}`]: {},
      },
      //Rounded:sm
      '&.nui-tag-rounded': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.nui-tag-smooth': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.nui-tag-curved': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.nui-tag-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Variant:solid
      '&.nui-tag-solid': {
        //Color:default
        '&.nui-tag-default': {
          //Color
          [`@apply text-${config.variant.solid.default.font.color.light} dark:text-${config.variant.solid.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.default.background.light} dark:bg-${config.variant.solid.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.default.border.light} dark:border-${config.variant.solid.default.border.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.default.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.default.shadow.size}`]:
              {},
          },
        },
        //Color:default-contrast
        '&.nui-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.solid.defaultContrast.font.color.light} dark:text-${config.variant.solid.defaultContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.defaultContrast.background.light} dark:bg-${config.variant.solid.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.solid.defaultContrast.border.light} dark:border-${config.variant.solid.defaultContrast.border.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.defaultContrast.shadow.size}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.defaultContrast.shadow.size}`]:
              {},
          },
        },
        //Color:muted
        '&.nui-tag-muted': {
          //Color
          [`@apply text-${config.variant.solid.muted.font.color.light} dark:text-${config.variant.solid.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.muted.background.light} dark:bg-${config.variant.solid.muted.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.muted.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.muted.shadow.size}`]:
              {},
          },
        },
        //Color:muted-contrast
        '&.nui-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.solid.mutedContrast.font.color.light} dark:text-${config.variant.solid.mutedContrast.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.mutedContrast.background.light} dark:bg-${config.variant.solid.mutedContrast.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.mutedContrast.shadow.size}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.mutedContrast.shadow.size}`]:
              {},
          },
        },
        //Color:light
        '&.nui-tag-light': {
          //Color
          [`@apply text-${config.variant.solid.light.font.color.light} dark:text-${config.variant.solid.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.light.background.light} dark:bg-${config.variant.solid.light.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.light.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.light.shadow.size}`]:
              {},
          },
        },
        //Color:dark
        '&.nui-tag-dark': {
          //Color
          [`@apply text-${config.variant.solid.dark.font.color.light} dark:text-${config.variant.solid.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.dark.background.light} dark:bg-${config.variant.solid.dark.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.dark.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.dark.shadow.size}`]:
              {},
          },
        },
        //Color:black
        '&.nui-tag-black': {
          //Color
          [`@apply text-${config.variant.solid.black.font.color.light} dark:text-${config.variant.solid.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.black.background.light} dark:bg-${config.variant.solid.black.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.black.shadow.size}`]: {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.black.shadow.size}`]:
              {},
          },
        },
        //Color:primary
        '&.nui-tag-primary': {
          //Color
          [`@apply text-${config.variant.solid.primary.font.color.light} dark:text-${config.variant.solid.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.primary.background.light} dark:bg-${config.variant.solid.primary.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.primary.shadow.size} shadow-${config.variant.solid.primary.shadow.light} shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.primary.shadow.size} hover:shadow-${config.variant.solid.primary.shadow.light} hover:shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
        },
        //Color:info
        '&.nui-tag-info': {
          //Color
          [`@apply text-${config.variant.solid.info.font.color.light} dark:text-${config.variant.solid.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.info.background.light} dark:bg-${config.variant.solid.info.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.info.shadow.size} shadow-${config.variant.solid.info.shadow.light} shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.info.shadow.size} hover:shadow-${config.variant.solid.info.shadow.light} hover:shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
        },
        //Color:success
        '&.nui-tag-success': {
          //Color
          [`@apply text-${config.variant.solid.success.font.color.light} dark:text-${config.variant.solid.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.success.background.light} dark:bg-${config.variant.solid.success.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.success.shadow.size} shadow-${config.variant.solid.success.shadow.light} shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.success.shadow.size} hover:shadow-${config.variant.solid.success.shadow.light} hover:shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
        },
        //Color:warning
        '&.nui-tag-warning': {
          //Color
          [`@apply text-${config.variant.solid.warning.font.color.light} dark:text-${config.variant.solid.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.warning.background.light} dark:bg-${config.variant.solid.warning.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.warning.shadow.size} shadow-${config.variant.solid.warning.shadow.light} shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.warning.shadow.size} hover:shadow-${config.variant.solid.warning.shadow.light} hover:shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
        },
        //Color:danger
        '&.nui-tag-danger': {
          //Color
          [`@apply text-${config.variant.solid.danger.font.color.light} dark:text-${config.variant.solid.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.solid.danger.background.light} dark:bg-${config.variant.solid.danger.background.dark}`]:
            {},
          //Shadow:static
          '&.nui-tag-shadow': {
            [`@apply shadow-${config.variant.solid.danger.shadow.size} shadow-${config.variant.solid.danger.shadow.light} shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
          //Shadow:hover
          '&.nui-tag-shadow-hover': {
            [`@apply hover:shadow-${config.variant.solid.danger.shadow.size} hover:shadow-${config.variant.solid.danger.shadow.light} hover:shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
        },
      },
      //Variant:pastel
      '&.nui-tag-pastel': {
        //Color:default
        '&.nui-tag-default, &.nui-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.pastel.default.font.color.light} dark:text-${config.variant.pastel.default.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.default.background.light} dark:bg-${config.variant.pastel.default.background.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-tag-muted, &.nui-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.pastel.muted.font.color.light} dark:text-${config.variant.pastel.muted.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.muted.background.light} dark:bg-${config.variant.pastel.muted.background.dark}`]:
            {},
        },
        //Color:light
        '&.nui-tag-light': {
          //Color
          [`@apply text-${config.variant.pastel.light.font.color.light} dark:text-${config.variant.pastel.light.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.light.background.light} dark:bg-${config.variant.pastel.light.background.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-tag-dark': {
          //Color
          [`@apply text-${config.variant.pastel.dark.font.color.light} dark:text-${config.variant.pastel.dark.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.dark.background.light} dark:bg-${config.variant.pastel.dark.background.dark}`]:
            {},
        },
        //Color:black
        '&.nui-tag-black': {
          //Color
          [`@apply text-${config.variant.pastel.black.font.color.light} dark:text-${config.variant.pastel.black.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.black.background.light} dark:bg-${config.variant.pastel.black.background.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-tag-primary': {
          //Color
          [`@apply text-${config.variant.pastel.primary.font.color.light} dark:text-${config.variant.pastel.primary.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.primary.background.light} dark:bg-${config.variant.pastel.primary.background.dark}`]:
            {},
        },
        //Color:info
        '&.nui-tag-info': {
          //Color
          [`@apply text-${config.variant.pastel.info.font.color.light} dark:text-${config.variant.pastel.info.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.info.background.light} dark:bg-${config.variant.pastel.info.background.dark}`]:
            {},
        },
        //Color:success
        '&.nui-tag-success': {
          //Color
          [`@apply text-${config.variant.pastel.success.font.color.light} dark:text-${config.variant.pastel.success.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.success.background.light} dark:bg-${config.variant.pastel.success.background.dark}`]:
            {},
        },
        //Color:warning
        '&.nui-tag-warning': {
          //Color
          [`@apply text-${config.variant.pastel.warning.font.color.light} dark:text-${config.variant.pastel.warning.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.warning.background.light} dark:bg-${config.variant.pastel.warning.background.dark}`]:
            {},
        },
        //Color:danger
        '&.nui-tag-danger': {
          //Color
          [`@apply text-${config.variant.pastel.danger.font.color.light} dark:text-${config.variant.pastel.danger.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.pastel.danger.background.light} dark:bg-${config.variant.pastel.danger.background.dark}`]:
            {},
        },
      },
      //Variant:outline
      '&.nui-tag-outline': {
        //Color:default
        '&.nui-tag-default, &.nui-tag-default-contrast': {
          //Color
          [`@apply text-${config.variant.outline.default.font.color.light} dark:text-${config.variant.outline.default.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.default.border.light} dark:border-${config.variant.outline.default.border.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-tag-muted, &.nui-tag-muted-contrast': {
          //Color
          [`@apply text-${config.variant.outline.muted.font.color.light} dark:text-${config.variant.outline.muted.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.muted.border.light} dark:border-${config.variant.outline.muted.border.dark}`]:
            {},
        },
        //Color:light
        '&.nui-tag-light': {
          //Color
          [`@apply text-${config.variant.outline.light.font.color.light} dark:text-${config.variant.outline.light.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.light.border.light} dark:border-${config.variant.outline.light.border.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-tag-dark': {
          //Color
          [`@apply text-${config.variant.outline.dark.font.color.light} dark:text-${config.variant.outline.dark.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.dark.border.light} dark:border-${config.variant.outline.dark.border.dark}`]:
            {},
        },
        //Color:black
        '&.nui-tag-black': {
          //Color
          [`@apply text-${config.variant.outline.black.font.color.light} dark:text-${config.variant.outline.black.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.black.border.light} dark:border-${config.variant.outline.black.border.dark}`]:
            {},
        },
        //Color:primary
        '&.nui-tag-primary': {
          //Color
          [`@apply text-${config.variant.outline.primary.font.color.light} dark:text-${config.variant.outline.primary.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.primary.border.light} dark:border-${config.variant.outline.primary.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.primary.background.light} dark:bg-${config.variant.outline.primary.background.dark}`]:
            {},
        },
        //Color:info
        '&.nui-tag-info': {
          //Color
          [`@apply text-${config.variant.outline.info.font.color.light} dark:text-${config.variant.outline.info.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.info.border.light} dark:border-${config.variant.outline.info.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.info.background.light} dark:bg-${config.variant.outline.info.background.dark}`]:
            {},
        },
        //Color:success
        '&.nui-tag-success': {
          //Color
          [`@apply text-${config.variant.outline.success.font.color.light} dark:text-${config.variant.outline.success.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.success.border.light} dark:border-${config.variant.outline.success.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.success.background.light} dark:bg-${config.variant.outline.success.background.dark}`]:
            {},
        },
        //Color:warning
        '&.nui-tag-warning': {
          //Color
          [`@apply text-${config.variant.outline.warning.font.color.light} dark:text-${config.variant.outline.warning.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.warning.border.light} dark:border-${config.variant.outline.warning.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.warning.background.light} dark:bg-${config.variant.outline.warning.background.dark}`]:
            {},
        },
        //Color:danger
        '&.nui-tag-danger': {
          //Color
          [`@apply text-${config.variant.outline.danger.font.color.light} dark:text-${config.variant.outline.danger.font.color.dark}`]:
            {},
          //Border
          [`@apply border border-${config.variant.outline.danger.border.light} dark:border-${config.variant.outline.danger.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.variant.outline.danger.background.light} dark:bg-${config.variant.outline.danger.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
