<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/278e3026-1997-4e01-9457-20772adbce31">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
    <img alt="Shuriken UI logo" src="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
  </picture>
</p>


<p align="center">
  <a href="https://shurikenui.com" title="Shuriken UI website"><strong>shurikenui.com</strong></a> | 
  by <a href="https://cssninja.io" title="Our official website"><strong>cssninja.io</strong></a>
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
  // your tailwind config
  content: [],
})
```


You can also direcly import the preset and use it in your config.

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import preset from '@shuriken-ui/tailwind/preset'

export default {
  // your tailwind config, with the preset
  content: [],
  presets: [preset],
} satisfies Config
```


Also, you can import only the components and utils you needs.

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

import { input, button } from '@shuriken-ui/tailwind/plugins'

export default {
  // your tailwind config, with only the components you need
  plugins: [input, button],
  theme: {
    fontFamily: {
      sans: fontFamily.sans,
      heading: fontFamily.sans,
      alt: fontFamily.sans,
      mono: fontFamily.mono,
    },
    extend: {
      colors: {
        primary: colors.violet,
        'primary-invert': colors.white,
        muted: colors.slate,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
    },
  },
} satisfies Config
```

## Customization

Shuriken UI is fully customizable. You can override components by using the `theme` option.

```ts
export default withShurikenUI({
  theme: {
    extend: {
      nui: {
        // your customizations
      },
    },
  },
})
```

> note: Documentation is coming soon!
