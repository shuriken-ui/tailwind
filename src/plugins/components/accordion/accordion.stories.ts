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
    color: {
      control: { type: 'select' },
      options: ['default', 'default-contrast', 'muted', 'muted-contrast'],
      defaultValue: 'default',
    },
    dotColor: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'dark',
        'black',
      ],
      defaultValue: 'default',
    },
    rounded: {
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
    rounded: 'sm',
    style: 'max-width: 540px;',
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    items: data,
    action: 'dot',
    rounded: 'none',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    items: data,
    action: 'dot',
    rounded: 'sm',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    items: data,
    action: 'dot',
    rounded: 'md',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    items: data,
    action: 'dot',
    rounded: 'lg',
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
    rounded: 'sm',
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
    rounded: 'sm',
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
    rounded: 'sm',
    exclusive: true,
    style: 'min-width: 540px; max-width: 540px;',
  },
}
// #endregion
