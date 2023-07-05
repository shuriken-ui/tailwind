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
        buttonAction: {
          font: 'normal',
          text: 'sm',
          duration: '300',
          rounded: {
            smooth: 'md',
            curved: 'lg',
            full: 'full',
          },
          default: {
            text: 'muted-700',
            textDark: 'white',
            bg: 'white',
            bgDark: 'muted-700',
            bgHoverEnabled: 'muted-50',
            bgHoverEnabledDark: 'muted-600',
            bgActiveEnabled: 'muted-100',
            bgActiveEnabledDark: 'muted-700/70',
            border: 'muted-300',
            borderDark: 'muted-600',
          },
          muted: {
            text: 'muted-500',
            textDark: 'white',
            bg: 'white',
            bgDark: 'muted-700/40',
            bgHoverEnabled: 'muted-100',
            bgHoverEnabledDark: 'muted-700/60',
            bgActiveEnabled: 'muted-200/50',
            bgActiveEnabledDark: 'muted-800',
            border: 'muted-300',
            borderDark: 'muted-700/40',
            borderActiveEnabledDark: 'muted-800',
          },
          primary: {
            // text: 'primary-50',
            text: 'white',
            border: 'primary-500',
            borderDark: 'primary-500',
            bg: 'primary-500',
            bdDark: 'primary-500',
            bgHoverEnabled: 'primary-400',
            bgHoverEnabledDark: 'primary-400',
            bgFocusVisible: 'primary-500',
            bgFocusVisibleDark: 'primary-500',
            bgActiveEnabled: 'primary-500',
            bgActiveEnabledDark: 'primary-500',
            focusVisible: 'primary-400/70',
            focusVisibleDark: 'primary-400',
            focusWithin: 'primary-400/70',
            focusWithinDark: 'primary-400',
          },
          info: {
            // text: 'info-50',
            text: 'white',
            border: 'info-500',
            borderDark: 'info-500',
            bg: 'info-500',
            bdDark: 'info-500',
            bgHoverEnabled: 'info-400',
            bgHoverEnabledDark: 'info-400',
            bgFocusVisible: 'info-500',
            bgFocusVisibleDark: 'info-500',
            bgActiveEnabled: 'info-500',
            bgActiveEnabledDark: 'info-500',
            focusVisible: 'info-400/70',
            focusVisibleDark: 'info-400',
            focusWithin: 'info-400/70',
            focusWithinDark: 'info-400',
          },
          success: {
            // text: 'success-50',
            text: 'white',
            border: 'success-500',
            borderDark: 'success-500',
            bg: 'success-500',
            bdDark: 'success-500',
            bgHoverEnabled: 'success-400',
            bgHoverEnabledDark: 'success-400',
            bgFocusVisible: 'success-500',
            bgFocusVisibleDark: 'success-500',
            bgActiveEnabled: 'success-500',
            bgActiveEnabledDark: 'success-500',
            focusVisible: 'success-400/70',
            focusVisibleDark: 'success-400',
            focusWithin: 'success-400/70',
            focusWithinDark: 'success-400',
          },
          warning: {
            // text: 'warning-50',
            text: 'white',
            border: 'warning-500',
            borderDark: 'warning-500',
            bg: 'warning-500',
            bdDark: 'warning-500',
            bgHoverEnabled: 'warning-400',
            bgHoverEnabledDark: 'warning-400',
            bgFocusVisible: 'warning-500',
            bgFocusVisibleDark: 'warning-500',
            bgActiveEnabled: 'warning-500',
            bgActiveEnabledDark: 'warning-500',
            focusVisible: 'warning-400/70',
            focusVisibleDark: 'warning-400',
            focusWithin: 'warning-400/70',
            focusWithinDark: 'warning-400',
          },
          danger: {
            // text: 'danger-50',
            text: 'white',
            border: 'danger-500',
            borderDark: 'danger-500',
            bg: 'danger-500',
            bdDark: 'danger-500',
            bgHoverEnabled: 'danger-400',
            bgHoverEnabledDark: 'danger-400',
            bgFocusVisible: 'danger-500',
            bgFocusVisibleDark: 'danger-500',
            bgActiveEnabled: 'danger-500',
            bgActiveEnabledDark: 'danger-500',
            focusVisible: 'danger-400/70',
            focusVisibleDark: 'danger-400',
            focusWithin: 'danger-400/70',
            focusWithinDark: 'danger-400',
          },
        }
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