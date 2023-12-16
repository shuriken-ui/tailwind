import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { BreadcrumbAttrs } from './breadcrumb.types'
import { Breadcrumb } from './breadcrumb.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Breadcrumb',
  // tags: ['autodocs'],
  render: (args) => Breadcrumb(args),
  argTypes: {
    separator: {
      control: { type: 'select' },
      options: ['dot', 'slash', 'arrow', 'chevron'],
      defaultValue: 'dot',
    },
  },
} satisfies Meta<BreadcrumbAttrs>

export default meta
type Story = StoryObj<BreadcrumbAttrs>

// first export is the Primary story
const data = [
  {
    label: 'Home',
    hideLabel: false,
    href: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    href: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    href: '#',
  },
]

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    items: data,
  },
}
// #endregion

// #region Dot
export const SeparatorDot: Story = {
  name: 'Separator: Dot',
  args: {
    items: data,
    separator: 'dot',
  },
}
// #endregion

// #region Slash
export const SeparatorSlash: Story = {
  name: 'Separator: Slash',
  args: {
    items: data,
    separator: 'slash',
  },
}
// #endregion

// #region Chevron
export const SeparatorChevron: Story = {
  name: 'Separator: Chevron',
  args: {
    items: data,
    separator: 'chevron',
  },
}
// #endregion

// #region Arrow
export const SeparatorArrow: Story = {
  name: 'Separator: Arrow',
  args: {
    items: data,
    separator: 'arrow',
  },
}
// #endregion
