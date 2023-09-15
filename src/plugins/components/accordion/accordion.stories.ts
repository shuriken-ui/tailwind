import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { AccordionAttrs } from './accordion.types'
import { Accordion } from './accordion.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Accordion',
  // tags: ['autodocs'],
  render: (args) => Accordion(args),
  argTypes: {
    exclusive: {
      name: 'exclusive',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    action: {
      control: { type: 'select' },
      options: ['dot', 'chevron', 'plus'],
      defaultValue: 'dot',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved'],
      defaultValue: 'rounded',
    },
  },
} satisfies Meta<AccordionAttrs>

export default meta
type Story = StoryObj<AccordionAttrs>

// first export is the Primary story
const data = [
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
]

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    items: data,
    action: 'dot',
    shape: 'rounded',
    style: 'max-width: 540px;',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    items: data,
    action: 'dot',
    shape: 'straight',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    items: data,
    action: 'dot',
    shape: 'rounded',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    items: data,
    action: 'dot',
    shape: 'smooth',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    items: data,
    action: 'dot',
    shape: 'curved',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}
// #endregion

// #region Dot
export const Dot: Story = {
  name: 'Dot indicator',
  args: {
    items: data,
    action: 'dot',
    shape: 'rounded',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}
// #endregion

// #region Chevron
export const Chevron: Story = {
  name: 'Chevron indicator',
  args: {
    items: data,
    action: 'chevron',
    shape: 'rounded',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}
// #endregion

// #region Plus
export const Plus: Story = {
  name: 'Plus indicator',
  args: {
    items: data,
    action: 'plus',
    shape: 'rounded',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}
// #endregion
