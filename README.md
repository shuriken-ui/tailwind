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