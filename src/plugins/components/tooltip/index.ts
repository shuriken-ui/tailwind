import plugin from 'tailwindcss/plugin'
import { type TooltipConfig, defaultConfig, key } from './tooltip.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
    extend: {
      keyframes: {
        'nui-tooltip-x': {
          to: {
            opacity: '1',
            transform: 'translate(-50%, 0)',
          },
        },
        'nui-tooltip-y': {
          to: {
            opacity: '1',
            transform: 'translate(0, -50%)',
          },
        },
      },
      animation: {
        'nui-tooltip-x': `nui-tooltip-x 300ms ease-out forwards`,
        'nui-tooltip-y': `nui-tooltip-y 300ms ease-out forwards`,
      },
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies TooltipConfig

  const tooltip = `data-nui-tooltip`
  const position = `data-nui-tooltip-position`

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
      minWidth: config.size.width.min,
      maxWidth: config.size.width.max,
      whiteSpace: 'pre',
      overflow: 'hidden',
      padding: '1ch 1.5ch',
      borderRadius: '0.5ch',
      zIndex: '1000',
      [`@apply font-${config.font.family} text-xs shadow-lg`]: {},
      [`@apply text-${config.font.color.light} dark:text-${config.font.color.light}`]:
        {},
      [`@apply bg-${config.background.light} dark:bg-${config.background.dark}`]:
        {},
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
        [`@apply text-${config.background.light} dark:text-${config.background.light}`]:
          {},
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
      [`@apply text-${config.background.light} dark:text-${config.background.dark}`]:
        {},
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
        borderRightWidth: '0',
        borderLeftColor: 'currentColor',
        insetInlineStart: 'calc(0em - 5px)',
        transform: 'translate(-0.5em, -50%)',
        [`@apply text-${config.background.light} dark:text-${config.background.dark}`]:
          {},
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
        borderLefttWidth: '0',
        borderRightColor: 'currentColor',
        insetInlineEnd: 'calc(0em - 5px)',
        transform: 'translate(0.5em, -50%)',
        [`@apply text-${config.background.light} dark:text-${config.background.dark}`]:
          {},
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
      '@apply animate-nui-tooltip-x': {},
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
      '@apply animate-nui-tooltip-y': {},
    },
  })
}, config)
