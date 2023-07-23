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
        accordion: {
          size: 'full',
          border: 'muted-200',
          borderDark: 'muted-700',
          bg: 'white',
          bgDark: 'muted-800',
          detail: {
            border: 'muted-200',
            borderDark: 'muted-700',
          },
          detailAndDot: {
            bg: 'muted-200',
            bgDark: 'muted-700',
          },
          detailOpenAndDot: {
            bg: 'primary-500',
          },
          dot: {
            size: '3',
            rounded: 'full',
            duration: '300',
          },
          outer: {
            border: 'muted-200',
            borderDark: 'muted-700',
            bg: 'white',
            bgDark: 'muted-700/60',
            size: '8',
            rounded: 'full',
            duration: '300',
          },
          chevronIcon: {
            size: '4',
            duration: '300',
          },
          plusIcon: {
            size: '4',
            duration: '300',
          },
          content: {
            space: '5',
            font: 'sans',
            text: 'muted-500',
            textDark: 'muted-400',
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
          }
        dropdown: {
          textPosition: 'start',
          contextButton: {
            ringOffsetDark: 'muted-900',
            size: '9',
            rounded: 'full',
            duration: '300',
            ringGroupHover: 'offset-4',
            inner: {
              border: 'muted-200',
              borderDark: 'muted-700',
              bg: 'white',
              bgDark: 'muted-800',
              size: '9',
              rounded: 'full',
            },
            icon: {
              text: 'muted-400',
              size: '5',
              duration: '300',
            },
          },
          textButton: {
            text: 'muted-400',
            inner: {
              font: 'sans',
            },
          },
          chevron: {
            size: '4',
            duration: '300',
          },
          dropdownMenu: {
            shadow: 'lg',
            shadowColor: 'muted-500/10',
            shadowColorDark: 'muted-800/10',
            headerTitle: {
              font: 'heading',
              fontSize: 'medium',
              text: 'muted-500',
              textDark: 'muted-200',
              textSize: 'xs',
            },
            rounded: {
              default: 'md',
              smooth: 'lg',
              curved: 'xl',
            },
            white: {
              bg: 'white',
              bgDark: 'muted-800',
              border: 'muted-200',
              borderDark: 'muted-700',
            },
            whiteContrast: {
              bg: 'white',
              bgDark: 'muted-950',
              border: 'muted-200',
              borderDark: 'muted-800',
            },
            muted: {
              bg: 'muted-100',
              bgDark: 'muted-800',
              border: 'muted-200',
              borderDark: 'muted-700',
            },
            mutedContrast: {
              bg: 'muted-100',
              bgDark: 'muted-950',
              border: 'muted-200',
              borderDark: 'muted-800',
            },
            primary: {
              bg: 'primary-500/10',
              border: 'primary-500',
            },
            info: {
              bg: 'info-500/10',
              border: 'info-500',
            },
            success: {
              bg: 'success-500/10',
              border: 'success-500',
            },
            warning: {
              bg: 'warning-500/10',
              border: 'warning-500',
            },
            danger: {
              bg: 'danger-500/10',
              border: 'danger-500',
            },
          },
          hover: {
            ring: 'muted-200',
            ringDark: 'muted-700/70'
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
        breadcrumb: {
          list: {
            font: 'sans',
            text: '[0.85rem]',
            itemInner: {
              text: 'muted-500',
              duration: '300',
              icon: {
                size: '4',
                dot: {
                  text: 'xl',
                },
              },
              link: {
                textHover: 'primary-500',
                texFocus: 'primary-500',
              },
              itemText: {
                text: 'muted-500',
                space: '2',
              },
            },
          }
        avatarGroup: {
          avatarOuter: {
            bgDark: 'muted-800',
            rounded: 'full',
            duration: '100',
            bg: 'white',
            avatar: {
              bg: 'primary-500/20',
              text: 'primary-500',
            },
          },
          avatarCount: {
            bgDark: 'muted-800',
            rounded: 'full',
            bg: 'white',
            duration: '100',
            inner: {
              bg: 'muted-200',
              borderDark: 'muted-800',
              bgDark: 'muted-700',
              size: 'full',
              rounded: 'full',
              border: 'white',
            },
            text: {
              text: 'muted-500',
              textDark: 'muted-300',
              font: 'normal',
            },
          },
          avatarGroupXS: {
            outer: {
              size: '8',
            },
            count: {
              size: '8',
              text: 'sm',
            },
          },
          avatarGroupSM: {
            outer: {
              size: '10',
            },
            count: {
              size: '10',
              text: 'sm',
            },
          },
          avatarGroupMD: {
            outer: {
              size: '12',
            },
            count: {
              size: '12',
              text: 'lg',
            },
          },
          avatarGroupLG: {
            outer: {
              size: '16',
            },
            count: {
              size: '16',
              text: 'xl',
            },
        autocomplete: {
          labelFloat: {
            text: 'primary-500',
            size: '5',
            duration: '300',
          },
          multipleList: {
            item: {
              bg: 'muted-200',
              bgDark: 'muted-700',
              text: 'muted-400',
              textSize: 'xs',
              font: 'sans',
              fontWeight: 'medium',
            },
            icon: {
              size: '3',
            },
          },
          icon: {
            text: 'muted-400',
            duration: '300',
          },
          input: {
            size: 'full',
            font: 'sans',
            duration: '300',
            focusVisible: {
              labelFloat: {
                text: 'primary-500',
                textDark: 'primary-500',
              },
              icon: {
                text: 'primary-500',
              },
            },
          },
          clear: {
            text: 'mued-400',
            textHover: 'muted-700',
            textHoverDark: 'muted-200',
            duration: '300',
            inner: {
              size: '4',
            },
          },
          errorText: {
            text: 'danger-600',
            textSize: '[0.65rem]',
            font: 'sans',
            fontWeight: 'medium',
          },
          results: {
            text: 'base',
            shadow: 'muted-500/10',
            shadowDark: 'muted-800/10',
            shadowSize: 'lg',
          },
          itemInner: {
            space: '2',
            duration: '300',
            selectedIcon: {
              text: 'success-500',
              size: '4',
            },
            hasMedia: {
              size: '8',
            },
          },
          placeholder: {
            font: 'sans',
            text: 'muted-700',
            textDark: 'muted-400',
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: {
              input: 'full',
              inner: 'xl',
            },
          },
          sm: {
            text: 'xs',
            icon: {
              size: '8',
              innerSize: '4',
            },
            placeload: {
              size: '8',
            },
            clear: {
              size: '8',
            },
          },
          md: {
            text: '[0.825rem]',
            icon: {
              size: '10',
              innerSize: '[1.15rem]',
            },
            placeload: {
              size: '10',
            },
            clear: {
              size: '10',
            },
          },
          lg: {
            text: 'sm',
            icon: {
              size: '12',
              innerSize: '5',
            },
            placeload: {
              size: '12',
            },
            clear: {
              size: '12',
            },
          },
          default: {
            bg: 'white',
            bgDark: 'muted-900/75',
            border: 'muted-300',
            borderDark: 'muted-700',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-500',
            results: {
              border: 'muted-200',
              borderDark: 'muted-700',
              bg: 'white',
              bgDark: 'muted-800',
            },
            resultsInner: {
              bg: 'muted-100',
              bgDark: 'muted-700',
            },
          },
          defaultContrast: {
            bg: 'white',
            bgDark: 'muted-950/75',
            border: 'muted-300',
            borderDark: 'muted-800',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-600',
            results: {
              border: 'muted-200',
              borderDark: 'muted-800',
              bg: 'white',
              bgDark: 'muted-950/75',
            },
            resultsInner: {
              bg: 'muted-100',
              bgDark: 'muted-800',
            },
          },
          muted: {
            bg: 'muted-200',
            bgDark: 'muted-900/75',
            border: 'muted-200',
            borderDark: 'muted-700',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-500',
            results: {
              border: 'muted-200',
              borderDark: 'muted-700',
              bg: 'white',
              bgDark: 'muted-800',
            },
            resultsInner: {
              bg: 'muted-200',
              bgDark: 'muted-700',
            },
          },
          mutedContrast: {
            bg: 'muted-100',
            bgDark: 'muted-950/75',
            border: 'muted-100',
            borderDark: 'muted-800',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-600',
            results: {
              border: 'muted-200',
              borderDark: 'muted-800',
              bg: 'white',
              bgDark: 'muted-950/75',
            },
            resultsInner: {
              bg: 'muted-100',
              bgDark: 'muted-700',
            },
          },
          notLoading: {
            text: 'muted-300',
            textDark: 'muted-600',
          },
          error: {
            border: 'danger-500',
            borderDark: 'danger-500',
            icon: {
              text: 'danger-500',
            },
          },
          hasNotIcon: {
            text: {
              sm: 'xs',
              md: 'sm',
              lg: 'sm',
            },
            labelFloat: {
              sm: 'xs',
              md: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                },
                placeholderShown: {
                  text: '[0.825rem]',
                },
              },
              lg: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                },
                placeholderShown: {
                  text: '[0.825rem]',
                },
              },
            },
          },
          hasIcon: {
            text: {
              sm: 'xs',
              md: 'sm',
              lg: 'base',
            },
            labelFloat: {
              sm: 'xs',
              md: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                },
                placeholderShown: {
                  text: '[0.825rem]',
                },
              },
              lg: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                },
                placeholderShown: {
                  text: '[0.825rem]',
                },
              },
            },
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
        checkbox: {
          outer: {
            size: '5',
          },
          inner: {
            border: 'muted-400',
            borderDark: 'muted-700',
            bg: 'white',
            bgDark: 'muted-700',
            size: 'full',
          },
          check: {
            size: '2.5',
            duration: '300',
          },
          indeterminate: {
            size: '2.5',
            duration: '300',
          },
          input: {
            size: '5',
          },
          labelText: {
            text: 'muted-400',
            font: 'sans',
            textSize: 'sm',
          },
          error: {
            text: 'danger-600',
            font: 'sans',
            textSixe: 'xs',
        buttonAction: {
          font: 'normal',
          text: 'sm',
          duration: '300',
            bgHover: 'muted-50',
            bgHoverDark: 'muted-600',
            text: 'muted-700',
            textDark: 'white',
          },
          muted: {
            bg: 'muted-200',
            bgDark: 'muted-700',
            bgHover: 'muted-100',
            bgHoverDark: 'muted-600',
            text: 'muted-500',
            textDark: 'white',
          },
          primary: {
            border: 'primary-500',
            bgHover: 'primary-500/20',
            text: 'primary-500',
          },
          info: {
            border: 'info-500',
            bgHover: 'info-500/20',
            text: 'info-500',
          },
          success: {
            border: 'success-500',
            bgHover: 'success-500/20',
            text: 'success-500',
          },
          warning: {
            border: 'warning-500',
            bgHover: 'warning-500/20',
            text: 'warning-500',
          },
          danger: {
            border: 'danger-500',
            bgHover: 'danger-500/20',
            text: 'danger-500',
          },
        },
        buttonClose: {
          size: '9',
          duration: '300',
          buttonIcon: {
            size: '4',
          },
          rounded: {
            smooth: 'md',
            curved: 'lg',
            full: 'full',
          },
          default: {
            text: 'muted-600',
            textDark: 'muted-200',
          },
          light: 'white',
          muted: 'muted-400',
          primary: 'primary-500',
          info: 'info-500',
          success: 'success-500',
          warning: 'warning-500',
          danger: 'danger-500',
            bgHover: 'muted-100',
            bgHoverDark: 'muted-700',
            text: 'muted-700',
            textDark: 'muted-50',
          },
          muted: {
            bg: 'muted-100',
            bgHover: 'muted-50',
            bgDark: 'muted-700',
            bgHoverDark: 'muted-600',
            text: 'muted-700',
            textDark: 'muted-50',
          },
          primary: {
            bg: 'primary-500/10',
            bgHover: 'primary-500/20',
            text: 'primary-500',
          },
          info: {
            bg: 'info-500/10',
            bgHover: 'info-500/20',
            text: 'info-500',
          },
          success: {
            bg: 'success-500/10',
            bgHover: 'success-500/20',
            text: 'success-500',
          },
          warning: {
            bg: 'warning-500/10',
            bgHover: 'warning-500/20',
            text: 'warning-500',
          },
          danger: {
            bg: 'danger-500/10',
            bgHover: 'danger-500/20',
            text: 'danger-500',
          },
        },
        buttonIcon: {
          text: 'sm',
          font: 'normal',
          duration: '300',
          buttonSmall: {
            size: '8',
            space: '1',
          },
          buttonMedium: {
            size: '10',
            space: '2',
          },
          buttonLarge: {
            size: '12',
            space: '3',
          },
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
        },
        dropdownDivider: {
          space: '2',
          border: 'muted-200', // you can use arbitrary value like '[#fff]'
          borderDark: 'muted-600',
        },
        dropdownItem: {
          itemRounded: 'md',
          textPosition: 'left',
          textSize: 'sm',
          duration: '300',
          notActive: {
            text: 'muted-500',
          },
          default: {
            bg: 'muted-100',
            bgDark: 'muted-700',
            text: 'primary-500',
          },
          contrast: {
            bg: 'muted-100',
            bgDark: 'muted-900',
            text: 'primary-500',
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
          },
        },
        focus: {
          offset: '2',
          width: '1',
          style: 'dashed',
          color: 'muted-300',
          colorDark: 'muted-600',
        },
        heading: {
          textXS: 'xs',
          textSM: 'sm',
          textMD: 'base',
          textLG: 'lg',
          textXL: 'xl',
          text2XL: '2xl',
          text3XL: '3xl',
          text4XL: '4xl',
          text5XL: '5xl',
          text6XL: '6xl',
          text7XL: '7xl',
          text8XL: '8xl',
          text9XL: '9xl',
          textLight: 'light',
          textNormal: 'normal',
          textMedium: 'medium',
          textSemibold: 'semibold',
          textBold: 'bold',
          textExtrabold: 'extrabold',
          textLeadNone: 'none',
          textLeadNormal: 'normal',
          textLeadTight: 'tight',
          textLeadSnug: 'snug',
          textLeadLoose: 'loose',
        input: {
          label: {
            float: {
              text: 'primary-500',
              duration: '300',
              size: '5',
            },
          },
          icon: {
            text: 'muted-400',
            duration: '300',
          },
          errorText: {
            text: 'danger-600',
            textSize: '[0.65rem]',
            font: 'sans',
            fontWeight: 'medium',
          },
          input: {
            focusSize: 'full',
            font: 'sans',
            duration: '300',
            focusVisible: {
              labelFloat: {
                text: 'primary-500',
                textDark: 'primary-500',
              },
              icon: {
                text: 'primary-500',
              },
            },
            action: {
              text: 'muted-400',
              duration: '300',
            },
            rounded: {
              default: 'md',
              smooth: 'lg',
              curved: 'xl',
              full: 'full',
            },
            sm: {
              label: {
                text: 'xs',
              },
              iconOrAction: {
                size: '8',
              },
              iconOrAcionInner: {
                size: '4',
              },
              placeload: {
                size: '8',
              },
            },
            md: {
              label: {
                text: '[0.825rem]',
              },
              iconOrAction: {
                size: '10',
              },
              iconOrAcionInner: {
                size: '[1.15rem]',
              },
              placeload: {
                size: '10',
              },
            },
            lg: {
              label: {
                text: 'sm',
              },
              iconOrAction: {
                size: '12',
              },
              iconOrAcionInner: {
                size: '5',
              },
              placeload: {
                size: '12',
              },
            },
            default: {
              bg: 'white',
              bgDark: 'muted-900/75',
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
         },
        inputFileRegular: {
          inner: {
            size: 'full',
            font: 'sans',
            duration: '300',
          },
          placeholder: {
            font: 'sans',
            text: 'muted-400',
            textSize: 'xs',
          },
          text: {
            text: 'muted-400',
          },
          error: {
            text: 'danger-600',
            textSize: '[0.65rem',
            font: 'sans',
            fontWeight: 'medium',
            border: 'danger-500',
          },
          white: {
            inner: {
              bg: 'white',
              bgDark: 'muted-800',
              border: 'muted-300',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            defaultContrast: {
              bg: 'white',
              bgDark: 'muted-950/75',
            addon: {
              bg: 'muted-50',
              bgDark: 'muted-800',
              border: 'muted-300',
              borderDark: 'muted-700',
              text: 'muted-400',
            },
          },
          whiteContrast: {
            inner: {
              bg: 'white',
              bgDark: 'muted-900/75',
              border: 'muted-300',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            muted: {
              bg: 'muted-200',
              bgDark: 'muted-900/75',
              border: 'muted-200',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            mutedContrast: {
              bg: 'muted-100',
              bgDark: 'muted-950/75',
              border: 'muted-100',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            notLoading: {
              text: 'muted-300',
              textDark: 'muted-600',
            },
            error: {
              border: 'danger-500',
              borderDark: 'danger-500',
              icon: {
                text: 'danger-500',
              }
            },
            hasNotIcon: {
              text: {
                sm: 'xs',
                md: 'sm',
                lg: 'sm',
              },
              labelFloat: {
                sm: 'xs',
                md: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
                lg: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
              },
            },
            hasIcon: {
              text: {
                sm: 'xs',
                md: 'sm',
                lg: 'base',
              },
              labelFloat: {
                sm: 'xs',
                md: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
                lg: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
              },
            },
            hasAction: {
              spaceSM: '8',
              spaceMD: '10',
              spaceLG: '12',
            },
          },
            addon: {
              bg: 'muted-50',
              bgDark: 'muted-950',
              border: 'muted-300',
              borderDark: 'muted-800',
              text: 'muted-400',
            },
          },
          colorFocus: 'primary-500',
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: 'full',
          },
          hasNotIcon: {
            sm: 'xs',
            md: '[0.825rem]',
            lg: 'sm',
          },
          hasIcon: {
            sm: {
              text: 'xs',
              iconSize: '3',
            },
            md: {
              text: '[0.825rem]',
              iconSize: '4',
            },
            lg: {
              text: 'sm',
              iconSize: '5',
            },
          },
          hover: 'primary-500',
          focusWhitin: 'primary-500',
        },
        label: {
          font: 'alt',
          text: 'muted-400',
          textDark: 'muted-400/80',
        },
        list: {
          ul: 'disc',
          ol: 'decimal',
          base: {
            list: 'disc',
            textMarker: 'muted-500',
            textMarkerDark: 'muted-400',
            text: 'slate-700',
            textDark: 'slate-300',
            font: 'sans',
          },
          media: {
            textMarker: 'slate-500',
            textMarkerDark: 'slate-400',
          }
        link: {
          font: 'sans',
          textHover: 'primary-500',
          textHoverDark: 'primary-400',
          textFocus: 'primary-500',
          textFocusDark: 'primary-400',
        listbox: {  
          labelFloat: {
            text: 'primary-500',
            size: '5',
            duration: '300',
          },
          button: {
            size: 'full',
            text: 'sm',
            textPosition: 'start',
            font: 'sans',
          },
          icon: {
            text: 'muted-400',
            duration: '300',
          },
          chevron: {
            inner: {
              size: '4',
              text: 'muted-400',
              duration: '300',
            },
          },
          options: {
            ringFocus: 'primary-500/50',
            space: '2',
            text: 'base',
            shadowSize: 'lg',
            shadow: 'muted-500/10',
            shadowDark: 'muted-800/10'
          },
          option: {
            duration: '300',
            icon: {
              text: 'primary-600',
            },
            iconInner: {
              size: '4',
            },
            activeOrHover: {
              text: 'primary-600',
              bg: 'primary-500/10',
            },
          },
          errorText: {
            text: 'danger-600',
            textSize: '[0.65rem]',
            font: 'sans',
            fontWeight: 'medium',
          },
          sm: {
            text: 'xs',
            icon: {
              size: '8',
              innerSize: '4',
            },
            placeload: {
              size: '8',
            },
            chevron: {
              size: '8',
              innerSize: '3',
            },
          },
          md: {
            text: '[0.825rem]',
            icon: {
              size: '10',
              innerSize: '[1.15rem]',
            },
            placeload: {
              size: '10',
            },
            chevron: {
              size: '10',
              innerSize: '4',
            },
          },
          lg: {
            text: 'sm',
            icon: {
              size: '12',
              innerSize: '5',
            },
            placeload: {
              size: '12',
            },
            chevron: {
              size: '12',
              innerSize: '4',
            },
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: {
              button: 'full',
              option: 'xl',
            },
          },
          default: {
            bg: 'white',
            bgDark: 'muted-900/75',
            border: 'muted-300',
            borderDark: 'muted-700',
            borderFocus: 'muted-300',
            borderFocusDark: 'muted-700',
            shadowFocus: 'muted-300/50',
            shadowFocusDark: 'muted-800/50',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-500',
            chevron: {
              border: 'muted-200',
              borderDark: 'muted-700',
            },
            option: {
              border: 'muted-200',
              borderDark: 'muted-600',
              bg: 'white',
              bgDark: 'muted-700',
            },
          },
          defaultContrast: {
            bg: 'white',
            bgDark: 'muted-950/75',
            border: 'muted-300',
            borderDark: 'muted-800',
            borderFocus: 'muted-300',
            borderFocusDark: 'muted-700',
            shadowFocus: 'muted-300/50',
            shadowFocusDark: 'muted-800/50',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-600',
            chevron: {
              border: 'muted-300',
              borderDark: 'muted-800',
            },
            option: {
              border: 'muted-200',
              borderDark: 'muted-800',
              bg: 'white',
              bgDark: 'muted-950/70',
            },
          },
          muted: {
            bg: 'muted-200',
            bgDark: 'muted-900/75',
            border: 'muted-300',
            borderDark: 'muted-700',
            borderFocus: 'muted-300',
            borderFocusDark: 'muted-700',
            shadowFocus: 'muted-300/50',
            shadowFocusDark: 'muted-800/50',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-500',
            chevron: {
              border: 'muted-300',
              borderDark: 'muted-700',
            },
            option: {
              border: 'muted-200',
              borderDark: 'muted-600',
              bg: 'white',
              bgDark: 'muted-700',
            },
          },
          mutedContrast: {
            bg: 'muted-200',
            bgDark: 'muted-950/75',
            border: 'muted-300',
            borderDark: 'muted-800',
            borderFocus: 'muted-300',
            borderFocusDark: 'muted-700',
            shadowFocus: 'muted-300/50',
            shadowFocusDark: 'muted-800/50',
            text: 'muted-600',
            textDark: 'muted-200',
            textPlaceholder: 'muted-300',
            textPlaceholderDark: 'muted-500',
            chevron: {
              border: 'muted-300',
              borderDark: 'muted-800',
            },
            option: {
              border: 'muted-200',
              borderDark: 'muted-800',
              bg: 'white',
              bgDark: 'muted-950/70',
            },
          },
          notLoading: {
            text: 'muted-300',
            textDark: 'muted-600',
          },
          error: {
            border: 'danger-500',
            borderDark: 'danger-500',
            icon: {
              text: 'danger-500',
            },
          },
          hasNotIcon: {
            text: {
              sm: 'xs',
              md: 'sm',
              lg: 'sm',
            },
            labelFloat: {
              sm: {
                text: 'xs',
                focusVisible: {
                  textColor: 'primary-500',
                },
              },
              md: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                  textColor: 'primary-500',
                },
                button: {
                  text: '[0.825rem]',
                },
              },
              lg: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                  textColor: 'primary-500',
                },
                button: {
                  text: '[0.825rem]',
                },
              },
            },
          },
          hasIcon: {
            text: {
              sm: 'xs',
              md: 'sm',
              lg: 'base',
            },
            labelFloat: {
              sm: {
                text: 'xs',
                focusVisible: {
                  textColor: 'primary-500',
                },
              },
              md: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                  textColor: 'primary-500',
                },
                button: {
                  text: '[0.825rem]',
                },
              },
              lg: {
                text: 'xs',
                focusVisible: {
                  text: 'xs',
                  textColor: 'primary-500',
                },
                button: {
                  text: '[0.825rem]',
                },
              },
            },
          },
        },
        mark: {
          bg: 'primary-100',
          bgDark: 'primary-800',
          text: 'primary-800',
          textDark: 'primary-200',
        },
        messageText: {
          space: '6',
          head: {
            space: '2',
          },
          dot: {
            size: '3',
            rounded: 'full',
            bg: 'muted-200',
            bgDark: 'muted-700',
          },
          close: {
            position: '2',
          },
          white: {
            bg: 'white',
            bgDark: 'muted-800',
          },
          whiteContrast: {
            bg: 'white',
            bgDark: 'muted-950',
          },
          default: {
            border: 'muted-300',
            borderDark: 'muted-700',
            dot: {
              bg: 'muted-200',
              bgDark: 'muted-700',
            },
          },
          contrast: {
            border: 'muted-300',
            borderDark: 'muted-800',
            dot: {
              bg: 'muted-200',
              bgDark: 'muted-800',
            },
          },
          primary: {
            border: 'primary-500',
            dot: {
              bg: 'primary-500',
            },
          },
          info: {
            border: 'info-500',
            dot: {
              bg: 'info-500',
            },
          },
          success: {
            border: 'success-500',
            dot: {
              bg: 'success-500',
            },
          },
          warning: {
            border: 'warning-500',
            dot: {
              bg: 'warning-500',
            },
          },
          danger: {
            border: 'danger-500',
            dot: {
              bg: 'danger-500',
            },
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
          },
        progress: {
          size: 'full',
          bar: {
            duration: '300',
          },
          default: {
            bg: 'muted-200',
            bgDark: 'muted-700',
          },
          defaultContrast: {
            bg: 'muted-200',
            bgDark: 'muted-900',
          },
          progressXS: '1',
          progressSM: '2',
          progressMD: '3',
          progressLG: '3',
          progressXL: '5',
          rounded: {
            curved: 'lg',
            full: 'full',
          },
        pagination: {
          size: 'full',
          list: {
            border: 'muted-200',
            borderDark: 'muted-600',
            bg: 'muted-100',
            bgDark: 'muted-700',
            space: '1',
          },
          buttons: {
            border: 'muted-200',
            borderDark: 'muted-600',
            bg: 'muted-100',
            bgDark: 'muted-700',
            space: '1',
          },
          link: {
            size: '10',
            font: 'sans',
            text: 'sm',
            border: 'muted-200',
            borderDark: 'muted-600',
            bg: 'muted-100',
            bgDark: 'muted-700',
            space: '1',
            notActive: {
              bg: 'white',
              bgDark: 'primary-500',
              bgHover: 'muted-100',
              bgHoverDark: 'muted-900',
              text: 'muted-500',
              textHover: 'muted-700',
              textHoverDark: 'muted-400',
              border: 'muted-200',
              borderDark: 'muted-700',
            },
            active: {
              bg: 'primary-500',
              text: 'white',
              border: 'primary-500',
              shadow: 'primary-500/50',
              shadowDark: 'primary-500/20',
              shadowSize: 'sm',
            }
          },
          ellipsis: {
            border: 'muted-200',
            borderDark: 'muted-700',
            text: 'muted-500',
            textSize: 'sm',
            bg: 'white',
            bgDark: 'muted-800',
            size: '10',
            font: 'sans',
          },
        modal: {
          backdrop: {
            bg: 'muted-800/70',
            bgDark: 'muted-900/80',
          },
          contentInner: {
            space: '4',
          },
          contentPanel: {
            size: 'full',
            text: 'start',
          },
          modalSM: 'sm',
          modalMD: 'md',
          modalLG: 'xl',
          modalXL: '2xl',
          modal2XL: '3xl',
          modal3XL: '5xl',
        paragraph: {
          textXS: 'xs',
          textSM: 'sm',
          textMD: 'base',
          textLG: 'lg',
          textXL: 'xl',
          text2XL: '2xl',
          text3XL: '3xl',
          text4XL: '4xl',
          text5XL: '5xl',
          text6XL: '6xl',
          text7XL: '7xl',
          text8XL: '8xl',
          text9XL: '9xl',
          textLight: 'light',
          textNormal: 'normal',
          textMedium: 'medium',
          textSemibold: 'semibold',
          textBold: 'bold',
          textExtrabold: 'extrabold',
          textLeadNone: 'none',
          textLeadNormal: 'normal',
          textLeadTight: 'tight',
          textLeadSnug: 'snug',
          textLeadLoose: 'loose',
        placeholderPage: {
          minSize: '[400px]',
          innerSize: 'full',
          maxContentSize: 'sm',
          maxSizeXS: 'xs',
          maxSizeSM: 'sm',
          maxSizeMD: 'md',
          maxSizeLG: 'lg',
          maxSizeXL: 'xl',
          title: {
            text: 'muted-800',
            textDark: 'white',
          },
          subtitle: {
            text: 'muted-400',
          },
        select: {
          labelFloat: {
            text: 'primary-500',
            size: '5',
            duration: '300',
          },
          icon: {
            text: 'muted-400',
            duration: '300',
          },
          errorText: {
            text: 'danger-600',
            textSize: '[0.65rem]',
            font: 'sans',
            fontWeight: 'medium',
          },
          select: {
            size: 'full',
            font: 'sans',
            duration: '300',
            focusVisible: {
              labelFloat: {
                text: 'primary-500',
                textDark: 'primary-500',
              },
              icon: {
                text: 'primary-500',
              },
            },
            chevron: {
              text: 'muted-400',
              duration: '300',
            },
            multiple: {
              space: '2',
              size: '32',
            },
            rounded: {
              default: 'md',
              smooth: 'lg',
              curved: 'xl',
              full: 'full',
            },
            sm: {
              space: '8',
              labelText: 'xs',
              iconOrChevronSize: '8',
              iconOrChevronSizeInner: '4',
              placeloadSize: '8',
            },
            md: {
              space: '10',
              labelText: '[0.825rem]',
              iconOrChevronSize: '10',
              iconOrChevronSizeInner: '[1.15rem]',
              placeloadSize: '10',
            },
            lg: {
              space: '12',
              labelText: 'sm',
              iconOrChevronSize: '12',
              iconOrChevronSizeInner: '5',
              placeloadSize: '12',
            },
            default: {
              bg: 'white',
              bgDark: 'muted-900/75',
              border: 'muted-300',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            defaultContrast: {
              bg: 'white',
              bgDark: 'muted-950/75',
              border: 'muted-300',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            muted: {
              bg: 'muted-200',
              bgDark: 'muted-900/75',
              border: 'muted-200',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            mutedContrast: {
              bg: 'muted-100',
              bgDark: 'muted-950/75',
              border: 'muted-100',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            error: {
              border: 'danger-500',
              borderDark: 'danger-500',
              icon: {
                text: 'danger-500',
              },
            },
            hasNotIcon: {
              text: {
                sm: 'xs',
                md: 'sm',
                lg: 'sm',
              },
              labelFloat: {
                sm: 'xs',
                md: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
                lg: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
              },
            },
            hasIcon: {
              text: {
                sm: 'xs',
                md: 'sm',
                lg: 'base',
              },
              labelFloat: {
                sm: 'xs',
                md: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
                lg: {
                  text: 'xs',
                  focusVisible: {
                    text: 'xs',
                  },
                  placeholderShown: {
                    text: '[0.825rem]',
                  },
                },
              },
            },
        radio:  {
          outer: {
            size: '5',
          },
          inner: {
            border: 'muted-400',
            borderDark: 'muted-600',
            bg: 'white',
            bgDark: 'muted-700',
            size: 'full',
            rounded: 'full',
          },
          dot: {
            size: '1',
            rounded: 'full',
            bg: 'current',
            duration: '300',
          },
          input: {
            size: '5',
          },
          labelText: {
            text: 'danger-400',
            textSize: 'sm',
            font: 'sans',
          },
          error: {
            text: 'danger-600',
            textSize: 'sm',
            font: 'sans',
          },
          default: {
            text: 'muted-600',
            textDark: 'muted-200',
          },
          light: 'white',
          muted: 'muted-400',
          primary: 'primary-500',
          info: 'info-500',
          success: 'success-500',
          warning: 'warning-500',
          danger: 'danger-500',
        message: {
          messageIconOuter: {
            size: '10',
            icon: {
              size: '5',
              text: 'white',
            },
          },
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
        progressCircle: {
          circleDuration: '500',
          default: {
            text: 'muted-200',
            textDark: 'muted-700',
            stroke: 'current',
          },
          contrast: {
            text: 'muted-200',
            textDark: 'muted-900',
            stroke: 'current',    
          }
        },
        slimscroll: {
          width: '[6px]',
          bg: 'black/5',
          bgDark: 'white/5',
          bgHover: 'black/20',
          bgHoverDark: 'white/20',
        },
        themeSwitch: {
          bg: 'muted-200',
          bgDark: 'muted-700',
          rounded: 'full',
          input: {
            size: 'full',
          },
          inner: {
            bg: 'white',
            bgDark: 'muted-900',
            border: 'muted-200',
            borderDark: 'muted-800',
            size: '10',
            rounded: 'full',
            duration: '300',
          },
          sun: {
            size: '6',
            text: 'yellow-400',
            duration: '300',
          },
          moon: {
            size: '6',
            text: 'yellow-400',
            duration: '300',
          },
        },
        themeToggle: {
          size: '9',
          rounded: 'full',
          duration: '300',
          ringDark: 'muted-900',
          inner: {
            size: '9',
            rounded: 'full',
            bg: 'white',
            bgDark: 'muted-800',
            border: 'muted-300',
            borderDark: 'muted-700'
        tabSlider: {
          track: {
            bg: 'muted-100',
            bgDark: 'muted-700',
            size: 'full',
            font: 'sans',
          },
          item: {
            notActiveText: 'muted-400',
            activeText: 'white',
          },
          naver: {
            bg: 'primary-500',
            duration: '300',
        toast: {
          font: 'sans',
          title: {
            heading: 'sm',
            weight: 'medium',
            text: 'muted-800',
            textDark: 'muted-100',
          },
          subtitle: {
            text: 'xs',
            textColor: 'muted-400',
          },
          iconSize: '6',
          iconBlockSize: '16',
          default: {
            border: 'muted-300',
            borderDark: 'muted-700',
          },
          contrast: {
            border: 'muted-300',
            borderDark: 'muted-800',
          },
          white: {
            bg: 'white',
            bgDark: 'muted-800',
            icon: {
              text: 'muted-500',
            },
            iconsBlock: {
              bg: 'muted-100',
              bgDark: 'muted-700',
            },
          },
          whiteContrast: {
            bg: 'white',
            bgDark: 'muted-950',
            icon: {
              text: 'muted-500',
            },
            iconsBlock: {
              bg: 'muted-100',
              bgDark: 'muted-800',
            },
          },
          primary: {
            border: 'primary-500',
            icon: {
              text: 'primary-500',
            },
            iconsBlock: {
              bg: 'primary-500/10',
            },
          },
          info: {
            border: 'info-500',
            icon: {
              text: 'info-500',
            },
            iconsBlock: {
              bg: 'info-500/10',
            },
          },
          success: {
            border: 'success-500',
            icon: {
              text: 'success-500',
            },
            iconsBlock: {
              bg: 'success-500/10',
            },
          },
          warning: {
            border: 'warning-500',
            icon: {
              text: 'warning-500',
            },
            iconsBlock: {
              bg: 'warning-500/10',
            },
          },
          danger: {
            border: 'danger-500',
            icon: {
              text: 'danger-500',
            },
            iconsBlock: {
              bg: 'danger-500/10',
            },
          },
          rounded: {
            default: 'md',
            smooth: 'lg',
            curved: 'xl',
            full: 'full',
          },
          tabsSM: {
            twoSlotsW: '[140px]',
            threeSlotsW: '[210px]',
            track: '8',
          },
          tabsMD: {
            twoSlotsW: '[250px]',
            threeSlotsW: '[320px]',
            track: '10',
          },
        },
          },
          borderless: {
            shadow: 'muted-300/30',
            shadowDark: 'muted-800/30',
            shadowSize: 'xl',
          }
        },
        tabs: {
          inner: {
            font: 'alt',
            space: '6',
          },
          item: {
            text: 'sm',
            duration: '300',
            notActive: {
              text: 'muted-400',
            },
            active: {
              border: 'primary-500',
              text: 'muted-800',
              textDark: 'muted-100',
            },
          },
          pillItem: {
            rounded: 'xl',
            textPosition: 'center',
            text: 'xs',
            duration: '300',
            notActive: {
              text: 'muted-400',
            },
            active: {
              bg: 'primary-500',
              text: 'white',
              shadow: 'primary-500/50',
              shadowSize: 'lg',
            },
          }
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
        text: {
          textXS: 'xs',
          textSM: 'sm',
          textMD: 'base',
          textLG: 'lg',
          textXL: 'xl',
          text2XL: '2xl',
          text3XL: '3xl',
          text4XL: '4xl',
          text5XL: '5xl',
          text6XL: '6xl',
          text7XL: '7xl',
          text8XL: '8xl',
          text9XL: '9xl',
          textLight: 'light',
          textNormal: 'normal',
          textMedium: 'medium',
          textSemibold: 'semibold',
          textBold: 'bold',
          textExtrabold: 'extrabold',
          textLeadNone: 'none',
          textLeadNormal: 'normal',
          textLeadTight: 'tight',
          textLeadSnug: 'snug',
          textLeadLoose: 'loose',
        },
        switchThin: {
        switchBall: {
          handle: {
            border: 'muted-300',
            borderDark: 'muted-600',
            bg: 'white',
            bgDark: 'muted-700',
            size: '6',
            size: '5',
            rounded: 'full',
          },
          track: {
            bg: 'muted-300',
            bgDark: 'muted-600',
            rounded: 'full',
            duration: '300',
          },
          icon: {
            size: '2.5',
            text: 'white',
            duration: '300',
          },
          singleLabel: {
            text: 'muted-400',
            font: 'sans',
            textSize: 'sm',
          },
          dualLabel: {
            label: {
              font: 'heading',
              fontWeight: 'medium',
              text: 'muted-800',
              textDark: 'white',
              textSize: 'sm',
            },
            sublabel: {
              text: 'muted-400',
              textSize: 'xs',
              font: 'sans',
            },
          },
          input: {
            size: 'full',
          },
          sun: {
            size: '5',
            duration: '300',
            text: 'yellow-400',
          },
          moon: {
            size: '5',
            duration: '300',
            text: 'yellow-400',
          },
        },
          primary: 'primary-400',
          info: 'info-400',
          success: 'success-400',
          warning: 'warning-400',
          danger: 'danger-400',
        },
        snack: {
          rounded: 'full',
          icon: {
            border: 'muted-200',
            rounded: 'full',
            bg: 'white',
          },
          image: {
            rounded: 'full',
          },
          imageInner: {
            rounded: 'full',
          },
          text: {
            text: 'muted-600',
            textDark: 'muted-300',
            font: 'sans',
            textSize: 'sm',
          },
          snackSM: {
            size: '8',
            icon: {
              size: '8',
            },
            iconsInner: {
              size: '4',
            },
            imageAndImageInner: {
              size: '8',
            },
          },
          snackMD: {
            size: '10',
            icon: {
              size: '10',
            },
            iconsInner: {
              size: '5',
            },
            imageAndImageInner: {
              size: '10',
            },
          },
          default: {
            bg: 'white',
            bgDark: 'muted-700',
            border: 'muted-300',

          },
          muted: {
            bg: 'muted-200',
            bgDark: 'muted-700',
          },
        },
        textarea: {
          labelFloat: {
            text: 'primary-500',
            size: '5',
            duration: '300',
          },
          errorText: {
            text: 'danger-600',
            textSize: '[0.65rem]',
            font: 'sans',
            fontWeight: 'medium',
          },
          textarea: {
            size: 'full',
            focusVisible: {
              labelFloat: {
                text: 'primary-500',
                textDark: 'primary-500',
              },
            },
            placeload: {
              size: 'full',
              space: '2',
            },
            rounded: {
              default: 'md',
              smooth: 'lg',
              curved: 'xl',
            },
            default: {
              bg: 'white',
              bgDark: 'muted-900/75',
              border: 'muted-300',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            defaultContrast: {
              bg: 'white',
              bgDark: 'muted-950/75',
              border: 'muted-300',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            muted: {
              bg: 'muted-200',
              bgDark: 'muted-900/75',
              border: 'muted-200',
              borderDark: 'muted-700',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-500',
            },
            mutedContrast: {
              bg: 'muted-100',
              bgDark: 'muted-950/75',
              border: 'muted-100',
              borderDark: 'muted-800',
              text: 'muted-600',
              textDark: 'muted-200',
              textPlaceholder: 'muted-300',
              textPlaceholderDark: 'muted-600',
            },
            notLoading: {
              text: 'muted-300',
              textDark: 'muted-600',
            },
            error: {
              border: 'danger-500',
              borderDark: 'danger-500',
            },
            focus: {
              border: 'primary-500',
              duration: '300',
            },
            sm: {
              size: '[2rem]',
              text: 'xs',
              textLabel: 'xs',
              labelFloat: 'xs',
            },
            md: {
              size: '[2.5rem]',
              text: 'sm',
              textLabel: 'sm',
              labelFloat: {
                text: 'xs',
                textFocusVisible: 'xs',
                textPlaceholderShown: '[0.825rem]',
              },
            },
            lg: {
              size: '[3rem]',
              text: 'sm',
              textLabel: 'sm',
              labelFloat: {
                text: 'xs',
                textFocusVisible: 'xs',
                textPlaceholderShown: '[0.825rem]',
              },
            },
            addon: {
              border: 'muted-300',
              borderDark: 'muted-700',
              bg: 'muted-50',
              bgDark: 'muted-900/50',
              size: 'full',
              space: '2',
            }
          }
        }
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