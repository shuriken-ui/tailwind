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
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
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
    shape: 'rounded',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    label: 'Button',
    shape: 'straight',
  },
}
export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    label: 'Button',
  },
}
export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    label: 'Button',
  },
}
export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    label: 'Button',
  },
}
export const Full: Story = {
  name: 'Shape: full',
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
    shape: 'rounded',
  },
}

export const ColorMuted: Story = {
  name: 'Color: muted',
  args: {
    color: 'muted',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}

export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    label: 'Button',
    loading: false,
    shape: 'rounded',
  },
}
// #endregion

// #region State: loading
export const StraightLoading: Story = {
  name: 'Shape: straight',
  args: {
    label: 'Button',
    shape: 'straight',
    loading: true,
  },
}
export const RoundedLoading: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    label: 'Button',
    loading: true,
  },
}
export const SmoothLoading: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    label: 'Button',
    loading: true,
  },
}
export const CurvedLoading: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    label: 'Button',
    loading: true,
  },
}
export const FullLoading: Story = {
  name: 'Shape: full',
  args: {
    shape: 'full',
    label: 'Button',
    loading: true,
  },
}
// #endregion

// #region State: disabled
export const StraightDisabled: Story = {
  name: 'Shape: straight',
  args: {
    label: 'Button',
    shape: 'straight',
    '?disabled': true,
  },
}
export const RoundedDisabled: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    label: 'Button',
    '?disabled': true,
  },
}
export const SmoothDisabled: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    label: 'Button',
    '?disabled': true,
  },
}
export const CurvedDisabled: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    label: 'Button',
    '?disabled': true,
  },
}
export const FullDisabled: Story = {
  name: 'Shape: full',
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
    shape: 'rounded',
    children: html`
      <span>Using the slot</span>
    `,
  },
}
// #endregion
