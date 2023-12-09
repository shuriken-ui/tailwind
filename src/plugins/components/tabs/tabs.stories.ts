import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { TabsAttrs } from './tabs.types'
import { Tabs } from './tabs.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Tabs',
  // tags: ['autodocs'],
  render: (args) => Tabs(args),
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['tabs', 'box'],
      defaultValue: 'tabs',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      defaultValue: 'start',
    },
    bordered: {
      name: 'Bordered',
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} satisfies Meta<TabsAttrs>

export default meta
type Story = StoryObj<TabsAttrs>

// first export is the Primary story
const data = [
  { label: 'Team', value: 'team' },
  { label: 'Projects', value: 'projects' },
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

// #region type: box
export const Boxed: Story = {
  name: 'Justify: start',
  args: {
    tabs: data,
    type: 'box',
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
