import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ParagraphAttrs } from './paragraph.types'
import { Paragraph } from './paragraph.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Typography/Paragraph',
  // tags: ['autodocs'],
  render: (args) => Paragraph(args),
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
      defaultValue: 'md',
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
} satisfies Meta<ParagraphAttrs>

export default meta
type Story = StoryObj<ParagraphAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    as: 'p',
    size: 'md',
    weight: 'normal',
    lead: 'none',
    children: html`
      This is a nice content paragraph.
    `,
  },
}
// #endregion

// #region Variants
export const Size2Xl: Story = {
  name: 'Size: 2xl',
  args: {
    as: 'p',
    size: '2xl',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a 2xl paragraph
    `,
  },
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    as: 'p',
    size: 'xl',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a xl paragraph
    `,
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    as: 'p',
    size: 'lg',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a lg paragraph
    `,
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    as: 'p',
    size: 'md',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a md paragraph
    `,
  },
}

export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    as: 'p',
    size: 'sm',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a sm paragraph
    `,
  },
}

export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    as: 'p',
    size: 'xs',
    weight: 'normal',
    lead: 'none',
    children: html`
      Iam a sm paragraph
    `,
  },
}
// #endregion
