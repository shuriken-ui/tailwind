import plugin from 'tailwindcss/plugin'
import { type DropdownConfig, defaultConfig, key } from './dropdown.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies DropdownConfig

  addComponents({
    //Wrapper
    '.nui-dropdown': {
      [`@apply text-${config.align}`]: {},
      //Menu
      '.nui-menu': {
        '@apply relative inline-block': {},
      },
      //Menu Content
      '.nui-menu-content': {
        '@apply p-2': {},
      },
      //Button:context
      '.nui-context-button': {
        //Base
        [`@apply inline-flex items-center justify-center rounded-${config.button.context.rounded}`]:
          {},
        //Size
        [`@apply h-${config.button.context.size} w-${config.button.context.size}`]:
          {},
        //Ring
        [`@apply ring-1 ring-transparent ring-offset-${config.button.context.ring.offset.color.light} dark:ring-offset-${config.button.context.ring.offset.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
          {},
        //Context:inner
        '.nui-context-button-inner': {
          //Base
          [`@apply flex items-center justify-center rounded-${config.button.context.inner.rounded}`]:
            {},
          //Size
          [`@apply h-${config.button.context.inner.size} w-${config.button.context.inner.size}`]:
            {},
          //Background
          [`@apply bg-${config.button.context.inner.background.light} dark:bg-${config.button.context.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.button.context.inner.border.light} dark:border-${config.button.context.inner.border.dark}`]:
            {},
        },
        //Context:icon
        '.nui-context-icon': {
          //Size
          [`@apply h-${config.button.context.icon.size} w-${config.button.context.icon.size}`]:
            {},
          //Color
          [`@apply text-${config.button.context.icon.font.color.light} dark:text-${config.button.context.icon.font.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
            {},
        },
      },
      //Button:text
      '.nui-text-button': {
        //Base
        '@apply flex items-center space-x-1': {},
        //Font
        [`@apply font-${config.button.text.font.family} text-${config.button.text.font.color.light} dark:text-${config.button.text.font.color.dark}`]:
          {},
        //Text:inner
        '.nui-text-button-inner': {
          [`@apply font-${config.button.text.font.family}`]: {},
        },
      },
      //Button:chevron
      '.nui-chevron': {
        [`@apply h-${config.button.chevron.size} w-${config.button.chevron.size}`]:
          {},
        //Transition
        [`@apply transition-${config.button.chevron.transition.property} duration-${config.button.chevron.transition.duration}`]:
          {},
      },
      //Dropdown:menu
      '.nui-dropdown-menu': {
        //Base
        '@apply absolute z-50 mt-2 focus:outline-none': {},
        //Shadow
        [`@apply shadow-${config.menu.shadow.size} shadow-${config.menu.shadow.light} dark:shadow-${config.menu.shadow.dark}`]:
          {},
        //Menu:header
        '.nui-menu-header': {
          '@apply px-4 pt-5': {},
        },
        //Header:inner
        '.nui-menu-header-inner': {
          '@apply relative flex items-center justify-between': {},
        },
        //Header:title
        '.nui-menu-header-title': {
          //Base
          [`@apply font-${config.menu.header.title.font.family} font-${config.menu.header.title.font.weight} text-${config.menu.header.title.font.size} uppercase`]:
            {},
          //Color
          [`@apply text-${config.menu.header.title.font.color.light} dark:text-${config.menu.header.title.font.color.dark}`]:
            {},
        },
        //Menu:content
        '.nui-menu-content': {
          '@apply p-2 space-y-1': {},
        },
        //Size:md
        '&.nui-menu-md': {
          '@apply w-56': {},
        },
        //Size:lg
        '&.nui-menu-lg': {
          '@apply w-72': {},
        },
        //Rounded:sm
        '&.nui-menu-rounded': {
          [`@apply ${config.menu.rounded.sm}`]: {},
        },
        //Rounded:md
        '&.nui-menu-smooth': {
          [`@apply ${config.menu.rounded.md}`]: {},
        },
        //Rounded:lg
        '&.nui-menu-curved': {
          [`@apply ${config.menu.rounded.lg}`]: {},
        },
        //Color:default
        '&.nui-menu-default': {
          //Border
          [`@apply border border-${config.menu.color.default.border.light} dark:border-${config.menu.color.default.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.menu.color.default.background.light} dark:bg-${config.menu.color.default.background.dark}`]:
            {},
        },
        //Color:default-contrast
        '&.nui-menu-default-contrast': {
          //Border
          [`@apply border border-${config.menu.color.defaultContrast.border.light} dark:border-${config.menu.color.defaultContrast.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.menu.color.defaultContrast.background.light} dark:bg-${config.menu.color.defaultContrast.background.dark}`]:
            {},
        },
        //Color:muted
        '&.nui-menu-muted': {
          //Border
          [`@apply border border-${config.menu.color.muted.border.light} dark:border-${config.menu.color.muted.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.menu.color.muted.background.light} dark:bg-${config.menu.color.muted.background.dark}`]:
            {},
        },
        //Color:muted-contrast
        '&.nui-menu-muted-contrast': {
          //Border
          [`@apply border border-${config.menu.color.mutedContrast.border.light} dark:border-${config.menu.color.mutedContrast.border.dark}`]:
            {},
          //Background
          [`@apply bg-${config.menu.color.mutedContrast.background.light} dark:bg-${config.menu.color.mutedContrast.background.dark}`]:
            {},
        },
      },
      //Orientation:start
      '&.nui-dropdown-start': {
        '.nui-dropdown-menu': {
          '@apply start-0 origin-top-left': {},
        },
      },
      //Orientation:end
      '&.nui-dropdown-end': {
        '.nui-dropdown-menu': {
          '@apply end-0 origin-top-right': {},
        },
      },
      //Context:hover
      '&:hover': {
        '.nui-context-button': {
          [`@apply ring-offset-${config.button.context.ring.offset.size} ring-${config.button.context.ring.color.hover.light} dark:ring-${config.button.context.ring.color.hover.dark}`]:
            {},
        },
      },
    },
  })
}, config)
