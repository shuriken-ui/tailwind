import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { BreadcrumbAttrs } from './breadcrumb.types'
import { Breadcrumb } from './breadcrumb.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Breadcrumb',
  // tags: ['autodocs'],
  render: (args) => Breadcrumb(args),
  argTypes: {},
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
