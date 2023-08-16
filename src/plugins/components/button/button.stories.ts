import type { Meta, StoryObj } from '@storybook/web-components'
import type { ButtonProps } from './button.component'
import { Button } from './button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button',
  // tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    loading: {
      name: 'loading',
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
    flavor: {
      control: { type: 'select' },
      options: ['solid', 'pastel', 'outline'],
      defaultValue: 'solid',
    },
    shadow: {
      control: { type: 'select' },
      options: ['flat', 'hover'],
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

// #region Flavors
export const Solid: Story = {
  name: 'flavor: Solid',
  args: {
    color: 'primary',
    label: 'Button',
  },
}
export const Pastel: Story = {
  name: 'flavor: Pastel',
  args: {
    color: 'primary',
    flavor: 'pastel',
    label: 'Button',
  },
}
export const Outline: Story = {
  name: 'flavor: Outline',
  args: {
    color: 'primary',
    flavor: 'outline',
    label: 'Button',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'shape: Straight',
  args: {
    label: 'Button',
  },
}
export const Rounded: Story = {
  name: 'shape: Rounded',
  args: {
    shape: 'rounded',
    label: 'Button',
  },
}
export const Smooth: Story = {
  name: 'shape: Smooth',
  args: {
    shape: 'smooth',
    label: 'Button',
  },
}
export const Curved: Story = {
  name: 'shape: Curved',
  args: {
    shape: 'curved',
    label: 'Button',
  },
}
export const Full: Story = {
  name: 'shape: Full',
  args: {
    shape: 'full',
    label: 'Button',
  },
}
// #endregion

// #region Sizes
export const Sm: Story = {
  name: 'size: Sm',
  args: {
    size: 'sm',
    label: 'Button',
  },
}
export const Md: Story = {
  name: 'size: Md',
  args: {
    size: 'md',
    label: 'Button',
  },
}
export const Lg: Story = {
  name: 'size: Lg',
  args: {
    size: 'lg',
    label: 'Button',
  },
}
export const Xl: Story = {
  name: 'size: Xl',
  args: {
    size: 'xl',
    label: 'Button',
  },
}
// #endregion
