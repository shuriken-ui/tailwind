import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { TagAttrs } from './tag.types'
import { Tag } from './tag.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Tag',
  // tags: ['autodocs'],
  render: (args) => Tag(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      defaultValue: 'md',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'full',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'pastel', 'outline'],
      defaultValue: 'solid',
    },
    shadow: {
      control: { type: 'select' },
      options: ['flat', 'hover'],
    },
  },
} satisfies Meta<TagAttrs>

export default meta
type Story = StoryObj<TagAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'none',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'md',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'lg',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const Full: Story = {
  name: 'Rounded: full',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'sm',
    children: html`
      Category
    `,
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Colors: solid
export const SolidDefault: Story = {
  name: 'Solid: default',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidMuted: Story = {
  name: 'Solid: muted',
  args: {
    color: 'muted',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidPrimary: Story = {
  name: 'Solid: primary',
  args: {
    color: 'primary',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidInfo: Story = {
  name: 'Solid: info',
  args: {
    color: 'info',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidSuccess: Story = {
  name: 'Solid: success',
  args: {
    color: 'success',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidWarning: Story = {
  name: 'Solid: warning',
  args: {
    color: 'warning',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const SolidDanger: Story = {
  name: 'Solid: danger',
  args: {
    color: 'danger',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Colors: pastel
export const PastelDefault: Story = {
  name: 'Pastel: default',
  args: {
    color: 'default',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelMuted: Story = {
  name: 'Pastel: muted',
  args: {
    color: 'muted',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelPrimary: Story = {
  name: 'Pastel: primary',
  args: {
    color: 'primary',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelInfo: Story = {
  name: 'Pastel: info',
  args: {
    color: 'info',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelSuccess: Story = {
  name: 'Pastel: success',
  args: {
    color: 'success',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelWarning: Story = {
  name: 'Pastel: warning',
  args: {
    color: 'warning',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const PastelDanger: Story = {
  name: 'Pastel: danger',
  args: {
    color: 'danger',
    variant: 'pastel',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Colors: outline
export const OutlineDefault: Story = {
  name: 'Outline: default',
  args: {
    color: 'default',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlineMuted: Story = {
  name: 'Outline: muted',
  args: {
    color: 'muted',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlinePrimary: Story = {
  name: 'Outline: primary',
  args: {
    color: 'primary',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlineInfo: Story = {
  name: 'Outline: info',
  args: {
    color: 'info',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlineSuccess: Story = {
  name: 'Outline: success',
  args: {
    color: 'success',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlineWarning: Story = {
  name: 'Outline: warning',
  args: {
    color: 'warning',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}

export const OutlineDanger: Story = {
  name: 'Outline: danger',
  args: {
    color: 'danger',
    variant: 'outline',
    rounded: 'full',
    size: 'md',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Shadow: flat
export const ShadowFlatDefault: Story = {
  name: 'Shadow flat: default',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatMuted: Story = {
  name: 'Shadow flat: muted',
  args: {
    color: 'muted',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatPrimary: Story = {
  name: 'Shadow flat: primary',
  args: {
    color: 'primary',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatInfo: Story = {
  name: 'Shadow flat: info',
  args: {
    color: 'info',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatSuccess: Story = {
  name: 'Shadow flat: success',
  args: {
    color: 'success',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatWarning: Story = {
  name: 'Shadow flat: warning',
  args: {
    color: 'warning',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}

export const ShadowFlatDanger: Story = {
  name: 'Shadow flat: danger',
  args: {
    color: 'danger',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'flat',
    children: html`
      Category
    `,
  },
}
// #endregion

// #region Shadow: hover
export const ShadowHoverDefault: Story = {
  name: 'Shadow hover: default',
  args: {
    color: 'default',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverMuted: Story = {
  name: 'Shadow hover: muted',
  args: {
    color: 'muted',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverPrimary: Story = {
  name: 'Shadow hover: primary',
  args: {
    color: 'primary',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverInfo: Story = {
  name: 'Shadow hover: info',
  args: {
    color: 'info',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverSuccess: Story = {
  name: 'Shadow hover: success',
  args: {
    color: 'success',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverWarning: Story = {
  name: 'Shadow hover: warning',
  args: {
    color: 'warning',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}

export const ShadowHoverDanger: Story = {
  name: 'Shadow hover: danger',
  args: {
    color: 'danger',
    variant: 'solid',
    rounded: 'full',
    size: 'md',
    shadow: 'hover',
    children: html`
      Category
    `,
  },
}
// #endregion
