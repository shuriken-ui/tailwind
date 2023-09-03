import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ButtonGroupAttrs } from './button-group.types'
import { ButtonGroup } from './button-group.component'
import { Button } from '../button/button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button Group',
  tags: ['autodocs'],
  render: (args) => ButtonGroup(args),
  argTypes: {},
} satisfies Meta<ButtonGroupAttrs>

export default meta
type Story = StoryObj<ButtonGroupAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    children: html`
      ${Button({
        shape: 'rounded',
        children: html`
          <span>Button 1</span>
        `,
      })}
      ${Button({
        shape: 'rounded',
        children: html`
          <span>Button 2</span>
        `,
      })}
      ${Button({
        shape: 'rounded',
        children: html`
          <span>Button 3</span>
        `,
      })}
      ${Button({
        shape: 'rounded',
        children: html`
          <span>Button 4</span>
        `,
      })}
    `,
  },
}
// #endregion
