import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { TextAttrs } from './text.types'
import { Text } from './text.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Typography/Text',
  // tags: ['autodocs'],
  render: (args) => Text(args),
  argTypes: {
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
      defaultValue: 'sm',
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
} satisfies Meta<TextAttrs>

export default meta
type Story = StoryObj<TextAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    size: 'sm',
    weight: 'normal',
    lead: 'none',
    children: html`
      This is a nice content text span.
    `,
  },
}
// #endregion

// #region Variants
export const Size2Xl: Story = {
  name: 'Size: 2xl',
  args: {
    size: '2xl',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a 2xl text span
    `,
  },
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    size: 'xl',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a xl text span
    `,
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a lg text span
    `,
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    size: 'md',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a md text span
    `,
  },
}

export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a sm text span
    `,
  },
}

export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    size: 'xs',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a xs text span
    `,
  },
}
// #endregion
