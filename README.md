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
        slimscroll: {
          width: '[6px]',
          bg: 'black/5',
          bgDark: 'white/5',
          bgHover: 'black/20',
          bgHoverDark: 'white/20',
        },
        tag: {
          space: '3',
          font: 'sans',
          duration: '300',
          tagSM: {
            space: '1',
            text: '[0.65rem]',
          },
          tagMD: {
            space: '1.5',
            text: 'xs',
          },
          rounded: {
            smooth: 'md',
            curved: 'lg',
            full: 'full',
          },
          solid: {
            default: {
              text: 'muted-600',
              textDark: 'muted-300',
              bg: 'white',
              bgDark: 'muted-800',
              border: 'muted-300',
              borderDark: 'muted-700',
              shadow: 'xl',
              shadowHover: 'xl',
            },
            muted: {
              text: 'muted-500',
              textDark: 'muted-200',
              bg: 'muted-100',
              bgDark: 'muted-800',
              shadow: 'xl',
              shadowHover: 'xl',
            },
            primary: {
              text: 'white',
              bg: 'primary-500',
              bgDark: 'primary-500',
              shadow: {
                size: 'xl',
                color: 'primary-500/30',
                colorDark: 'primary-500/20',
              },
              shadowHover: {
                size: 'xl',
                color: 'primary-500/30',
                colorDark: 'primary-500/20',
              },
            },
            info: {
              text: 'white',
              bg: 'info-500',
              bgDark: 'info-500',
              shadow: {
                size: 'xl',
                color: 'info-500/30',
                colorDark: 'info-500/20',
              },
              shadowHover: {
                size: 'xl',
                color: 'info-500/30',
                colorDark: 'info-500/20',
              },
            },
            success: {
              text: 'white',
              bg: 'success-500',
              bgDark: 'success-500',
              shadow: {
                size: 'xl',
                color: 'success-500/30',
                colorDark: 'success-500/20',
              },
              shadowHover: {
                size: 'xl',
                color: 'success-500/30',
                colorDark: 'success-500/20',
              },
            },
            warning: {
              text: 'white',
              bg: 'warning-500',
              bgDark: 'warning-500',
              shadow: {
                size: 'xl',
                color: 'warning-500/30',
                colorDark: 'warning-500/20',
              },
              shadowHover: {
                size: 'xl',
                color: 'warning-500/30',
                colorDark: 'warning-500/20',
              },
            },
            danger: {
              text: 'white',
              bg: 'danger-500',
              bgDark: 'danger-500',
              shadow: {
                size: 'xl',
                color: 'danger-500/30',
                colorDark: 'danger-500/20',
              },
              shadowHover: {
                size: 'xl',
                color: 'danger-500/30',
                colorDark: 'danger-500/20',
              },
            },
          },
          pastel: {
            primary: {
              bg: 'primary-500/20',
              text: 'primary-500',
              bgDark: 'primary-500/10',
            },
            info: {
              bg: 'info-500/20',
              text: 'info-500',
              bgDark: 'info-500/10',
            },
            success: {
              bg: 'success-500/20',
              text: 'success-500',
              bgDark: 'success-500/10',
            },
            warning: {
              bg: 'warning-500/20',
              text: 'warning-500',
              bgDark: 'warning-500/10',
            },
            danger: {
              bg: 'danger-500/20',
              text: 'danger-500',
              bgDark: 'danger-500/10',
            },
          },
          outline: {
            primary: {
              border: 'primary-500',
              text: 'primary-500',
            },
            info: {
              border: 'info-500',
              text: 'info-500',
            },
            success: {
              border: 'success-500',
              text: 'success-500',
            },
            warning: {
              border: 'warning-500',
              text: 'warning-500',
            },
            danger: {
              border: 'danger-500',
              text: 'danger-500',
            },
          },
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