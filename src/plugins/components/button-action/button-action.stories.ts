import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ButtonActionAttrs } from './button-action.types'
import { ButtonAction } from './button-action.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button Action',
  // tags: ['autodocs'],
  render: (args) => ButtonAction(args),
  argTypes: {
    loading: {
      name: 'loading',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    '?disabled': {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'muted',
        'light',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'sm',
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonActionAttrs>

export default meta
type Story = StoryObj<ButtonActionAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    color: 'default',
    label: 'Action',
    // set default values used for UI preview
    loading: false,
    rounded: 'sm',
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    label: 'Button',
    rounded: 'none',
  },
}
export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    label: 'Button',
  },
}
export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    label: 'Button',
  },
}
export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
    label: 'Button',
  },
}
export const Full: Story = {
  name: 'Rounded: full',
  args: {
    shape: 'full',
    label: 'Button',
  },
}
// #endregion

// #region Colors
export const ColorDefault: Story = {
  name: 'Color: default',
  args: {
    color: 'default',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorMuted: Story = {
  name: 'Color: muted',
  args: {
    color: 'muted',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    label: 'Button',
    loading: false,
    rounded: 'sm',
  },
}
// #endregion

// #region State: loading
export const StraightLoading: Story = {
  name: 'Rounded: none',
  args: {
    label: 'Button',
    rounded: 'none',
    loading: true,
  },
}
export const RoundedLoading: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    label: 'Button',
    loading: true,
  },
}
export const SmoothLoading: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    label: 'Button',
    loading: true,
  },
}
export const CurvedLoading: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
    label: 'Button',
    loading: true,
  },
}
export const FullLoading: Story = {
  name: 'Rounded: full',
  args: {
    rounded: 'full',
    label: 'Button',
    loading: true,
  },
}
// #endregion

// #region State: disabled
export const StraightDisabled: Story = {
  name: 'Rounded: none',
  args: {
    label: 'Button',
    rounded: 'none',
    '?disabled': true,
  },
}
export const RoundedDisabled: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    label: 'Button',
    '?disabled': true,
  },
}
export const SmoothDisabled: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    label: 'Button',
    '?disabled': true,
  },
}
export const CurvedDisabled: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
    label: 'Button',
    '?disabled': true,
  },
}
export const FullDisabled: Story = {
  name: 'Rounded:',
  args: {
    shape: 'full',
    label: 'Button',
    '?disabled': true,
  },
}
// #endregion

// #region Slot
export const Slot: Story = {
  name: 'Slots: default slot',
  args: {
    rounded: 'sm',
    children: html`
      <span>Using the slot</span>
    `,
  },
}
// #endregion
