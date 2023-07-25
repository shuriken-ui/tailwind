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
        
        avatar: {
          avatarInner: {
            size: 'full',
            duration: '300',
          },
          avatarBadge: {
            rounded: 'full',
            bg: 'white',
            bgDark: 'muted-800',
            img: {
              size: 'full',
              rounded: 'full',
            },
          },
          avatarImg: {
            maxSize: 'full',
            shadow: 'sm',
            borderDark: 'transparent',
          },
          avatarText: {
            font: 'sans',
            fontSize: 'medium',
          },
          avatarDot: {
            border: 'white',
            borderDark: 'muted-800',
            rounded: 'full',
            primary: 'primary-500',
            info: 'info-500',
            success: 'success-500',
            warning: 'warning-500',
            danger: 'danger-500',
            yellow: 'yellow-500',
            pink: 'pink-500',
            indigo: 'indigo-500',
          },
          avatarRing: {
            ring: '2',
            ringOffsetSize: '2',
            ringOffsetColor: 'white',
            ringOffsetColorDark: 'muted-800',
            primary: 'primary-500',
            info: 'info-500',
            success: 'success-500',
            warning: 'warning-500',
            danger: 'danger-500',
            yellow: 'yellow-500',
            pink: 'pink-500',
            indigo: 'indigo-500',
          },
          avatarXXS: {
            size: '6',
            badge: {
              size: '3',
              position: '1',
            },
            dot: {
              size: '1.5',
            },
            text: 'xs',
            straightPosition: '0',
            roundedOrInnerDotPosition: '0',
            curvedOrInner: {
              rounded: 'md',
              dotPosition: '0',
            },
            fullDotPosition: '0',
          },
          avatarXS: {
            size: '8',
            badge: {
              size: '4',
              position: '1',
            },
            dot: {
              size: '2',
            },
            text: 'sm',
            straightPosition: '0',
            roundedOrInnerDotPosition: '0',
            curvedOrInner: {
              rounded: 'lg',
              dotPosition: '0',
            },
            fullDotPosition: '0',
          },
          avatarSM: {
            size: '10',
            badge: {
              size: '5',
              position: '1',
            },
            dot: {
              size: '2',
            },
            text: 'sm',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'md',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: 'xl',
              dotPosition: '0',
            },
            fullDotPosition: '0.5',
          },
          avatarMD: {
            size: '12',
            badge: {
              size: '5',
              position: '1',
            },
            dot: {
              size: '3',
            },
            text: 'sm',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'lg',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '2xl',
              dotPosition: '0',
            },
            fullDotPosition: '0.5',
          },
          avatarLG: {
            size: '16',
            badge: {
              size: '6',
              position: '1',
            },
            dot: {
              size: '3',
            },
            text: 'sm',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'lg',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '2xl',
              dotPosition: '0',
            },
            fullDotPosition: '1',
          },
          avatarXL: {
            size: '20',
            badge: {
              size: '8',
              position: '1',
            },
            dot: {
              size: '4',
            },
            text: 'base',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'xl',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '3xl',
              dotPosition: '0',
            },
            fullDotPosition: '1',
          },
          avatar2XL: {
            size: '24',
            badge: {
              size: '10',
              position: '1.5',
            },
            dot: {
              size: '4',
            },
            text: 'xl',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'xl',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '3xl',
              dotPosition: '0',
            },
            fullDotPosition: '1.5',
          },
          avatar3XL: {
            size: '28',
            badge: {
              size: '10',
              position: '1.5',
            },
            dot: {
              size: '4',
            },
            text: '2xl',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'xl',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '3xl',
              dotPosition: '0',
            },
            fullDotPosition: '2',
          },
          avatar4XL: {
            size: '32',
            badge: {
              size: '12',
              position: '2',
            },
            dot: {
              size: '4',
            },
            text: '3xl',
            straightPosition: '0',
            roundedOrInner: {
              rounded: 'xl',
              dotPosition: '0',
            },
            curvedOrInner: {
              rounded: '3xl',
              dotPosition: '0',
            },
            fullDotPosition: '2.5',
          },
          avatarFull: {
            rounded: 'full',
            avatarInnerRounded: 'full',
            avatarBadgePosition: '0',
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