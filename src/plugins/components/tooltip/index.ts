import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type TooltipConfig, defaultConfig, key } from './tooltip.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies TooltipConfig

      const tooltip = `data-${prefix}tooltip`
      const position = `data-${prefix}tooltip-position`

      addComponents({
        [`[${tooltip}]`]: {
          position: 'relative',
        },
        [`[${tooltip}]::before, [${tooltip}]::after`]: {
          textTransform: 'none',
          fontSize: '0.9em',
          lineHeight: '1',
          userSelect: 'none',
          pointerEvents: 'none',
          position: 'absolute',
          display: 'none',
          opacity: '0',
        },
        [`[${tooltip}]::before`]: {
          content: "''",
          border: '5px solid transparent',
          zIndex: '1001',
        },
        [`[${tooltip}]::after`]: {
          content: `attr(${tooltip})`,
          textAlign: 'center',
          minWidth: config.minWidth,
          maxWidth: config.maxWidth,
          whiteSpace: 'pre',
          overflow: 'hidden',
          padding: '1ch 1.5ch',
          borderRadius: '0.5ch',
          zIndex: '1000',
          [`@apply font-${config.font} text-xs shadow-lg`]: {},
          [`@apply text-${config.text}`]: {},
          [`@apply bg-${config.bg}`]: {},
        },
        [`.dark [${tooltip}]::after`]: {
          [`@apply text-${config.textDark}`]: {},
          [`@apply bg-${config.bgDark}`]: {},
        },
        [`[${tooltip}]:hover::before, [${tooltip}]:hover::after, [${tooltip}]:focus-visible::before, [${tooltip}]:focus-visible::after`]:
          {
            display: 'block',
          },
        [`[${tooltip}='']::before, [${tooltip}='']::after`]: {
          display: 'none !important',
        },

        /* position up (default) */
        [`[${tooltip}]:not([${position}])::before, [${tooltip}][${position}^='up']::before`]:
          {
            bottom: 'calc(100% + 8px)',
            borderBottomWidth: '0',
            borderTopColor: 'currentColor',
            [`@apply text-${config.bg}`]: {},
          },
        [`.dark [${tooltip}]:not([${position}])::before, .dark [${tooltip}][${position}^='up']::before`]:
          {
            [`@apply text-${config.bgDark}`]: {},
          },
        [`[${tooltip}]:not([${position}])::after, [${tooltip}][${position}^='up']::after`]:
          {
            bottom: 'calc(100% + 13px)',
          },
        [`[${tooltip}]:not([${position}])::before, [${tooltip}][${position}^='up']::before, [${tooltip}]:not([${position}])::after, [${tooltip}][${position}^='up']::after`]:
          {
            left: '50%', // insetInlineStart
            transform: 'translate(-50%, -0.5em)',
          },

        /* position down */
        [`[${tooltip}][${position}^='down']::before`]: {
          top: '100%',
          borderTopWidth: '0',
          borderBottomColor: 'currentColor',
          [`@apply text-${config.bg}`]: {},
        },
        [`.dark [${tooltip}][${position}^='down']::before`]: {
          [`@apply text-${config.bgDark}`]: {},
        },
        [`[${tooltip}][${position}^='down']::after`]: {
          top: 'calc(100% + 5px)',
        },
        [`[${tooltip}][${position}^='down']::before, [${tooltip}][${position}^='down']::after`]:
          {
            left: '50%', // insetInlineStart
            transform: 'translate(-50%, 0.5em)',
          },

        /* position start (left) */
        [`[${tooltip}][${position}^='start']::before, [${tooltip}][${position}^='left']::before`]:
          {
            top: '50%',
            borderEndWidth: '0',
            borderStartColor: 'currentColor',
            insetInlineStart: 'calc(0em - 5px)',
            transform: 'translate(-0.5em, -50%)',
            [`@apply text-${config.bg}`]: {},
          },
        [`[${tooltip}][${position}^='start']::before, [${tooltip}][${position}^='left']::before`]:
          {
            [`@apply text-${config.bgDark}`]: {},
          },
        [`[${tooltip}][${position}^='start']::after, [${tooltip}][${position}^='left']::after`]:
          {
            top: '50%',
            insetInlineEnd: 'calc(100% + 5px)',
            transform: 'translate(-0.5em, -50%)',
          },

        /* position end (right) */
        [`[${tooltip}][${position}^='end']::before, [${tooltip}][${position}^='right']::before`]:
          {
            top: '50%',
            borderStartWidth: '0',
            borderEndColor: 'currentColor',
            insetInlineEnd: 'calc(0em - 5px)',
            transform: 'translate(0.5em, -50%)',
            [`@apply text-${config.bg}`]: {},
          },
        [`[${tooltip}][${position}^='end']::before, [${tooltip}][${position}^='right']::before`]:
          {
            [`@apply text-${config.bgDark}`]: {},
          },
        [`[${tooltip}][${position}^='end']::after, [${tooltip}][${position}^='right']::after`]:
          {
            top: '50%',
            insetInlineStart: 'calc(100% + 5px)',
            transform: 'translate(0.5em, -50%)',
          },
        [`${[
          `[${tooltip}]:not([${position}]):hover::before`,
          `[${tooltip}]:not([${position}]):hover::after`,
          `[${tooltip}][${position}^='up']:hover::before`,
          `[${tooltip}][${position}^='up']:hover::after`,
          `[${tooltip}][${position}^='down']:hover::before`,
          `[${tooltip}][${position}^='down']:hover::after`,
          `[${tooltip}]:not([${position}]):focus-visible::before`,
          `[${tooltip}]:not([${position}]):focus-visible::after`,
          `[${tooltip}][${position}^='up']:focus-visible::before`,
          `[${tooltip}][${position}^='up']:focus-visible::after`,
          `[${tooltip}][${position}^='down']:focus-visible::before`,
          `[${tooltip}][${position}^='down']:focus-visible::after`,
        ].join(',')}`]: {
          [`@apply animate-${prefix}tooltip-x`]: {},
        },
        [`${[
          `[${tooltip}][${position}^='left']:hover::before`,
          `[${tooltip}][${position}^='left']:hover::after`,
          `[${tooltip}][${position}^='right']:hover::before`,
          `[${tooltip}][${position}^='right']:hover::after`,
          `[${tooltip}][${position}^='start']:hover::before`,
          `[${tooltip}][${position}^='start']:hover::after`,
          `[${tooltip}][${position}^='end']:hover::before`,
          `[${tooltip}][${position}^='end']:hover::after`,
          `[${tooltip}][${position}^='left']:focus-visible::before`,
          `[${tooltip}][${position}^='left']:focus-visible::after`,
          `[${tooltip}][${position}^='right']:focus-visible::before`,
          `[${tooltip}][${position}^='right']:focus-visible::after`,
          `[${tooltip}][${position}^='start']:focus-visible::before`,
          `[${tooltip}][${position}^='start']:focus-visible::after`,
          `[${tooltip}][${position}^='end']:focus-visible::before`,
          `[${tooltip}][${position}^='end']:focus-visible::after`,
        ].join(',')}`]: {
          [`@apply animate-${prefix}tooltip-y`]: {},
        },
      })
    }
  },
  function (options) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
        extend: {
          keyframes: {
            [`${prefix}tooltip-x`]: {
              to: {
                opacity: '1',
                transform: 'translate(-50%, 0)',
              },
            },
            [`${prefix}tooltip-y`]: {
              to: {
                opacity: '1',
                transform: 'translate(0, -50%)',
              },
            },
          },
          animation: {
            [`${prefix}tooltip-x`]: `${prefix}tooltip-x 300ms ease-out forwards`,
            [`${prefix}tooltip-y`]: `${prefix}tooltip-y 300ms ease-out forwards`,
          },
        },
      },
    }
  },
)
