<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png">
    <img alt="Shuriken UI logo" src="https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png">
  </picture>
</p>


<p align="center">
  <a href="https://cssninja.io" title="Our official website">by <strong>cssninja.io</strong></a>
</p>

---

## Shuriken UI - Tailwind CSS 

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This package contains the Tailwind CSS preset, components, and shared utils like custom colors used in Shuriken UI.

## Installation

```bash
pnpm install -D @shuriken-ui/tailwind
```

## Usage

The simplest way to register Shuriken UI is to use `withShurikenUI` helper function.

```ts
// tailwind.config.ts
import { withShurikenUI } from '@shuriken-ui/tailwind'

export default withShurikenUI({
  // your config
})
```


You can also direcly import the preset and use it in your config.

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import preset from '@shuriken-ui/tailwind/preset'

export default {
  presets: [shurikenUIPreset],
  // your config
} satisfies Config
```

## Customization

Shuriken UI is fully customizable. You can override components by using the `theme` option.

```ts
export default withShurikenUI({
  theme: {
    extend: {
      shurikenUi: {
        dropdownDivider: {
          space: '2',
          border: 'muted-200', // you can use arbitrary value like '[#fff]'
          borderDark: 'muted-600',
        },
        focus: {
          offset: '2',
          width: '1',
          style: 'dashed',
          color: 'muted-300',
          colorDark: 'muted-600',
        },
        label: {
          font: 'alt',
          text: 'muted-400',
          textDark: 'muted-400/80',
        },
        mark: {
          bg: 'primary-100',
          bgDark: 'primary-800',
          text: 'primary-800',
          textDark: 'primary-200',
        },
        message: {
          messageInnerText: {
            text: 'sm',
            textColor: 'muted-800',
            font: 'sans',
          },
          messageClose: {
            text: 'muted-800',
            rounded: 'full',
            duration: '200',
            iconSize: '4',
            space: '1',
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: 'full',
          },
          messageDefault: {
            bg: 'white',
            bgDark: 'muted-800',
            border: 'muted-200',
            borderDark: 'muted-700',
            outer: {
              bg: 'muted-600',
              bgDark: 'muted-900',
              text: 'white',
            },
            close: {
              textDark: 'muted-500',
              bgHoverEnabled: 'muted-300/50',
              bgHoverEnabledDark: 'muted-500/30',
              bgFocusVisible: 'muted-300/50',
              bgFocusVisibleDark: 'muted-500/30',
              bgActiveEnabled: 'muted-300/20',
              bgActiveEnabledDark: 'muted-500/20',
            },
          },
          messageMuted: {
            bg: 'muted-100',
            bgDark: 'muted-500/10',
            border: 'muted-200',
            borderDark: 'muted-700',
            outer: {
              bg: 'muted-400',
              text: 'white',
              bgDark: 'muted-900',
            },
            close: {
              textDark: 'muted-500',
              bgHoverEnabled: 'muted-300/50',
              bgHoverEnabledDark: 'muted-500/30',
              bgFocusVisible: 'muted-300/50',
              bgFocusVisibleDark: 'muted-500/30',
              bgActiveEnabled: 'muted-300/20',
              bgActiveEnabledDark: 'muted-500/20',
            },
          },
          messagePrimary: {
            bg: 'primary-100',
            bgDark: 'primary-500/10',
            border: 'primary-200',
            borderDark: 'primary-700',
            outer: {
              bg: 'primary-500',
              text: 'white',
            },
            close: {
              textDark: 'primary-500',
              bgHoverEnabled: 'primary-300/50',
              bgHoverEnabledDark: 'primary-500/30',
              bgFocusVisible: 'primary-300/50',
              bgFocusVisibleDark: 'primary-500/30',
              bgActiveEnabled: 'primary-300/20',
              bgActiveEnabledDark: 'primary-500/20',
            },
          },
          messageInfo: {
            bg: 'info-100',
            bgDark: 'info-500/10',
            border: 'info-200',
            borderDark: 'info-700',
            outer: {
              bg: 'info-500',
              text: 'white',
            },
            close: {
              textDark: 'info-500',
              bgHoverEnabled: 'info-300/50',
              bgHoverEnabledDark: 'info-500/30',
              bgFocusVisible: 'info-300/50',
              bgFocusVisibleDark: 'info-500/30',
              bgActiveEnabled: 'info-300/20',
              bgActiveEnabledDark: 'info-500/20',
            },
          },
          messageSuccess: {
            bg: 'success-100',
            bgDark: 'success-500/10',
            border: 'success-200',
            borderDark: 'success-700',
            outer: {
              bg: 'success-500',
              text: 'white',
            },
            close: {
              textDark: 'success-500',
              bgHoverEnabled: 'success-300/50',
              bgHoverEnabledDark: 'success-500/30',
              bgFocusVisible: 'success-300/50',
              bgFocusVisibleDark: 'success-500/30',
              bgActiveEnabled: 'success-300/20',
              bgActiveEnabledDark: 'success-500/20',
            },
          },
          messageWarning: {
            bg: 'warning-100',
            bgDark: 'warning-500/10',
            border: 'warning-200',
            borderDark: 'warning-700',
            outer: {
              bg: 'warning-500',
              text: 'white',
            },
            close: {
              textDark: 'warning-500',
              bgHoverEnabled: 'warning-300/50',
              bgHoverEnabledDark: 'warning-500/30',
              bgFocusVisible: 'warning-300/50',
              bgFocusVisibleDark: 'warning-500/30',
              bgActiveEnabled: 'warning-300/20',
              bgActiveEnabledDark: 'warning-500/20',
            },
          },
          messageDanger: {
            bg: 'danger-100',
            bgDark: 'danger-500/10',
            border: 'danger-200',
            borderDark: 'danger-700',
            outer: {
              bg: 'danger-500',
              text: 'white',
            },
            close: {
              textDark: 'danger-500',
              bgHoverEnabled: 'danger-300/50',
              bgHoverEnabledDark: 'danger-500/30',
              bgFocusVisible: 'danger-300/50',
              bgFocusVisibleDark: 'danger-500/30',
              bgActiveEnabled: 'danger-300/20',
              bgActiveEnabledDark: 'danger-500/20',
            },
          },
        }
        slimscroll: {
          width: '[6px]',
          bg: 'black/5',
          bgDark: 'white/5',
          bgHover: 'black/20',
          bgHoverDark: 'white/20',
        },
        tooltip: {
          font: 'sans',
          bg: '[#1e293b]',
          bgDark: '[#ec4899]',
          text: '[#fff]',
          textDark: '[#fff]',
          minWidth: '3rem',
          maxWidth: '21rem',
        },
      },
    },
  },
})
```