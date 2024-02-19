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
    color: {
      control: { type: 'select' },
      options: ['dark', 'black', 'primary'],
      defaultValue: 'primary',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'none',
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
    rounded: 'sm',
  },
}
// #endregion

// #region Rounded
export const ShapeStraight: Story = {
  name: 'Rounded: none',
  args: {
    shape: 'straight',
    style: 'min-width: 480px;',
  },
}

export const ShapeRounded: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    style: 'min-width: 480px;',
  },
}

export const ShapeSmooth: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    style: 'min-width: 480px;',
  },
}

export const ShapeCurved: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
    style: 'min-width: 480px;',
  },
}

export const ShapeFull: Story = {
  name: 'Rounded: full',
  args: {
    rounded: 'full',
    style: 'min-width: 480px;',
  },
}
// #endregion
