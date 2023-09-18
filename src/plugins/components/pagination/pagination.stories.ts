import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { PaginationAttrs } from './pagination.types'
import { Pagination } from './pagination.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Pagination',
  // tags: ['autodocs'],
  render: (args) => Pagination(args),
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
  },
} satisfies Meta<PaginationAttrs>

export default meta
type Story = StoryObj<PaginationAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    shape: 'rounded',
  },
}
// #endregion

// #region Shapes
export const ShapeStraight: Story = {
  name: 'Shape: straight',
  args: {
    shape: 'straight',
    style: 'min-width: 480px;',
  },
}

export const ShapeRounded: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    style: 'min-width: 480px;',
  },
}

export const ShapeSmooth: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    style: 'min-width: 480px;',
  },
}

export const ShapeCurved: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    style: 'min-width: 480px;',
  },
}

export const ShapeFull: Story = {
  name: 'Shape: full',
  args: {
    shape: 'full',
    style: 'min-width: 480px;',
  },
}
// #endregion
