import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ProseAttrs } from './prose.types'
import { Prose } from './prose.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Prose',
  // tags: ['autodocs'],
  render: (args) => Prose(args),
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'curved'],
      defaultValue: 'rounded',
    },
  },
} satisfies Meta<ProseAttrs>

export default meta
type Story = StoryObj<ProseAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    children: html`
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
    `,
  },
}
// #endregion
