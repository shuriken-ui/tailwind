import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ProgressCircleAttrs } from './progress-circle.types'
import { ProgressCircle } from './progress-circle.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Progress Circle',
  // tags: ['autodocs'],
  render: (args) => ProgressCircle(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger', 'none'],
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'number' },
      defaultValue: 60,
    },
    thickness: {
      control: { type: 'number' },
      defaultValue: 4,
    },
    value: {
      control: { type: 'number' },
      defaultValue: 72,
    },
  },
} satisfies Meta<ProgressCircleAttrs>

export default meta
type Story = StoryObj<ProgressCircleAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'primary',
    size: 60,
    value: 72,
  },
}
// #endregion

// #region Sizes
export const SizeOne: Story = {
  name: 'Size: 45',
  args: {
    color: 'primary',
    size: 45,
    value: 72,
  },
}

export const SizeTwo: Story = {
  name: 'Size: 55',
  args: {
    color: 'primary',
    size: 55,
    value: 72,
  },
}

export const SizeThree: Story = {
  name: 'Size: 75',
  args: {
    color: 'primary',
    size: 75,
    value: 72,
  },
}

export const SizeFour: Story = {
  name: 'Size: 85',
  args: {
    color: 'primary',
    size: 85,
    value: 72,
  },
}
// #endregion

// #region Colors
export const Primary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    size: 55,
    value: 72,
  },
}

export const Info: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    size: 55,
    value: 72,
  },
}

export const Success: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    size: 55,
    value: 72,
  },
}

export const Warning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    size: 55,
    value: 72,
  },
}

export const Danger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    size: 55,
    value: 72,
  },
}

export const Light: Story = {
  name: 'Color: light',
  args: {
    color: 'light',
    size: 55,
    value: 72,
  },
}

export const Dark: Story = {
  name: 'Color: dark',
  args: {
    color: 'dark',
    size: 55,
    value: 72,
  },
}

export const Black: Story = {
  name: 'Color: black',
  args: {
    color: 'black',
    size: 55,
    value: 72,
  },
}
// #endregion
