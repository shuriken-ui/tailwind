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
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'md',
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

// #region Rounded
export const ShapeStraight: Story = {
  name: 'Rounded: none',
  args: {
    tabs: data,
    rounded: 'none',
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
  name: 'Rounded: sm',
  args: {
    tabs: data,
    rounded: 'sm',
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
  name: 'Rounded: md',
  args: {
    tabs: data,
    rounded: 'md',
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
  name: 'Rounded: lg',
  args: {
    tabs: data,
    rounded: 'lg',
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
  name: 'Rounded: full',
  args: {
    tabs: data,
    rounded: 'full',
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

export const SizeSmFull: Story = {
  name: 'Size: sm',
  args: {
    tabs: data,
    size: 'sm',
    rounded: 'full',
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
    rounded: 'full',
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
    rounded: 'full',
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
