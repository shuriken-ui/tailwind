import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultAccordionConfig = {
  size: 'full',
  border: 'muted-200',
  borderDark: 'muted-700',
  bg: 'white',
  bgDark: 'muted-800',
  detail: {
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  detailAndDot: {
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
  detailOpenAndDot: {
    bg: 'primary-500',
  },
  headerInner: {
    text: 'muted-800',
    textDark: 'white',
  },
  dot: {
    size: '3',
    rounded: 'full',
    duration: '300',
  },
  outer: {
    border: 'muted-200',
    borderDark: 'muted-700',
    bg: 'white',
    bgDark: 'muted-700/60',
    size: '8',
    rounded: 'full',
    duration: '300',
  },
  chevronIcon: {
    size: '4',
    duration: '300',
  },
  plusIcon: {
    size: '4',
    duration: '300',
  },
  content: {
    space: '5',
    font: 'sans',
    text: 'muted-500',
    textDark: 'muted-400',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.accordion',
      ) satisfies typeof defaultAccordionConfig

      addComponents({
        [`.${prefix}accordion`]: {
          [`@apply w-${config.size} border-${config.border} dark:border-${config.borderDark} dark:bg-${config.bgDark} block overflow-hidden border bg-${config.bg}`]:
            {},

          [`.${prefix}accordion-detail[open]:not(:first-child)`]: {
            [`@apply border-${config.detail.border} dark:border-${config.detail.borderDark} border-t`]:
              {},
          },
          [`.${prefix}accordion-detail .${prefix}accordion-dot`]: {
            [`@apply bg-${config.detailAndDot.bg} dark:bg-${config.detailAndDot.bgDark}`]:
              {},
          },
          [`.${prefix}accordion-detail[open] .${prefix}accordion-dot`]: {
            [`@apply bg-${config.detailOpenAndDot.bg}`]: {},
          },
          [`.${prefix}accordion-summary`]: {
            [`@apply cursor-pointer list-none outline-none`]: {},
          },
          [`.${prefix}accordion-header`]: {
            [`@apply flex items-center justify-between`]: {},

            [`.${prefix}accordion-header-inner`]: {
              [`@apply text-muted-800 dark:text-white`]: {},
            },
          },
          [`.${prefix}accordion-dot`]: {
            [`@apply ms-2 h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded} transition-colors duration-${config.dot.duration}`]:
              {},
          },
          [`.${prefix}icon-outer`]: {
            [`@apply border-${config.outer.border} dark:border-${config.outer.borderDark} dark:bg-${config.outer.bgDark} ms-2 flex h-${config.outer.size} w-${config.outer.size} items-center justify-center rounded-${config.outer.rounded} border bg-${config.outer.bg} transition-all duration-${config.outer.duration}`]:
              {},
          },
          [`.${prefix}chevron-icon`]: {
            [`@apply text-muted-400 h-${config.chevronIcon.size} w-${config.chevronIcon.size} transition-transform duration-${config.chevronIcon.duration}`]:
              {},
          },
          [`.${prefix}plus-icon`]: {
            [`@apply text-muted-400 h-${config.plusIcon.size} w-${config.plusIcon.size} transition-transform duration-${config.plusIcon.duration}`]:
              {},
          },
          [`.${prefix}accordion-content`]: {
            [`@apply px-${config.content.space} pb-${config.content.space} font-${config.content.font} text-${config.content.text} dark:text-${config.content.textDark}`]:
              {},
          },
          [`&.${prefix}accordion-dot`]: {
            [`.${prefix}accordion-header`]: {
              [`@apply p-5`]: {},
            },
          },
          [`&.${prefix}accordion-chevron, &.${prefix}accordion-plus`]: {
            [`.${prefix}accordion-header`]: {
              [`@apply px-5 py-3`]: {},
            },
          },
          [`&.${prefix}accordion-chevron`]: {
            [`.${prefix}accordion-detail[open] .${prefix}icon-outer`]: {
              [`@apply rotate-180`]: {},
            },
          },
          [`&.${prefix}accordion-plus`]: {
            [`.${prefix}accordion-detail[open] .${prefix}icon-outer`]: {
              [`@apply rotate-45`]: {},
            },
          },
          [`&.${prefix}accordion-rounded`]: {
            [`&.${prefix}accordion:first-child`]: {
              [`@apply rounded-t-${config.rounded.default}`]: {},
            },
            [`&.${prefix}accordion:last-child`]: {
              [`@apply rounded-b-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}accordion-smooth`]: {
            [`&.${prefix}accordion:first-child`]: {
              [`@apply rounded-t-${config.rounded.smooth}`]: {},
            },
            [`&.${prefix}accordion:last-child`]: {
              [`@apply rounded-b-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}accordion-curved`]: {
            [`&.${prefix}accordion:first-child`]: {
              [`@apply rounded-t-${config.rounded.curved}`]: {},
            },
            [`&.${prefix}accordion:last-child`]: {
              [`@apply rounded-b-${config.rounded.curved}`]: {},
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
          accordion: defaultAccordionConfig,
        },
      },
    }
  },
)
