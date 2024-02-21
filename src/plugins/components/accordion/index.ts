import plugin from 'tailwindcss/plugin'
import { type AccordionConfig, defaultConfig, key } from './accordion.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies AccordionConfig

  addComponents({
    //Accordion:wrapper
    '.nui-accordion': {
      //Remove bottom borders
      '&:not(:last-child)': {
        '@apply border-b-0': {},
      },
      //Base
      [`@apply w-${config.wrapper.width} block overflow-hidden`]: {},
      //Background
      [`@apply bg-${config.wrapper.background.light} dark:bg-${config.wrapper.background.dark}`]:
        {},
      //Hover
      [`@apply hover:bg-${config.wrapper.hover.light} dark:hover:bg-${config.wrapper.hover.dark}`]:
        {},
      //Border
      [`@apply border border-${config.wrapper.border.light} dark:border-${config.wrapper.border.dark}`]:
        {},
      //Transition
      [`@apply transition-${config.wrapper.transition.property} duration-${config.wrapper.transition.duration}`]:
        {},
      //Accordion:inner
      '.nui-accordion-detail[open]:not(:first-child)': {
        [`@apply border-t border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Inner:dot
      '.nui-accordion-detail .nui-accordion-dot': {
        [`@apply bg-${config.icon.dot.background.light} dark:bg-${config.icon.dot.background.dark}`]:
          {},
      },
      //Inner:summary
      '.nui-accordion-summary': {
        '@apply cursor-pointer list-none outline-none': {},
      },
      //Inner:header
      '.nui-accordion-header': {
        '@apply flex items-center justify-between': {},

        '.nui-accordion-header-inner': {
          '@apply text-muted-800 dark:text-white': {},
        },
      },
      //Inner:dot
      '.nui-accordion-dot': {
        [`@apply ms-2 h-${config.icon.dot.size} w-${config.icon.dot.size} rounded-${config.icon.dot.rounded}`]:
          {},
        //Dot transition
        [`@apply transition-${config.icon.dot.transition.property} duration-${config.icon.dot.transition.duration}`]:
          {},
      },
      //Icon:outer
      '.nui-icon-outer': {
        //Base
        '@apply ms-2 flex items-center justify-center': {},
        //Width & Radius
        [`@apply h-${config.icon.wrapper.size} w-${config.icon.wrapper.size} rounded-${config.icon.wrapper.rounded}`]:
          {},
        //Border
        [`@apply border border-${config.icon.wrapper.border.light} dark:border-${config.icon.wrapper.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.icon.wrapper.background.light} dark:bg-${config.icon.wrapper.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.wrapper.transition.property} duration-${config.icon.wrapper.transition.duration}`]:
          {},
      },
      '.nui-chevron-icon': {
        //Base
        [`@apply text-muted-400 h-${config.icon.chevron.size} w-${config.icon.chevron.size}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.chevron.transition.property} duration-${config.icon.chevron.transition.duration}`]:
          {},
      },
      '.nui-plus-icon': {
        //Base
        [`@apply text-muted-400 h-${config.icon.plus.size} w-${config.icon.plus.size}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.plus.transition.property} duration-${config.icon.plus.transition.duration}`]:
          {},
      },
      //Accordion:content
      '.nui-accordion-content': {
        //Base
        [`@apply px-${config.content.padding.x} pb-${config.content.padding.y}`]:
          {},
        //Font
        [`@apply font-${config.content.font.family} text-${config.content.font.size} text-${config.content.font.color.light} dark:text-${config.content.font.color.dark}`]:
          {},
      },
      //Color:default
      '&.nui-accordion-default': {
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:bg-${config.color.default.background.hover.light} dark:hover:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.nui-accordion-default-contrast': {
        //Background
        [`@apply bg-${config.color.defaultContrast.background.base.light} dark:bg-${config.color.defaultContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:bg-${config.color.defaultContrast.background.hover.light} dark:hover:bg-${config.color.defaultContrast.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.nui-accordion-muted': {
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:bg-${config.color.muted.background.hover.light} dark:hover:bg-${config.color.muted.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.nui-accordion-muted-contrast': {
        //Background
        [`@apply bg-${config.color.mutedContrast.background.base.light} dark:bg-${config.color.mutedContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:bg-${config.color.mutedContrast.background.hover.light} dark:hover:bg-${config.color.mutedContrast.background.hover.dark}`]:
          {},
        //Border
        [`@apply border border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
      },
      //Dot:default
      '&.nui-dot-default': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.default.background.light} dark:bg-${config.dotColor.default.background.dark}`]:
            {},
        },
      },
      //Dot:primary
      '&.nui-dot-primary': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.primary.background.light} dark:bg-${config.dotColor.primary.background.dark}`]:
            {},
        },
      },
      //Dot:info
      '&.nui-dot-info': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.info.background.light} dark:bg-${config.dotColor.info.background.dark}`]:
            {},
        },
      },
      //Dot:success
      '&.nui-dot-success': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.success.background.light} dark:bg-${config.dotColor.success.background.dark}`]:
            {},
        },
      },
      //Dot:warning
      '&.nui-dot-warning': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.warning.background.light} dark:bg-${config.dotColor.warning.background.dark}`]:
            {},
        },
      },
      //Dot:danger
      '&.nui-dot-danger': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.danger.background.light} dark:bg-${config.dotColor.danger.background.dark}`]:
            {},
        },
      },
      //Dot:dark
      '&.nui-dot-dark': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.dark.background.light} dark:bg-${config.dotColor.dark.background.dark}`]:
            {},
        },
      },
      //Dot:black
      '&.nui-dot-black': {
        '.nui-accordion-detail[open] .nui-accordion-dot': {
          [`@apply bg-${config.dotColor.black.background.light} dark:bg-${config.dotColor.black.background.dark}`]:
            {},
        },
      },
      '&.nui-accordion-dot': {
        '.nui-accordion-header': {
          [`@apply p-${config.content.padding.x}`]: {},
        },
      },
      '&.nui-accordion-chevron, &.nui-accordion-plus': {
        '.nui-accordion-header': {
          [`@apply px-${config.content.padding.x} py-3`]: {},
        },
      },
      '&.nui-accordion-chevron': {
        '.nui-accordion-detail[open] .nui-icon-outer': {
          '@apply rotate-180': {},
        },
      },
      '&.nui-accordion-plus': {
        '.nui-accordion-detail[open] .nui-icon-outer': {
          '@apply rotate-45': {},
        },
      },
      //Accordion:rounded
      '&.nui-accordion-straight': {
        '&.nui-accordion:first-child': {
          [`@apply rounded-t-${config.wrapper.rounded.none}`]: {},
        },
        '&.nui-accordion:last-child': {
          [`@apply rounded-b-${config.wrapper.rounded.none}`]: {},
        },
      },
      '&.nui-accordion-rounded-sm': {
        '&.nui-accordion:first-child': {
          [`@apply rounded-t-${config.wrapper.rounded.sm}`]: {},
        },
        '&.nui-accordion:last-child': {
          [`@apply rounded-b-${config.wrapper.rounded.sm}`]: {},
        },
      },
      '&.nui-accordion-rounded-md': {
        '&.nui-accordion:first-child': {
          [`@apply rounded-t-${config.wrapper.rounded.md}`]: {},
        },
        '&.nui-accordion:last-child': {
          [`@apply rounded-b-${config.wrapper.rounded.md}`]: {},
        },
      },
      '&.nui-accordion-rounded-lg': {
        '&.nui-accordion:first-child': {
          [`@apply rounded-t-${config.wrapper.rounded.lg}`]: {},
        },
        '&.nui-accordion:last-child': {
          [`@apply rounded-b-${config.wrapper.rounded.lg}`]: {},
        },
      },
      '+ .nui-accordion': {
        [`@apply !border-t-0`]: {},
      },
    },
  })
}, config)
