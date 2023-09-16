import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { TabSliderAttrs } from './tab-slider.types'
import { TabSlider } from './tab-slider.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Tab Slider',
  // tags: ['autodocs'],
  render: (args) => TabSlider(args),
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'smooth',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      defaultValue: 'md',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      defaultValue: 'start',
    },
  },
} satisfies Meta<TabSliderAttrs>

export default meta
type Story = StoryObj<TabSliderAttrs>

// first export is the Primary story
const data = [
  { label: 'Team', value: 'team' },
  { label: 'Projects', value: 'projects' },
]

const dataThree = [
  { label: 'Team', value: 'team' },
  { label: 'Projects', value: 'projects' },
  { label: 'Tasks', value: 'tasks' },
]

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    tabs: data,
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}
// #endregion

// #region Shapes
export const ShapeStraight: Story = {
  name: 'Shape: straight',
  args: {
    tabs: data,
    shape: 'straight',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const ShapeRounded: Story = {
  name: 'Shape: rounded',
  args: {
    tabs: data,
    shape: 'rounded',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const ShapeSmooth: Story = {
  name: 'Shape: smooth',
  args: {
    tabs: data,
    shape: 'smooth',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const ShapeCurved: Story = {
  name: 'Shape: curved',
  args: {
    tabs: data,
    shape: 'curved',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const ShapeFull: Story = {
  name: 'Shape: full',
  args: {
    tabs: data,
    shape: 'full',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}
// #endregion

// #region position
export const Start: Story = {
  name: 'Justify: start',
  args: {
    tabs: data,
    justify: 'start',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const Center: Story = {
  name: 'Justify: center',
  args: {
    tabs: data,
    justify: 'center',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const End: Story = {
  name: 'Justify: end',
  args: {
    tabs: data,
    justify: 'end',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}
// #endregion

// #region Size:sm
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    tabs: data,
    size: 'sm',
    justify: 'start',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}
// #endregion

// #region Slots
export const SlotDual: Story = {
  name: 'Slot: dual',
  args: {
    tabs: data,
    justify: 'start',
    shape: 'full',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}

export const SlotTriple: Story = {
  name: 'Slot: triple',
  args: {
    tabs: dataThree,
    justify: 'start',
    shape: 'full',
    children: html`
      <div>
        <p class="font-sans text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times.
        </p>
      </div>
    `,
    style: 'max-width: 480px;',
  },
}
// #endregion
