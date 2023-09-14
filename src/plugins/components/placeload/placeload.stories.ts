import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { PlaceloadAttrs } from './placeload.types'
import { Placeload } from './placeload.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Placeload',
  // tags: ['autodocs'],
  render: (args) => Placeload(args),
  argTypes: {
    classes: {
      control: {
        type: 'text',
        defaultValue: '',
      },
    },
  },
} satisfies Meta<PlaceloadAttrs>

export default meta
type Story = StoryObj<PlaceloadAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    classes: 'h-3 w-40 rounded-md',
  },
}
// #endregion

// #region Text
export const TextOne: Story = {
  name: 'Text variant 1',
  args: {
    classes: 'h-3 w-60 rounded-md mb-3',
  },
}

export const TextTwo: Story = {
  name: 'Text variant 2',
  args: {
    classes: 'h-3 w-48 rounded-md mb-3',
  },
}

export const TextThree: Story = {
  name: 'Text variant 3',
  args: {
    classes: 'h-3 w-40 rounded-md',
  },
}
// #endregion

// #region Shape
export const ShapeOne: Story = {
  name: 'Shape variant 1',
  args: {
    classes: 'h-16 w-16 rounded-md',
  },
}

export const ShapeTwo: Story = {
  name: 'Shape variant 2',
  args: {
    classes: 'h-16 w-16 rounded-xl',
  },
}

export const ShapeThree: Story = {
  name: 'Shape variant 3',
  args: {
    classes: 'h-16 w-16 rounded-full',
  },
}

export const ShapeFour: Story = {
  name: 'Shape variant 4',
  args: {
    classes: 'h-16 w-16 rounded-full nui-mask nui-mask-hexed',
  },
}

export const ShapeFive: Story = {
  name: 'Shape variant 5',
  args: {
    classes: 'h-16 w-16 rounded-full nui-mask nui-mask-deca',
  },
}
// #endregion
