import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type DropdownConfig, defaultConfig, key } from './dropdown.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies DropdownConfig

      addComponents({
        //Wrapper
        [`.${prefix}dropdown`]: {
          [`@apply text-${config.align}`]: {},
          //Menu
          [`.${prefix}menu`]: {
            [`@apply relative inline-block`]: {},
          },
          //Menu Content
          [`.${prefix}menu-content`]: {
            [`@apply p-2`]: {},
          },
          //Button:context
          [`.${prefix}context-button`]: {
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
            [`.${prefix}context-button-inner`]: {
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
            [`.${prefix}context-icon`]: {
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
          [`.${prefix}text-button`]: {
            //Base
            [`@apply flex items-center space-x-1`]: {},
            //Font
            [`@apply font-${config.button.text.font.family} text-${config.button.text.font.color.light} dark:text-${config.button.text.font.color.dark}`]:
              {},
            //Text:inner
            [`.${prefix}text-button-inner`]: {
              [`@apply font-${config.button.text.font.family}`]: {},
            },
          },
          //Button:chevron
          [`.${prefix}chevron`]: {
            [`@apply h-${config.button.chevron.size} w-${config.button.chevron.size}`]:
              {},
            //Transition
            [`@apply transition-${config.button.chevron.transition.property} duration-${config.button.chevron.transition.duration}`]:
              {},
          },
          //Dropdown:menu
          [`.${prefix}dropdown-menu`]: {
            //Base
            [`@apply absolute z-50 mt-2 focus:outline-none`]: {},
            //Shadow
            [`@apply shadow-${config.menu.shadow.size} shadow-${config.menu.shadow.light} dark:shadow-${config.menu.shadow.dark}`]:
              {},
            //Menu:header
            [`.${prefix}menu-header`]: {
              [`@apply px-4 pt-5`]: {},
            },
            //Header:inner
            [`.${prefix}menu-header-inner`]: {
              [`@apply relative flex items-center justify-between`]: {},
            },
            //Header:title
            [`.${prefix}menu-header-title`]: {
              //Base
              [`@apply font-${config.menu.header.title.font.family} font-${config.menu.header.title.font.weight} text-${config.menu.header.title.font.size} uppercase`]:
                {},
              //Color
              [`@apply text-${config.menu.header.title.font.color.light} dark:text-${config.menu.header.title.font.color.dark}`]:
                {},
            },
            //Menu:content
            [`.${prefix}menu-content`]: {
              [`@apply p-2 space-y-1`]: {},
            },
            //Size:md
            [`&.${prefix}menu-md`]: {
              [`@apply w-56`]: {},
            },
            //Size:lg
            [`&.${prefix}menu-lg`]: {
              [`@apply w-72`]: {},
            },
            //Rounded:sm
            [`&.${prefix}menu-rounded`]: {
              [`@apply ${config.menu.rounded.sm}`]: {},
            },
            //Rounded:md
            [`&.${prefix}menu-smooth`]: {
              [`@apply ${config.menu.rounded.md}`]: {},
            },
            //Rounded:lg
            [`&.${prefix}menu-curved`]: {
              [`@apply ${config.menu.rounded.lg}`]: {},
            },
            //Color:white
            [`&.${prefix}menu-white`]: {
              //Border
              [`@apply border border-${config.menu.color.white.border.light} dark:border-${config.menu.color.white.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.menu.color.white.background.light} dark:bg-${config.menu.color.white.background.dark}`]:
                {},
            },
            //Color:white-contrast
            [`&.${prefix}menu-white-contrast`]: {
              //Border
              [`@apply border border-${config.menu.color.whiteContrast.border.light} dark:border-${config.menu.color.whiteContrast.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.menu.color.whiteContrast.background.light} dark:bg-${config.menu.color.whiteContrast.background.dark}`]:
                {},
            },
            //Color:muted
            [`&.${prefix}menu-muted`]: {
              //Border
              [`@apply border border-${config.menu.color.muted.border.light} dark:border-${config.menu.color.muted.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.menu.color.muted.background.light} dark:bg-${config.menu.color.muted.background.dark}`]:
                {},
            },
            //Color:muted-contrast
            [`&.${prefix}menu-muted-contrast`]: {
              //Border
              [`@apply border border-${config.menu.color.mutedContrast.border.light} dark:border-${config.menu.color.mutedContrast.border.dark}`]:
                {},
              //Background
              [`@apply bg-${config.menu.color.mutedContrast.background.light} dark:bg-${config.menu.color.mutedContrast.background.dark}`]:
                {},
            },
          },
          //Orientation:start
          [`&.${prefix}dropdown-start`]: {
            [`.${prefix}dropdown-menu`]: {
              [`@apply start-0 origin-top-left`]: {},
            },
          },
          //Orientation:end
          [`&.${prefix}dropdown-end`]: {
            [`.${prefix}dropdown-menu`]: {
              [`@apply end-0 origin-top-right`]: {},
            },
          },
          //Context:hover
          [`&:hover`]: {
            [`.${prefix}context-button`]: {
              [`@apply ring-offset-${config.button.context.ring.offset.size} ring-${config.button.context.ring.color.hover.light} dark:ring-${config.button.context.ring.color.hover.dark}`]:
                {},
            },
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
      },
    }
  },
)
