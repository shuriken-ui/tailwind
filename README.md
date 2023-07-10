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
        iconsBox: {
          boxXS: {
            size: '8',
            rounded: {
              default: 'lg',
              curved: 'xl',
            },
          },
          boxSM: {
            size: '10',
            rounded: {
              default: 'lg',
              curved: 'xl',
            },
          },
          boxMD: {
            size: '12',
            rounded: {
              default: 'xl',
              curved: '2xl',
            },
          },
          boxLG: {
            size: '16',
            rounded: {
              default: 'xl',
              curved: '2xl',
            },
          },
          boxXL: {
            size: '20',
            rounded: {
              default: '2xl',
              curved: '3xl',
            },
          },
          box2XL: {
            size: '24',
            rounded: {
              default: '2xl',
              curved: '3xl',
            },
          },
          boxFull: {
            rounded: 'full',
          },
          boxDefault: {
            bg: 'muted-100',
            bgDark: 'muted-700',
            text: 'muted-600',
            textDark: 'muted-200',
          },
          boxSolid: {
            invert: {
              text: 'muted-800',
              textDark: 'muted-100',
              bg: 'white',
              bgDark: 'muted-950',
            },
            primary: {
              bg: 'primary-500',
              text: 'white',
            },
            info: {
              bg: 'info-500',
              text: 'white',
            },
            success: {
              bg: 'success-500',
              text: 'white',
            },
            warning: {
              bg: 'warning-500',
              text: 'white',
            },
            danger: {
              bg: 'danger-500',
              text: 'white',
            },
          },
          boxPastel: {
            invert: {
              text: 'muted-800',
              bg: 'white/10',
            },
            primary: {
              bg: 'primary-500/10',
              text: 'primary-500',
            },
            info: {
              bg: 'info-500/10',
              text: 'info-500',
            },
            success: {
              bg: 'success-500/10',
              text: 'success-500',
            },
            warning: {
              bg: 'warning-500/10',
              text: 'warning-500',
            },
            danger: {
              bg: 'danger-500/10',
              text: 'danger-500',
            },
          },
          boxOutline: {
            invert: {
              text: 'muted-800',
              border: 'current',
            },
            primary: {
              border: 'current',
              text: 'primary-500',
            },
            info: {
              border: 'current',
              text: 'info-500',
            },
            success: {
              border: 'current',
              text: 'success-500',
            },
            warning: {
              border: 'current',
              text: 'warning-500',
            },
            danger: {
              border: 'current',
              text: 'danger-500',
            },
          },
          boxBordered: {
            borderSize: '2',
            borderColor: 'current',
          },
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