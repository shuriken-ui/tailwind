import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ProgressAttrs } from './progress.types'
import { Progress } from './progress.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Progress',
  // tags: ['autodocs'],
  render: (args) => Progress(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger', 'none'],
      defaultValue: 'primary',
    },
    contrast: {
      control: { type: 'select' },
      options: ['default', 'contrast'],
      defaultValue: 'default',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'curved', 'full'],
      defaultValue: 'straight',
    },
    value: {
      control: { type: 'number' },
      defaultValue: 72,
    },
  },
} satisfies Meta<ProgressAttrs>

export default meta
type Story = StoryObj<ProgressAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'primary',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px;',
  },
}
// #endregion

// #region Sizes
export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    color: 'primary',
    size: 'xs',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    color: 'primary',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    color: 'primary',
    size: 'md',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    color: 'primary',
    size: 'lg',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    color: 'primary',
    size: 'xl',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}
// #endregion

// #region Colors
export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    size: 'sm',
    shape: 'full',
    value: 72,
    style: 'max-width: 320px; min-width: 320px;',
  },
}
// #endregion

// #region State: indetermintate
export const IndeterminatePrimary: Story = {
  name: 'Indeterminate: primary',
  args: {
    color: 'primary',
    size: 'sm',
    shape: 'full',
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const IndeterminateInfo: Story = {
  name: 'Indeterminate: info',
  args: {
    color: 'info',
    size: 'sm',
    shape: 'full',
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const IndeterminateSuccess: Story = {
  name: 'Indeterminate: success',
  args: {
    color: 'success',
    size: 'sm',
    shape: 'full',
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const IndeterminateWarning: Story = {
  name: 'Indeterminate: warning',
  args: {
    color: 'warning',
    size: 'sm',
    shape: 'full',
    style: 'max-width: 320px; min-width: 320px;',
  },
}

export const IndeterminateDanger: Story = {
  name: 'Indeterminate: danger',
  args: {
    color: 'danger',
    size: 'sm',
    shape: 'full',
    style: 'max-width: 320px; min-width: 320px;',
  },
}
// #endregion
