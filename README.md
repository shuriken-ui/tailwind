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