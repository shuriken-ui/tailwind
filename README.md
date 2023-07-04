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
        button: {
          duration: '300',
          font: 'normal',
          badge: {
            space: '3',
            primary: 'primary-400',
            info: 'info-400',
            success: 'success-400',
            warning: 'warning-400',
            danger: 'danger-400',
          },
          buttonSmall: {
            text: 'sm',
            iconSize: '3',
          },
          buttonMedium: {
            text: 'sm',
            iconSize: '4',
          },
          buttonLarge: {
            text: 'base',
            iconSize: '4',
          },
          buttonBig: {
            text: 'base',
            iconSize: '5',
          },
          buttonRounded: 'md',
          buttonSmooth: 'lg',
          buttonCurved: 'xl',
          buttonFull: {
            rounded: 'full',
            badgeSize: '3',
          },
          buttonSolid: {
            default: {
              text: 'muted-700',
              textDark: 'white',
              bg: 'white',
              bgDark: 'muted-700',
              bgHoverEnabled: 'muted-50',
              bgHoverEnabledDark: 'muted-600',
              bgActiveEnabled: 'white',
              bgActiveEnabledDark: 'muted-700',
              bgFocusVisible: 'muted-50',
              bgFocusVisibleDark: 'muted-600',
              border: 'muted-300',
              borderDark: 'muted-600',
              shadow: {
                size: 'xl',
                enable: 'muted-500/30',
                enableDark: 'muted-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'muted-300/30',
                enableDark: 'muted-800/20',
              },
            },
            lightOrMuted: {
              text: 'muted-500',
              textDark: 'white',
              bg: 'muted-200',
              bgDark: 'muted-700',
              bgHoverEnabled: 'muted-100',
              bgHoverEnabledDark: 'muted-700',
              bgActiveEnabled: 'muted-200',
              bgActiveEnabledDark: 'muted-700',
              bgFocusVisible: 'muted-100',
              bgFocusVisibleDark: 'muted-600',
              border: 'muted-200',
              borderDark: 'muted-700',
              shadow: {
                size: 'xl',
                enable: 'muted-500/30',
                enableDark: 'muted-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'muted-300/30',
                enableDark: 'muted-800/20',
              },
            },
            primary: {
              text: 'white',
              bg: 'primary-500',
              bgDark: 'primary-500',
              bgHoverEnabled: 'primary-400',
              bgHoverEnabledDark: 'primary-400',
              bgActiveEnabled: 'primary-500',
              bgActiveEnabledDark: 'primary-500',
              bgFocusVisible: 'primary-500',
              bgFocusVisibleDark: 'primary-500',
              focusVisibleOutline: 'primary-400/70',
              focusVisibleOutlineDark: 'primary-400/70',
              focusWithinOutline: 'primary-400/70',
              focusWithinOutlineDark: 'primary-400/70',
              shadow: {
                size: 'xl',
                enable: 'primary-500/50',
                enableDark: 'primary-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'primary-500/50',
                enableDark: 'primary-800/20',
              },
            },
            info: {
              text: 'white',
              bg: 'info-500',
              bgDark: 'info-500',
              bgHoverEnabled: 'info-400',
              bgHoverEnabledDark: 'info-400',
              bgActiveEnabled: 'info-500',
              bgActiveEnabledDark: 'info-500',
              bgFocusVisible: 'info-500',
              bgFocusVisibleDark: 'info-500',
              focusVisibleOutline: 'info-400/70',
              focusVisibleOutlineDark: 'info-400/70',
              focusWithinOutline: 'info-400/70',
              focusWithinOutlineDark: 'info-400/70',
              shadow: {
                size: 'xl',
                enable: 'info-500/50',
                enableDark: 'info-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'info-500/50',
                enableDark: 'info-800/20',
              },
            },
            success: {
              text: 'white',
              bg: 'success-500',
              bgDark: 'success-500',
              bgHoverEnabled: 'success-400',
              bgHoverEnabledDark: 'success-400',
              bgActiveEnabled: 'success-500',
              bgActiveEnabledDark: 'success-500',
              bgFocusVisible: 'success-500',
              bgFocusVisibleDark: 'success-500',
              focusVisibleOutline: 'success-400/70',
              focusVisibleOutlineDark: 'success-400/70',
              focusWithinOutline: 'success-400/70',
              focusWithinOutlineDark: 'success-400/70',
              shadow: {
                size: 'xl',
                enable: 'success-500/50',
                enableDark: 'success-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'success-500/50',
                enableDark: 'success-800/20',
              },
            },
            warning: {
              text: 'white',
              bg: 'warning-500',
              bgDark: 'warning-500',
              bgHoverEnabled: 'warning-400',
              bgHoverEnabledDark: 'warning-400',
              bgActiveEnabled: 'warning-500',
              bgActiveEnabledDark: 'warning-500',
              bgFocusVisible: 'warning-500',
              bgFocusVisibleDark: 'warning-500',
              focusVisibleOutline: 'warning-400/70',
              focusVisibleOutlineDark: 'warning-400/70',
              focusWithinOutline: 'warning-400/70',
              focusWithinOutlineDark: 'warning-400/70',
              shadow: {
                size: 'xl',
                enable: 'warning-500/50',
                enableDark: 'warning-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'warning-500/50',
                enableDark: 'warning-800/20',
              },
            },
            danger: {
              text: 'white',
              bg: 'danger-500',
              bgDark: 'danger-500',
              bgHoverEnabled: 'danger-400',
              bgHoverEnabledDark: 'danger-400',
              bgActiveEnabled: 'danger-500',
              bgActiveEnabledDark: 'danger-500',
              bgFocusVisible: 'danger-500',
              bgFocusVisibleDark: 'danger-500',
              focusVisibleOutline: 'danger-400/70',
              focusVisibleOutlineDark: 'danger-400/70',
              focusWithinOutline: 'danger-400/70',
              focusWithinOutlineDark: 'danger-400/70',
              shadow: {
                size: 'xl',
                enable: 'danger-500/50',
                enableDark: 'danger-800/20',
              },
              shadowHover: {
                size: 'xl',
                enable: 'danger-500/50',
                enableDark: 'danger-800/20',
              },
            },
          },
          buttonPastel: {
            defaultOrMuted: {
              text: 'muted-800',
              textDark: 'muted-100',
              bg: 'muted-500/10',
              bgHoverEnabled: 'muted-500/20',
              bgActiveEnabled: 'muted-500/10',
              bgFocusVisible: 'muted-500/20',
            },
            light: {
              text: 'muted-800',
              textDark: 'muted-100',
              bg: 'white/30',
              bgDark: 'white/20',
              bgHoverEnabled: 'white/20',
              bgHoverEnabledDark: 'white/10',
              bgActiveEnabled: 'white/20',
              bgActiveEnabledDark: 'white/10',
              bgFocusVisible: 'white/20',
              bgFocusVisibleDark: 'white/10',
            },
            primary: {
              text: 'primary-500',
              bg: 'primary-500/10',
              bgHoverEnabled: 'primary-500/20',
              bgActiveEnabled: 'primary-500/10',
              bgFocusVisible: 'primary-500/20',
            },
            info: {
              text: 'info-500',
              bg: 'info-500/10',
              bgHoverEnabled: 'info-500/20',
              bgActiveEnabled: 'info-500/10',
              bgFocusVisible: 'info-500/20',
            },
            success: {
              text: 'success-500',
              bg: 'success-500/10',
              bgHoverEnabled: 'success-500/20',
              bgActiveEnabled: 'success-500/10',
              bgFocusVisible: 'success-500/20',
            },
            warning: {
              text: 'warning-500',
              bg: 'warning-500/10',
              bgHoverEnabled: 'warning-500/20',
              bgActiveEnabled: 'warning-500/10',
              bgFocusVisible: 'warning-500/20',
            },
            danger: {
              text: 'danger-500',
              bg: 'danger-500/10',
              bgHoverEnabled: 'danger-500/20',
              bgActiveEnabled: 'danger-500/10',
              bgFocusVisible: 'danger-500/20',
            },
          },
          buttonOutline: {
            default: {
              text: 'muted-500',
              textDark: 'white',
              hoverEnabled: 'white',
              hoverEnabledDark: 'muted-800',
              bgHoverEnabled: 'muted-500',
              bgHoverEnabledDark: 'white',
              focusWithin: 'muted-500',
              focusWithinDark: 'white',
              focusVisible: 'muted-500',
              focusVisibleDark: 'white',
              bgFocusVisible: 'muted-500',
              bgFocusVisibleDark: 'white',
              textFocusVisible: 'white',
              textFocusVisibleDark: 'muted-800',
              textActiveEnabled: 'muted-800',
              textActiveEnabledDark: 'muted-800',
              bgActiveEnabled: 'muted-400',
              bgActiveEnabledDark: 'white/80',
              border: 'muted-500',
              borderDark: 'white',
              shadowHover: {
                size: 'xl',
                enable: 'muted-500/50',
                enableDark: 'muted-800/20',
              },
            },
            light: {
              text: 'white',
              hoverEnabled: 'muted-800',
              bgHoverEnabled: 'white',
              focusWithin: 'white',
              focusVisible: 'white',
              bgFocusVisible: 'white',
              textFocusVisible: 'muted-800',
              textActiveEnabled: 'muted-800',
              bgActiveEnabled: 'muted-800',
              border: 'white',
              shadowHover: {
                size: 'xl',
                enable: 'muted-500/50',
                enableDark: 'muted-800/20',
              },
            },
            muted: {
              text: 'muted-400',
              textDark: 'white',
              hoverEnabled: 'white',
              hoverEnabledDark: 'muted-800',
              bgHoverEnabled: 'muted-300',
              bgHoverEnabledDark: 'white',
              focusWithin: 'muted-300',
              focusWithinDark: 'white',
              focusVisible: 'muted-300',
              focusVisibleDark: 'white',
              bgFocusVisible: 'muted-300',
              bgFocusVisibleDark: 'white',
              textFocusVisible: 'white',
              textFocusVisibleDark: 'muted-800',
              textActiveEnabled: 'muted-800',
              textActiveEnabledDark: 'muted-800',
              bgActiveEnabled: 'muted-400',
              bgActiveEnabledDark: 'white/80',
              border: 'muted-300',
              borderDark: 'white',
              shadowHover: {
                size: 'xl',
                enable: 'muted-500/50',
                enableDark: 'muted-800/20',
              },
            },
            primary: {
              text: 'primary-500',
              textDark: 'white',
              hoverEnabled: 'white',
              bgHoverEnabled: 'primary-500',
              focusWithin: 'primary-400/70',
              focusVisible: 'primary-400/70',
              bgFocusVisible: 'primary-500',
              textFocusVisible: 'white',
              textActiveEnabled: 'white',
              bgActiveEnabled: 'primary-400',
              border: 'primary-500',
              shadowHover: {
                size: 'xl',
                enable: 'primary-500/30',
                enableDark: 'primary-800/20',
              },
            },
            info: {
              text: 'info-500',
              textDark: 'white',
              hoverEnabled: 'white',
              bgHoverEnabled: 'info-500',
              focusWithin: 'info-400/70',
              focusVisible: 'info-400/70',
              bgFocusVisible: 'info-500',
              textFocusVisible: 'white',
              textActiveEnabled: 'white',
              bgActiveEnabled: 'info-400',
              border: 'info-500',
              shadowHover: {
                size: 'xl',
                enable: 'info-500/30',
                enableDark: 'info-800/20',
              },
            },
            success: {
              text: 'success-500',
              textDark: 'white',
              hoverEnabled: 'white',
              bgHoverEnabled: 'success-500',
              focusWithin: 'success-400/70',
              focusVisible: 'success-400/70',
              bgFocusVisible: 'success-500',
              textFocusVisible: 'white',
              textActiveEnabled: 'white',
              bgActiveEnabled: 'success-400',
              border: 'success-500',
              shadowHover: {
                size: 'xl',
                enable: 'success-500/30',
                enableDark: 'success-800/20',
              },
            },
            warning: {
              text: 'warning-500',
              textDark: 'white',
              hoverEnabled: 'white',
              bgHoverEnabled: 'warning-500',
              focusWithin: 'warning-400/70',
              focusVisible: 'warning-400/70',
              bgFocusVisible: 'warning-500',
              textFocusVisible: 'white',
              textActiveEnabled: 'white',
              bgActiveEnabled: 'warning-400',
              border: 'warning-500',
              shadowHover: {
                size: 'xl',
                enable: 'warning-500/30',
                enableDark: 'warning-800/20',
              },
            },
            danger: {
              text: 'danger-500',
              textDark: 'white',
              hoverEnabled: 'white',
              bgHoverEnabled: 'danger-500',
              focusWithin: 'danger-400/70',
              focusVisible: 'danger-400/70',
              bgFocusVisible: 'danger-500',
              textFocusVisible: 'white',
              textActiveEnabled: 'white',
              bgActiveEnabled: 'danger-400',
              border: 'danger-500',
              shadowHover: {
                size: 'xl',
                enable: 'danger-500/30',
                enableDark: 'danger-800/20',
              },
            },
          },
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