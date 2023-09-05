import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { HeadingAttrs } from './heading.types'
import { Heading } from './heading.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Typography/Heading',
  // tags: ['autodocs'],
  render: (args) => Heading(args),
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'],
      defaultValue: 'p',
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      defaultValue: 'xl',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      defaultValue: 'normal',
    },
    lead: {
      control: { type: 'select' },
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      defaultValue: 'normal',
    },
  },
} satisfies Meta<HeadingAttrs>

export default meta
type Story = StoryObj<HeadingAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: 'xl',
    weight: 'semibold',
    lead: 'none',
    children: html`
      Hello world
    `,
  },
}
// #endregion

// #region Variants
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: 'sm',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a sm heading
    `,
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: 'md',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a md heading
    `,
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: 'lg',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a lg heading
    `,
  },
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: 'xl',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a xl heading
    `,
  },
}

export const Size2Xl: Story = {
  name: 'Size: 2xl',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: '2xl',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a 2xl heading
    `,
  },
}

export const Size3Xl: Story = {
  name: 'Size: 3xl',
  args: {
    // set default values used for UI preview
    as: 'h2',
    size: '3xl',
    weight: 'medium',
    lead: 'none',
    children: html`
      Iam a 3xl heading
    `,
  },
}
// #endregion
