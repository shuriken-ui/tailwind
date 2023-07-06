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
        card: {
          size: 'full',
          duration: '300',
          cardWhite: {
            bg: 'white',
            bgDark: 'muted-800',
            border: 'muted-200',
            borderDark: 'muted-700',
          },
          cardWhiteContrast: {
            bg: 'white',
            bgDark: 'muted-950',
            border: 'muted-200',
            borderDark: 'muted-800',
          },
          cardMuted: {
            bg: 'muted-100',
            bgDark: 'muted-800',
            border: 'muted-200',
            borderDark: 'muted-700',
          },
          cardMutedContrast: {
            bg: 'muted-100',
            bgDark: 'muted-950',
            border: 'muted-200',
            borderDark: 'muted-800',
          },
          cardPrimary: {
            bg: 'primary-500/10',
            border: 'primary-500',
          },
          cardInfo: {
            bg: 'info-500/10',
            border: 'info-500',
          },
          cardSuccess: {
            bg: 'success-500/10',
            border: 'success-500',
          },
          cardWarning: {
            bg: 'warning-500/10',
            border: 'warning-500',
          },
          cardDanger: {
            bg: 'danger-500/10',
            border: 'danger-500',
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
          },
          cardSadow: {
            color: 'muted-300/30',
            colorDark: 'muted-800/30',
            size: 'xl',
          },
          cardSadowHover: {
            color: 'muted-300/30',
            colorDark: 'muted-800/30',
            size: 'xl',
          }
        },
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