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
        inputFile: {
          drop: {
            size: '64',
            border: 'muted-200',
            borderDark: 'muted-600',
            borderHover: 'muted-400',
            borderHoverDark: 'muted-400',
            duration: '300',
            bg: 'white',
            bgDark: 'muted-700',
            zone: {
              font: 'sans',
              text: 'muted-400',
            },
            zoneIcon: {
              size: '10',
              duration: '300',
            },
            zoneText: {
              font: 'sans',
              fontWeight: 'normal',
              text: 'sm',
            },
            zoneSeparator: {
              font: 'sans',
              fontWeight: 'semibold',
              text: 'xs'
            },
            zoneInput: {
              size: 'full',
            },
            hover: {
              text: 'primary-500',
            }
          },
          button: {
            bg: 'white',
            bgDark: 'muted-700',
            text: 'muted-400',
            borderDark: 'muted-600',
            borderHover: 'primary-500',
            borderHoverDark: 'primary-500',
            textHover: 'primary-500',
            duration: '300',
            icon: {
              size: '8',
            },
            label: {
              font: 'sans',
              text: 'sm',
            },
          },
          combo: {
            font: 'sans',
            border: 'muted-200',
            borderDark: 'muted-600',
            space: '1',
            bg: 'white',
            bgDark: 'muted-700',
            label: {
              font: 'sans',
              text: 'sm',
            },
            input: {
              size: 'full',
              textSize: 'sm',
              text: 'muted-500',
              textDark: 'muted-400',
              textFile: 'primary-700',
              textFileSize: 'sm',
              bgFile: 'primary-500/10',
              bgFileHover: 'primary-500/20',
            },
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: 'full',
          },
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